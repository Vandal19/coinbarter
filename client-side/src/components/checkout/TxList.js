import { Box } from "@mui/system";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// display tx hash to user once payment is fulfilled

export default function TxList({ txs }) {
  if (txs.length === 0) return null;

  return (
    <>
    <Stack sx={{ width: '100%' }}>
      {txs.map((item) => (
        <Box key={item}>
          <Alert severity="success" alignItems="center">{item.hash}</Alert>
        </Box>
      ))}
    </Stack>
    </>
  );
}