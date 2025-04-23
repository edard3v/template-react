import { z } from "astro/zod";

export const uuid_zod = z.string().length(36, {
  message: "Debería ser un uuid.",
});

export type UuidZod = z.infer<typeof uuid_zod>;
