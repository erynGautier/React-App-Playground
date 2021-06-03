import { retStr } from './App'
import { MethodsBtns } from './MethodsBtns'

export const UserCard = (props) => {
	return(
		<div style={{paddingLeft: "2.5em", paddingRight: "2.5em", paddingBottom: "0.75em"}}>
	      {retStr(props.name)}
	      <div style={{paddingLeft: "2.5em", paddingTop: "1.25em", borderTop: "1px solid royalblue"}}>
	        <div style={{paddingBottom: "0.75em"}}>
	         	<MethodsBtns 
	         	counter={props.counter}
            	updateCounter={props.updateCounter}
            	/>
	        </div>
	      </div>
	    </div>	
	);
};