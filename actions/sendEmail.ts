"use server"

export const sendEmail = async (data: FormData) => {
    console.log(data.get("senderEmail"))
    console.log(data.get("message"))

}
