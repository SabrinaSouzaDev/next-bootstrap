import * as React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider
} from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Row, Col} from 'react-bootstrap';
import { Container, Box, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import "bootstrap/dist/css/bootstrap.min.css";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex'
    }
  }),
);

export default function SelectLabels() { 
  const classes = useStyles();
  return (
     <Container component="main" className="d-flex justify-content-center align-items-center align-self-center">
     <CssBaseline /> 
     <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <div>
    <Fab variant="extended" color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
    </div>
    </Box>
    </Container>
    
  );
}