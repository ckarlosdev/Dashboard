import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Dumpster } from "../../types";
import useHttpData from "../../hooks/useHttpData";
import { searchDumpsterByDrIdURL } from "../../hooks/urls";
import { sumTotalDumpsters } from "../../utils/dateUtils";

type Props = {
  date: string;
  drId?: number;
};

function DumpsterView({ drId }: Props) {
  const [dumpstersDetails, setDumpstersDetails] = useState<
    Dumpster | undefined
  >(undefined);

  const { data: dumpstersData, search } = useHttpData<Dumpster | undefined>();

  const getData = () => {
    if (drId) {
      search(searchDumpsterByDrIdURL(drId));
    }
  };

  useEffect(() => {
    if (drId) {
      getData();
    }
  }, [drId]);

  useEffect(() => {
    setDumpstersDetails(dumpstersData);
  }, [dumpstersData]);

  return (
    <Container>
      <Row style={{ background: "white" }}>
        <Col style={{ background: "white" }}></Col>
        <Col style={{ background: "white" }}></Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            Concret
          </Form.Label>
        </Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            Metal
          </Form.Label>
        </Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            C&D
          </Form.Label>
        </Col>
        <Col style={{ background: "white" }}></Col>
      </Row>
      <Row style={{ background: "lightgray" }}>
        <Col style={{ background: "white" }}></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            40 yrd
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concret40 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concret40 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metal40 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metal40 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cd40 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cd40 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col style={{ background: "white" }}></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            35 yrd
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concret35 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concret35 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metal35 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metal35 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cd35 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cd35 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ background: "lightgray" }}>
        <Col style={{ background: "white" }}></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            30 yrd
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concret30 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concret30 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metal30 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metal30 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cd30 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cd30 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col style={{ background: "white" }}></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            20 yrd
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concret20 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concret20 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metal20 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metal20 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cd20 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cd20 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ background: "lightgray" }}>
        <Col style={{ background: "white" }}></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            12 yrd
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concret12 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concret12 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metal12 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metal12 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cd12 : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cd12 > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col style={{ background: "white" }}></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            Quad
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concretQuad : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concretQuad > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metalQuad : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metalQuad > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cdQuad : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cdQuad > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ background: "lightgray" }}>
        <Col style={{ background: "white" }}></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            Semi
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concretSemi : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concretSemi > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metalSemi : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metalSemi > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cdSemi : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cdSemi > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col style={{ background: "white" }}></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{ marginTop: "6px" }}>
          <Form.Label className="d-flex justify-content-center align-items-center fw-bold">
            Gondola
          </Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.concretGondola : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.concretGondola > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.metalGondola : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.metalGondola > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col>
          <Form.Control
            className="text-center"
            type="text"
            readOnly
            value={dumpstersDetails ? dumpstersDetails.cdGondola : 0}
            style={{
              fontWeight: dumpstersDetails
                ? dumpstersDetails.cdGondola > 0
                  ? "bold"
                  : "normal"
                : 0,
            }}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ marginTop: "12px" }}>
        <Col></Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            Subtotals:
          </Form.Label>
        </Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            {dumpstersDetails ? sumTotalDumpsters(dumpstersDetails).concret : 0}
          </Form.Label>
        </Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            {dumpstersDetails ? sumTotalDumpsters(dumpstersDetails).metal : 0}
          </Form.Label>
        </Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            {dumpstersDetails ? sumTotalDumpsters(dumpstersDetails).cd : 0}
          </Form.Label>
        </Col>
        <Col>
          <Form.Label
            style={{ background: "lightgray", borderRadius: "4px" }}
            className="d-flex justify-content-center align-items-center fw-bold"
          >
            Total:{" "}
            {dumpstersDetails ? sumTotalDumpsters(dumpstersDetails).total : 0}
          </Form.Label>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: "30px" }}></Col>
      </Row>
    </Container>
  );
}

export default DumpsterView;
