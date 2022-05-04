import { Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

/**
 * 글쓰기로 가는 링크
 */
export const LinkToRegist = () => {
  const navigator = useNavigate();

  const linkToRegistFn = () => {
    navigator('/registertodo');
  };

  return (
    <div>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
        onClick={linkToRegistFn}
      >
        <AddBoxIcon />
      </IconButton>
    </div>
  );
};

/**
 * 로그인으로 가는 링크
 */
export const LinkToLogin = () => {
  const navigator = useNavigate();

  const linkToLoginFn = () => {
    navigator('/login');
  };

  return (
    <Button color='inherit' onClick={linkToLoginFn}>
      Login
    </Button>
  );
};

/**
 * 이미지압축테스트로 가는 링크
 */
export const LinkToImgConvert = () => {
  const navigator = useNavigate();

  const linkToRegistFn = () => {
    navigator('/imgtest');
  };

  return (
    <Button type='button' variant='outlined' onClick={linkToRegistFn}>
      이미지압축테스트
    </Button>
  );
};

/**
 * 이미지슬라이스테스트로 가는 링크
 */
export const LinkToImgSlice = () => {
  const navigator = useNavigate();

  const linkToRegistFn = () => {
    navigator('/slicktest');
  };

  return (
    <Button type='button' variant='outlined' onClick={linkToRegistFn}>
      이미지슬라이스테스트
    </Button>
  );
};

/**
 * 모달테스트로 가는 링크
 */
export const LinkToModal = () => {
  const navigator = useNavigate();

  const linkToRegistFn = () => {
    navigator('/modaltest');
  };

  return (
    <Button type='button' variant='outlined' onClick={linkToRegistFn}>
      모달테스트
    </Button>
  );
};

/**
 * 인풋태그테스트로 가는 링크
 */
export const LinkToTextFieldTest = () => {
  const navigator = useNavigate();

  const linkToRegistFn = () => {
    navigator('/textfieldtest');
  };

  return (
    <Button type='button' variant='outlined' onClick={linkToRegistFn}>
      인풋텍스트 및 모달 테스트
    </Button>
  );
};
