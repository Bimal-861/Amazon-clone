/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51OR0K5SA68AVWTkIr3x4POWbfwma7w2D4drQgmNtqjp4kFIGHpGaYJAhAbPYOCjIVvshr4D7FwupcVBt6rgmUDhv00yvV9JVwY');

const app=express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res)=> res.status(200).send(`hello world`));
