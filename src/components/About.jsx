
import React from "react";
import { Button, Menu, Container, Grid, Paper } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';

import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";

const About = function(props) {
    const useStyle = makeStyles({
        root: {
            border: 0
        }
    });
    const classes = useStyle();
    return (
        <>
        <Container maxWidth="lg" style={{background: red['A700']}}>
        <Button startIcon={<SaveOutlined />} variant="contained" color="primary" >Test</Button>
        
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
        </Grid>
        </Container>
        </>

    )
}

export default About;
