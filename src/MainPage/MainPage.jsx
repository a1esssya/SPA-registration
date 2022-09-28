import { Box } from '@mui/material';
import AppBar from '../components/AppBar';
import Breadcrumbs from '../components/Breadcrumbs';
import MainPageInfo from './MainPageInfo';

export default function MainPage() {
  return (
    <Box sx={{}}>
      <AppBar title="Registration" sx={{ position: 'fixed' }} />
      <Breadcrumbs sx={{ pt: '70px', px: '10px' }} />
      <MainPageInfo sx={{ mb: '70px', mt: '4%' }} />
      <AppBar
        title="The task was completed by Alesia"
        sx={{ position: 'fixed', left: '0', bottom: '0' }}
      />
    </Box>
  );
}
