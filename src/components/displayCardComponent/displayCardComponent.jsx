const DisplayCardsComponent = ({
  bizName,
  bizDescription,
  bizImage,
  bizPhone,
  bizAddress,
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
  return (
    <div className="card m-1">
      <img src={bizImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{bizPhone}</li>
          <li className="list-group-item">{bizAddress}</li>
        </ul>
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
      </div>
    </div>
  );
};
export default DisplayCardsComponent;
