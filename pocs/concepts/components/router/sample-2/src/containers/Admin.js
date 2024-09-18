import React from "react";

import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";

import styled from 'styled-components';

const Admin = ({ children }) => {
    
  const Admin = styled.h1`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${(props) => props.theme.main};
    border: 2px solid ${(props) => props.theme.main};
  `;

  return (
    <>
      <Header />
      <Content>
        <Admin>Admin área</Admin>
        {children}
      </Content>
      <Footer />
    </>
  );
};

export default Admin;
