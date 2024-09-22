import systemMessages from "@/src/utils/constants";
import { z } from "zod";

export const movieSchema = z.object({
  title: z
    .string({ required_error: systemMessages.required.name })
    .min(4, { message: systemMessages.minCharacteres.name }),
  genre: z.string({ required_error: systemMessages.required.cpf }),
});
