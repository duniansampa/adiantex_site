import styled from "styled-components";
import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap";

const IntForm = styled.form`
  margin: 0px;
  padding: 0px;
  line-height: 80px;
  height: 80px;
`;

const IntNavBarForm = styled(Navbar.Form)`
  margin: 0;
  padding: 0 15px;
`;

const IntFormGroup = styled(FormGroup)`
  margin: 0;
  padding: 0;
`;

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IntForm>
        <IntNavBarForm>
          <IntFormGroup id="">
            <FormControl type="text" placeholder="Search" />
          </IntFormGroup>{" "}
          <Button type="submit">OK</Button>
        </IntNavBarForm>
      </IntForm>
    );
  }
}
