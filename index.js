const admin = require("firebase-admin");
const { getMessaging } = require("firebase-admin/messaging");

const serviceAccount = require("./firebase.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// change token FCM here.

const registrationToken = 'd7tehT8AHJaj0Cxa73sPbV:APA91bFwc-rkAevnQqLJ2zbriFPgadjEtlJsR5SdlgKpDkSKy_-MFAyTWAyLpbLeM3lu53DaeNWjpxdK6kl-tHCEZmFfVHzKRK9jPVdZn2piFPsjXce1N5EpdRqVc8Vs--jUPs5oOjOv';

const message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

getMessaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });