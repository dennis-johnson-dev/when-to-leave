const firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: {
    projectId: process.env.WHEN_TO_LEAVE_PROJECT_ID,
    clientEmail: process.env.WHEN_TO_LEAVE_PROJECT_CLIENT_EMAIL,
    privateKey: process.env.WHEN_TO_LEAVE_PRIVATE_KEY
  },
  databaseURL: process.env.WHEN_TO_LEAVE_DATABASE_URL
});

const db = firebase.database();
const ref = db.ref("server/data");

ref.set({
  foo: 'working'
});
