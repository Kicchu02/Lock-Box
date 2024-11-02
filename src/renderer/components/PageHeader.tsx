import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

interface PageHeaderProps {
  heading: string;
  rightContent: React.ReactElement;
}

export function PageHeader({
  heading,
  rightContent,
}: PageHeaderProps): React.ReactElement {
  return (
    <Stack
      direction="row"
      padding={2}
      borderBottom={1}
      borderColor="InactiveBorder"
      justifyContent="space-between"
    >
      <Typography variant="h6" color="textPrimary">
        {heading}
      </Typography>
      {rightContent}
    </Stack>
  );
}
