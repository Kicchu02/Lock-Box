import { Stack } from '@mui/material';
import { Edit, KeyRound, UserRoundCog, View } from 'lucide-react';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppHeader } from '../components/AppHeader';
import { DrawerListItem } from '../components/DrawerListItem';
import { Routes } from '../types/Routes';

enum DrawerItems {
  GeneratePassword = 'Generate password',
  ViewPasswords = 'View passwords',
  ManagePasswords = 'Manage passwords',
  UserSettings = 'User Settings',
}

export function HomeScreenLayout(): React.ReactElement {
  const [selectedDrawerItem, setSelectedDrawerItem] = useState(
    DrawerItems.GeneratePassword,
  );
  const navigate = useNavigate();

  return (
    <Stack height="100vh">
      <AppHeader />
      <Stack direction="row" height="100%">
        <Stack
          borderRight={1}
          borderColor="InactiveBorder"
          height="100%"
          minWidth="280px"
        >
          <DrawerListItem
            text={DrawerItems.GeneratePassword}
            icon={<KeyRound />}
            isSelected={selectedDrawerItem === DrawerItems.GeneratePassword}
            onSelect={() => {
              setSelectedDrawerItem(DrawerItems.GeneratePassword);
              navigate(Routes.GeneratePassword);
            }}
          />
          <DrawerListItem
            text={DrawerItems.ViewPasswords}
            icon={<View />}
            isSelected={selectedDrawerItem === DrawerItems.ViewPasswords}
            onSelect={() => {
              setSelectedDrawerItem(DrawerItems.ViewPasswords);
              navigate(Routes.ViewPasswords);
            }}
          />
          <DrawerListItem
            text={DrawerItems.ManagePasswords}
            icon={<Edit />}
            isSelected={selectedDrawerItem === DrawerItems.ManagePasswords}
            onSelect={() => {
              setSelectedDrawerItem(DrawerItems.ManagePasswords);
              navigate(Routes.ManagePasswords);
            }}
          />
          <DrawerListItem
            text={DrawerItems.UserSettings}
            icon={<UserRoundCog />}
            isSelected={selectedDrawerItem === DrawerItems.UserSettings}
            onSelect={() => {
              setSelectedDrawerItem(DrawerItems.UserSettings);
              navigate(Routes.UserSettings);
            }}
          />
        </Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
}
