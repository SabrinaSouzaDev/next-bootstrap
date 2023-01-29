import { Box, Link, Typography } from '@material-ui/core';
import { Card, Paper } from '@mui/material';
import {Container, Row, Col} from 'react-bootstrap';

export default function Copyright(props: any) {
  return (
    <Box mt={1} className='text-muted'>
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Sistemas DPA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Box>
  );
}
