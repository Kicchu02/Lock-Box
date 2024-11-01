import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';

interface DrawerListItemProps {
  text: string;
  icon: React.ReactElement;
  isSelected: boolean;
  onSelect: () => void;
}

export function DrawerListItem({
  text,
  icon,
  isSelected,
  onSelect,
}: DrawerListItemProps): React.ReactElement {
  return (
    <ListItem>
      <ListItemButton
        selected={isSelected}
        onClick={onSelect}
        sx={{ borderRadius: '4px' }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
