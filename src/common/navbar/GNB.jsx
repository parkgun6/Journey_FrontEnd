import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { LinkToRegist, LinkToMain, LinkToLogin } from 'common/location/LinkTo';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'darkcyan',
  },
});
const GNB = () => {
  const classes = useStyles();
  const navigator = useNavigate();

  const linkToMainFn = () => {
    navigator('/');
  };
  return (
    <Box>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            onClick={linkToMainFn}
          >
            <Button color='inherit'>Journey</Button>
          </Typography>
          <LinkToRegist />
          <LinkToLogin />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default GNB;
