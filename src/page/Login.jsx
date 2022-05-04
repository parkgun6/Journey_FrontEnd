import React, { useRef } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const id = useRef();
  const pw = useRef();
  const navigator = useNavigate();
  const onClickLoginBtn = () => {
    console.log(id.current.value);
    console.log(pw.current.value);

    navigator('/login_proc');
    // navigator('http://localhost:8080/login_proc');
  };
  return (
    <div>
      <div>
        id: <input type='text' ref={id} />
      </div>
      <div>
        pw: <input type='text' ref={pw} />
      </div>
      <div>
        <Button color='inherit' variant='outlined' onClick={onClickLoginBtn}>
          로그인
        </Button>
      </div>
      <a href='http://localhost:8080/oauth2/authorization/google'>
        Google Login
      </a>
    </div>
  );
};

export default Login;
