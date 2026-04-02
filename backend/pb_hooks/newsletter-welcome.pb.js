/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: e.record.get("email") }],
    subject: "Welcome to Our Newsletter!",
    html: "<h1>Welcome, " + e.record.get("name") + "!</h1><p>Thank you for subscribing to our newsletter. We're excited to keep you updated with the latest news and updates.</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "newsletter_subscribers");