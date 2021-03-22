import React from 'react';
import {makeStyles} from "@material-ui/core";
import shop from './../assets/shop.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        textAlign: 'center'

    },
    title: {
        padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        marginTop: 100,
        minHeight: 400
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={shop} title="Shop"/>
            <CardContent>
                <Typography variant="h2" component="h2">
                    Blinx Store.
                </Typography>
            </CardContent>
        </Card>
    );
}