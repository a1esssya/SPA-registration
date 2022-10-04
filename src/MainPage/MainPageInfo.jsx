import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import PersonalForm from './PersonalForm';
import SignUpForm from './SignUpForm';

export default function MainPageInfo({ sx }) {
  const isSignUp = useSelector((store) => store.isSignUp);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      {isSignUp ? <PersonalForm /> : <SignUpForm />}
    </Box>
  );
}
