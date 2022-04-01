import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { deepPurple } from "@mui/material/colors";
import { Formik, Form } from "formik";
import * as yup from "yup";


const signUpValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Too Short")
    .max(15, "Must be 15 char or less"),
  lastName: yup
    .string()
    .required("last name is required")
    .min(2, "Too Short")
    .max(30, "Must be 15 char or less"),
  email: yup.string().email("ınvalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be more than 8 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.*@$#%&^()-+]+/, "Password must have a special character"),
  passwordConfirm: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[500], m: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Signup
        </Typography>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={(values, actions) => {
            alert(`firstName: ${values.firstName}
            lastName: ${values.lastName}
             email: ${values.email}
             password: ${values.password}
            `);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <SignUpForm {...props} />}
        ></Formik>

        <Typography color="gray" align="center" variant="body2" sx={{ mt: 4 }}>
          Copyright ©<Link href="https://www.clarusway.com"> Clarusway</Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
