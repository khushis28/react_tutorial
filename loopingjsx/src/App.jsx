import NetflixSeries from "./components/NetflixSeries"
import Abouts from "./components/props/Abouts";
import Data from "./components/props/Data";
import Address from "./components/props/Address";
import Email from "./components/props/Email";

const name = "Khushi";
const lastName = "Singh";
const address= "lucknow";
const email= "khushi@gmail.com";

 const App = () =>{
  return (
    <>
    {/* <NetflixSeries/> */}
    <Abouts name={name} lastName={lastName} />
    <Data />
    <Address address={address}/>
    <Email email={email}/>
  </>
  )
}

export default App;