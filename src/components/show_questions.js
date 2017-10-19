import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import Question from './question';
import Logo from './logo';

class ShowQuestions extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-xs-left"><Logo/></div>
                    <div className="col-md-6 text-xs-right">
                        <Link className="btn btn-primary customButton" to="/addnew">New question</Link>
                    </div>
                </div>
                <div>
                    {_.map(this.props.questions, question => <Question question={question} key={question.id}/>)}
                </div>
                <div className="row">
                    <div className="col-md-12 text-xs-right">
                        {_.size(this.props.questions)}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {questions: state.questions}
}

export default connect(mapStateToProps)(ShowQuestions)
