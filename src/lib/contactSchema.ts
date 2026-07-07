import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  phone: z.string().optional(),
  channelManager: z.enum(["Hostaway", "Guesty", "Lodgify", "Other", "Not yet"]),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
