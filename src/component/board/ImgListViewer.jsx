/* eslint-disable react/jsx-props-no-spreading */
import { Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';
import { thunkDeleteTodo } from 'store/todo/todoAsyncthunk';
import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';

const useStyles = makeStyles({
  paper: {
    marginBottom: '20px',
  },
  text: {
    margin: '20px',
    fontSize: '18px',
  },
});

const ImgListViewer = ({ onClickLinkToModify, onClickDeleteSno }) => {
  const classes = useStyles();
  const dtoList = useSelector((state) => state.todo.dtoList);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
  };
  const [boardList, setBoardList] = useState(dtoList);
  useEffect(() => {
    setBoardList((prev) => [...prev, dtoList]);
  }, [dtoList]);

  const returnDTOList = () => {
    return (
      dtoList && (
        <>
          {dtoList.map((res) => (
            <Paper elevation={3} key={res.bno} className={classes.paper}>
              <div key={res.bno}>
                {res.bno}
                <div style={{ float: 'right' }}>
                  {res.regDate.substring(0, 10)}
                </div>
                <Slider {...settings}>
                  {res.path.split('|').map((resSrc) => (
                    <img key={uuidv4()} src={resSrc} width='350' alt='' />
                  ))}
                </Slider>
                <div className={classes.text}> {res.text}</div>
                <div>
                  <Button
                    type='button'
                    onClick={() => onClickLinkToModify(res.bno)}
                  >
                    <BuildIcon />
                  </Button>
                  <Button
                    type='button'
                    onClick={() => onClickDeleteSno(res.bno, res.imgName)}
                  >
                    <DeleteIcon />
                  </Button>
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
