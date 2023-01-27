/* eslint-disable react/jsx-no-undef */
// import { Inter } from "@next/font/google";
import * as React from 'react';
import LoginPage from '../../src/pages/login';
import { Container } from "@mui/system";
import Box from '@material-ui/core/Box';


export default function Home() {
  return (
    <>
      <Container>
     <Box>
     <LoginPage />
      </Box>
      </Container>
    </>
  );
}
