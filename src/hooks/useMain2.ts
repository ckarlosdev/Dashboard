import { useEffect, useState } from "react";
import {
  Checklist,
  DailyReport,
  DrEmployee,
  DrEquipment,
  Dumpster,
  Hazard,
  Job,
  Photos,
  Problem,
  Tool,
} from "../types";
import useHttpData from "./useHttpData";
import {
  jobsURL,
  searchChecklistsByDrIdURL,
  searchCrewByDrIdURL,
  searchDrEquipmentByDrIdURL,
  searchDRsByJobNumberAndDateURL,
  // searchDRsURL,
  searchDumpsterByDrIdURL,
  searchHazardsByJobNumberURL,
  searchPhotosByDrIdURL,
  searchProblemsByDrIdURL,
  searchToolsByDrIdURL,
} from "./urls";

export default () => {
  const [jobSelected, setJobSelected] = useState<Job | undefined>(undefined);

  const { data: jobsData, loading: jobsLoading } = useHttpData<Job[]>(jobsURL);

  useEffect(() => {
    if (jobsData && jobsData.length > 0) {
      const sortedJobs = [...jobsData].sort((a, b) => {
        return Number(b.number) - Number(a.number);
      });
      if (!jobSelected) {
        setJobSelected(sortedJobs[0]);
      }
    }
  }, [jobsData, jobSelected]);

  const jobs = jobsData ? jobsData : [];

  // const {
  //   data: dailyReportsData,
  //   loading: dailyReportsLoading,
  //   search: searchDR,
  // } = useHttpData<DailyReport[]>(searchDRsURL(jobSelected));

  // const searchDRData = (job: Job) => {
  //   searchDR(searchDRsURL(job));
  // };

  const {
    data: dailyReportsData2,
    loading: dailyReportsLoading2,
    error,
    search: searchDR2,
  } = useHttpData<DailyReport>();

  const searchDRbyNumberAndDateData = (number: string, date: string) => {
    searchDR2(searchDRsByJobNumberAndDateURL(number, date));
  };

  const {
    data: crewData,
    loading: crewLoading,
    search: searchCrew,
  } = useHttpData<DrEmployee[]>();

  const searchCrewByDrIdData = (drId: number) => {
    searchCrew(searchCrewByDrIdURL(drId));
  };

  //***************** */
  // Equipment call
  //***************** */

  const {
    data: equipmentData,
    loading: equipmentLoading,
    search: searchEquipment,
  } = useHttpData<DrEquipment[]>();

  const searchEquipmentByDrIdData = (drId: number) => {
    searchEquipment(searchDrEquipmentByDrIdURL(drId));
  };

  //***************** */
  // Photos call
  //***************** */

  const {
    data: photosData,
    loading: photosLoading,
    search: searchPhotos,
  } = useHttpData<Photos[]>();

  const searchPhotosByDrIdData = (drId: number) => {
    searchPhotos(searchPhotosByDrIdURL(drId));
  };

  //***************** */
  // Tools call
  //***************** */

  const {
    data: toolData,
    loading: toolLoading,
    search: searchTool,
  } = useHttpData<Tool[]>();

  const searchToolByDrIdData = (drId: number) => {
    searchTool(searchToolsByDrIdURL(drId));
  };

  //***************** */
  // Dumpsters call
  //***************** */

  const {
    data: dumpsterData,
    loading: dumpsterLoading,
    search: searchDumpsters,
  } = useHttpData<Dumpster>();

  const searchDumpstersByDrIdData = (drId: number) => {
    searchDumpsters(searchDumpsterByDrIdURL(drId));
  };

  //***************** */
  // Checklist call
  //***************** */

  const {
    data: checklistData,
    loading: checklistLoading,
    search: searchChecklist,
  } = useHttpData<Checklist[]>();

  const searchChecklistData = (jobNumber: string, date: string) => {
    searchChecklist(searchChecklistsByDrIdURL(jobNumber, date));
  };

  //***************** */
  // Hazards call
  //***************** */

  const {
    data: hazardsData,
    loading: hazardsLoading,
    search: searchHazards,
  } = useHttpData<Hazard>();

  const searchHazardsByJobNumberData = (jobNumber: string, date: string) => {
    searchHazards(searchHazardsByJobNumberURL(jobNumber, date));
  };

  //***************** */
  // Problems call
  //***************** */

  const {
    data: problemsData,
    loading: problemsLoading,
    search: searchProblems,
  } = useHttpData<Problem[]>();

  const searchProblemsByDrIdData = (drId: number) => {
    searchProblems(searchProblemsByDrIdURL(drId));
  };

  return {
    error,
    setJobSelected,
    jobSelected,
    jobs,
    jobsLoading,
    // dailyReportsData,
    // dailyReportsLoading,
    // searchDRData,
    dailyReportsData2,
    dailyReportsLoading2,
    searchDRbyNumberAndDateData,
    crewData,
    crewLoading,
    searchCrewByDrIdData,
    dumpsterData,
    dumpsterLoading,
    searchDumpstersByDrIdData,
    equipmentData,
    equipmentLoading,
    searchEquipmentByDrIdData,
    photosData,
    photosLoading,
    searchPhotosByDrIdData,
    toolData,
    toolLoading,
    searchToolByDrIdData,
    problemsData,
    problemsLoading,
    searchProblemsByDrIdData,
    checklistData,
    checklistLoading,
    searchChecklistData,
    hazardsData,
    hazardsLoading,
    searchHazardsByJobNumberData,
  };
};
