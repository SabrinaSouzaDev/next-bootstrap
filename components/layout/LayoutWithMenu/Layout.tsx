
import * as React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import ResponsiveAppBar from '../navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from 'react-bootstrap';

export default function Layout( {children}:any ): JSX.Element{

  return (
      <main>
      <ResponsiveAppBar />
        {children}
      </main>
  );
}
