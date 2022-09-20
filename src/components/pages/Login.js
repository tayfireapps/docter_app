import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../Page';
import Iconify from '../Iconify';
// ----------------------------------------------------------------------

export default function Login() {
  return (
    <Page title="Dashboard: Login">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
