import React from "react";
import styled from "styled-components";

export default function MemberForm(props) {
  const { formValues, inputChangeHandler, submitHandler } = props;

  return (
    <StyledForm>
      <h1>New Team Member</h1>
      <InputLine>
        <label for="name">Name:&nbsp;</label>
        <input name="name"
               value={formValues.name}
               onChange={inputChangeHandler}
        />
      </InputLine>
      <InputLine>
      <label for="email">Email:&nbsp;</label>
        <input name="email"
               value={formValues.email}
               onChange={inputChangeHandler}
        />
      </InputLine>
      <InputLine>
      <label for="role">Role:&nbsp;</label>
        <select name="role"
                value={formValues.role}
                onChange={inputChangeHandler}
        >
          <option value="frontend">Frontend Dev</option>
          <option value="backend">Backend Dev</option>
          <option value="ux">UX Designer</option>
          <option value="data">Data Scientist</option>
        </select>
      </InputLine>
      <InputLine>
        <input name="submit"
               type="submit"
               value="Submit"
               onClick={submitHandler}
        />
      </InputLine>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  background-color: #eee;
  box-shadow: 0 0 5px #000;
  z-index: 2;
`;
const InputLine = styled.div`
  margin: 20px 0;
`;