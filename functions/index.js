/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onCall, onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { event } from "firebase-functions/v1/analytics";

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

export const helloWorld = onRequest((request, response) => {
  logger.log("this is a log");
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

const app = initializeApp(); // uses current Firebase project’s config
const firestore = getFirestore(app);
export const getNumberOfPhysics = onCall(async (data, context) => {
  try {
    let physicsCollRef = firestore.collection("physics");
    let querySnap = await physicsCollRef.get();
    //   logger.log(`request from: ${context.auth.token.email}`);
    logger.log(`num of physics: ${querySnap.size}`);
    return { numPhysics: querySnap.size };
  } catch (ex) {
    logger.info(`ERROR: ${ex.message}`);
    throw ex;
  }
});

export const onPhysicsCreate = onDocumentCreated("physics/{physicsId}",
async (event) => {
    try {
        const docSnap = event.data;
        const newPhysics = docSnap.data();
        logger.log(`new physics! ${newPhysics.name}`);
        const aggDocRef = firestore.doc("stats/physics");
        return aggDocRef.update({
          count: admin.firestore.FieldValue.increment(1),
        });
      } catch (ex) {
        logger.info(`ERROR: ${ex.message}`);
        throw ex;
      } 
}
)

