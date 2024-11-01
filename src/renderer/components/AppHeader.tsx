import { Button, Stack, Typography } from '@mui/material';
import { Lock } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      <Typography variant="h4">Lock Box</Typography>
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
