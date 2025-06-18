import { Job } from "../types";
// import Button from "./Button";
import Input from "./Input";
import List from "./List";

type Props = {
  jobData: Job[];
  // selectedIndex: number;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectJob: (job: Job) => void;
  jobSelected: Job | undefined;
  // onDisplayData: () => void;
  startDate: string;
  endDate: string;
};

function FilterData({
  jobData,
  // selectedIndex,
  onDateChange,
  selectJob,
  jobSelected,
  // onDisplayData,
  startDate,
  endDate,
}: Props) {
  return (
    <form
      className="d-flex flex-column px-3 py-3 border rounded shadow-sm"
      style={{ maxHeight: "calc(100vh - 100px)", height: "auto" }}
    >
      <div
        className="d-flex mb-3" 
        style={{ gap: "15px" }} 
      >
        <div style={{ flex: 1 }}>
          {" "}
          <Input
            value={startDate}
            type="date"
            name="starDate" 
            onChange={onDateChange}
          >
            Start date
          </Input>
        </div>

        <div style={{ flex: 1 }}>
          {" "}
          <Input
            value={endDate}
            type="date"
            name="endDate"
            onChange={onDateChange}
          >
            End date
          </Input>
        </div>
      </div>

      {/* <div className="mt-3">
        <Button onClick={onDisplayData}>Display data</Button>
      </div> */}
      <div>
        <label
          style={{ marginLeft: "2px", marginBottom: "8px", fontWeight: "bold" }}
          className="form-label"
        >
          Job Numbers
        </label>
      </div>

      <div className="flex-grow-1 overflow-y-auto" style={{ minHeight: 0 }}>
        <List
          // index={selectedIndex}
          selected={jobSelected}
          onClick={selectJob}
          data={jobData}
        />
      </div>
    </form>
  );
}

export default FilterData;
