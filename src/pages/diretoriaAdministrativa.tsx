import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Layout from '../../components/layout/LayoutWithMenu/Layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';
import { Card, Box, Paper, CardContent, CardActions, Button } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from '@material-ui/core/Typography';
import Stack from '@mui/material/Stack';

import MultipleSelectRegiao from '../../components/screen/Regiao';
import MultipleSelectComarca from '../../components/screen/Comarca';
import MultipleSelectNucleo from '../../components/screen/Nucleo';
import MultipleSelectArea from '../../components/screen/Area';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex'
    },
    Grid: {
      justifyContent: 'space-around',
    },
   
    Row: {
      justifyContent: 'space-around',
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    itemgrid: {
      textAlign: 'center',
    },
    Box:{
    display: 'inline-block',
     mx: '2px',
    transform: 'scale(0.8)' 
  }
  }),
);

export default function SelectLabels() {  
  const classes = useStyles();
  return (
    <Layout>
    <Container >
      <Row>
     <Paper elevation={3}>
      <Row className="text-center">
      <Card >
      <Box border="1px dashed grey" p={[2, 3, 4]} m={2}>
      <Col>
      <Typography variant="h4" component="h2">
        Relatorio Diretoria Metropolitana
      </Typography>
      </Col>
      </Box>
      <CardContent>
      <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
      },
    }}
  >
      <Paper elevation={4} className="flex-row">
      <FormControl sx={{ m: 1, minWidth: 180 }} >
      <MultipleSelectRegiao/>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
      <MultipleSelectComarca/>
        </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
      <MultipleSelectArea/>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 180 }}>
        <MultipleSelectNucleo/>
        </FormControl>
        {/* <FormControl sx={{ m: 1, minWidth: 140 }}>
        </FormControl> */}
    </Paper>
    </Box>
    <CardActions className="d-flex justify-content-end align-items-center align-self-center">
    <Stack spacing={1} direction="row" className='mt-4'>
        <Button className="text-decoration-none text-white" size="large" href="#contained-buttons" variant="contained">Salvar</Button>
    </Stack>
    </CardActions>
    </CardContent>
    </Card>
    </Row>
    </Paper>
    </Row>
    </Container>
    </Layout>
  );
}