import { Box } from "@mui/system";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// display tx hash to user once payment is fulfilled

let txsURL = 'https://goerli.etherscan.io/tx/';

export default function TxList({ txs }) {
  if (txs.length === 0) return null;

  return (
    <>
    <Stack sx={{ width: '100%' }}>
      {txs.map((item) => (
        <Box key={item}>
          <Alert severity="success" alignItems="center">
            Payment Complete: 
            <a href={`https://goerli.etherscan.io/tx/${item.hash}`}
              rel="noopener noreferrer"
              target="_blank"
            >
               View Transaction
            </a>
            {/* {item.hash} */}
          </Alert>
        </Box>
      ))}
    </Stack>
    </>
  );
}