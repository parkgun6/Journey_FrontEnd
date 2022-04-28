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
import { useInView } from 'react-intersection-observer';

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

  const onClickDeleteSno = async (sno, imgName) => {
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
  const [infinityScroll, inView] = useInView();

  useEffect(() => {
    setPageNum((prev) => prev + 1);
    dispatch(thunkGetList(pageNum));
  }, [inView]);

  return (
    <Box>
      <ImgListViewer
        onClickLinkToModify={onClickLinkToModify}
        onClickDeleteSno={onClickDeleteSno}
      />
      <div ref={infinityScroll} />
      <Modal
        header={modalHeader}
        content={modalContent}
        modalState={modalOpen}
        returnLink={modalRedirect}
        onClickModalClose={handleModalClose}
      />
    </Box>
  );
};

export default HelloWorld;
