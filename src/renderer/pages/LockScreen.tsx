import { Button, Stack, TextField, Typography } from '@mui/material';
import { LockKeyhole } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../../../assets/Background-image.jpg';
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
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      height="100vh"
      alignItems="center"
      justifyContent="center"
      // TODO: Must be replaced with a proper inactive bacground color
      bgcolor="InactiveCaptionText"
    >
      <Stack
        paddingX={15}
        paddingY={8}
        gap={4}
        bgcolor="rgba(255, 255, 255, 0.8)"
        borderRadius={1}
        boxShadow={5}
        style={{
          backdropFilter: 'blur(50px)', 
        }}
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
            placeholder="Password"
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
