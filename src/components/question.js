import React, {Component} from 'react';

export default class Question extends Component{
    constructor(props){
        super(props);     
        this.state = {rightAnswers : [], userAnswer : null, activeIndex: null};     
    }
    componentWillMount(){
        this.setState({
            rightAnswers: [...this.state.rightAnswers, ...this.props.question.answer]
          })
    }
    handleClick(userAnswer, index){           
        this.setState({
        userAnswer,
        activeIndex: index
      })      
      this.showResult();
    }
    showResult(){
    const showValues = this.state.rightAnswers.some(answer => answer === this.state.userAnswer)
    if(this.state.userAnswer === null){
        return <div></div>
    }
    if(showValues){
        return <div className="text-success">Correct!</div>

    }else{
        return <div className="text-warning">False</div>
    }
       
    }
    render(){
        const { question } = this.props;
        
        return(
        <div>
            <ul className="list-group">
                <li className="list-group-item list-group-item-info"><span className="font-weight-bold">{question.question}</span></li>
                    {question.options.map((option, index)=> {
                    const className = this.state.activeIndex === index ? 'list-group-item active option' : 'list-group-item option';  
                    return(
                    <li className={className} key={index} onClick={()=>this.handleClick(option.option,index)}>{option.option}</li>)})}
            </ul>  
            <div>{this.showResult()}</div>          
        </div>
        )
    }
}
