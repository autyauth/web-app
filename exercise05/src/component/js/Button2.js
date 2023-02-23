import { Component } from "react";
import "../css/Button2.css";
class Button2 extends Component{
    onTrigger = () => {
        
        this.props.unvote_callBack();
        
    }
    render(){ 
        
        const {text} = this.props;
        return (
            <button className="food-post-vote-click" onClick={this.onTrigger}>{text}</button>
        );
    };

}
export default Button2;