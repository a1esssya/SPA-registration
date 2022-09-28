import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { number, object, string, array } from 'yup';
import FormikTextField from '../components/FormikTextField';
import { editSignUpAction } from '../actions/isSignUp';
import { pushDataAction } from '../actions/userInfo';
import { openDialogAction } from '../actions/isDialogOpen';
import Dialog from '../components/Dialog';

export default function PersonalForm() {
  const dispatch = useDispatch();

  const toSignUpForm = () => {
    dispatch(editSignUpAction());
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    const {
      firstName,
      lastName,
      sex,
      birthDD,
      birthMM,
      birthYY,
      ocean,
      hobby,
    } = values;
    dispatch(
      pushDataAction([
        { name: 'First Name', value: firstName },
        { name: 'Last Name', value: lastName },
        { name: 'Sex', value: sex },
        { name: 'Birthday', value: `${birthDD}.${birthMM}.${birthYY}` },
        { name: 'Your Favorite Ocean', value: ocean },
        { name: 'Hobby', value: hobby.join(', ') },
      ])
    );
    dispatch(openDialogAction());
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      sex: '',
      birthDD: '',
      birthMM: '',
      birthYY: '',
      ocean: '',
      hobby: [],
    },
    onSubmit: handleSubmit,
    validationSchema: object().shape({
      firstName: string().min(2).max(30).required(),
      lastName: string().min(2).max(30).required(),
      sex: string().required('Choose the right variant'),
      birthDD: number().min(1).max(31).required(),
      birthMM: number().min(1).max(12).required(),
      birthYY: number().required(),
      ocean: string().required(),
      hobby: array().min(1, 'this field is required'),
    }),
    validateOnMount: true,
  });

  return (
    <>
      <Dialog />
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
          PersonalInfo
        </Typography>
        <Box
          sx={{
            my: 2,
            width: '85%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <FormikTextField
            label="First name"
            name="firstName"
            formik={formik}
            sx={{ width: '45%' }}
          />
          <FormikTextField
            label="Last name"
            name="lastName"
            formik={formik}
            sx={{ width: '45%' }}
          />
        </Box>
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '85%',
          }}
        >
          <FormLabel color="secondary" sx={{ mr: '5%' }}>
            Sex:
          </FormLabel>
          <RadioGroup
            row
            name="sex"
            value={formik.values.sex}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sex && !!formik.errors.sex}
            helperText={
              formik.touched.sex && !!formik.errors.sex && formik.errors.sex
            }
          >
            <FormControlLabel
              value="Male"
              control={<Radio color="secondary" />}
              label="Male"
            />
            <FormControlLabel
              value="Female"
              control={<Radio color="secondary" />}
              label="Female"
            />
            <FormControlLabel
              value="Intersex"
              control={<Radio color="secondary" />}
              label="Intersex"
            />
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            display: 'flex',
            my: 2,
            width: '85%',
            justifyContent: 'space-between',
          }}
        >
          <FormikTextField
            label="Day of birth"
            name="birthDD"
            formik={formik}
            sx={{ width: '30%' }}
          />
          <FormikTextField
            label="Month of birth"
            name="birthMM"
            formik={formik}
            sx={{ width: '30%' }}
          />
          <FormikTextField
            label="Year of birth"
            name="birthYY"
            formik={formik}
            sx={{ width: '30%' }}
          />
        </Box>
        <Box
          sx={{
            width: '85%',
            display: 'flex',
            justifyContent: 'space-between',
            my: 2,
          }}
        >
          <FormControl sx={{ width: '45%' }}>
            <FormLabel color="secondary" sx={{ mr: '10%' }}>
              Your Favorite Ocean:
            </FormLabel>
            <RadioGroup
              name="ocean"
              value={formik.values.ocean}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.ocean && !!formik.errors.ocean}
              helperText={
                formik.touched.ocean &&
                !!formik.errors.ocean &&
                formik.errors.ocean
              }
            >
              <FormControlLabel
                value="Atlantic"
                control={<Radio color="secondary" />}
                label="Atlantic"
                mr={10}
              />
              <FormControlLabel
                value="Pacific"
                control={<Radio color="secondary" />}
                label="Pacific"
                mr={10}
              />
              <FormControlLabel
                value="Indian"
                control={<Radio color="secondary" />}
                label="Indian"
                mr={10}
              />
              <FormControlLabel
                value="Arctic"
                control={<Radio color="secondary" />}
                label="Arctic"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ width: '45%' }}>
            <FormLabel color="secondary" sx={{ mr: '10%' }}>
              Your Hobbies:
            </FormLabel>
            <FormGroup
              name="hobby"
              type="checkbox"
              value={formik.values.hobby}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.hobby && !!formik.errors.hobby}
              helperText={
                formik.touched.hobby &&
                !!formik.errors.hobby &&
                formik.errors.hobby
              }
            >
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                type="checkbox"
                label="Sport"
                value="Sport"
                name="hobby"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                type="checkbox"
                label="Beauty"
                value="Beauty"
                name="hobby"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                type="checkbox"
                label="IT"
                value="IT"
                name="hobby"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                type="checkbox"
                label="Pets"
                value="Pets"
                name="hobby"
              />
            </FormGroup>
          </FormControl>
        </Box>
        <Box
          sx={{
            mb: 5,
            width: '85%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant="contained"
            onClick={toSignUpForm}
            color="secondary"
            size="large"
            sx={{
              width: '45%',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            disabled={!formik.isValid && !formik.isSubmitting}
            sx={{
              width: '45%',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Complete
          </Button>
        </Box>
      </Paper>
    </>
  );
}
