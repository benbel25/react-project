import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import cardSchmea from "../../validation/card";
import { useHistory } from "react-router-dom";

const CreateProductCardPage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleProductNameChange = (ev) => {
    setProductName(ev.target.value);
  };
  const handleProductDescriptionChange = (ev) => {
    setProductDescription(ev.target.value);
  };
  const handleProductPriceChange = (ev) => {
    setProductPrice(ev.target.value);
  };
  const handleProductQuantityChange = (ev) => {
    setProductQuantity(ev.target.value);
  };
  const handleProductImageChange = (ev) => {
    setProductImage(ev.target.value);
  };

  const history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validatedValue = Joi.validate(
      {
        productName,
        productDescription,
        productPrice,
        productQuantity,
        productImage,
      },
      cardSchmea,
      {
        abortEarly: false,
      }
    );
    const { error } = validatedValue;
    if (error) {
      for (let item of error.details) {
        toast.error(item.message.replaceAll('"', ""));
      }
    } else {
      let dataToSend = {
        productName,
        productDescription,
        productPrice,
        productQuantity,
      };
      if (productImage) {
        dataToSend.productImage = productImage;
      }
      axios
        .post("/cards", dataToSend)
        .then((data) => {
          toast("new card created 😎");
          history.push("/mycards");
        })
        .catch((err) => {
          console.log("something went wrong");
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <h1>Create Card</h1>
      <p>Create product card!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="bizNameInput" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizNameInput"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizDescriptionInput" className="form-label">
            Product Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizDescriptionInput"
            value={productDescription}
            onChange={handleProductDescriptionChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizAddressInput" className="form-label">
            Product Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizAddressInput"
            value={productPrice}
            onChange={handleProductPriceChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizPhoneInput" className="form-label">
            Product Quantity:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizPhoneInput"
            value={productQuantity}
            onChange={handleProductQuantityChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizImageInput" className="form-label">
            Product Image (url):
          </label>
          <input
            type="text"
            className="form-control"
            id="bizImageInput"
            value={productImage}
            onChange={handleProductImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Card
        </button>
      </form>
    </div>
  );
};

export default CreateProductCardPage;
