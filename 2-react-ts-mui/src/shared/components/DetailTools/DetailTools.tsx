import { Box, Button, Icon, Paper, useTheme } from '@mui/material';

export const DetailTools: React.FC = () => {
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
        <Button
          variant="contained"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          Back
        </Button>
      </Box>

      <Box display="flex" gap={1}>
        <Button
          variant="contained"
          disableElevation
          startIcon={<Icon>add</Icon>}
          color="info"
        >
          New
        </Button>
        <Button
          variant="contained"
          disableElevation
          startIcon={<Icon>save</Icon>}
          color="success"
        >
          Save
        </Button>
        <Button
          variant="contained"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          color="error"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};
