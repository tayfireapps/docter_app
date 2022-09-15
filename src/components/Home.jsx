
import React from "react";
import { 
    Button,
    Container, 
    Grid, 
    Card, 
    CardContent,
    CardActions,
    Typography
} from '@mui/material';

const Home = function(props) {
    return (
        <>
        <Container maxWidth="lg">
            <header>
                {/* Menu */}
                <Grid container spacing={2}>
                    <Grid item lg={4}>Logo</Grid>
                    <Grid item lg={8}>Breadcrumbs</Grid>
                </Grid>
                <div className="slider"></div>
            </header>
            <section>
                <article className="service">
                    <Grid container spacing={2}>
                        <Grid item lg={4}>Service 1</Grid>
                        <Grid item lg={4}>Service 2</Grid>
                        <Grid item lg={4}>Service 3</Grid>
                    </Grid>
                </article>
                <article className="why_us">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                        AAAAAA
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </article>
                <article className="our_docter">
                    <Grid container spacing={2}>
                        <Grid item lg={6}>Service 1</Grid>
                        <Grid item lg={6}>Service 2</Grid>
                        <Grid item lg={6}>Service 3</Grid>
                        <Grid item lg={6}>Service 3</Grid>
                    </Grid>
                </article>
            </section>
            <footer>
                <Grid container spacing={2}>
                    <Grid item lg={3}>Service 1</Grid>
                    <Grid item lg={3}>Service 2</Grid>
                    <Grid item lg={3}>Service 3</Grid>
                    <Grid item lg={3}>Service 3</Grid>
                </Grid>
            </footer>
        {/* <Button startIcon={<SaveOutlined />} variant="contained" color="primary" >Test</Button>
        
        <div className={classes.root}></div>

        <Grid container spacing={2} justify="center">
            <Grid item>
                <Paper style={{heigh: '50px', width: '100%', background: "white"}} conten />
            </Grid>
            <Grid item>
                <Paper style={{heigh: '50px', width: '100%', background: "white"}} />
            </Grid>
            <Grid item>
                <Paper style={{heigh: '50px', width: '100%', background: "white"}} />
            </Grid>
        </Grid> */}
        </Container>
        </>

    )
}

export default Home;
