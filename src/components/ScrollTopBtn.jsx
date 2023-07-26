import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import { useCallback } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    threshold: 400,
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

            width: '40px',
            height: '35px',

            '&:hover > .MuiSvgIcon-root': {
              color: '#fffefed2',
            },
          }}
        >
          <KeyboardArrowUpIcon
            fontSize="large"
            sx={{
              color: '#161616d3',
              trasition: '225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }}
          />
        </Fab>
      </Box>
    </Zoom>
  );
}
export default ScrollToTopFab;
