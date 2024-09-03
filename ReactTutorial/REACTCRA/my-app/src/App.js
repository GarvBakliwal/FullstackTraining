// import Card from "./Card";
// import Product from "./Components/Product";
import Greeting from "./Components/Greeting";
import ProfileCard from "./Components/ProfileCard";
import StatusMessage from "./Components/StatusMessage";
function App() {
  const myInfo = {
    name : "Garv Bakliwal",
    age : 20,
    location : "Udaipur"
  }
  const status = Math.round(Math.random());
  
  return (
    <div>
      {/* <Card text='Sample Card'/> */}
      {/* <Product/> */}
    <Greeting name = {myInfo.name}/>
    <ProfileCard name = {myInfo.name} age={myInfo.age} location={myInfo.location}/>
    <StatusMessage status = {status}/>
    </div>
  );
}

export default App;
