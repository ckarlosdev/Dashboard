import { useEffect, useState } from "react";
import { Problem } from "../../types";
import useHttpData from "../../hooks/useHttpData";
import { searchProblemsByDrIdURL } from "../../hooks/urls";
import { Table } from "react-bootstrap";

type Props = {
  date: string;
  drId?: number;
};

function ProblemView({ drId }: Props) {
  const [problemDetails, setProblemDetails] = useState<Problem[] | undefined>(
    undefined
  );

  const { data: problemData, search } = useHttpData<Problem[]>();

  const getData = () => {
    if (drId) {
      search(searchProblemsByDrIdURL(drId));
    }
  };

  useEffect(() => {
    if (drId) {
      getData();
    }
  }, [drId]);

  useEffect(() => {
    setProblemDetails(problemData);
  }, [problemData]);

  // console.log(problemDetails);

  return (
    <div>
      <Table striped>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Equipment</th>
            <th>Number</th>
            <th>Operator</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {problemDetails?.map((problem) => (
            <tr style={{ textAlign: "center" }} key={problem.problemsId}>
              <td>{problem.drEquipment ? problem.drEquipment.name : "N/A"}</td>
              <td>
                {problem.drEquipment ? problem.drEquipment.number : "N/A"}
              </td>
              <td>
                {problem.drEquipment ? problem.drEquipment.operator : "N/A"}
              </td>
              <td>{problem.type}</td>
              <td>{problem.priority}</td>
              <td>{problem.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProblemView;
