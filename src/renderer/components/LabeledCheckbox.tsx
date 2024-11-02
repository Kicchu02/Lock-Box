import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

interface LabeledCheckboxProps {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export function LabeledCheckbox({
  isChecked,
  onChange,
  label,
}: LabeledCheckboxProps): React.ReactElement {
  return (
    <FormControlLabel
      control={<Checkbox checked={isChecked} onChange={onChange} />}
      label={label}
    />
  );
}
