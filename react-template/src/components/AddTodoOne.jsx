function AddTodoOne({ data }) {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{data.task}</div>
        <div class="col-4">{data.date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoOne;
