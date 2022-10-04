import { Link, Breadcrumbs as MuiBreadcrumbs, Box } from '@mui/material';
import { useSelector } from 'react-redux';

function handleClick(event) {
  event.preventDefault();
}

export default function Breadcrumbs({ sx }) {
  const isSignUp = useSelector((store) => store.isSignUp);

  return (
    <Box sx={{ ...sx }} role="presentation" onClick={handleClick}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          SignUpInfo
        </Link>
        {isSignUp ? (
          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/getting-started/installation/"
          >
            PersonalInfo
          </Link>
        ) : (
          ''
        )}
      </MuiBreadcrumbs>
    </Box>
  );
}
