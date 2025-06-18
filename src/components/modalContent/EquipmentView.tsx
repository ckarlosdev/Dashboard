import { useEffect, useState } from "react";
import useHttpData from "../../hooks/useHttpData";
import { DrEquipment } from "../../types";
import { searchDrEquipmentByDrIdURL } from "../../hooks/urls";
import { Table } from "react-bootstrap";

type Props = {
  date: string;
  drId?: number;
};

const EquipmentView = ({ drId }: Props) => {
  const [equipmentDetails, setEquipmentDetails] = useState<
    DrEquipment[] | undefined
  >(undefined);

  const { data: crewData, search } = useHttpData<DrEquipment[]>();

  const getData = () => {
    if (drId) {
      search(searchDrEquipmentByDrIdURL(drId));
    }
  };

  useEffect(() => {
    if (drId) {
      getData();
    }
  }, [drId]);

  useEffect(() => {
    setEquipmentDetails(crewData);
  }, [crewData]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Type</th>
            <th>Number</th>
            <th>Name</th>
            <th>Operator</th>
            <th>Odometer</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {equipmentDetails?.map((equip) => (
            <tr style={{ textAlign: "center" }} key={equip.drEquipmentsId}>
              <td>{equip.type}</td>
              <td>{equip.number}</td>
              <td>{equip.name}</td>
              <td>{equip.operator}</td>
              <td>{equip.newHour}</td>
              <td>
                {equip.type == "Equipment"
                  ? (
                      Number(equip.newHour ? equip.newHour : "0") -
                      Number(equip.initialHour ? equip.initialHour : "0")
                    ).toFixed(1)
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EquipmentView;
