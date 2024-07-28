import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import pic11 from '../../assets/pic11.jpg'; // Adjust extension as needed
import pic22 from '../../assets/pic22.jpg'; // Adjust extension as needed

function Mission() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={4}>
          {/* Section 1: Mission */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src={pic11}
                      alt="Mission Image"
                      sx={{ width: '90%', height: 'auto', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                      Mission
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Disordered Eating in South Asians is an organization aiming to raise awareness of disordered eating in the South Asian diaspora. Submissions are collected from anyone with South Asian ancestry willing to share their experience with this type of illness and then published here to encourage others to seek treatment or simply provide insight into the sociocultural pressures that prevent individuals from accessing care. Because so many people have faced stigma and culturally-incompetent treatment when trying to recover from an eating disorder, I hope that by making these first-hand accounts accessible, people are able to recognize they are not alone in overcoming this.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      In South Asian culture, there are many attitudes that perpetuate eating disorders and, to a surprising extent, encourage them. There is a great deal of research supporting how eating disorders are largely genetic, but it is ultimately a psychobiological disorder and, as such, means that ensuring treatment takes into account personal background is imperative.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Divider sx={{ my: 3 }} />
          {/* Section 2: Disordered Eating vs. Eating Disorders */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src={pic22}
                      alt="Disordered Eating Image"
                      sx={{ width: '90%', height: 'auto', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                      Disordered Eating vs. Eating Disorders
                    </Typography>
                    <Typography variant="body1" paragraph>
                      An eating disorder refers to the medical diagnosis, whereas disordered eating is defined as being situated between normal eating and an eating disorder. People with an eating disorder may display disordered eating habits, but not everyone who goes experienced disordered eating will be diagnosed for an eating disorder. The choice to use “disordered eating” as part of the title rather than “eating disorder” was to make the project as inclusive as possible since both are extremely harmful and can lead to death. Because many areas lack proper health systems, there are people who do not get diagnosed for what they go through even if they may meet the medical criteria.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Everyone deserves treatment regardless of how severe the physical consequences are. Do not diminish your experience because others do not deem you sick enough for intervention or believe it is the victim’s responsibility to “get over it.” You are allowed to suffer and you are allowed to heal without having to justify it to anyone. It is not your fault.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Mission;
