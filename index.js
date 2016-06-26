const firebase = require('firebase');
const moment = require('moment');
const request = require('request');

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

request(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=denver&destinations=boulder&key=${process.env.WHEN_TO_LEAVE_API_KEY}`, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
  }

  const key = moment().format('H-m');
  /*
    {

    }
  */
  ref.set({
    [key]: JSON.parse(body).rows[0].elements[0].duration.text
  });
})
