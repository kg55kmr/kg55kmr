import z from "zod";

const serverEnvSchema = z.object({
  GOOGLE_API_KEY: z.string(),
  IMAGEKIT_PRIVATE_KEY: z.string(),
  GITHUB_PERSONAL_ACCESS_TOKEN: z.string(),
});

export const serverEnv = serverEnvSchema.parse(process.env);
