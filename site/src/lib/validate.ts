import z from "zod";

export const validateId = z.object({
  id: z.number().optional(),
});
