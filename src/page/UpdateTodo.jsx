import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  thunkModifyTodo,
  thunkGetTextWithImg,
} from 'store/todo/todoAsyncthunk';
import { useNavigate } from 'react-router-dom';
import UpdateViewer from 'component/updatetodo/UpdateInput';
import Modal from 'common/modal/Modal';

const UpdateTodo = () => {
  const bno = useSelector((state) => state.todo.bno);
  const scsMsg = useSelector((state) => state.todo.message);
  const errMsg = useSelector((state) => state.todo.errMsg);
  const changedText = useRef();
  const navigator = useNavigate();

  const dispatch = useDispatch();
  useEffect(async () => {
    console.log(bno);
    await dispatch(thunkGetTextWithImg(bno));
  }, []);

  const [modalHeader, setModalHeader] = useState();
  const [modalContent, setModalContent] = useState();
  const [modalRedirect, setModalRedirect] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const modifyTodoFn = () => {
    const text = changedText.current.value;
    console.log(text);
    dispatch(thunkModifyTodo({ bno, text }))
      .then((action) => {
        setModalOpen(true);
        setModalHeader('알림');
        setModalContent(action.payload);
        setModalRedirect('/');
      })
      .catch(() => alert(errMsg));
  };

  return (
    <div>
      <UpdateViewer ref={changedText} onClickModify={modifyTodoFn} />
      <Modal
        header={modalHeader}
        content={modalContent}
        modalState={modalOpen}
        returnLink={modalRedirect}
        onClickModalClose={handleModalClose}
      />
    </div>
  );
};

export default UpdateTodo;
