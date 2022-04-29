import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'Content-Type': `application/json` },
});

export const getList = async (page) => {
  const res = await api.get(`/list/${page}`);
  return res.data;
};

export const getTextWithImg = async (bno) => {
  const res = await api.get(`/read/${bno}`);
  return res.data;
};

export const saveTodo = async ({ text, imgDTOList }) => {
  const res = await api.post(`/todo`, JSON.stringify({ text, imgDTOList }));
  return res.data;
};

export const modifyTodo = async ({ bno, text }) => {
  const res = await api.put(`/${bno}`, JSON.stringify({ bno, text }));
  return res.data;
};

export const deleteTodo = async (bno) => {
  const res = await api.delete(`/${bno}`);
  return res.data;
};
