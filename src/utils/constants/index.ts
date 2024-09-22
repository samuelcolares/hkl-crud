import { GridLocaleText } from "@mui/x-data-grid";

const requiredMessages = {
  name: "Campo de nome requerido",
  cpf: "Campo de CPF requerido",
  phone: "Campo de telefone requerido",
  email: "Campo de e-mail requerido",
  avatarUrl: "Escolha um avatar",
};

const errorMessages = {
  cpf: "Digite um CPF válido.",
  phone: "Digite um número de telefone válido.",
  email: "Digite um e-mail válido",
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

export const localizedTextsMap: Partial<GridLocaleText> = {
  columnMenuUnsort: "Não classificado",
  columnMenuSortAsc: "Classificar por ordem crescente",
  columnMenuSortDesc: "Classificar por ordem decrescente",
  columnMenuFilter: "Filtro",
  columnMenuHideColumn: "Ocultar",
  columnMenuShowColumns: "Mostrar colunas",
  columnMenuManageColumns: "Gerenciar Colunas",
  columnsManagementShowHideAllText: "Mostrar/Ocultar Tudo",
  columnsManagementReset: "Resetar",
  columnsManagementSearchTitle: "Pesquisar",
  columnsManagementNoColumns: "Sem resultados",
  filterPanelColumns: "Colunas",
  filterPanelOperator: "Operador",
  noRowsLabel: "Sem resultado.",
  noResultsOverlayLabel: "Sem resultados.",
};
