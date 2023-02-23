import { Component } from 'react';
import '../css/Score.css';
class Score extends Component{
   
    render(){
        const {score} = this.props;
        return(
            <div className="food-post-score">{score}</div>
        );
    };
}
export default Score;