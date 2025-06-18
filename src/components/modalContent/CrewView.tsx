import { useEffect, useState } from "react";
import { DrEmployee } from "../../types";
import useHttpData from "../../hooks/useHttpData";
import { searchCrewByDrIdURL } from "../../hooks/urls";
import Table from "react-bootstrap/esm/Table";
import Form from "react-bootstrap/esm/Form";
import {
  calculateTotalHours,
  calculateTotalHoursFromList,
} from "../../utils/dateUtils";
import { Card, Col, Row } from "react-bootstrap";

type Props = {
  date: string;
  drId?: number;
  jobNumber?: string;
};

function CrewView({ drId, jobNumber }: Props) {
  const [crewDetails, setCrewDetails] = useState<DrEmployee[] | undefined>(
    undefined
  );

  const { data: crewData, search } = useHttpData<DrEmployee[]>();

  const getData = () => {
    if (drId) {
      search(searchCrewByDrIdURL(drId));
    }
  };

  useEffect(() => {
    if (jobNumber) {
      getData();
    }
  }, [jobNumber]);

  useEffect(() => {
    setCrewDetails(crewData);
  }, [crewData]);

  // console.log(crewData);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Table striped bordered hover>
          <thead>
            <tr style={{ textAlign: "center", fontSize: "20px" }}>
              <th>Name</th>
              <th>In</th>
              <th>Out</th>
              <th>Lunch</th>
              <th>Ppe</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {crewDetails?.map((labor) => (
              <tr key={labor.drEmployeesId} style={{ textAlign: "center" }}>
                <td style={{ fontWeight: "bold" }}>{labor.name}</td>
                <td>{labor.inHour.substring(0, 5)}</td>
                <td>{labor.outHour.substring(0, 5)}</td>
                <td>
                  {labor.lunch == "TRUE" ? (
                    <span className="badge text-bg-success">Yes</span>
                  ) : (
                    <span className="badge text-bg-secondary">No</span>
                  )}
                </td>
                <td>
                  {labor.ppe == "TRUE" ? (
                    <span className="badge text-bg-success">Complete</span>
                  ) : (
                    <span className="badge text-bg-danger">Incomplete</span>
                  )}
                </td>
                <td>
                  {calculateTotalHours(
                    labor.inHour,
                    labor.outHour,
                    labor.lunch == "TRUE" ? true : false
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Card>
          <Row>
            <Col sm="6">
              <Form.Label
                style={{ fontSize: "25px" }}
                column
                sm="12"
                className="text-center fw-bold"
              >
                Man power total
              </Form.Label>
              <Form.Control
                readOnly
                className="text-center fw-bold"
                type="text"
                style={{ fontSize: "35px" }}
                value={crewData && crewData?.length}
              />
            </Col>
            <Col>
              <Form.Label
                style={{ fontSize: "25px" }}
                column
                sm="12"
                className="text-center fw-bold"
              >
                Man total hours
              </Form.Label>
              <Form.Control
                readOnly
                className="text-center fw-bold"
                type="text"
                style={{ fontSize: "35px" }}
                value={crewData ? calculateTotalHoursFromList(crewData) : 0}
              />
            </Col>
          </Row>
        </Card>
      </Form.Group>
    </Form>
  );
}

export default CrewView;
