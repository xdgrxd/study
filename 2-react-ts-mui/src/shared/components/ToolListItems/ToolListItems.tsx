import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';
import { Environment } from '../../environment';

interface IToolBar {
  searchText?: string; //   ?:  ===  ISN'T REQUIRED (MAY BE UNDEFINED)
  showSearchInput?: boolean;
  searchTextOnChange?: (newText: string) => void;
  buttonNewText?: string;
  showNewButton?: boolean;
  onClickNew?: () => void;
}

export const ToolListItems: React.FC<IToolBar> = ({
  searchText = '',
  showSearchInput = false,
  searchTextOnChange,
  buttonNewText = 'New',
  showNewButton = true,
  onClickNew,
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
    >
      {showSearchInput && (
        <TextField
          size="small"
          value={searchText}
          onChange={(e) => searchTextOnChange?.(e.target.value)}
          placeholder={Environment.PLACEHOLDER_SEARCH_INPUT}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>search</Icon>
                </InputAdornment>
              ),
            },
          }}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {showNewButton && (
          <Button
            variant="contained"
            disableElevation
            onClick={onClickNew}
            endIcon={<Icon>add</Icon>}
          >
            {buttonNewText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
