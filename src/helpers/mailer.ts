import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {

        const hashedToken = await bcryptjs.hash(userId.toString(), 10);


        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 });
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "bf67b5a445074e",
                pass: "c3379572fd5828"
                // TODO: add there credentials to .env file
            }
        });



        const mailOptions = {
            from: "abhaypatel6794@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "veryfy your email" : "Reset your passwrod",
            html: `<p>Click <a href="${process.env.domain}/verifyemail?toekn=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
        }

        const mailresponse = await transport.sendEmail(mailOptions);

    } catch (error: any) {
        throw new Error("Somthing went wrong");
    }
}