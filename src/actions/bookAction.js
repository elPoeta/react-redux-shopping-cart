import * as types from "./types";

export const getBooks = () => async dispatch => {
  const response = await fetch('https://api.sheety.co/cb14b36e-1513-45fa-bdb0-8b35c4feaac8');
  const data = await response.json();
  dispatch({ type: types.GET_BOOKS_SUCCESS, payload: data });
};

/*const books = [
    {
      id: 1,
      title: "Learn Redux",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim.",
      price: 87,
      isAvailable: true
    },
    {
      id: 2,
      title: "Linux",
      description:
        "Desc. dolor sit amet consectetur adipisicing elit. Cumque, enim.",
      price: 106,
      isAvailable: true
    },
    {
      id: 3,
      title: "Learn JavaScript",
      description:
        "Ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim.",
      price: 43,
      isAvailable: true
    }
  ];*/

