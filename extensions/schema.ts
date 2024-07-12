// Expand the schema of how responses should look.
import { z } from "zod";

export const CustomSchema = z.object({
  stores: z.array(z.string().describe("The name of a clothes store")),
});

export type CustomSchemaType = z.infer<typeof CustomSchema>;