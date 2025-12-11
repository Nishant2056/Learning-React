const TodoUi = ({ task, date, priority }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-1">pr: {priority}</div>
        <div className="col-1">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoUi;
