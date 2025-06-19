import { Badge, Card, Form, Stack } from "react-bootstrap";

type dumpSummary = {
  concrete: number;
  metal: number;
  cd: number;
};
type Props = {
  data?: dumpSummary;
};

function Dumpster({ data }: Props) {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Stack gap={2} className="col-md-10 mx-auto">
            <div style={{ width: "100%", height: "100%", marginBottom: "5px" }}>
              <div className="donut-container-dumpster">
                <div className="donut-dumpster">
                  <div className="donut-content-dumpster">
                    <span
                      className="donut-number-dumpster"
                      id="donut-number-tool"
                    >
                      {data ? data.concrete + data.metal + data.cd : 0}
                    </span>
                    <span className="donut-label">Total</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                //   backgroundColor: "lightcoral",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  // backgroundColor: "lightgray",
                  textAlign: "center",
                  width: "85px",
                }}
              >
                <Stack gap={2} className="col-md-10 mx-auto">
                  <Badge bg="dark">
                    {data && data.concrete ? data.concrete : 0}
                  </Badge>
                  <span style={{ fontSize: "0.75em" }}>Concrete</span>
                </Stack>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "80px",
                }}
              >
                <Stack gap={2} className="col-md-10 mx-auto">
                  <Badge bg="dark">{data && data.metal ? data.metal : 0}</Badge>
                  <Form.Label>Metal</Form.Label>
                </Stack>
              </div>
              <div
                style={{
                  // backgroundColor: "lightgray",
                  textAlign: "center",
                  width: "80px",
                }}
              >
                <Stack gap={2} className="col-md-10 mx-auto">
                  <Badge bg="dark">{data && data.cd ? data.cd : 0}</Badge>
                  <Form.Label>C&D</Form.Label>
                </Stack>
              </div>
            </div>
            <Form.Label
              style={{
                backgroundColor: "lightgray",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Dumpster
            </Form.Label>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}

export default Dumpster;
