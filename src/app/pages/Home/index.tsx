import { Grid, Typography, Stack, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// Import AppParticles from '../../components/AppParticles';
import NeonText from '../../components/NeonText';
import Page from '../../components/Page';
import MyAvatar from './components/Avatar';
// Import Bulb from './components/Bulb';
import { myData } from './details';
import { type GlowTypes } from './types';

function Home() {
  const theme = useTheme();
  // GlowPrimaryColor and glowSecondaryColor are the same for all the components ,to make animation and glow consistent
  const commonProps: GlowTypes = {
    glowPrimaryColor: theme.palette.primary.main,
    glowSecondaryColor: theme.palette.primary.dark,
  };

  return (
    <Page>
      {/* <AppParticles></AppParticles> */}
      {/* <Bulb {...commonProps} /> */}
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item>
          <Stack direction={'row'} alignItems="center">
            <MyAvatar {...commonProps} />
            <Box>
              <NeonText variant="h3" color="white" {...commonProps}>
                Hi, I am
              </NeonText>
              <NeonText variant="h1" {...commonProps}>
                TEJA CHUNDRU
              </NeonText>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          {Object.keys(myData).map(key => (
            <Stack direction="column" key={key}>
              <Typography
                variant="h5"
                {...commonProps}
                sx={{
                  color: theme.palette.primary.light,
                }}
              >
                {key}
              </Typography>
              <Typography variant="h4" color="white">
                {myData[key]}
              </Typography>
              <br />
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;
