import PropTypes from 'prop-types';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Fab } from '@mui/material';
// config
import { HEADER } from 'src/config-global';
// page components
import ScrollToTop from 'src/components/scroll-to-top/ScrollToTop';
import Iconify from 'src/components/iconify/Iconify';
import ScrollProgress from 'src/components/scroll-progress/ScrollProgress';
import Header from './header/Header';
import Footer from './footer/Footer';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const { pathname } = useRouter();
  // check if pathname is in the array
  const actionPage = (arr) => arr.some((path) => pathname === path);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />
      {/* <ScrollProgress /> */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {/* <Spacing /> */}
        {children}
      </Box>
      <ScrollToTop className="mui-fixed">
        <Fab color="primary" size="small" aria-label="scroll back to top" sx={{ opacity: 0.8 }}>
          <Iconify icon="mdi:arrow-up" />
        </Fab>
      </ScrollToTop>

      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// ----------------------------------------------------------------------

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE },
      }}
    />
  );
}
