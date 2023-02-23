import { Component  } from "react";
import "../css/Button.css";

class Button extends Component{
    
    onTrigger = () => {
        
        this.props.vote_callBack();
        
    }
    render(){ 
        
        const {text} = this.props;
        return (
            <button className="food-post-vote-click" onClick={this.onTrigger}>{text}</button>
        );
    };

}
export default Button;