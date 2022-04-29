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
    margin: '20px',
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
              <div key={res.bno}>
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
                    <img key={uuidv4()} src={resSrc} alt='' />
                  ))}
                </Slider>
                {heartState ? (
                  <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                    onClick={onClickHeartIcon}
                    className={classes.heart}
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
                    className={classes.heart}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
                <div className={classes.text}>사용자ID {res.text}</div>
                <div style={{ paddingLeft: '10px', paddingBottom: '20px' }}>
                  {res.regDate.substring(0, 10)}
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
