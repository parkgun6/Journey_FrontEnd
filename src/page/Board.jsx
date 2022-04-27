import { Box, Button } from '@mui/material';
import ImgListViewer from 'component/board/ImgListViewer';
import {
  LinkToImgConvert,
  LinkToImgSlice,
  LinkToTextFieldTest,
} from 'common/location/LinkTo';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunkDeleteTodo, thunkGetList } from 'store/todo/todoAsyncthunk';
import { changeSno } from 'store/todo/todoReducer';
import Modal from 'common/modal/Modal';
import { getFirestore } from 'firebase/firestore';
import { initialize } from 'config/firebaseInit';
import { deleteObject, ref } from '@firebase/storage';

const HelloWorld = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const storage = getFirestore(initialize);

  const [modalHeader, setModalHeader] = useState();
  const [modalContent, setModalContent] = useState();
  const [modalRedirect, setModalRedirect] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const onClickLinkToModify = async (sno) => {
    await dispatch(changeSno(sno));
    navigator('/modifytodo');
  };

  const scsMsg = useSelector((state) => state.todo.message);
  const errMsg = useSelector((state) => state.todo.errMsg);

  const onClickDeleteSno = async (sno, imgName) => {
    console.log(imgName);
    imgName.split('|').forEach((res) => {
      console.log(res);
      const desertRef = ref(storage, res);
      console.log(desertRef);
      deleteObject(desertRef).then((result) => console.log(result));
    });
    // await dispatch(thunkDeleteTodo(Number(sno))).then((action) => {
    //   setModalOpen(true);
    //   setModalHeader('알림');
    //   setModalContent(action.payload);
    //   setModalRedirect('0');
    // });
  };

  const [pageNum, setPageNum] = useState(1);
  const onClickPlusPageState = () => {
    setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(thunkGetList(pageNum));
  }, [pageNum]);

  return (
    <Box>
      {/*  <LinkToImgConvert />
      <LinkToImgSlice />
      <LinkToTextFieldTest /> */}
      <ImgListViewer
        onClickLinkToModify={onClickLinkToModify}
        onClickDeleteSno={onClickDeleteSno}
      />
      <Modal
        header={modalHeader}
        content={modalContent}
        modalState={modalOpen}
        returnLink={modalRedirect}
        onClickModalClose={handleModalClose}
      />
      <Button onClick={onClickPlusPageState}>더보기</Button>
    </Box>
  );
};

export default HelloWorld;
