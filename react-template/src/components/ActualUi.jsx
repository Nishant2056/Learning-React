function ActualUi() {
  return (
    <div className="row kg-row">
      <div className="col-6">{data.task}</div>
      <div className="col-4">{data.date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ActualUi;
