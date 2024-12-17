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
  useMediaQuery,
} from '@mui/material';
import { useDrawerContext } from '../../contexts';

interface IDrawerProviderProps {
  children: React.ReactNode;
}

export const SideMenu: React.FC<IDrawerProviderProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(32)}
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
      <Box height={'100vh'} marginLeft={smDown ? 0 : theme.spacing(32)}>
        {children}
      </Box>
    </>
  );
};
