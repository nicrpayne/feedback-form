
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
        <>

            <div className={classes.root}>
                <CssBaseline />
                <Container component="main" className={classes.main} maxWidth="sm">
                    <Typography variant="h2" component="h1" gutterBottom>
                        truthy. . .
        </Typography>
                    <Typography variant="h5" component="h2" gutterBottom >
                        {'“Journaling is like whispering to one’s self and listening at the same time.”'}

                    </Typography>
                    <Typography variant="body1">- Mina Murray</Typography>
                </Container>
                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                        <Typography variant="body1">Nic Payne Weekend Challenge #5</Typography>

                    </Container>
                </footer>
            </div>

        </>
    );
}