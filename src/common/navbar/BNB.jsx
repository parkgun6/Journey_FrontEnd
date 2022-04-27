import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LinkToMain } from 'common/location/LinkTo';

const useStyles = makeStyles({
  root: {
    bottom: 0,
    '& .MuiBottomNavigationAction-root': {
      '@media (max-width: 768px)': {
        minWidth: 'auto',
        padding: '6px 0',
      },
    },
    backgroundColor: 'darkcyan',
    '& .Mui-selected': {
      color: 'white',
    },
    '.css-1ee5err-MuiButtonBase-root-MuiBottomNavigationAction-root ': {
      color: 'white',
    },
  },
});

const BNB = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <div>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.root}
          label='Recents'
          icon={<RestoreIcon />}
        />
        {/* <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
        <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    </div>
  );
};

export default BNB;
