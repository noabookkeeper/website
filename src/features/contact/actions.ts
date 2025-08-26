"use server";

import { Resend } from "resend";
import { env } from "@/config/env";

const resend = new Resend(env.RESEND_API_KEY);

interface ContactFormData {
  email: string;
  message: string;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  try {
    // Validate the data
    if (!data.email) {
      return { success: false, error: "Email is required" };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Please enter a valid email address" };
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: [env.EMAIL_TO],
      replyTo: data.email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "No additional message provided"}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Email: ${data.email}
        Message: ${data.message || "No additional message provided"}
        
        Submitted at: ${new Date().toLocaleString()}
      `,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return { success: false, error: "Failed to send email. Please try again." };
    }

    console.log("Email sent successfully:", emailResult.data?.id);
    return { success: true };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
} 