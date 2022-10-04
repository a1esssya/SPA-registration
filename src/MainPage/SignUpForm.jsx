import { Button, Paper, Typography } from '@mui/material';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { ref, string, object } from 'yup';
import { isSignUpAction } from '../actions/isSignUp';
import { replaceDataAction } from '../actions/userInfo';
import FormikTextField from '../components/FormikTextField';

export default function SignUpForm() {
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.userInfo);

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(isSignUpAction());
    const { phone, email, password } = values;
    dispatch(
      replaceDataAction([
        { name: 'Mobile phone', value: phone },
        { name: 'Emai', value: email },
        { name: 'Password', value: password },
      ])
    );
    setSubmitting(false);
  };

  const phoneRegExp = '^\\+375\\d{9}$';
  const emailRegExp =
    '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  const formik = useFormik({
    initialValues: {
      phone: userInfo[0]?.value || '',
      email: userInfo[1]?.value || '',
      password: userInfo[2]?.value || '',
      repeatPassword: userInfo[2]?.value || '',
    },
    onSubmit: handleSubmit,
    validationSchema: object().shape({
      phone: string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required(),
      email: string()
        .email()
        .matches(emailRegExp, 'Email is not valid')
        .required(),
      password: string().min(8).max(20).required(),
      repeatPassword: string()
        .required()
        .oneOf([ref('password')], 'Your passwords do not match.'),
    }),
    validateOnMount: true,
  });

  return (
    <Paper
      elevation={6}
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: { md: '60%', xs: '90%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        color="secondary.main"
        my={2}
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
        }}
      >
        SignUpInfo
      </Typography>
      <InputMask
        mask={formik.initialValues.phone === '' ? '+375999999999' : null}
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      >
        {() => (
          <FormikTextField
            label="Phone number"
            name="phone"
            type="phone"
            formik={formik}
            sx={{ my: 2, width: '85%' }}
          />
        )}
      </InputMask>

      <FormikTextField
        label="Email Address"
        name="email"
        type="email"
        formik={formik}
        sx={{ my: 2, width: '85%' }}
      />
      <FormikTextField
        label="Password"
        name="password"
        type="password"
        formik={formik}
        sx={{ my: 2, width: '85%' }}
      />
      <FormikTextField
        label="Repeat Password"
        name="repeatPassword"
        type="password"
        formik={formik}
        sx={{ my: 2, width: '85%' }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        disabled={!formik.isValid && !formik.isSubmitting}
        onClick={handleSubmit}
        sx={{
          mb: 5,
          width: '85%',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
        }}
      >
        Next
      </Button>
    </Paper>
  );
}
