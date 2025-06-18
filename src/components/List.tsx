import { Job } from "../types";

type Props = {
  data: Job[];
  onClick: (job: Job) => void;
  // index: number;
  selected?: Job;
};

function List({ data, onClick, selected }: Props) {
  const sortedData = [...data].sort((a, b) => {
    return Number(b.number) - Number(a.number);
  });

  return (
    <div className="mb-3">
      <ul className="list-group">
        {sortedData.map((element) => (
          <li
            onClick={() => onClick(element)}
            key={element.jobsId}
            className={`list-group-item ${
              selected?.number == element.number ? "active" : ""
            }`}
          >
            <span style={{ fontWeight: "bold" }}>{element.number}</span>
            {" - "}
            {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
