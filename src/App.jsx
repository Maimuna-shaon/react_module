import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './component/BioData';

function App() {
  /*const name='shawon';
  console.log(name,"name");
  const skills=["js","React","Redux"];*/

  return (
    <div className="App">
      <BioData
      name="Mahir Asif"
      age={27}
      email="asifmahir@gmail.com"
      skills={["React","Redus","NodeJS"]}
      interests={["System Design","Football","Chess"]}
      sociallinks={[
        {medianame:"fb",
        mediaAdd:"FB.com/asifmahir"},
        {medianame:"Github",
        mediaAdd:"github.com/asifmahir"},
        {medianame:"LinkedIn",
        mediaAdd:"LinkedIn.com/asifmahir"},
      ]}
      />
     <hr />
     
    </div>

  );
}

export default App
