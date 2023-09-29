import ImgUpload from "./forms/ImgUpload";
import AdditionalQuestion from "./forms/AdditionalQuestion";
import PersonalInfo from './forms/PresonalInfo';
import Profile from "./forms/Profile";

function App() {

  

  return (<div className=" w-screen flex flex-col justify-center gap-10 items-center">
        <ImgUpload/>
        <PersonalInfo/>
        <Profile/>
        <AdditionalQuestion/>
  </div>);
}

export default App;
