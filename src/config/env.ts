import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  EMAIL_FROM: z.email("EMAIL_FROM must be a valid email address"),
  EMAIL_TO: z.email("EMAIL_TO must be a valid email address").optional().default("onboarding@resend.dev"),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  try {
    return envSchema.parse({
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      EMAIL_FROM: process.env.EMAIL_FROM,
      EMAIL_TO: process.env.EMAIL_TO,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map((issue: z.ZodIssue) => `${issue.path.join(".")}: ${issue.message}`);
      throw new Error(`Environment validation failed:\n${errorMessages.join("\n")}`);
    }
    throw error;
  }
}

export const env = validateEnv();
