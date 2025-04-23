import { z } from "zod";

export const price_zod = z.coerce.number().nonnegative();
