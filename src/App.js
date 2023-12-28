import { useEffect, useState } from 'react';
import './App.css';

import Button from './components/Button';
import Text from './components/Text';
import Image from './components/Image';
import NavBar from './components/NavBar'; 


function App() {

  const [buttonLabel, setButtonLabel] = useState("Show text");
  const [showText, setShowText] = useState(false);
 
  useEffect(()=>{
  console.log(buttonLabel);
  },[buttonLabel])

  const handleClick = () => {
    if(buttonLabel === 'Show text') 
    {
      setButtonLabel('Hide text');
      setShowText(true);
      // return (<Text text= "Hello World!"/>);
    } 
    else { 
      setButtonLabel('Show text');
      setShowText(false);
  }
}

  return (
    <div>
      <NavBar/>
    {/*    // Main container with flex layout for vertical alignment */}
    <div style={{ display: 'flex', gap:16, padding:16 }}>
      
      {/* Section with a button */}
      
      <Button 
        label = {buttonLabel}
        pushButton={handleClick}
        />
     

      {/* Section with text */}
      
      <Text text={showText}/>
      

      <div style={{ flex: '1' }}></div> {/* Empty div to push Image to the right


      {/* Section with a picture */}
     
        <Image/>
      
    </div>
  </div>
  );
}
  export default App;




{ /*
  return (
    <div>
      <NavBar/>
      {/*<div style={{ marginTop: '0px', display: 'flex', alignItems: 'center' }}>
        

      <div>
        <Button 
        label = {buttonLabel}
        pushButton={handleClick}
        />
        </div>
        
        <div class="text-box2"><Text text={showText}/> </div>
        

        <div style={{ flex: '1' }}></div> {/* Empty div to push Image to the right
        
        <Image />
        
      </div>
    // </div>
  );
}
*/}
