/* eslint-disable react/jsx-props-no-spreading */
import { Paper, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OptionMenu from './OptionMenu';

const useStyles = makeStyles({
  paper: {
    marginBottom: '20px',
  },
  text: {
    margin: '10px',
    fontSize: '18px',
  },
  topContent: {
    paddingLeft: '10px',
    height: '45px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyContent: {
    paddingLeft: '10px',
  },
  image: {
    width: '100%',
    height: '350px',
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

const ImgListViewer = ({ onClickLinkToModify, onClickDeleteBno }) => {
  const classes = useStyles();
  const dtoList = useSelector((state) => state.todo.dtoList);
  const [boardList, setBoardList] = useState([]);
  const [heartState, setHeartState] = useState(false);

  const onClickHeartIcon = () => {
    return heartState ? setHeartState(false) : setHeartState(true);
  };

  useEffect(() => {
    if (dtoList) setBoardList((prev) => [...prev, ...dtoList]);
  }, [dtoList]);

  const returnDTOList = () => {
    return (
      boardList && (
        <>
          {Array.from(boardList).map((res) => (
            <Paper elevation={3} key={res.bno} className={classes.paper}>
              <div key={uuidv4()}>
                <div className={classes.topContent}>
                  {res.bno}
                  <div>
                    <span>
                      <OptionMenu
                        onClickLinkToModify={() => onClickLinkToModify(res.bno)}
                        onClickDeleteBno={() =>
                          onClickDeleteBno(res.bno, res.imgName)
                        }
                      />
                    </span>
                  </div>
                </div>
                <Slider {...slickSettings}>
                  {res.path.split('|').map((resSrc) => (
                    <img
                      className={classes.image}
                      key={uuidv4()}
                      src={resSrc}
                      alt=''
                    />
                  ))}
                </Slider>
                <div className={classes.bodyContent}>
                  {heartState ? (
                    <IconButton
                      size='large'
                      edge='start'
                      color='inherit'
                      aria-label='menu'
                      sx={{ mr: 2 }}
                      onClick={onClickHeartIcon}
                    >
                      <FavoriteIcon sx={{ color: 'red' }} />
                    </IconButton>
                  ) : (
                    <IconButton
                      size='large'
                      edge='start'
                      color='inherit'
                      aria-label='menu'
                      sx={{ mr: 2 }}
                      onClick={onClickHeartIcon}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                  )}
                  <div className={classes.text}>사용자ID {res.text}</div>
                  <div>{res.regDate.substring(0, 10)}</div>
                </div>
              </div>
            </Paper>
          ))}
        </>
      )
    );
  };

  return <>{returnDTOList()}</>;
};

export default ImgListViewer;
