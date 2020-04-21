import React from "react";
import styled from "styled-components";

import MemberCard from "./MemberCard";

export default function TeamList(props) {
  const { teamList, closeHandler } = props;
  return (
    <StyledList>
      {
        teamList.map(member => {
          return (
            <MemberCard
              key={member.id}
              member={member}
              closeHandler={closeHandler}
            />
          )
        })
      }
    </StyledList>
  )
}

const StyledList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 15px 20px;
  h2 {
    border-bottom: 1px solid #000;
  }
  h3 {
    color: blue;
    text-decoration: underline;
  }
  h4 {
    font-style: italic;
  }
`;