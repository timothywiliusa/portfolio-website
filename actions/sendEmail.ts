"use server";

// import { Resend } from "resels
import { validateString, getErrorMessage } from "../lib/utils";
// import ContactFormEmail from "@/lib/email-template";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { MdSubject } from "react-icons/md";


const firebaseConfig = {
    // FIREBASE_CONFIGURATION
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
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
    const hostmail = "work@timothy.wiliusa.com"
    try {
        data = await addDoc(collection(db, "mail"), {
            from: senderEmail,
            to: [hostmail],
            message: {
                subject: 'Message from your personal website!',
                text: `Message: ${message}`,
                html: `<div>
                    <p><label>email: </label>${senderEmail}</p>
                    <p><label>message: </label>${message}</p>
                    </div>`
            }
        });

    } catch (error: unknown) {
        console.log("errors have happened")
        return {
        //data: null,
        error: getErrorMessage(error),
        };
    }

    console.log("Document written with ID: ", data.id);
    console.log("returning")
    
    return {
        data: data.id
    };
}