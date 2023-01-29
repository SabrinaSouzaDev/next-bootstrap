import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import { Container } from "@mui/system";
import { Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from "@mui/material/Box";
import Link from "next/link";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';  
import Copyright from "../../components/screen/Copyright/Copyright";
import FormLoadingComponent from "../../components/screen/FormLoading/FormLoading";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      alignContent: "center",
      minHeight: "100vh",
      gap: theme.spacing(2),
      padding: theme.spacing(2),
    },
    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: theme.palette.secondary.main,
    },
    sloganTitle: {
      marginBottom: theme.spacing(3),
    },
    form: {
      padding: theme.spacing(3),
      maxWidth: "500px",
    },
    submit: {
      marginTop: theme.spacing(4),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  })
);

interface IFormData {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const classes = useStyles();

  const initialValues: IFormData = {
    email: "",
    password: "",
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("Obrigatório"),
    password: Yup.string().required("Obrigatório"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        formik.setSubmitting(false);
      }, 3000);
    },
  });

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <div>
          <Typography
            className={classes.sloganTitle}
            variant="h4"
            component="h2"
          >
            Relatorios DPA
          </Typography>
        </div>

        <Paper className={classes.form} elevation={4}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h5">
            Sign in
          </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                placeholder="Seu e-mail"
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                placeholder="Sua senha"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <div className="d-flex p-2">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar senha"
              />
            </div>

              <Button
                className={classes.submit}
                type="submit"
                size="large"
                fullWidth
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
              >
                Entrar
              </Button>
              {formik.isSubmitting && <FormLoadingComponent />}
            </Box>
            {/* <Divider className={classes.divider} variant="fullWidth" /> */}

            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link href="/forgot-password" passHref>
                  <Button variant="text" fullWidth={true}>
                    Esqueceu a senha?
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Copyright />
          </Box>
        </Paper>
      </Box>
    </Container>
    </ThemeProvider>
  );
}
