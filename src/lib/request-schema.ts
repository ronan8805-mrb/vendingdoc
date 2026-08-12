import { z } from "zod";

export const requestSchema = z.object({
  businessName: z.string().trim().min(2, "Enter the venue name"),
  contactName: z.string().trim().min(2, "Enter a contact name"),
  email: z.email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a phone number"),
  city: z.string().trim().min(2, "Enter a city or county"),
  members: z.string().trim().min(1, "Choose an approximate size"),
  machines: z.string().trim().min(1, "Choose how many machines"),
  message: z.string().trim().max(1200, "Keep this under 1,200 characters").optional(),
});

export type RequestInput = z.infer<typeof requestSchema>;

export const MEMBER_OPTIONS = [
  { value: "under-200", label: "Under 200 members" },
  { value: "200-500", label: "200–500 members" },
  { value: "500-1000", label: "500–1,000 members" },
  { value: "1000-2000", label: "1,000–2,000 members" },
  { value: "2000-plus", label: "2,000+ members" },
  { value: "hotel-leisure", label: "Hotel / leisure — mixed footfall" },
] as const;

export const MACHINE_OPTIONS = [
  { value: "1", label: "1 machine" },
  { value: "2-3", label: "2–3 machines" },
  { value: "4-plus", label: "4 or more" },
  { value: "unsure", label: "Not sure yet" },
] as const;
