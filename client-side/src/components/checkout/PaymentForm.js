import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { Box } from "@mui/system";
import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from './ErrorMessage';
import TxList from './TxList';


// initialize connection with metamask wallet
const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    // throw this error if user doesn't have a metamask wallet
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    // ask user for permission to connect with metamask wallet
    await window.ethereum.send("eth_requestAccounts");
    // establish connection with eth provider to send tx
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // validate receiving addr
    ethers.utils.getAddress(addr);
    // create the tx; to which addr & how much eth (converted to wei)
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    // add tx hash id to TxList to display tx id to user
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};


export default function PaymentForm({backStep}) {

  // states for error and capture tx
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Send ETH Payment
      </Typography>
      <Grid container spacing={3} component="form" onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <TextField
            id="addr"
            label="Recipient Address"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ether"
            label="Amount in ETH"
            fullWidth
            variant="standard"
          />
        </Grid>

        <br />
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box
                display="flex"
                alignitems="center"
                fullWidth={true}
                justifyContent="space-between"
                sx={{ mt: 2 }}>
            <Button variant='outlined'
                    fullWidth={true}
                    sx={{ mr: 1 }} 
                    type='submit'
                    onClick={backStep}
                    >
                Back
            </Button>
            <Button variant='contained'
                    fullWidth={true}
                    sx={{ mr: 1 }} 
                    type='submit'
                    >
              Pay Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
        <ErrorMessage message={error} />
        <TxList txs={txs} />
        </Grid>
      </Grid>
    </>
  );
}