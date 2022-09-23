import * as React from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    AppBar
} from '@mui/material';
import styled from '@emotion/styled';

// Component ---------------
import SwipeableTextMobileStepper from '../carousel'

// ----------------------------------------------------------------------

export default function Home(props) {
    const IconWrapperStyle = styled('div')(({ theme }) => ({
        margin: 'auto',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        width: theme.spacing(8),
        height: theme.spacing(8),
        justifyContent: 'center',
        marginBottom: theme.spacing(3),
      }));
  return (
    <>
        <SwipeableTextMobileStepper />
        <AppBar component="session" position='static' sx={{ background: 'white', width: '100%', height: '500px'}}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <Card
                    sx={{
                        py: 5,
                        boxShadow: 0,
                        textAlign: 'center',
                    }}
                    >
                    <IconWrapperStyle
                        sx={{
                        
                        }}
                    >
                        Icon
                    </IconWrapperStyle>

                    <Typography variant="h3">Tay test</Typography>

                    <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                        AAAAA
                    </Typography>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <Card
                    sx={{
                        py: 5,
                        boxShadow: 0,
                        textAlign: 'center',
                    }}
                    >
                    <IconWrapperStyle
                        sx={{
                        
                        }}
                    >
                        Icon
                    </IconWrapperStyle>

                    <Typography variant="h3">Tay test</Typography>

                    <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                        AAAAA
                    </Typography>
                </Card>
            </Grid>
    </Grid>
        </AppBar>
    </>
  );
}
