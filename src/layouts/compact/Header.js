import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Link, Stack, Tooltip, IconButton } from '@mui/material';
// config
import { HEADER } from 'src/config-global';
// utils
// import { bgBlur } from 'src/utils/cssStyles';
// routes
// components
// import Logo from 'src/components/logo';
// import SettingsDrawer from 'src/components/settings/drawer';
import Image from 'src/components/image/Image';
// icons
import Iconify from 'src/components/iconify/Iconify';

// ----------------------------------------------------------------------

export default function Header({ isOffset }) {
  const theme = useTheme();
  console.log(theme);

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none', width: '100vw' }}>
      <Toolbar
        disableGutters
        sx={{
          // justifyContent: 'space-between',
          display: 'block',
          color: 'common.white',
          backgroundColor: theme.palette.primary.main,
          height: {
            xs: HEADER.H_MOBILE,
          },
        }}
      >
        <Box sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Link href="/" component={NextLink}>
              <Tooltip arrow placement="bottom" title="home" enterDelay={1000}>
                <Box sx={{ lineHeight: 0, position: 'relative', height: '54px', width: '170px' }}>
                  <Image src="/assets/images/scc-logo-blue-sm2.png" alt="navigation" disabledEffect sx={{ height: 1 }} />
                </Box>
              </Tooltip>
            </Link>
          </Box>

          <Stack sx={{ mr: 1 }} spacing={1} direction="row" alignItems="center" flexGrow={1} justifyContent="flex-end">
            <Link href="/" component={NextLink} color="inherit">
              <IconButton color="inherit">
                <Iconify icon="carbon:help" />
              </IconButton>
            </Link>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  isOffset: PropTypes.bool,
};
