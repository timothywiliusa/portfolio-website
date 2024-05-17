"use server";

import React from "react";
// import { Resend } from "resels
import { validateString, getErrorMessage } from "../lib/utils";
// import ContactFormEmail from "@/lib/email-template";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";



console.log("printing key")
console.log(process.env.NEXT_PUBLIC_API_KEY)


const firebaseConfig = {
    // FIREBASE_CONFIGURATION
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (form: FormData) => {


    const senderEmail = form.get("senderEmailRef");
    const message = form.get("messageRef");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
        //data: null,
        error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
        //data: null,
        error: "Invalid message",
        };
    }

    let data;
    try {
        data = await addDoc(collection(db, "users"), {
            email: senderEmail,
            message: message,
        });

    } catch (error: unknown) {
        console.log("errors have happened")
        return {
        //data: null,
        error: getErrorMessage(error),
        };
    }

    // console.log(data);
    console.log("you are here -\n");

    console.log("Document written with ID: ", data.id);

    return {
        data: data.id
        //error: null,
    };
}