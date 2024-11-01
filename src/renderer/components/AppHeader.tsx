import { Button, Stack, Typography } from '@mui/material';
import { Lock } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LockBoxIcon from '../../../assets/icons/LockBox_icon.png';
import { Routes } from '../types/Routes';

export function AppHeader(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottom={1}
      borderColor="ActiveBorder"
      padding={2}
      paddingLeft={4}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Stack
          component="img"
          src={LockBoxIcon}
          height="40px"
          borderRadius={1}
        />
        <Typography variant="h4">Lock Box</Typography>
      </Stack>
      <Button
        variant="contained"
        startIcon={<Lock size="16px" />}
        onClick={() => {
          navigate(Routes.Root);
        }}
      >
        Lock app
      </Button>
    </Stack>
  );
}
