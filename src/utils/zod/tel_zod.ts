import { z } from "zod";

export const tel_zod = z.coerce.number().min(1).int().nonnegative();
