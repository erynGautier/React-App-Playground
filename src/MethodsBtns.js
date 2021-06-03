import { UserCard } from './UserCard'
import { retStr } from './App'

export const MethodsBtns = (props) => {
  console.log(props)
  return(
    <div>
      <button onClick={() => workshopUpdate(props.counter, props.updateCounter)}>
        Attended Workshop
      </button>
      <button onClick={() => commentUpdate(props.counter, props.updateCounter)}>
        Commented on Post
      </button>
      <button onClick={() => winUpdate(props.counter, props.updateCounter)}>
        Won a Game
      </button>
      <button onClick={() => byteUpdate(props.counter, props.updateCounter)}>
        Created a Byte
      </button>
      <button onClick={() => challengeUpdate(props.counter, props.updateCounter)}>
        Won a Fun Challenge
      </button>
    </div>
  );
};

const workshopUpdate = (counter, updateCounter) => {
  updateCounter(counter + 1);
}

const commentUpdate = (counter, updateCounter) => {
  updateCounter(counter + 1);
}

const winUpdate = (counter, updateCounter) => {
  updateCounter(counter + 5);
}

const byteUpdate = (counter, updateCounter) => {
  updateCounter(counter + 7);
}

const challengeUpdate = (counter, updateCounter) => {
  updateCounter(counter + 10);
}