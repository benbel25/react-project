/* eslint-disable no-unused-vars */
import { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./editCardPopup.css";
import cardSchmea from "../../validation/card";
import Joi from "joi-browser";

const EditBizCardPopupComponent = (props) => {
  const [bizName, setBizName] = useState(props.bizName);
  const [bizDescription, setBizDescription] = useState(props.bizDescription);
  const [bizAddress, setBizAddress] = useState(props.bizAddress);
  const [bizPhone, setBizPhone] = useState(props.bizPhone);
  const [bizImage, setBizImage] = useState(props.bizImage);

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

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleFormClick = (ev) => {
    ev.stopPropagation();
  };

  const handleConfirmClick = () => {
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
      props.onEditDone(props._id, dataToSend);
    }
  };

  const handleCancelClick = () => {
    props.onCancelEdit();
  };

  return (
    <div className="center-wrapper" onClick={handleCancelClick}>
      <form
        onSubmit={handleSubmit}
        className="center-absolut"
        onClick={handleFormClick}
      >
        <div className="mb-3">
          <h3>Edit card</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="bizNameInput" className="form-label">
            Biz Name:
          </label>
          <input
            type="text"
            className="form-control popupInput"
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
            className="form-control popupInput"
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
            className="form-control popupInput"
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
            className="form-control popupInput"
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
            className="form-control popupInput"
            id="bizImageInput"
            value={bizImage}
            onChange={handleBizImageChange}
          />
        </div>
        <div className="row">
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleConfirmClick}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-danger w-100"
              onClick={handleCancelClick}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBizCardPopupComponent;
