import z from "zod";

export const postIdSchema = z.object({
  id: z.number().optional(),
});
