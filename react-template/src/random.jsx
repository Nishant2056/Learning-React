function Random() {

  let number = Math.random() * 100;
return <div style={{'background':'red', 'margin-top':'10px', 'text-align':'center'}}>Random Number is: {Math.round(number)}</div>;
}

export default Random;