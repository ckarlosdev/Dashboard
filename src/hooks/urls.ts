import { Job } from "../types";

const base = "https://checklist-api-8j62.onrender.com/api/v1";

export const jobsURL = `${base}/job`;

export const searchDRsURL = (job: Job) =>
  `${base}/dailyReport/job/${job.number}`;

export const searchDRsByJobNumberAndDateURL = (number: string, date: string) =>
  `${base}/dailyReport/${number}/by-date?date=${date}`;

export const searchCrewByDrIdURL = (drId: number) =>
  `${base}/drEmployee/dailyReport/${drId}`;

export const searchDumpsterByDrIdURL = (drId: number) =>
  `${base}/dumpster/dailyReport/${drId}`;

export const searchDrEquipmentByDrIdURL = (drId: number) =>
  `${base}/drEquipment/dailyReport/${drId}`;

export const searchPhotosByDrIdURL = (drId: number) =>
  `${base}/photo/dailyReport/${drId}`;

export const searchToolsByDrIdURL = (drId: number) =>
  `${base}/tool/dailyReport/${drId}`;

export const searchProblemsByDrIdURL = (drId: number) =>
  `${base}/problem/dailyReport/${drId}`;

export const searchHazardsByJobNumberURL = (number: string, date: string) =>
  `${base}/pretask/${number}/by-date?date=${date}`;

export const searchChecklistsByDrIdURL = (number: string, date: string) =>
  `${base}/cl/${number}/by-date?date=${date}`;

export const searchDrSummaryByJobNumberURL = (jobNumber: string) =>
  `${base}/dailyReport/summary/${jobNumber}`;

export const searchEmployeesHoursByJobNumberURL = (jobNumber: string) =>
  `${base}/drEmployee/hours/${jobNumber}`;

export const searchDumpsterSummaryByJobNumberURL = (jobNumber: string) =>
  `${base}/dumpster/summary/${jobNumber}`;

export const searchDRsByJobNumberURL = (jobNumber: string) =>
  `${base}/dailyReport/job/${jobNumber}`;
