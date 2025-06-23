import { DrEmployee, Dumpster } from "../types";

export const generateDateRange = (
  startStr: string,
  endStr: string
): string[] => {
  const dates: string[] = [];
  if (!startStr || !endStr) {
    return dates;
  }

  const startDate = new Date(startStr + "T00:00:00");
  const endDate = new Date(endStr + "T00:00:00");

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    console.warn("Invalid date format detected to generate range.");
    return [];
  }

  if (startDate > endDate) {
    console.warn(
      "The start date is after the end date. No range was generated."
    );
    return [];
  }

  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const month = currentDate.getMonth() + 1; // getMonth() is 0-indexed
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    dates.push(`${month}/${day}/${year}`);

    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};

export const formatedDate = (dateString: string) => {
  const date = new Date(dateString + "T00:00:00");

  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

export const formatedDateForSQL = (dateString: string) => {
  const date = new Date(dateString);

  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const calculateTotalHours = (
  entryTime: string,
  exitTime: string,
  subtractBreak: boolean
) => {
  const today: string = "2000-01-01"; // O new Date().toDateString()

  const entryDateTime: Date = new Date(`${today}T${entryTime}`);
  const exitDateTime: Date = new Date(`${today}T${exitTime}`);

  if (exitDateTime < entryDateTime) {
    exitDateTime.setDate(exitDateTime.getDate() + 1);
  }

  const diffInMs: number = exitDateTime.getTime() - entryDateTime.getTime();

  let totalHours: number = diffInMs / (1000 * 60 * 60);

  if (subtractBreak === true) {
    totalHours -= 0.5;
  }

  return totalHours;
};

export const calculateTotalHoursFromList = (crew: DrEmployee[]) => {
  let grandTotalHours: number = 0;

  for (const labor of crew) {
    const periodHours = calculateTotalHours(
      labor.inHour,
      labor.outHour,
      labor.lunch == "TRUE" ? true : false
    );
    grandTotalHours += periodHours;
  }

  return grandTotalHours;
};

export const sumTotalDumpsters = (dumpsters: Dumpster) => {
  let totalConcret = 0;
  let totalMetal = 0;
  let totalCd = 0;
  let total = 0;

  if (dumpsters) {
    totalConcret = dumpsters.concret40;
    totalConcret += dumpsters.concret35;
    totalConcret += dumpsters.concret30;
    totalConcret += dumpsters.concret20;
    totalConcret += dumpsters.concret12;
    totalConcret += dumpsters.concretQuad;
    totalConcret += dumpsters.concretSemi;
    totalConcret += dumpsters.concretGondola;
    totalMetal = dumpsters.metal40;
    totalMetal += dumpsters.metal35;
    totalMetal += dumpsters.metal30;
    totalMetal += dumpsters.metal20;
    totalMetal += dumpsters.metal12;
    totalMetal += dumpsters.metalQuad;
    totalMetal += dumpsters.metalSemi;
    totalMetal += dumpsters.metalGondola;
    totalCd = dumpsters.cd40;
    totalCd += dumpsters.cd35;
    totalCd += dumpsters.cd30;
    totalCd += dumpsters.cd20;
    totalCd += dumpsters.cd12;
    totalCd += dumpsters.cdQuad;
    totalCd += dumpsters.cdSemi;
    totalCd += dumpsters.cdGondola;
    total = totalConcret + totalMetal + totalCd;
  }

  const data = {
    concret: totalConcret,
    metal: totalMetal,
    cd: totalCd,
    total: total,
  };

  return data;
};
