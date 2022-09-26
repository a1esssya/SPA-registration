import { Box } from '@mui/material';
import Header from '../components/Header';
import MainPageInfo from './MainPageInfo';

export default function MainPage() {
  return (
    <Box>
      <Header title="Registration" />
      <MainPageInfo />
    </Box>
  );
}
