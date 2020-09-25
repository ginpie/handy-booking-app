import React from "react";
import { Modal } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import TableFooter from "./TableFooter";
import "bootstrap/dist/css/bootstrap.min.css";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <TableHeader />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TableContent />
        <TableFooter />
      </Modal.Body>
    </Modal>
  );
}

function UseExample() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)}>Sign in / Log in</button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

const Table = () => (
  <div>
    <UseExample />
  </div>
);

export default Table;
