import Data from "./Data";
import { useEffect, useState } from "react";
import FilterData from "./FilterData";
import { generateDateRange } from "../utils/dateUtils";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { Job } from "../types";

type DailyReportSummary = {
  date: string; // The date in MM/DD/YYYY format to match generatedDates
};
type Props = {
  jobsData: Job[];
  setJobSelected: (job: Job) => void;
  jobSelected?: Job | undefined;
};

//  selectJob: Job | undefined;
//   jobSelected: (job: Job) => void;

function Dashboard({ jobsData, setJobSelected, jobSelected }: Props) {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Meses son 0-11
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // const [selectedIndex, setSelectedIndex] = useState(-1);
  const [startDate, setStartDate] = useState<string>(getTodayDate());
  const [endDate, setEndDate] = useState<string>(getTodayDate());
  const [generatedDates, setGeneratedDates] = useState<string[]>([]);
  const [summaryObjectsByDate, setSummaryObjectsByDate] = useState<
    DailyReportSummary[]
  >([]);

  const dailyReportSummaries: DailyReportSummary[] = [];

  const handleDisplayData = () => {
    const newSummaryObjects: DailyReportSummary[] = [];

    generatedDates.forEach((dateStr) => {
      const foundSummary = dailyReportSummaries.find(
        (summary) => summary.date == dateStr
      );

      if (foundSummary) {
        newSummaryObjects.push(foundSummary);
      } else {
        newSummaryObjects.push({
          date: dateStr,
        });
      }
    });

    setSummaryObjectsByDate(newSummaryObjects);
    // console.log("Objetos de resumen por fecha generados:", newSummaryObjects);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "starDate") {
      setStartDate(value);
      setEndDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
    // handleDisplayData();
  };

  useEffect(() => {
    // Solo genera la lista si ambas fechas están definidas y no son vacías
    if (startDate && endDate) {
      const dates = generateDateRange(startDate, endDate);
      setGeneratedDates(dates); // Actualiza el nuevo estado
      // console.log("Lista de fechas generada automáticamente:", dates);
    } else {
      setGeneratedDates([]); // Si una fecha está vacía, limpia la lista
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (
      generatedDates.length > 0 ||
      (startDate && endDate && generatedDates.length === 0)
    ) {
      handleDisplayData();
    }
  }, [generatedDates, startDate, endDate]);

  useEffect(() => {
    if (jobSelected) {
      handleDisplayData();
      // console.log("jobSelected: ", jobSelected);

      console.log("job Selected: ", jobSelected.number);
    }
  }, [jobSelected]);

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex flex-wrap gap-3">
        <div style={{ flex: "0 0 400px" }}>
          <div className="card h-100">
            <div className="card-header">Filters</div>
            <FilterData
              startDate={startDate}
              endDate={endDate}
              jobData={jobsData}
              // selectedIndex={selectedIndex}
              onDateChange={handleDateChange}
              // onIndexClick={handleIndexClick}
              selectJob={setJobSelected}
              jobSelected={jobSelected}

              // onDisplayData={handleDisplayData}
            />
          </div>
        </div>
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <div className="card">
            <div className="card-header">
              JobSelected:{" "}
              <span style={{ fontWeight: "bold" }}>
                {jobSelected ? jobSelected.number : ""}
              </span>{" "}
              <span>{jobSelected ? jobSelected.name : ""}</span>
              {" address: ("}
              <span style={{ fontWeight: "bold" }}>
                {jobSelected ? jobSelected.address : ""}
              </span>
              {") "}
              <span>{jobSelected ? jobSelected.contractor : ""}</span>
            </div>
            <Data
              jobSelected={jobSelected}
              summaries={summaryObjectsByDate}
            ></Data>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
