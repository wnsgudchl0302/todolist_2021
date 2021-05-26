import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { TextField, Typography } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">TODO LIST</div>
      <div className="input_area">
        <TextField label="제목" size="normal" margin="normal" fullWidth required />
        <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline/> 
        <Button  color="primary">
          Hello World
        </Button>
      </div>
      <div className="list_area">리스트 영역</div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © 최준형 '+new Date().getFullYear()+'.'}
      </Typography>
    </div>
  );
}

export default App;
