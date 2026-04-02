
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollSequence = ({ frameCount, folderPath, containerHeight = "300vh" }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for the animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    // In a real scenario, we would preload images here.
    // Since we don't have the frames yet, we'll draw a placeholder.
    const preloadImages = () => {
      const loadedImages = [];
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        // Placeholder path - user will replace this with real frames
        img.src = `${folderPath}/frame_${String(i).padStart(4, '0')}.jpg`;
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [frameCount, folderPath]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    const render = () => {
      const index = Math.round(frameIndex.get());
      if (index !== currentIndex) {
        setCurrentIndex(index);
        drawFrame(index);
      }
      requestAnimationFrame(render);
    };

    const drawFrame = (index) => {
      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);
      
      // Draw Placeholder if images aren't loaded
      if (images.length === 0) {
        context.fillStyle = '#f6f4f0';
        context.fillRect(0, 0, width, height);
        context.fillStyle = '#141418';
        context.font = '24px Instrument Serif';
        context.textAlign = 'center';
        context.fillText(`3D SCROLL ASSET: FRAME ${index + 1}`, width / 2, height / 2);
        context.font = '16px Inter';
        context.fillText('Upload frames to see the animation', width / 2, height / 2 + 40);
        return;
      }

      const img = images[index];
      if (img && img.complete) {
        // Cover-fit logic
        const scale = Math.max(width / img.width, height / img.height);
        const x = (width / 2) - (img.width / 2) * scale;
        const y = (height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    const animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [frameIndex, images, currentIndex]);

  return (
    <div ref={containerRef} style={{ height: containerHeight }} className="relative w-full">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-background">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Overlay Grid / Stars (SKILL.md) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,227,240,0.1),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        </div>
      </div>
    </div>
  );
};

export default ScrollSequence;
