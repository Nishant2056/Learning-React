const InputPart = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success">
            Success
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPart;
