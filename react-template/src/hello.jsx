function Hello(){
  let myName = "Nishant";
  let fullName = () =>{
    return 'Nishant Bhurtel'
  }
  
  return <p>This message is from the future {myName}. My name is {fullName()}</p>
}

export default Hello;