import { Box, Button, Icon, Paper, Skeleton, useTheme } from '@mui/material';

interface IDetailToolsProps {
  buttonNewText?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;

  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;

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

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,

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
        {showBackButton &&
          (showBackButtonLoading ? (
            <Button
              onClick={onClickBack}
              variant="contained"
              disableElevation
              startIcon={<Icon>arrow_back</Icon>}
            >
              Back
            </Button>
          ) : (
            <Skeleton animation="wave" sx={{ transform: 'unset' }}>
              <Button
                onClick={onClickBack}
                variant="contained"
                disableElevation
                startIcon={<Icon>arrow_back</Icon>}
              >
                Back
              </Button>
            </Skeleton>
          ))}
      </Box>

      <Box display="flex" gap={1}>
        {showNewButton &&
          (showNewButtonLoading ? (
            <Button
              onClick={onClickNew}
              variant="contained"
              disableElevation
              startIcon={<Icon>add</Icon>}
              color="info"
            >
              {buttonNewText}
            </Button>
          ) : (
            <Skeleton animation="wave" sx={{ transform: 'unset' }}>
              <Button
                onClick={onClickNew}
                variant="contained"
                disableElevation
                startIcon={<Icon>add</Icon>}
                color="info"
              >
                {buttonNewText}
              </Button>
            </Skeleton>
          ))}

        {showSaveButton &&
          (showSaveButtonLoading ? (
            <Button
              onClick={onClickSave}
              variant="contained"
              disableElevation
              startIcon={<Icon>save</Icon>}
              color="success"
            >
              Save
            </Button>
          ) : (
            <Skeleton animation="wave" sx={{ transform: 'unset' }}>
              <Button
                onClick={onClickSave}
                variant="contained"
                disableElevation
                startIcon={<Icon>save</Icon>}
                color="success"
              >
                Save
              </Button>
            </Skeleton>
          ))}

        {showDeleteButton &&
          (showDeleteButtonLoading ? (
            <Button
              onClick={onClickDelete}
              variant="contained"
              disableElevation
              startIcon={<Icon>delete</Icon>}
              color="error"
            >
              Delete
            </Button>
          ) : (
            <Skeleton animation="wave" sx={{ transform: 'unset' }}>
              <Button
                variant="contained"
                disableElevation
                startIcon={<Icon>delete</Icon>}
                color="error"
                disabled
              >
                Loading...
              </Button>
            </Skeleton>
          ))}
      </Box>
    </Box>
  );
};
