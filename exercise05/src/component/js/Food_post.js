import { Component } from "react";

import '../css/Food_post.css';
import Button from "./Button";
import Score from "./Score";

class Food_post extends Component{
    constructor(){
        super();
        this.state ={
            score_: 0  
        }
    }

    vote = () =>{
        if (this.state.score_ < 10){
            this.setState({score_: this.state.score_ +1});
        }else{
            window.alert("Cannot vote more");
        }
    }
    unvote = () =>{
        if (this.state.score_ > 0){
            this.setState({score_: this.state.score_ -1});
        }else{
            window.alert("Cannot unvote");
        }
    }
    show_score = () =>{
        if (this.state.score_ <= 0){
            return "MIN";
        }else if (this.state.score_ >=10){
            return "MAX";
        }else{  
            return this.state.score_;
        }
    }
    render(){
        const {food: food_post} = this.props;
        
        return(
            <div className="food-post-article">
                <div className="food-post-content-grid-container">
                    <div className="food-post-context">
                        <h1 className="food-post-context-type">
                            {food_post.type}
                        </h1>
                        <h3 className="food-post-context-menu">
                            {food_post.menu}
                        </h3>
                        <p>
                            {food_post.info}
                        </p>
                        
                    </div>
                    <div className="food-post-img">
                        <img src={food_post.img} alt=""></img>
                    </div>
                </div>
                <div className="food-post-vote">
                    <Button text="Click to Vote" vote_callBack = {this.vote} />
                    <Score score={this.show_score()}/>
                    <Button text="Click to Unvote" vote_callBack = {this.unvote}/> 
                </div>
            </div>
        );
    };
}
export default Food_post;