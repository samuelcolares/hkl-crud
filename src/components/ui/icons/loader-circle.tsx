import { cn } from "@/src/utils";
import React from "react";

function LoaderCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={cn("animate-spin", className)}
      viewBox="0 0 24 24"
    >
      <path d="M21 12a9 9 0 11-6.219-8.56"></path>
    </svg>
  );
}

export default LoaderCircle;
