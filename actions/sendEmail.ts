"use server";

import React from "react";
// import { Resend } from "resels
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/lib/email-template";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    // FIREBASE_CONFIGURATION
    apiKey: "AIzaSyCPOEiYgab5LPznhjVZChp9JTLcu952T7M",
    authDomain: "portfolio-f9550.firebaseapp.com",
    databaseURL: "https://portfolio-f9550-default-rtdb.firebaseio.com",
    projectId: "portfolio-f9550",
    storageBucket: "portfolio-f9550.appspot.com",
    messagingSenderId: "849969463325",
    appId: "1:849969463325:web:8c360196077bcf8dd686f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (form: FormData) => {

    // console.log(form.get("senderEmailRef"))
    // console.log(form.get("messageRef"))

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
        // const names: number[] = [];
        // //throw new Error("This is an error");
        // data = await resend.emails.send({
        //     from: "Contact Form <onboarding@resend.dev>",
        //     to: "bytegrad@gmail.com",
        //     subject: "Message from contact form",
        //     reply_to: senderEmail,
        //     react: React.createElement(ContactFormEmail, {
        //         message: message,
        //         senderEmail: senderEmail,
        //     }),
        // });
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
