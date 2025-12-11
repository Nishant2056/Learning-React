const ErrorMessage = ({ data }) => {
  return <>{data.length === 0 && <h3>Iam still hungry bro</h3>} </>;
};

export default ErrorMessage;
