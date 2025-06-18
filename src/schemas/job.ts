import { z } from "zod";

export const jobSchema = z.object({
  id: z.number(),
  number: z.string(),
});

export type Job = z.infer<typeof jobSchema>;
