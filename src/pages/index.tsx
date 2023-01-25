/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Button from '@material-ui/core/Button';
import NestedGrid from '../../components/layout/Forms';
import { Container } from "@mui/system";
import { Row, Col } from "react-bootstrap";
import Box from '@material-ui/core/Box';
import LayoutWithMenuComponent from '../../components/layout/LayoutWithMenu/LayoutWithMenu'

export default function Home() {
  return (
    <>
    <LayoutWithMenuComponent>
    <Container>
      <Row>
        <Col> 
      <NestedGrid></NestedGrid>
    </Col>
    </Row>
    </Container>
    </LayoutWithMenuComponent>
    </>
  );
}
