import { z } from "zod";

export const ItemSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
  item_name: z.string().min(1, { message: "Item name is required" }),
  rating: z
    .number()
    .min(0, { message: "Rating must be at least 0" })
    .max(5, { message: "Rating cannot be more than 5" })
    .optional(),
  price: z
    .number()
    .positive({ message: "Price must be greater than 0" })
    .optional(),
  image: z.instanceof(File, { message: "Image file is required" }),
});

export type ItemType = z.infer<typeof ItemSchema>;
