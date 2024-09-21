import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const simulateServerDelay = () => {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise((resolve) => setTimeout(resolve, delay));
};
