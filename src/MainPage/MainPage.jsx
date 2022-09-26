import { Box } from '@mui/material';
import AppBar from '../components/AppBar';
import MainPageInfo from './MainPageInfo';

export default function MainPage() {
  return (
    <Box>
      <AppBar title="Registration" sx={{ position: 'fixed' }} />
      <MainPageInfo />
      <AppBar
        title="The task was completed by Alesia"
        sx={{ position: 'fixed', left: '0', bottom: '0' }}
      />
    </Box>
  );
}
