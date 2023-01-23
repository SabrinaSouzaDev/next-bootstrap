import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import {Container, Row, Col} from 'react-bootstrap';
import { Card, CardHeader, Box, Paper, Grid, CardContent, CardActions, Button } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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

export default function NestedGrid() {
  const classes = useStyles();
  return (
    
    <Container >
      <Row className="text-center">
      <Card>
        
        <CardHeader>
        
      <Typography paragraph>
        Formulario
        </Typography>
        
        </CardHeader>
        <CardContent>
        <Col>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '26h' },
      }}
      noValidate
      autoComplete="off"
    >
       <React.Fragment>
    <Grid className="align-content-lg-center" container spacing={1}>
    <div className="itemgrid">
       <Grid item xs={12}>
        
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      
      </Grid>
      </div>
      <Grid  item xs={12}>
        <div className="itemgrid">
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
        </div>
      </Grid>
      </Grid>
      </React.Fragment>
    </Box>
    </Col>
    </CardContent>
    <CardActions className="d-flex justify-content-end align-items-center align-self-center flex-nowrap">
    <Button size="small">Limpar</Button>
        <Button size="small">Enviar</Button>
    </CardActions>
    </Card>
    </Row>
    </Container>
    
  );
}
