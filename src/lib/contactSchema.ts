import { z } from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(2, "Please enter your name"),
    email: z.email("Please enter a valid email"),
    phone: z.string().optional(),
    channelManager: z.enum([
      "Hostaway",
      "Guesty",
      "Guesty for Hosts",
      "Lodgify",
      "OwnerRez",
      "Hostfully",
      "Hospitable",
      "Other",
      "Not yet",
    ]),
    channelManagerOther: z.string().optional(),
    message: z.string().optional(),
  })
  .refine(
    (data) => data.channelManager !== "Other" || !!data.channelManagerOther?.trim(),
    {
      message: "Please tell us which Channel Manager you use",
      path: ["channelManagerOther"],
    }
  );

export type ContactFormValues = z.infer<typeof contactSchema>;
