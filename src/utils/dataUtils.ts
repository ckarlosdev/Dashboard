import { employeeSummary } from "../types";

export const sumTotalHours = (hours: employeeSummary[]) => {
  let totalHours: number = 0;

  if (hours.length > 0) {
    for (const hour of hours) {
      totalHours += Number(hour.totalHoursDecimal);
      if (hour.lunch == "TRUE") {
        totalHours -= 0.5;
      }
    }
  }

  return totalHours.toFixed(1);
};
