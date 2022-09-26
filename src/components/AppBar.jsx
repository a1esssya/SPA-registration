import { Avatar, Container, Paper, Toolbar, Typography } from '@mui/material';
import Logo from '../img/4202504.jpg';

export default function AppBar({ title, sx }) {
  return (
    <Paper
      elevation={6}
      sx={{
        width: '100%',
        backgroundColor: '#DDA0DD',
        ...sx,
      }}
    >
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
    </Paper>
  );
}
