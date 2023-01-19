
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css';
import Layout from '../../components/screen/Layout/Layout';
import Copyright from '../../components/screen/Layout/StickyFooter';
import { Container, Row, Col } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head >
        <title>Next.js</title>
      </Head>
      <Container>
        <Row>
          <Col>
          <table>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
      </table>
      </Col>
      </Row>
      </Container>
      <Copyright />
    </>
  );
}

export default MyApp;
