import React from "react";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { AddRowForm } from "./AddRowForm";

export class AddRow extends React.Component {
  constructor() {
    super();

    this.state = {
      showLoginModal: false,
    };
  }

  toggleLoginModal = () => {
    const { showLoginModal } = this.state;
    this.setState({
      showLoginModal: !showLoginModal,
    });
  };

  render() {
    const { showLoginModal } = this.state;
    return (
      <>
        <Button className="mt-2 mb-2" onClick={this.toggleLoginModal}>
          Добавить
        </Button>
        <Modal isOpen={showLoginModal} toggle={this.toggleLoginModal}>
          <ModalHeader toggle={this.toggleLoginModal}>
            Добавить данные
          </ModalHeader>
          <ModalBody>
            <AddRowForm />
          </ModalBody>
        </Modal>
      </>
    );
  }
}
