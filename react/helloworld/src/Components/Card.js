import Ui from "./Ui";
const Data = [
  {
    id: "image 1",
    image: "../foodImages/biryani.jpg",
    title: "Biryani",
    description:
      "A world-renowned Indian dish, biryani takes time and practice to make but is worth every bit of the effort. Long-grained rice (like basmati) flavored with exotic spices, such as saffron, is layered with lamb, chicken, fish, or vegetables, and a thick gravy. ",
  },
  {
    id: "image 2",
    image: "../foodImages/burger.jpg",
    title: "Burger",
    description:
      "A hamburger (also burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.",
  },
  {
    id: "image 3",
    image: "../foodImages/noodles.jpg",
    title: "Noodles",
    description:
      "Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings.",
  },
  {
    id: "image 4",
    image: "../foodImages/pizza.jpg",
    title: "Pizza",
    description:
      "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and other ingredients. Pizza is baked quickly—often, commercially, using a wood-fired oven heated to a very high temperature—and served hot.",
  },
];

function Card() {
  return <Ui cards={Data} />;
}

export default Card;
