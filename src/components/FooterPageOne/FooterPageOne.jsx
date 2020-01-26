
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Something to ponder...
        </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'“It is when you lose sight of yourself, '}
                    {' that you lose your way. To keep your'}
                    {' truth in sight you must keep yourself'}
                    {' in sight and the world to you should'}
                    {' be a mirror to reflect to you your image;'}
                    {' the world should be a mirror that'}
                    {' you reflect upon.”'}
                </Typography>
                <Typography variant="body1">― C. JoyBell C.</Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Nic Payne Weekend Challenge #5</Typography>

                </Container>
            </footer>
        </div>
        
    );
}