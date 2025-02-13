import {
  Box,
  Button,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

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
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const theme = useTheme();
  const spacing = theme.spacing;

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      paddingY={1.75}
      display="flex"
      component={Paper}
      alignItems="center"
    >
      {showBackButton &&
        (!showBackButtonLoading ? (
          <Button
            onClick={onClickBack}
            variant="outlined"
            disableElevation
            sx={{ flex: showBackButton && smDown ? 1 : '' }}
            startIcon={<Icon>arrow_back</Icon>}
          >
            <Typography variant="button" noWrap>
              Back
            </Typography>
          </Button>
        ) : (
          <Skeleton animation="wave" sx={{ transform: 'unset' }}>
            <Button
              onClick={onClickBack}
              variant="outlined"
              disableElevation
              sx={{ flex: showBackButton && smDown ? 1 : '' }}
              startIcon={<Icon>arrow_back</Icon>}
            >
              <Typography variant="button" noWrap>
                Back
              </Typography>
            </Button>
          </Skeleton>
        ))}

      {showNewButton &&
        !smDown &&
        !mdDown &&
        (!showNewButtonLoading ? (
          <Button
            onClick={onClickNew}
            variant="outlined"
            disableElevation
            sx={{ flex: showBackButton && smDown ? 1 : '' }}
            startIcon={<Icon>add</Icon>}
          >
            <Typography variant="button" noWrap>
              {buttonNewText}
            </Typography>
          </Button>
        ) : (
          <Skeleton animation="wave" sx={{ transform: 'unset' }}>
            <Button
              onClick={onClickNew}
              variant="outlined"
              disableElevation
              sx={{ flex: showBackButton && smDown ? 1 : '' }}
              startIcon={<Icon>add</Icon>}
            >
              <Typography variant="button" noWrap>
                {buttonNewText}
              </Typography>
            </Button>
          </Skeleton>
        ))}

      {showDeleteButton &&
        (!showDeleteButtonLoading ? (
          <Button
            onClick={onClickDelete}
            variant="outlined"
            disableElevation
            sx={{ flex: showBackButton && smDown ? 1 : '' }}
            startIcon={<Icon>delete</Icon>}
          >
            <Typography variant="button" noWrap>
              Delete
            </Typography>
          </Button>
        ) : (
          <Skeleton animation="wave" sx={{ transform: 'unset' }}>
            <Button
              variant="outlined"
              disableElevation
              sx={{ flex: showBackButton && smDown ? 1 : '' }}
              startIcon={<Icon>delete</Icon>}
              disabled
            >
              <Typography variant="button" noWrap>
                Loading...
              </Typography>
            </Button>
          </Skeleton>
        ))}
      
      {showSaveButton &&
        (!showSaveButtonLoading ? (
          <Button
            onClick={onClickSave}
            variant="contained"
            disableElevation
            sx={{ flex: showBackButton && smDown ? 1 : '' }}
            startIcon={<Icon>save</Icon>}
          >
            <Typography variant="button" noWrap>
              Save
            </Typography>
          </Button>
        ) : (
          <Skeleton animation="wave" sx={{ transform: 'unset' }}>
            <Button
              onClick={onClickSave}
              variant="contained"
              disableElevation
              sx={{ flex: showBackButton && smDown ? 1 : '' }}
              startIcon={<Icon>save</Icon>}
            >
              <Typography variant="button" noWrap>
                Save
              </Typography>
            </Button>
          </Skeleton>
        ))}
    </Box>
  );
};
