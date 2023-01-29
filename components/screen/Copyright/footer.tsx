import { Paper, Container} from '@mui/material';
import {Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styles from '../../../src/styles/Footer.module.css'
import Copyright from './Copyright';

export default function Footer() {
    return (
      <footer className='text-center text-lg-start d-flex justify-content-center justify-content-lg-between'>
        <Container className=" p-4 ">
    <div className=" p-2">
        <Copyright />
        </div>
        </Container>
      </footer>
    )
  }