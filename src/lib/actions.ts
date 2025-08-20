"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  email: string;
  message?: string;
  gdprConsent: boolean;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    if (!formData.email || !formData.gdprConsent) {
      return {
        success: false,
        error: "Please fill in your email address and accept the privacy consent.",
      };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend verified domain
      to: ["noabookkeeper@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #555; margin-top: 0;">Contact Details</h3>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>GDPR Consent:</strong> ${formData.gdprConsent ? "Yes" : "No"}</p>
          </div>
          
          ${
            formData.message
              ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 12px;">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
} 