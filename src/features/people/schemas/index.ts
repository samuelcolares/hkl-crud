import { validCPF, validPhoneNumber } from "@/src/utils";
import systemMessages from "@/src/utils/constants";
import { z } from "zod";

export const peopleSchema = z.object({
  name: z
    .string({ required_error: systemMessages.required.name })
    .min(4, { message: systemMessages.minCharacteres.name }),
  cpf: z
    .string({ required_error: systemMessages.required.cpf })
    .refine(
      (fiscalId: string) =>
        validCPF(fiscalId.replace(/\./g, "").replace(/-/g, "")),
      systemMessages.error.cpf
    ),
  email: z
    .string({
      required_error: systemMessages.required.email,
    })
    .email({
      message: systemMessages.error.email,
    }),
  phone: z
    .string()
    .refine((PN: string) => validPhoneNumber(PN), systemMessages.error.phone),
  avatarUrl: z.string({
    required_error: systemMessages.required.avatarUrl,
  }),
});
