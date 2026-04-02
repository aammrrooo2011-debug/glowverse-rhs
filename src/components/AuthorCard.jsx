
import React from 'react';

const AuthorCard = ({ author }) => {
  return (
    <div className="bg-muted rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">About the Author</h3>
      <div className="flex items-start gap-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
        />
        <div>
          <p className="font-semibold mb-2">{author.name}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
