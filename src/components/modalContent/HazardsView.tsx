import { useEffect, useState } from "react";
import { Hazard } from "../../types";
import useHttpData from "../../hooks/useHttpData";
import { searchHazardsByJobNumberURL } from "../../hooks/urls";
import {
  Accordion,
  FloatingLabel,
  Form,
  FormGroup,
  ListGroup,
} from "react-bootstrap";

type Props = {
  date: string;
  jobNumber: string;
};

function HazardsView({ jobNumber, date }: Props) {
  const [hazardDetails, setHazardDetails] = useState<Hazard | undefined>(
    undefined
  );

  const { data: hazardData, search } = useHttpData<Hazard>();

  const getData = () => {
    if (jobNumber) {
      search(searchHazardsByJobNumberURL(jobNumber, date));
    }
  };

  useEffect(() => {
    if (jobNumber) {
      getData();
    }
  }, [jobNumber]);

  useEffect(() => {
    setHazardDetails(hazardData);
  }, [hazardData]);

  // console.log(hazardDetails);

  return (
    <Form>
      <FormGroup>
        <Accordion>
          {hazardDetails?.activities?.map((activity) => (
            <Accordion.Item
              key={activity.activitiesId}
              eventKey={activity.activitiesId.toString()}
            >
              <Accordion.Header>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  {activity.activity}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Hazard:
                </span>
                {activity.hazards}
                <br></br>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Controls:
                </span>
                {activity.controls}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </FormGroup>
      <br></br>
      <FormGroup>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Issue
          </ListGroup.Item>
          {hazardDetails?.pretasksOptionDtos?.map(
            (option) =>
              option.optionType === "Issue" && (
                <ListGroup.Item key={option.pretasksOptionsId} as="li">
                  {option.optionName != "Other"
                    ? option.optionName
                    : "Other: " + option.other}
                </ListGroup.Item>
              )
          )}
        </ListGroup>
        <br></br>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Tool
          </ListGroup.Item>
          {hazardDetails?.pretasksOptionDtos?.map(
            (option) =>
              option.optionType === "Tool" && (
                <ListGroup.Item key={option.pretasksOptionsId} as="li">
                  {option.optionName != "Other"
                    ? option.optionName
                    : "Other: " + option.other}
                </ListGroup.Item>
              )
          )}
        </ListGroup>
      </FormGroup>
      <br></br>
      <FormGroup>
        <FloatingLabel
          controlId="floatingInput"
          label="Comments"
          className="mb-3"
        >
          <Form.Control
            readOnly
            as="textarea"
            value={
              hazardDetails?.comment ? hazardDetails?.comment : "No comments"
            }
          />
        </FloatingLabel>
      </FormGroup>
    </Form>
  );
}

export default HazardsView;
