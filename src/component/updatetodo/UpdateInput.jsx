/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Paper, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles({
  paper: {
    height: '100%',
  },
  text: {
    margin: '10px',
    marginTop: '25px',
    fontSize: '18px',
    width: '94%',
  },
  topContent: {
    paddingLeft: '10px',
    height: '45px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heart: {
    marginLeft: '5px',
  },
});
const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
};

const UpdateViewer = forwardRef(({ onClickModify }, ref) => {
  const classes = useStyles();
  const textWithImg = useSelector((state) => state.todo.textWithImg);
  return (
    textWithImg && (
      <>
        {textWithImg.map((res) => (
          <Paper elevation={3} key={res.bno} className={classes.paper}>
            <div key={res.bno}>
              <div className={classes.topContent}>
                {res.bno}
                <div>
                  <IconButton onClick={onClickModify}>
                    <CheckIcon sx={{ color: 'blue' }} />
                  </IconButton>
                </div>
              </div>
              <Slider {...slickSettings}>
                {res.path.split('|').map((resSrc) => (
                  <img key={res.ino} src={resSrc} alt='' />
                ))}
              </Slider>
              <TextField
                className={classes.text}
                variant='outlined'
                defaultValue={res.text}
                inputRef={ref}
              />
            </div>
          </Paper>
        ))}
      </>
    )
  );
});

export default UpdateViewer;
