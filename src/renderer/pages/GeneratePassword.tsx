import {
  Alert,
  Button,
  IconButton,
  Slider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Copy, Save } from 'lucide-react';
import React, { useState } from 'react';
import { LabeledCheckbox } from '../components/LabeledCheckbox';
import { PageHeader } from '../components/PageHeader';
import {
  DEFAULT_NUMBER_OF_CHARACTERS,
  EMPTY_CHARACTER,
  MAX_NUMBER_OF_CHARACTERS,
  MIN_NUMBER_OF_CHARACTERS,
  SNACKBAR_AUTO_HIDE_DURATION_IN_MS,
} from '../types/constants';

enum Color {
  primary = 'primary',
  success = 'success',
}

export function GeneratePassword(): React.ReactElement {
  const [applicationOrDomainName, setApplicationOrDomainName] =
    useState(EMPTY_CHARACTER);
  const [numberOfCharacters, setNumberOfCharacters] = useState(
    DEFAULT_NUMBER_OF_CHARACTERS,
  );
  const [isCapitalLettersIncluded, setIsCapitalLettersIncluded] =
    useState(false);
  const [isNumbersIncluded, setIsNumbersIncluded] = useState(false);
  const [isSpecialCharacterIncluded, setIsSpecialCharacterIncluded] =
    useState(false);
  const [generatedPassword, setGeneratedPassword] = useState(EMPTY_CHARACTER);
  const [generateButtonColor, setGenerateButtonColor] = useState(Color.primary);
  const [copyButtonColor, setCopyButtonColor] = useState(Color.primary);
  const [isSuccessSnackbarShown, setIsSuccessSnackbarShown] = useState(false);

  const sliderMarks = [
    {
      value: MIN_NUMBER_OF_CHARACTERS,
      label: MIN_NUMBER_OF_CHARACTERS,
    },
    {
      value: DEFAULT_NUMBER_OF_CHARACTERS,
      label: DEFAULT_NUMBER_OF_CHARACTERS,
    },
    {
      value: MAX_NUMBER_OF_CHARACTERS,
      label: MAX_NUMBER_OF_CHARACTERS,
    },
  ];

  const generatePassword = (): string => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const guaranteedChars = [
      lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)],
      ...(isCapitalLettersIncluded
        ? [uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]]
        : []),
      ...(isNumbersIncluded
        ? [numberChars[Math.floor(Math.random() * numberChars.length)]]
        : []),
      ...(isSpecialCharacterIncluded
        ? [specialChars[Math.floor(Math.random() * specialChars.length)]]
        : []),
    ];
    const availableChars = [
      lowercaseChars,
      isCapitalLettersIncluded ? uppercaseChars : EMPTY_CHARACTER,
      isNumbersIncluded ? numberChars : EMPTY_CHARACTER,
      isSpecialCharacterIncluded ? specialChars : EMPTY_CHARACTER,
    ].join(EMPTY_CHARACTER);
    const remainingChars = Array.from(
      { length: numberOfCharacters - guaranteedChars.length },
      () => availableChars[Math.floor(Math.random() * availableChars.length)],
    );
    const passwordArray = [...guaranteedChars, ...remainingChars];
    const shuffledPassword = passwordArray
      .sort(() => Math.random() - 0.5)
      .join(EMPTY_CHARACTER);
    return shuffledPassword;
  };

  const resetStates = () => {
    setApplicationOrDomainName(EMPTY_CHARACTER);
    setNumberOfCharacters(DEFAULT_NUMBER_OF_CHARACTERS);
    setIsCapitalLettersIncluded(false);
    setIsNumbersIncluded(false);
    setIsSpecialCharacterIncluded(false);
    setGeneratedPassword(EMPTY_CHARACTER);
    setGenerateButtonColor(Color.primary);
    setCopyButtonColor(Color.primary);
  };

  return (
    <Stack height="100%" width="100%">
      <PageHeader
        heading="Generate Password"
        rightContent={
          <Button
            variant="contained"
            size="small"
            startIcon={<Save size={20} />}
            disabled={
              applicationOrDomainName === EMPTY_CHARACTER ||
              generatedPassword === EMPTY_CHARACTER
            }
            onClick={() => {
              // TODO: Must insert record into db.
              setIsSuccessSnackbarShown(true);
              resetStates();
            }}
          >
            Save password
          </Button>
        }
      />
      <Stack padding={1} alignItems="center" height="100%">
        <Stack padding={5} gap={5} width="560px">
          <TextField
            label="Application or domain name"
            value={applicationOrDomainName}
            onChange={(event) => {
              setApplicationOrDomainName(event.target.value);
            }}
            // TODO: The text field must also include an error state where the domain name already exists.
          />
          <Stack gap={1}>
            <Typography variant="body1">Number of characters</Typography>
            <Slider
              defaultValue={DEFAULT_NUMBER_OF_CHARACTERS}
              valueLabelDisplay="auto"
              min={MIN_NUMBER_OF_CHARACTERS}
              max={MAX_NUMBER_OF_CHARACTERS}
              marks={sliderMarks}
              value={numberOfCharacters}
              onChange={(_event, value) => {
                setNumberOfCharacters(value as number);
              }}
            />
            <LabeledCheckbox
              isChecked={isCapitalLettersIncluded}
              onChange={(event) => {
                setIsCapitalLettersIncluded(event.target.checked);
              }}
              label="Include capital letters"
            />
            <LabeledCheckbox
              isChecked={isNumbersIncluded}
              onChange={(event) => {
                setIsNumbersIncluded(event.target.checked);
              }}
              label="Include numbers"
            />
            <LabeledCheckbox
              isChecked={isSpecialCharacterIncluded}
              onChange={(event) => {
                setIsSpecialCharacterIncluded(event.target.checked);
              }}
              label="Include special characters"
            />
          </Stack>
          <Button
            variant="contained"
            size="large"
            color={generateButtonColor}
            onClick={() => {
              setGeneratedPassword(generatePassword());
              setGenerateButtonColor(Color.success);
            }}
          >
            Generate
          </Button>
          <Stack direction="row" alignItems="center">
            <TextField
              fullWidth
              label="Generated password"
              value={generatedPassword}
              disabled={generatedPassword === EMPTY_CHARACTER}
              color={copyButtonColor}
              focused
            />
            <IconButton
              color={copyButtonColor}
              onClick={() => {
                setCopyButtonColor(Color.success);
              }}
              disabled={generatedPassword === EMPTY_CHARACTER}
            >
              <Copy />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Snackbar
        open={isSuccessSnackbarShown}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION_IN_MS}
        onClose={() => {
          setIsSuccessSnackbarShown(false);
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled">
          Password saved successfully
        </Alert>
      </Snackbar>
    </Stack>
  );
}
