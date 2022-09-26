import { AppBar, Avatar, Container, Toolbar, Typography } from '@mui/material';
import Logo from '../img/4202504.jpg';

export default function Header({ title }) {
  return (
    <AppBar position="sticky" sx={{ mb: '10px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="logo" src={Logo} sx={{ mr: '2%' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
