import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Dialog({ show, handleClose, head, body, verify }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{head}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          خیر
        </Button>
        <Button variant="primary" onClick={verify}>
          بله{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Dialog;
