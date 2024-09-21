const requiredMessages = {
  name: "Campo de nome requerido",
  cpf: "Campo de CPF requerido",
};

const errorMessages = {
  cpf: "Digite um CPF válido.",
};

const minCharacteresMessages = {
  name: "Nome precisa ter no mínimo 4 letras.",
};

const systemMessages = {
  required: { ...requiredMessages },
  error: { ...errorMessages },
  minCharacteres: { ...minCharacteresMessages },
};

export default systemMessages;
