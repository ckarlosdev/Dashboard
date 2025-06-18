import { useEffect, useState } from "react";
import useHttpData from "../../hooks/useHttpData";
import { Checklist } from "../../types";
import { searchChecklistsByDrIdURL } from "../../hooks/urls";
import {
  Accordion,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { FaHandHoldingWater, FaOilCan, FaTools } from "react-icons/fa";
import { IoFilterSharp, IoWaterOutline } from "react-icons/io5";
import { FaTemperatureHalf } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { MdOutlineCleanHands } from "react-icons/md";

type Props = {
  data: string;
  date: string;
  jobNumber?: string;
};

function ChecklistView({ date, jobNumber }: Props) {
  const [checkListsDetails, setCheckListsDetails] = useState<
    Checklist[] | undefined
  >(undefined);

  const { data: checkListsData, search } = useHttpData<Checklist[]>();

  const getData = () => {
    if (jobNumber) {
      search(searchChecklistsByDrIdURL(jobNumber, date));
    }
  };

  useEffect(() => {
    if (jobNumber) {
      getData();
    }
  }, [jobNumber]);

  useEffect(() => {
    setCheckListsDetails(checkListsData);
  }, [checkListsData]);

  // console.log(checkListsDetails);

  return (
    <div>
      <Accordion defaultActiveKey={checkListsDetails ? checkListsDetails[0].googleChecklistsId.toString() : "0"}>
        {checkListsDetails?.map((checklist) => (
          <Accordion.Item
            key={checklist.googleChecklistsId}
            eventKey={checklist.googleChecklistsId.toString()}
          >
            <Accordion.Header>
              <span style={{ marginRight: "10px" }}>
                {checklist.equipmentNumber}
              </span>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                {checklist.equipmentName}
              </span>
              <span style={{ marginRight: "10px" }}>{checklist.operator}</span>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                Odometer: {checklist.odometer}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <Container>
                <Row>
                  <Col></Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <FaOilCan />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Oil
                      </span>
                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.oil}
                      </label>
                    </Card>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <IoWaterOutline />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Hydraulic
                      </span>

                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.hydraulic}
                      </label>
                    </Card>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <IoFilterSharp />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Filter
                      </span>
                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.filter}
                      </label>
                    </Card>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <FaTemperatureHalf />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Radiator
                      </span>

                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.radiator}
                      </label>
                    </Card>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <GiCarWheel />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Track
                      </span>

                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.track}
                      </label>
                    </Card>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <FaTools />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Attachment
                      </span>

                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.attachment}
                      </label>
                    </Card>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <FaHandHoldingWater />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Leaking
                      </span>
                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.leaking}
                      </label>
                    </Card>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <BsFillFuelPumpDieselFill />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Diesel
                      </span>

                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.diesel}
                      </label>
                    </Card>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center", // Center text and inline-block elements horizontally
                      padding: "10px",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex", // Enable Flexbox for the Card
                        flexDirection: "column", // Stack items vertically
                        alignItems: "center", // Center items horizontally along the cross-axis
                        justifyContent: "center", // Center items vertically along the main-axis (if Card has height)
                        padding: "10px", // Add padding inside the Card for spacing
                      }}
                    >
                      <MdOutlineCleanHands />
                      <span
                        style={{
                          marginTop: "2px",
                          fontWeight: "bold",
                        }}
                      >
                        Clean
                      </span>

                      <label
                        style={{
                          backgroundColor: "lightblue",
                          fontWeight: "bold",
                        }}
                        className="form-control"
                      >
                        {checklist.clean}
                      </label>
                    </Card>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default ChecklistView;
