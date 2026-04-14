import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createJsonResponse(data: unknown, init?: ResponseInit) {
  return Response.json(data, init);
}
