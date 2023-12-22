
import { useState } from 'react';
import './App.css';
import Forum from './pages/forum/Forum';
import Header from './components/Header';
import Group from './components/Group';

function App() {
  const userOld = {name: "Herbert", tartiness: "high"};
  const [switcher, setSwitcher] = useState("Forum");
 
  const [user, setUser] = useState({name: "Herbert", tartiness: "high", id: "91"});
  let format = "A4";
 
 
  const pageOption = ["forum", "message", "news"];

  const example = (multiply) => {
  
    return 45 * multiply;
  }

  example();
  const duplicate = example(2);
  // duplicate == 90
  const duplicate2 = example;
  duplicate2(5);
  // duplicate 225

  const changeUserdata = () => {
    setUser({name: "Herbert", tartiness: "low", id: "91"});
  }

  const changeFormatdata = () => {
    format = "A3";
    console.log(format);
  }

  return (
    <div>
        <Header setSwitcher={setSwitcher}/>
        <button onClick={() => {changeFormatdata()}}>Change format</button>
        <h1>{format}</h1>
        {switcher === "Forum" ? 
          <Forum user={user} color="blue" date="Today" changeUserdata={changeUserdata}></Forum> 
          :
          <Group>
          <p>Fill up with water</p>
          <div>
            <ul>
              <li>
                Glass
              </li>
            </ul>
          </div>
        </Group>
      }
        
       
        
        
    </div>
  );
}

export default App;
