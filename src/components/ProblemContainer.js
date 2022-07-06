import React, {useEffect, useState} from 'react';

class ProblemContainer extends React.Component {
  render() {
    return <div className="problem-container pt-6">
          <div className="statement-container">
            <p className="is-size-4 has-text-weight-bold border-bottom">Problem Statement</p> 
            <p className="pt-3">{this.props.problem}</p>
          </div>
          
          <div className="goals-container">
            <p className="is-size-4 has-text-weight-bold border-bottom">Project Goals</p> 
            <p className="pt-3">{this.props.goals}</p>
          </div>
        </div>
  }
}

export default ProblemContainer;
