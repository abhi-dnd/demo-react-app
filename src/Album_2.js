import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    // const sendToken = async (token) => {
    //     try {
    //         const response = await fetch('http://localhost:3001/redirect', {
    //             method: 'POST',
    //             credentials: 'include',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ token: token }),
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);
    //         } else {
    //             console.error('Request failed:', response.status, response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('There was an error:', error);
    //     }
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     document.getElementById("redirectForm").submit();
    // };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch('http://localhost2.com:3001/redirect', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'x-token': "token_xyz"
              },
          });
  
          if (response.ok) {
              // Redirect to Domain3, which will subsequently call Domain2 to fetch the token
              window.location.href = 'http://localhost:8000/apps/clientonboarding';
              // window.location.href = 'https://ingress-unity-uk.dyedurham.dev/apps/clientonboarding';
          } else {
              console.error('Request failed:', response.status, response.statusText);
          }
      } catch (error) {
          console.error('There was an error:', error);
      }
  };
  


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Unity Home
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Unity Home
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Matter Quoting
                    </Typography>
                    <Typography>
                      Provide Accurate , detailed conveyancing quotations.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Launch Application</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Matter Management
                    </Typography>
                    <Typography>
                        Cloud-based legal accounts, practice and case management software.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Launch Application</Button>
                    {/* <Button size="small">Edit</Button> */}
                    </CardActions>
                </Card>
            </Grid>
            <Grid item key={3} xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Matter Onboarding
                    </Typography>
                    <Typography>
                        Ensure compliance with faster client onboarding.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    {/* <form id="redirectForm" action="http://localhost2.com:3001/redirect" method="post">
                        <input type="hidden" name="token" value="token_xyz" />
                    </form> */}
                    {/* <form id="redirectForm" action="http://localhost1.com:3001/redirect" method="post">
                        <input type="hidden" name="token" value="token_xyz" />
                    </form> */}
                    <Button size="small" onClick={handleSubmit}>Launch Application</Button>
                    {/* <Button size="small" onClick={() => sendToken('token_xyz')}>Launch Application</Button> */}
                    </CardActions>
                </Card>
            </Grid>
              {/* ))} */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}