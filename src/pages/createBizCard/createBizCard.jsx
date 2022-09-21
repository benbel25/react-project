import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import cardSchmea from "../../validation/card";
import { useHistory } from "react-router-dom";

const CreateBizCardPage = () => {
  const [bizName, setBizName] = useState("");
  const [bizDescription, setBizDescription] = useState("");
  const [bizAddress, setBizAddress] = useState("");
  const [bizPhone, setBizPhone] = useState("");
  const [bizImage, setBizImage] = useState("");

  const handleBizNameChange = (ev) => {
    setBizName(ev.target.value);
  };
  const handleBizDescriptionChange = (ev) => {
    setBizDescription(ev.target.value);
  };
  const handleBizAddressChange = (ev) => {
    setBizAddress(ev.target.value);
  };
  const handleBizPhoneChange = (ev) => {
    setBizPhone(ev.target.value);
  };
  const handleBizImageChange = (ev) => {
    setBizImage(ev.target.value);
  };

  const history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validatedValue = Joi.validate(
      { bizName, bizDescription, bizAddress, bizPhone, bizImage },
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
        bizName,
        bizDescription,
        bizAddress,
        bizPhone,
      };
      if (bizImage) {
        dataToSend.bizImage = bizImage;
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
      <h1>Create Business Card</h1>
      <p>Open business card!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="bizNameInput" className="form-label">
            Biz Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizNameInput"
            value={bizName}
            onChange={handleBizNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizDescriptionInput" className="form-label">
            Biz Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizDescriptionInput"
            value={bizDescription}
            onChange={handleBizDescriptionChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizAddressInput" className="form-label">
            Biz Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizAddressInput"
            value={bizAddress}
            onChange={handleBizAddressChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizPhoneInput" className="form-label">
            Biz Phone:
          </label>
          <input
            type="text"
            className="form-control"
            id="bizPhoneInput"
            value={bizPhone}
            onChange={handleBizPhoneChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bizImageInput" className="form-label">
            Biz Image (url):
          </label>
          <input
            type="text"
            className="form-control"
            id="bizImageInput"
            value={bizImage}
            onChange={handleBizImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Card
        </button>
      </form>
    </div>
  );
};

export default CreateBizCardPage;
