import {
  Avatar,
  Drawer,
  useTheme,
  Box,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Icon,
  ListItemButton,
} from '@mui/material';

interface IDrawerProviderProps {
  children: React.ReactNode;
}

export const SideMenu: React.FC<IDrawerProviderProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box
          width={theme.spacing(28)}
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            width={'100%'}
            height={theme.spacing(20)}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Avatar
              sx={{ height: theme.spacing(16), width: theme.spacing(16) }}
              src="https://upload.wikimedia.org/wikipedia/commons/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>

                <ListItemText primary="Home" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={'100vh'} marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
