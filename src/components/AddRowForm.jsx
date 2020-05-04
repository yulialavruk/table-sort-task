import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export class AddRowForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  onAddRow = (e) => {
    e.preventDefault();
    return this.props.data.unshift(this.state);
  };

  render() {
    const { id, firstName, lastName, email, phone } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label for="id">id</Label>
          <Input
            type="number"
            name="id"
            id="id"
            value={id}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">firstName</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">lastName</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">phone</Label>
          <Input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.onChange}
          />
        </FormGroup>
        <Button onClick={this.onAddRow}>Добавить</Button>
      </Form>
    );
  }
}
