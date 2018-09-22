const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000; // use port 5000 during development
app.listen(PORT);