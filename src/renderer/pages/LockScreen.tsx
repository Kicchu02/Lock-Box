import { Button, Stack, TextField, Typography } from '@mui/material';
import { LockKeyhole } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EMPTY_CHARACTER } from '../types/constants';
import { Routes } from '../types/Routes';

export function LockScreen(): React.ReactElement {
  const [password, setPassword] = useState(EMPTY_CHARACTER);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const navigate = useNavigate();

  const isButtonDisabled = (): boolean => {
    return password.length === 0;
  };

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      // TODO: Must be replaced with a proper inactive bacground color
      bgcolor="InactiveCaptionText"
    >
      <Stack
        paddingX={10}
        paddingY={6}
        gap={4}
        bgcolor="Background"
        borderRadius={2}
        boxShadow={1}
      >
        <Stack alignItems="center" gap={1}>
          <LockKeyhole size={32} />
          <Typography variant="h4" color="textPrimary">
            Unlock Lock Box
          </Typography>
        </Stack>
        <Stack gap={2}>
          <TextField
            variant="outlined"
            size="small"
            type="password"
            label="Password"
            error={isPasswordIncorrect}
            helperText={isPasswordIncorrect && 'Incorrect password'}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              // TODO: Must verify the password with the database and navigate to home screen
              setIsPasswordIncorrect(false);
              // TODO: Must update mock validate to real validation
              navigate(Routes.GeneratePassword);
            }}
            disabled={isButtonDisabled()}
          >
            Unlock
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
