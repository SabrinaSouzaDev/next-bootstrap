/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className="{styles.container}">
      <Button variant="contained" color="primary"> elo
      </Button>
    </div>
  );
}
