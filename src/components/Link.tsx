import { ReactNode, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ComponentMap from "../schemas/ComponentMap";
import { formatedDateForSQL } from "../utils/dateUtils";

type Props = {
  children: ReactNode;
  value: string;
  name: string;
  drId?: number;
  date: string;
  jobNumber?: string;
  active: boolean;
};

function Link({ children, value, name, drId, date, jobNumber, active }: Props) {
  const [lgShow, setlgShow] = useState(false);
  const [activeDetailType, setActiveDetailType] = useState<string | null>(null);

  const handleClose = () => {
    setlgShow(false);
  };

  const handleShow = (view: string) => {
    setActiveDetailType(view);
    setlgShow(true);
  };

  const renderDetailComponent = () => {
    if (!activeDetailType) {
      return null;
    }
    const ComponentToRender = ComponentMap[activeDetailType];

    if (ComponentToRender) {
      return (
        <ComponentToRender
          data={"component data"}
          date={formatedDateForSQL(date)}
          jobNumber={jobNumber}
          drId={drId}
        />
      );
    }

    return (
      <p>
        No se encontró un componente de detalle para **{activeDetailType}**.
      </p>
    );
  };

  return (
    <li className="list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-center">
      <label htmlFor="" className="mb-0">
        {children}
      </label>
      <button
        type="button"
        className="btn btn-primary"
        style={{
          width: "30px", // Define un ancho fijo (ej. 60px o 4rem)
          height: "25px", // Define un alto fijo (ej. 25px o 1.5rem)
          display: "flex", // Usa flexbox para centrar el contenido
          justifyContent: "center", // Centra el contenido horizontalmente
          alignItems: "center", // Centra el contenido verticalmente
          overflow: "hidden", // Oculta cualquier texto que se desborde
          textOverflow: "ellipsis", // Muestra "..." si el texto se desborda
          whiteSpace: "nowrap",
          fontSize: "14px",
        }}
        onClick={() => handleShow(name)}
        disabled={active}
      >
        {value}
      </button>

      <Modal size="lg" show={lgShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{children}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderDetailComponent()}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create PDF
          </Button>
        </Modal.Footer> */}
      </Modal>
    </li>
  );
}

export default Link;
