import styled from "@emotion/styled";
import React from "react";
import Sidebar from "./components/sidebar";

const LayoutContainer = styled.div`
  display: flex;
  flex: 1;
`;

const LeftContainer = styled.div`
  flex: 0.2;
  max-width: 400px;
`;
const RightContainer = styled.div`
  flex: 0.8;
`;

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <LeftContainer>
        <Sidebar />
      </LeftContainer>
      <RightContainer>{children}</RightContainer>
    </LayoutContainer>
  );
}
