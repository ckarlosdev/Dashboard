import { ReactNode, useEffect, useState } from "react";
import Link from "./Link";
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
import useMain from "../hooks/useMain2";
import { formatedDateForSQL, sumTotalDumpsters } from "../utils/dateUtils";

interface Props {
  children: ReactNode;
  jobSelected?: Job;
  dateValue: string;
}

function Card({ children, jobSelected, dateValue }: Props) {
  const [dailyReportDetails, setDailyReportDetails] = useState<
    DailyReport | undefined
  >(undefined);
  const [crewMember, setCrewMember] = useState<DrEmployee[] | undefined>(
    undefined
  );
  const [dumpsters, setDumpsters] = useState<Dumpster | undefined>(undefined);
  const [equipments, setEquipments] = useState<DrEquipment[] | undefined>(
    undefined
  );
  const [photos, setPhotos] = useState<Photos[] | undefined>(undefined);
  const [tools, setTools] = useState<Tool[] | undefined>(undefined);
  const [problems, setProblems] = useState<Problem[] | undefined>(undefined);
  const [checklists, setChecklists] = useState<Checklist[] | undefined>(
    undefined
  );
  const [hazardDetails, setHazardDetails] = useState<Hazard | undefined>(
    undefined
  );

  const resetStates = () => {
    setDailyReportDetails(undefined);
    setCrewMember(undefined);
    setDumpsters(undefined);
    setEquipments(undefined);
    setPhotos(undefined);
    setTools(undefined);
    setProblems(undefined);
    setChecklists(undefined);
    setHazardDetails(undefined);
  };

  const {
    error,
    searchDRbyNumberAndDateData,
    dailyReportsData2,
    crewData,
    searchCrewByDrIdData,
    dumpsterData,
    searchDumpstersByDrIdData,
    equipmentData,
    searchEquipmentByDrIdData,
    photosData,
    searchPhotosByDrIdData,
    toolData,
    searchToolByDrIdData,
    problemsData,
    searchProblemsByDrIdData,
    checklistData,
    searchChecklistData,
    hazardsData,
    searchHazardsByJobNumberData,
  } = useMain();

  useEffect(() => {
    if (jobSelected?.number && dateValue) {
      resetStates();
      searchDRbyNumberAndDateData(
        jobSelected.number,
        formatedDateForSQL(dateValue)
      );

      searchChecklistData(jobSelected.number, formatedDateForSQL(dateValue));
      searchHazardsByJobNumberData(
        jobSelected.number,
        formatedDateForSQL(dateValue)
      );
    }
  }, [jobSelected?.number]);

  useEffect(() => {
    if (dailyReportsData2) {
      setDailyReportDetails(dailyReportsData2);
    } else {
      setDailyReportDetails(undefined);
    }
  }, [dailyReportsData2, error]);

  useEffect(() => {
    if (dailyReportDetails?.dailyReportId) {
      searchCrewByDrIdData(dailyReportDetails.dailyReportId);
      searchDumpstersByDrIdData(dailyReportDetails.dailyReportId);
      searchEquipmentByDrIdData(dailyReportDetails.dailyReportId);
      searchPhotosByDrIdData(dailyReportDetails.dailyReportId);
      searchToolByDrIdData(dailyReportDetails.dailyReportId);
      searchProblemsByDrIdData(dailyReportDetails.dailyReportId);
    }
  }, [dailyReportDetails]);

  useEffect(() => {
    setCrewMember(crewData);
  }, [crewData]);

  useEffect(() => {
    setDumpsters(dumpsterData);
  }, [dumpsterData]);

  useEffect(() => {
    setEquipments(equipmentData);
  }, [equipmentData]);

  useEffect(() => {
    setPhotos(photosData);
  }, [photosData]);

  useEffect(() => {
    setTools(toolData);
  }, [toolData]);

  useEffect(() => {
    setProblems(problemsData);
  }, [problemsData]);

  useEffect(() => {
    setChecklists(checklistData);
  }, [checklistData]);

  useEffect(() => {
    setHazardDetails(hazardsData);
  }, [hazardsData]);

  // console.log("Card Component ------------------------");
  // // console.log("Card Component - DATE:", dateValue);
  // console.log("Card Component - crewData (from hook):", dumpsters);
  // console.log("End Component ------------------------");

  return (
    <div
      className="card"
      style={{
        minWidth: "13rem",
        maxWidth: "18rem",
        flexShrink: 0,
      }}
    >
      <div className="card-body">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgray",
            borderRadius: "25px",
            marginBottom: "5px",
          }}
        >
          <label
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px", marginTop: "5px" }}
          >
            {children}{" "}
            <span
              className={`badge text-bg-${
                dailyReportDetails ? `success` : `danger`
              }`}
            >
              {dailyReportDetails
                ? String.fromCharCode(10003)
                : String.fromCharCode(10007)}
            </span>
          </label>
        </div>

        <ul className="list-group">
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="DailyReport"
            value={dailyReportDetails ? "Yes" : "No"}
            active={dailyReportDetails ? false : true}
          >
            Daily Report
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Crew"
            value={crewMember ? crewMember.length.toString() : "0"}
            active={crewMember ? false : true}
          >
            Crew
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Equipment"
            value={equipments ? equipments?.length.toString() : "0"}
            active={equipments && equipments.length > 0 ? false : true}
          >
            Equipment
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Problem"
            value={problems ? problems.length.toString() : "0"}
            active={problems && problems?.length > 0 ? false : true}
          >
            Problems
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Photo"
            value={photos ? photos.length.toString() : "0"}
            active={photos && photos?.length > 0 ? false : true}
          >
            Photos
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Tool"
            value={tools ? tools.length.toString() : "0"}
            active={tools && tools?.length > 0 ? false : true}
          >
            Tools
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Dumpster"
            value={
              dumpsters ? sumTotalDumpsters(dumpsters).total.toString() : "0"
            }
            active={dumpsters ? false : true}
          >
            Dumpsters
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Checklist"
            value={checklists ? checklists.length.toString() : "0"}
            active={checklists ? false : true}
          >
            Checklists
          </Link>
          <Link
            date={dateValue}
            jobNumber={jobSelected?.number}
            drId={dailyReportDetails?.dailyReportId}
            name="Hazard"
            value={hazardDetails ? "Yes" : "No"}
            active={hazardDetails ? false : true}
          >
            Hazards
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Card;
