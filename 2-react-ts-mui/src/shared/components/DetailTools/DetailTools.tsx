import { Box, Button, Icon, Paper, useTheme } from '@mui/material';

interface IDetailToolsProps {
  buttonNewText?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;

  onClickNew?: () => void;
  onClickBack?: () => void;
  onClickDelete?: () => void;
  onClickSave?: () => void;
}

export const DetailTools: React.FC<IDetailToolsProps> = ({
  buttonNewText = 'New',

  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
}) => {
  const theme = useTheme();
  const spacing = theme.spacing;

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      component={Paper}
      height={spacing(5)}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        {showBackButton && (
          <Button
            onClick={onClickBack}
            variant="contained"
            disableElevation
            startIcon={<Icon>arrow_back</Icon>}
          >
            Back
          </Button>
        )}
      </Box>

      <Box display="flex" gap={1}>
        {showNewButton && (
          <Button
            onClick={onClickNew}
            variant="contained"
            disableElevation
            startIcon={<Icon>add</Icon>}
            color="info"
          >
            {buttonNewText}
          </Button>
        )}
        {showSaveButton && (
          <Button
            onClick={onClickSave}
            variant="contained"
            disableElevation
            startIcon={<Icon>save</Icon>}
            color="success"
          >
            Save
          </Button>
        )}
        {showDeleteButton && (
          <Button
            onClick={onClickDelete}
            variant="contained"
            disableElevation
            startIcon={<Icon>delete</Icon>}
            color="error"
          >
            Delete
          </Button>
        )}
      </Box>
    </Box>
  );
};
