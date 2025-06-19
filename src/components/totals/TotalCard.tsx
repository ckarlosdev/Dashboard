import { Card, Form, Stack } from "react-bootstrap";
import "../../styles/Total.css";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  total: number;
  value: string;
};

function TotalCard({ children, total, value }: Props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Stack gap={2} className="col-md-10 mx-auto">
            <div style={{ width: "100%", height: "100%" }}>
              <div className="donut-container">
                <div className="donut">
                  <div className="donut-content">
                    <span className="donut-number" id="donut-number-tool">
                      {total}
                    </span>
                    <span className="donut-label">{value}</span>
                  </div>
                </div>
              </div>
            </div>
            <Form.Label
              style={{
                backgroundColor: "lightgray",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {children}
            </Form.Label>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}

export default TotalCard;
