import TotalCard from "./TotalCard";
import Dumpster from "./Dumpster";
import { DRSummary, employeeSummary, Job } from "../../types";
import { useEffect, useState } from "react";
import {
  searchDrSummaryByJobNumberURL,
  searchDumpsterSummaryByJobNumberURL,
  searchEmployeesHoursByJobNumberURL,
} from "../../hooks/urls";
import useHttpData from "../../hooks/useHttpData";
import { sumTotalHours } from "../../utils/dataUtils";

type dumpSummary = {
  concrete: number;
  metal: number;
  cd: number;
};
type Props = {
  jobSelected: Job | undefined;
};

function Total({ jobSelected }: Props) {
  const [drSummary, setDrSummary] = useState<DRSummary[] | undefined>(
    undefined
  );
  const [hoursSummary, setHoursSummary] = useState<
    employeeSummary[] | undefined
  >(undefined);
  const [dumpsterSummary, setDumpsterSummary] = useState<
    dumpSummary | undefined
  >(undefined);

  const { data: drSummaryData, search } = useHttpData<DRSummary[]>();
  const { data: dumpSummaryData, search: searchDumpsters } =
    useHttpData<dumpSummary>();
  const { data: hoursData, search: searchHours } =
    useHttpData<employeeSummary[]>();

  const getData = () => {
    if (jobSelected?.number) {
      search(searchDrSummaryByJobNumberURL(jobSelected.number));
      searchHours(searchEmployeesHoursByJobNumberURL(jobSelected.number));
      searchDumpsters(searchDumpsterSummaryByJobNumberURL(jobSelected.number));
    }
  };

  useEffect(() => {
    if (jobSelected) {
      getData();
    }
  }, [jobSelected]);

  useEffect(() => {
    if (drSummaryData) {
      if (!Array.isArray(drSummaryData)) {
        setDrSummary([drSummaryData]);
      } else {
        setDrSummary(drSummaryData);
      }
    }
  }, [drSummaryData]);

  useEffect(() => {
    if (hoursData) {
      if (!Array.isArray(hoursData)) {
        setHoursSummary([hoursData]);
      } else {
        setHoursSummary(hoursData);
      }
    }
  }, [hoursData]);

  useEffect(() => {
    if (dumpSummaryData) {
      setDumpsterSummary(dumpSummaryData);
    }
  }, [dumpSummaryData]);

    console.log(dumpsterSummary);

  return (
    <div
      className="d-flex gap-3 flex-wrap"
      style={{
        // overflowX: "auto",
        paddingBottom: "10px",
      }}
    >
      <div>
        <Dumpster data={dumpsterSummary}></Dumpster>
      </div>
      <div>
        <TotalCard
          children={"Hours"}
          total={hoursSummary ? Number(sumTotalHours(hoursSummary)) : 0}
          value={"TOTAL"}
        ></TotalCard>
      </div>

      {drSummary?.map((element) => (
        <div key={element.type}>
          <TotalCard
            children={element.type}
            total={element.count ? element.count : 0}
            value={element.value}
          ></TotalCard>
        </div>
      ))}
    </div>
  );
}

export default Total;
