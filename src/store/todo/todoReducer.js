import { createSlice } from '@reduxjs/toolkit';
import {
  thunkGetList,
  thunkGetTextWithImg,
  thunkSaveTodo,
  thunkModifyTodo,
  thunkDeleteTodo,
} from './todoAsyncthunk';

const todoSlice = createSlice({
  name: 'bno',
  initialState: {
    bno: 0,
    text: '',
    imgSrc: '',
    saveResImgList: [],
    message: '',
    loading: false,
    dtoList: [],
    imgDTOList: '',
    errMsg: '',
    regMsg: '',
    textWithImg: [],
  },

  // 동기적으로 처리할경우 reducers
  // 비동기로 처리하지 않는경우.
  reducers: {
    changeBno: (state, action) => {
      state.bno = action.payload;
    },
    changeImgName: (state, action) => {
      state.imgDTOList = action.payload;
    },
    noticeRegistStorage: (state, action) => {
      state.regMsg = action.payload;
    },
  },

  extraReducers: {
    /**
     * thunkGetList
     */
    [thunkGetList.pending]: (state, action) => {
      state.loading = true;
    },
    [thunkGetList.fulfilled]: (state, action) => {
      state.dtoList = action.payload;
      state.loading = false;
    },
    [thunkGetList.rejected]: (state, action) => {
      state.loading = false;
    },

    /**
     * thunkGetTextWithImg
     */
    [thunkGetTextWithImg.pending]: (state, action) => {
      state.loading = true;
    },
    [thunkGetTextWithImg.fulfilled]: (state, action) => {
      state.textWithImg = action.payload;
    },
    [thunkGetTextWithImg.rejected]: (state, action) => {
      state.loading = false;
    },

    /**
     * thunkSaveTodo
     */
    [thunkSaveTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [thunkSaveTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.saveResImgList = action.payload;
    },
    [thunkSaveTodo.rejected]: (state, action) => {
      state.errMsg = action.payload;
      state.loading = false;
    },

    /**
     * thunkModifyTodo
     */
    [thunkModifyTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [thunkModifyTodo.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    [thunkModifyTodo.rejected]: (state, action) => {
      state.errMsg = action.payload;
      state.loading = false;
    },

    /**
     * thunkDeleteTodo
     */
    [thunkDeleteTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [thunkDeleteTodo.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    [thunkDeleteTodo.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { changeBno, changeImgName, noticeRegistStorage } =
  todoSlice.actions;

export default todoSlice.reducer;
