import { z } from "zod";

export const CatSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
});

export type CatType = z.infer<typeof CatSchema>;
