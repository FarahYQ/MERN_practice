const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(new GoogleStrategy());
//clientid 538652116873-t2s3a7b24iq9r02be70jpmmn0pgnsqr1.apps.googleusercontent.com

const PORT = process.env.PORT || 5000; // use port 5000 during development
app.listen(PORT);