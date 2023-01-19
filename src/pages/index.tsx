/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Button from '@material-ui/core/Button';
import Forms from '../../components/screen/Layout/Forms';
import CircularProgressWithLabel from '../../components/screen/Layout/Progress';


export default function Home() {
  return (

    <div className="Col">
    <div className="{styles.container}">
      
      <CircularProgressWithLabel />
      <Forms></Forms>
      
    </div>
    
    </div>
  );
}
