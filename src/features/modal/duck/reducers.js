import { TOY2MODAL } from "./types";

const initialState = [
  {
    keywords: [],
    _id: "_id",
    id: "id",
    name: "Toys4us Toy",
    description: "Toys4us Toy Description",
    image: "img.jpg",
    age: "0+",
    price: "1.23",
    date: "Date"
  }
];

const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOY2MODAL:
      return [payload];

    default:
      return state;
  }
};

export default modalReducer;
