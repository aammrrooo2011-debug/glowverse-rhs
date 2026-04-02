/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "nexgenmarketplacepro@gmail.com" }],
    subject: "New Newsletter Subscriber",
    html: "<h2>New Subscriber Alert</h2><p><strong>Name:</strong> " + e.record.get("name") + "</p><p><strong>Email:</strong> " + e.record.get("email") + "</p><p><strong>Subscription Date:</strong> " + new Date().toLocaleString() + "</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "newsletter_subscribers");