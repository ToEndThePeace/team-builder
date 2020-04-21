import React from "react";
import styled from "styled-components";

import CloseButton from "./CloseButton";

export default function MemberCard(props) {
  const { member, closeHandler } = props;
  return (
    <StyledCard>
      <div>
        <h2>{member.name}</h2>
        <h3>{member.email}</h3>
        <h4>
          {
            member.role === "frontend" ? "Frontend Dev" :
            member.role === "backend"  ? "Backend Dev"  :
            member.role === "ux"       ? "UX Designer"  :
                                         "Data Scientist"
          }
        </h4>
      </div>
      <CloseButton closeHandler={() => closeHandler(member.id)} />
    </StyledCard>
  )
}

const StyledCard = styled.div`
  position: relative;
  max-width: 45%;
  min-width: 200px;
  box-shadow: 0 0 5px #000;
  border: 1px solid #000;
  margin: 15px;
  padding: 20px;
  flex-grow: 1;
`;
