import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatIsoDate(isoDate: string): string {
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid ISO date provided.");
  }

  const day = date.getDate();
  const year = date.getFullYear();
  // Using Turkish locale to get a long month name (e.g., "Mart")
  const month = date.toLocaleString("tr-TR", { month: "long" });

  return `${day} ${month} ${year}`;
}