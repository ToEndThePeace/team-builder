import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import "./App.css";

import dummyTeamList from "./assets/dummyTeamList";
import MemberForm from "./components/MemberForm";
import TeamList from "./components/TeamList";

const initialFormValues = {
  id: uuid(),
  name: "",
  email: "",
  role: "frontend"
};

function App() {
  const [teamList, setTeamList] = useState(dummyTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const inputChangeHandler = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    };
    setTeamList([...teamList, newMember]);
    setFormValues(initialFormValues);
  };
  const closeHandler = (id) => {
    setTeamList(teamList.filter((member) => member.id !== id));
  };

  return (
    <StyledApp className="App">
      <MemberForm
        formValues={formValues}
        inputChangeHandler={inputChangeHandler}
        submitHandler={submitHandler}
      />
      <TeamList teamList={teamList} closeHandler={closeHandler} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  & > form {
    width: 30%;
    height: 100%;
  }
  & > div {
    width: 70%;
    height: 100%;
  }
`;

export default App;
