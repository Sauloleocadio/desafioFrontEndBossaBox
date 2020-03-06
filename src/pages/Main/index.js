import React from "react";
import { FaPlus, FaWindowClose } from "react-icons/fa";

import {
  Header,
  Container,
  Form,
  SubmitButton,
  List,
  DeleteButton
} from "./styles";

function Main() {
  return (
    <>
      <Header>
        <p>VUTTR</p>
        <h1>Very Useful Tools to Remember</h1>
      </Header>
      <Container>
        <Form>
          <input type="text" placeholder="search" />
          <input type="checkbox" />
          <span>search in tags only</span>

          <SubmitButton>
            <h1>
              ADD TOOLS
              <FaPlus size={10} />
            </h1>
          </SubmitButton>
        </Form>

        <List>
          <DeleteButton>
            Remove
            <FaWindowClose size={14} />
          </DeleteButton>

          <span></span>
        </List>
      </Container>
    </>
  );
}

export default Main;

/* <a href={}>Link</a> */
