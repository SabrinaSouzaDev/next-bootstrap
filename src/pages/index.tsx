/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Button from '@material-ui/core/Button';
import Forms from '../../components/screen/Layout/Forms';
import { Container } from "@mui/system";
import { Row, Col } from "react-bootstrap";
import Box from '@material-ui/core/Box';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
        <div style={{ width: '100%' }}>
        <Box display="flex" p={2} bgcolor="background.paper">
    <div className="{styles.container}">
      <Forms></Forms>
    </div>
    </Box>
    </div>
    </Col>
    </Row>
    </Container>

  );
}
