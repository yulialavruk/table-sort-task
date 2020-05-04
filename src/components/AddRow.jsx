import React from "react";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { AddRowForm } from "./AddRowForm";

export const AddRow = ({ data, showModal, toggleModal }) => (
  <>
    <Button
      className="mt-2 mb-2"
      onClick={(e) => {
        e.preventDefault();
        toggleModal();
      }}
    >
      Добавить
    </Button>
    <Modal isOpen={showModal} toggle={() => toggleModal}>
      <ModalHeader toggle={() => toggleModal}>Добавить данные</ModalHeader>
      <ModalBody>
        <AddRowForm data={data} />
      </ModalBody>
    </Modal>
  </>
);
