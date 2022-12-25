import { useSelector } from "react-redux";

const DisplayCardsComponent = ({
  productName,
  productDescription,
  productImage,
  productQuantity,
  productPrice,
  _id,
  onDelete,
  onEdit,
}) => {
  const handleDeleteBtnClick = () => {
    onDelete(_id);
  };
  const handleEditBtnClick = () => {
    onEdit(_id);
  };
  const userData = useSelector((state) => state.auth.userData);

  const showBtns = () => {
    if (userData.admin === true) {
      return (
        <div className="card-body">
          <button
            className="card-link btn btn-warning"
            onClick={handleEditBtnClick}
          >
            Edit
          </button>
          <button
            className="card-link btn btn-danger"
            onClick={handleDeleteBtnClick}
          >
            Delete
          </button>
        </div>
      );
    }
  };
  return (
    <div className="card m-1">
      <img src={productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{productDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{productQuantity}</li>
          <li className="list-group-item">{productPrice}</li>
        </ul>
        {showBtns()}
      </div>
    </div>
  );
};
export default DisplayCardsComponent;
