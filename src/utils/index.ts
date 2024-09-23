import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateTimestamp = () => {
  return new Date().getTime();
};

export function validCPF(value: string) {
  const isString = typeof value === "string";
  const isValid = /^\d{11}$/.test(value);

  if (!isString) return false;
  if (!isValid) return false;
  if (value.length !== 11) return false;

  const cpfNumbers = value.split("").map(Number);

  const items = [...new Set(cpfNumbers)];
  if (items.length === 1) return false;

  const digits = cpfNumbers.slice(9);
  const isDigit0Valid = rest(10, cpfNumbers) === digits[0];
  const isDigit1Valid = rest(11, cpfNumbers) === digits[1];

  return isDigit0Valid && isDigit1Valid;
}

const rest = (count: number, numbers: number[]): number => {
  return (
    ((numbers
      .slice(0, count - 12)
      .reduce((acc, curr, index) => acc + curr * (count - index), 0) *
      10) %
      11) %
    10
  );
};

export function maskCPF(value: string) {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export const maskPhoneNumber = (value: string | undefined) => {
  if (!value) return "";

  return value
    .replace(/[\D]/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)/, "$1");
};

export const simulateServerDelay = () => {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const getRandomNumber = ({ min, max }: { min: number; max: number }) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export function validPhoneNumber(value: string) {
  const isString = typeof value === "string";
  const isValid = /^\(\d{2}\) (9?\d{4}-\d{4})$/.test(value);

  const DDD = value.slice(1, 3);
  const nineDigit = value.slice(5, 6) === "9";

  const ValidDDD = DDDArray.includes(DDD);

  if (!isString) return false;
  if (!isValid) return false;
  if (!ValidDDD) return false;
  if (value.length === 15 && !nineDigit) return false;
  if (value.length < 14 || value.length > 15) return false;

  const phoneNumbes =
    value.length === 15
      ? value.slice(6).replace("-", "").split("").map(Number)
      : value.slice(5).replace("-", "").split("").map(Number);

  const items = [...new Set(phoneNumbes)];
  if (items.length === 1) return false;

  return true;
}

const DDDArray = [
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "21",
  "22",
  "24",
  "27",
  "28",
  "31",
  "32",
  "33",
  "34",
  "35",
  "37",
  "38",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "51",
  "53",
  "54",
  "55",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "71",
  "73",
  "74",
  "75",
  "77",
  "79",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
];
