import logo from './logo.svg';
import './App.css';
import { UserCard } from './UserCard'
import { useState } from 'react';

function App() {
  const [counter, updateCounter] = useState(0);
  var namesArr = ["Eryn", "Cindy", "Shagun"];

  return (
    <div style={{padding: "2.5em"}}>
      {retStr("Total Attendance Roster - ")}
      {counter}
      <div style={{paddingLeft: "2.5em", borderTop: "1px solid royalblue"}}>

        <div style={{paddingTop: "1.25em"}}>
            {namesArr.map((name) => {
              return(
                <UserCard
                  name={name}
                  counter={counter}
                  updateCounter={updateCounter}
                  />
              );
            })}
        </div>
      </div>
      <button onClick={()=> {console.log(counter)}}>{retStr("-- > Log Count < --")}</button>
    </div>
  );
}

export function retStr(s) {
  return (s);
}

export default App;
