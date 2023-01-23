import {
  Button,
  Container,
  createStyles,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import LayoutWithMenu from '../../LayoutWithMenu/LayoutWithMenu';
import FormLoadingComponent from '../../screen/FormLoading/FormLoading';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
    },
    form: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(3),
    },
    submit: {
      marginTop: theme.spacing(2),
    },
  })
);

interface IFormData {
  name?: string;
  email?: string;
}

export default function EditCustomer() {
  const classes = useStyles();
  const [title, setTitle] = useState('Novo Cliente');
  const router = useRouter();
  const { id } = router.query;

  const initialValues: IFormData = {  
    name: '',
    email: '',
  }

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Obrigatório')
      .min(2, 'O nome deve ter pelo menos 2 caracteres'),
    email: Yup.string().email('E-mail inválido').required('Obrigatório'),
    phone: Yup.string().required('Obrigatório'),
  });

 
}
