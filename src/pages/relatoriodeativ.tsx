import * as React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider
} from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Row, Col} from 'react-bootstrap';
import { Container, Box, Button, Typography, Paper } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      alignContent: 'center',
      minHeight: '100vh',
      gap: theme.spacing(2),
      padding: theme.spacing(8),
    },
  }),
);

export default function SelectLabels() { 
  const classes = useStyles();
  return (
     <Container component="main" className="d-flex justify-content-center align-items-center align-self-center">
    <div className={classes.root}>
     <CssBaseline /> 
     
     <Row className="text-center border-12">
      <Col>
     <Box sx={{ '& > :not(style)': { m: 1 } }} className="text-center">
     <Box  m={2}>
      <Col>
      <Typography variant="h4" component="h2">
        Relatório de Atividade
      </Typography>
      </Col>
      </Box>
    <div >
    <Stack spacing={2} direction="column" className='mt-4 d-lg-block'>
        <Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 4 }}
              size="large"
              href="#contained-buttons"
              endIcon={<SendIcon />} >Diretoria do Interior</Button>
              <Button
              fullWidth
              type="submit" 
              variant="contained"
              sx={{ mt: 2, mb: 4 }}
              size="large"
              href="/diretoriaAdministrativa" endIcon={<SendIcon />}>Diretoria Metropolitana</Button>
    </Stack>
    </div>
    </Box>
    </Col>
    </Row>
  </div>
    </Container>
    
  );
}