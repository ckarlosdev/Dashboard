import { useEffect, useState } from "react";
import { searchDRsByJobNumberAndDateURL } from "../../hooks/urls";
import useHttpData from "../../hooks/useHttpData";
import { DailyReport } from "../../types";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
  date: string;
  jobNumber?: string;
  drId?: number;
};

function DRView({ date, jobNumber }: Props) {
  // ****************************************************************
  // ************************ API CALL ******************************
  // ****************************************************************
  const [dailyReportDetails, setDailyReportDetails] = useState<
    DailyReport | undefined
  >(undefined);

  const { data: drData, search } = useHttpData<DailyReport>();

  const getData = () => {
    if (jobNumber) {
      search(searchDRsByJobNumberAndDateURL(jobNumber.toString(), date));
    }
  };

  useEffect(() => {
    if (jobNumber) {
      getData();
    }
  }, [jobNumber]);

  useEffect(() => {
    setDailyReportDetails(drData);
  }, [drData]);
  // ****************************************************************
  // ************************ END API CALL **************************
  // ****************************************************************
  // console.log(dailyReportDetails);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
          Foreman
        </Form.Label>
        <Form.Control
          readOnly
          type="text"
          value={
            dailyReportDetails && dailyReportDetails?.foreman
              ? dailyReportDetails?.foreman
              : ""
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
          Crew
        </Form.Label>
        <Form.Control
          readOnly
          as="textarea"
          value={
            dailyReportDetails && dailyReportDetails?.crew
              ? dailyReportDetails?.crew
              : ""
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
          Decription
        </Form.Label>
        <Form.Control
          readOnly
          as="textarea"
          rows={3}
          value={
            dailyReportDetails && dailyReportDetails?.description
              ? dailyReportDetails?.description
              : ""
          }
        />
      </Form.Group>

      <Container>
        <Row>
          <Col sm="6">
            <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
              Man power total
            </Form.Label>
            <Form.Control
              readOnly
              type="text"
              value={
                dailyReportDetails && dailyReportDetails?.manTotal
                  ? dailyReportDetails?.manTotal
                  : ""
              }
            />
            <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
              Man power hrs
            </Form.Label>
            <Form.Control
              readOnly
              type="text"
              value={
                dailyReportDetails && dailyReportDetails?.manHoursTotal
                  ? dailyReportDetails?.manHoursTotal.substring(
                      0,
                      dailyReportDetails?.manHoursTotal.length - 3
                    )
                  : "0"
              }
            />
          </Col>
          <Col sm="6">
            <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
              Equip. Total
            </Form.Label>
            <Form.Control
              readOnly
              type="text"
              value={
                dailyReportDetails?.equipmentTotal &&
                dailyReportDetails?.equipmentTotal
              }
            />
            <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
              Equip. hrs
            </Form.Label>
            <Form.Control
              readOnly
              type="text"
              value={
                dailyReportDetails?.equipHoursTotal
                  ? dailyReportDetails?.equipHoursTotal
                  : ""
              }
            />
          </Col>
        </Row>
      </Container>
      <br />
      <Form.Group className="mb-3">
        <Form.Label style={{ fontWeight: "bold", marginLeft: "5px" }}>
          Issues
        </Form.Label>
        <Form.Control
          readOnly
          as="textarea"
          rows={3}
          value={dailyReportDetails?.issues ? dailyReportDetails?.issues : ""}
        />
      </Form.Group>
    </Form>
  );
}

export default DRView;
