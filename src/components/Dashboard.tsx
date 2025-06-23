import { useEffect, useState } from "react";
import FilterData from "./FilterData";
import { formatedDate, generateDateRange } from "../utils/dateUtils";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { DailyReport, Job } from "../types";
import Total from "./totals/Total";
import Data from "./Data";
import useHttpData from "../hooks/useHttpData";
import { searchDRsByJobNumberURL } from "../hooks/urls";

type dateRange = {
  start: string;
  end: string;
};
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
  const [dailyReports, setDailyReports] = useState<DailyReport[] | undefined>(
    undefined
  );

  const [dates, setDates] = useState<dateRange | undefined>(undefined);

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

  const { data: drData, search } = useHttpData<DailyReport[]>();
  const getData = () => {
    if (jobSelected) {
      search(searchDRsByJobNumberURL(jobSelected.number));
    }
  };

  useEffect(() => {
    if (drData && drData.length > 0) {
      setDailyReports(drData);
    }
  }, [drData]);

  useEffect(() => {
    if (dailyReports && dailyReports.length > 0) {
      const sortedReports = [...dailyReports].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA.getTime() < dateB.getTime()) {
          return -1;
        }
        if (dateA.getTime() > dateB.getTime()) {
          return 1;
        }
        return 0;
      });
      // setDailyReports(sortedReports);
      setDates({
        start: sortedReports[0].date,
        end: sortedReports[sortedReports.length - 1].date,
      });
      console.log(dates);
    }
  }, [dailyReports]);

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
    setDates(undefined);
    if (jobSelected) {
      handleDisplayData();
      getData();
      // console.log("jobSelected: ", jobSelected);
      // console.log("job Selected: ", jobSelected.number);
    }
  }, [jobSelected]);

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex flex-wrap gap-3">
        <div style={{ flex: "0 0 400px" }}>
          <div className="card h-100">
            <div className="card-header">
              <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                Filters
              </span>
              {dates ? (
                <span>
                  {formatedDate(dates.start.substring(0, 10))} :{" "}
                  {formatedDate(dates.end.substring(0, 10))}
                </span>
              ) : (
                <span>No data</span>
              )}
            </div>
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
        <div
          className="d-flex flex-column gap-3"
          style={{ flex: "1 1 200px", minWidth: "200px" }}
        >
          <div className="card">
            <div className="card-header">
              <span style={{ fontWeight: "bold", marginRight: "100px" }}>
                Totals
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>Selected:</span>{" "}
              <span>Job Number:</span>{" "}
              <span style={{ fontWeight: "bold" }}>
                {jobSelected ? jobSelected.number : ""}
              </span>{" "}
              <span>Job Name:</span>{" "}
              <span style={{ fontWeight: "bold" }}>
                {jobSelected ? jobSelected.name : ""}
              </span>
              {" address: ("}
              <span style={{ fontWeight: "bold" }}>
                {jobSelected ? jobSelected.address : ""}
              </span>
              {") "}
              <span>Contractor:</span>{" "}
              <span>{jobSelected ? jobSelected.contractor : ""}</span>
            </div>
            <div className="card-body">
              <Total jobSelected={jobSelected}></Total>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <span style={{ fontWeight: "bold" }}>Details by day</span>
            </div>
            <div className="card-body">
              <Data
                jobSelected={jobSelected}
                summaries={summaryObjectsByDate}
              ></Data>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
