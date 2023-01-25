/* eslint-disable react/jsx-no-undef */
// import { Inter } from "@next/font/google";
import * as React from 'react';
import NestedGrid from '../../components/layout/Forms';
import { Container } from "@mui/system";
import Box from '@material-ui/core/Box';
import LayoutWithMenuComponent from '../../components/layout/LayoutWithMenu/LayoutWithMenu'

export default function Home() {
  return (
    <>
    <LayoutWithMenuComponent>
      <Container>
     <Box>
      <NestedGrid></NestedGrid>
      </Box>
      </Container>
    </LayoutWithMenuComponent>
    </>
  );
}
