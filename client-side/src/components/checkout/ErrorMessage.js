import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// display error message for user if they decide not to connect or tx failure

export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <Stack sx={{ width: '100%' }}>
      <Alert severity="error" alignItems="center">{message}</Alert>
    </Stack>
  );
}