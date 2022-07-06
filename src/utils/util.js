import {Platform} from 'react-native';
export const removeElementFromList = (list = [], removeId) => {
  const isExist = list.some(item => item.id === removeId);
  if (!isExist) {
    return list;
  }
  let index = list.findIndex(item => item.id === removeId);
  list.splice(index, 1);
  return list;
};

export const updateElementFromList = (list = [], removeId, updatedObject) => {
  const isExist = list.some(item => item.id === removeId);
  if (!isExist) {
    return list;
  }
  let index = list.findIndex(item => item.id === removeId);
  // list.splice(index, 1);
  list[index] = updatedObject;
  return list;
};

export const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  return;
};
