import { useEffect, useState } from "react";
import { Tool } from "../../types";
import useHttpData from "../../hooks/useHttpData";
import { searchToolsByDrIdURL } from "../../hooks/urls";
import { Table } from "react-bootstrap";

type Props = {
  date: string;
  drId?: number;
};

function ToolView({ drId }: Props) {
  const [toolsDetails, setToolsDetails] = useState<Tool[] | undefined>(
    undefined
  );

  const { data: toolsData, search } = useHttpData<Tool[]>();

  const getData = () => {
    if (drId) {
      search(searchToolsByDrIdURL(drId));
    }
  };

  useEffect(() => {
    if (drId) {
      getData();
    }
  }, [drId]);

  useEffect(() => {
    if (toolsData) {
      const sortedTools = [...toolsData].sort((a, b) => {
        const nameA = a.name.toUpperCase(); // Convert to uppercase for case-insensitive sorting
        const nameB = b.name.toUpperCase(); // Convert to uppercase for case-insensitive sorting

        if (nameA < nameB) {
          return -1; // a comes before b
        }
        if (nameA > nameB) {
          return 1; // b comes before a
        }
        return 0; // names are equal
      });
      setToolsDetails(sortedTools);
    }
  }, [toolsData]);

  return (
    <div className="mb-3">
      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              textAlign: "center",
              fontSize: "20px",
              backgroundColor: "gray",
            }}
          >
            <th>Tool</th>
            <th>Type</th>
            <th>Comment</th>
            <th>Qty.</th>
          </tr>
        </thead>
        <tbody>
          {toolsDetails?.map((tool) => (
            <tr style={{ textAlign: "center" }} key={tool.drToolId}>
              <td>
                {tool.name === "Other"
                  ? tool.name + "(" + tool.other + ")"
                  : tool.name}
              </td>
              <td>{tool.type}</td>
              <td>{tool.comments}</td>
              <td>{tool.qty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ToolView;
