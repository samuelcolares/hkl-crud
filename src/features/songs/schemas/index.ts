import systemMessages from "@/src/utils/constants";
import { z } from "zod";

export const songSchema = z.object({
  name: z
    .string({ required_error: systemMessages.required.name })
    .min(4, { message: systemMessages.minCharacteres.name }),
  genre: z.string({ required_error: systemMessages.required.cpf }),
  singerOrBand: z.string({
    required_error: systemMessages.required.email,
  }),
});
