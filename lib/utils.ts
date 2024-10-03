import { clsx, type ClassValue } from "clsx";
import { ReactEventHandler } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class PrayerManager {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async approvePrayer(
    prayer: any,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/approved-prayers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prayer),
      });

      if (!response.ok) {
        throw new Error("Failed to approve prayer");
      }
      setState(true);

      console.log("Prayer approved successfully!");
    } catch (error) {
      console.error("Error approving prayer:", error);
    }
  }

  async declinePrayer(prayer: any): Promise<void> {
    try {
      const response = await fetch(
        `${this.apiUrl}/approved-prayers/${prayer.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to decline prayer");
      }

      console.log("Prayer declined successfully!");
    } catch (error) {
      console.error("Error declining prayer:", error);
    }
  }

  async followUpPrayer(prayer: any): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/follow-up-prayers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prayer),
      });

      if (!response.ok) {
        throw new Error("Failed to follow up on prayer");
      }

      console.log("Prayer followed up successfully!");
    } catch (error) {
      console.error("Error following up on prayer:", error);
    }
  }
}
