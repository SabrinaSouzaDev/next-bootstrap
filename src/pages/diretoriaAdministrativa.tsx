import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Layout from '../../components/layout/LayoutWithMenu/Layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import {Container, Row, Col} from 'react-bootstrap';
import { Card, CardHeader, Box, Paper, Grid, CardContent, CardActions, Button } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from '@material-ui/core/Typography';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import MultipleSelectRegiao from '../../components/screen/Regiao'
import MultipleSelectComarca from '../../components/screen/Comarca'
import MultipleSelectNucleo from '../../components/screen/Nucleo'
import MultipleSelectAtuacao from '../../components/screen/Atuacao'
import MultipleSelectArea from '../../components/screen/Area'


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
  const [Regiao, Comarca, Nucleo, Atuacao, Area ] = React.useState('');
  const classes = useStyles();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
   
    <Layout>

    <Container className='mt-n5'>
     <Paper elevation={3}>
      <Row className="text-center">
      <Card>
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
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        
      },
    }}
  >
      <Paper elevation={3}>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
      <MultipleSelectRegiao/>
      
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
      
      <MultipleSelectComarca/>
      
        </FormControl>
      <FormControl sx={{ m: 1, minWidth: 140 }}>
      <MultipleSelectNucleo/>
      
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 140 }}>
        <MultipleSelectAtuacao/>
      
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
        <MultipleSelectArea/>
        </FormControl>
    </Paper>
    </Box>
    </CardContent>
    </Card>
      </Row>
      </Paper>
      </Container>
    </Layout>
   
  );
}