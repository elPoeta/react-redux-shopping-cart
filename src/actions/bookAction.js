import * as types from "./types";

export const getBooks = () => dispatch => {
  const books = [
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
  ];
  dispatch({ type: types.GET_BOOKS_SUCCESS, payload: books });
};
