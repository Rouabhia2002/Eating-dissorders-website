import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#f5f5f5', // Light grey background
        py: 6,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        textAlign: 'center', // Centered content
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Disordered Eating in South Asians is dedicated to raising awareness and providing resources about disordered eating within the South Asian diaspora. Our goal is to support those affected and offer a platform for sharing experiences and insights.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ listStyleType: 'none', padding: 0 }}>
              <Link href="/home" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover" display="block">
                About Us
              </Link>
              <Link href="/submissions" color="inherit" underline="hover" display="block">
                Submissions
              </Link>
              <Link href="/resources" color="inherit" underline="hover" display="block">
                Resources
              </Link>
              <Link href="/contact" color="inherit" underline="hover" display="block">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Link href="mailto:info@shunoeatingdisorders.com" color="inherit" underline="hover">
                <IconButton color="inherit" aria-label="Email">
                  <EmailIcon />
                </IconButton>
                Email: info@shunoeatingdisorders.com
              </Link>
              <Link href="https://www.instagram.com/shunoeatingdisorders" color="inherit" underline="hover" target="_blank">
                <IconButton color="inherit" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                Follow us on Instagram! @shunoeatingdisorders
              </Link>
              <Link href="tel:+13605457121" color="inherit" underline="hover">
                <IconButton color="inherit" aria-label="Phone">
                  <PhoneIcon />
                </IconButton>
                Phone: +1 360-545-7121
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Disordered Eating in South Asians. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
