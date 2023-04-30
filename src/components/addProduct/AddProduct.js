import React, { Component } from "react";
import { nanoid } from "nanoid";

const createCart = ({ description, image }) => ({
  id: nanoid(),
  image,
  title: description,
  description: "4 MSL",
  availableSizes: ["S", "XL", "L"],
  style: description,
  price: 10.9,
  installments: 9,
  currencyId: "USD",
  currencyFormat: "$",
  isFreeShipping: true,
});

export default class AddProduct extends Component {
  state = {
    description: "",
    image: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const product = createCart(this.state);
    this.props.onUpdateProduct(product);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { description, image } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          name="image"
          value={image}
          placeholder="image"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="description"
          value={description}
          placeholder="description"
        />
        <button type="submit">add</button>
      </form>
    );
  }
}
