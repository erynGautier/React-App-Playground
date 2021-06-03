import logo from './logo.svg';
import './App.css';
import { UserCard } from './UserCard'
import { useState } from 'react';

function App() {
  const [counter, updateCounter] = useState(0);

  return (
    <div style={{padding: "2.5em"}}>
      {retStr("Total Attendance Roster - ")}
      {counter}
      <div style={{paddingLeft: "2.5em", borderTop: "1px solid royalblue"}}>

        <div style={{paddingTop: "1.25em"}}>
            <UserCard
            name={'Eryn'}
            counter={counter}
            updateCounter={updateCounter}
            />
      
            <UserCard
            name={'Maya'}
            counter={counter}
            updateCounter={updateCounter}
            />
     
            <UserCard
            name={'Cirill'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Michelle'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Shagun'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Cindy'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Shaniah'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Sophie'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Gabriela'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Kriti'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Rishika'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Isabel'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Corinne'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Shannon'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Claire'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Priska'}
            counter={counter}
            updateCounter={updateCounter}
            />

            <UserCard
            name={'Trang'}
            counter={counter}
            updateCounter={updateCounter}
            />
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
