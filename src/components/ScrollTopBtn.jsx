import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import { useCallback } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
          sx={{
            borderRadius: '6px',
            background: '#08b508da',
            width: '55px',
            height: '45px',
            '&:hover > .MuiSvgIcon-root': {
              color: '#fffefed2',
            },
          }}
        >
          <KeyboardArrowUpIcon
            fontSize="large"
            sx={{
              color: '#161616d3',
            }}
          />
        </Fab>
      </Box>
    </Zoom>
  );
}
export default ScrollToTopFab;
