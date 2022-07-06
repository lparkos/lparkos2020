import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class ProjectSetup extends React.Component {
  render() {
    return <div class="container pt-6 pb-3">

        <div className="columns pt-6 is-centered">
            <div className="column is-three-fifths">
                <p className="is-size-4 has-text-weight-bold border-bottom">Business Goal</p>
                <p className="is-size-5 pt-2">{this.props.goal}</p>
            </div>
        </div>

        <div className="columns pt-3 is-centered">
            <div className="column is-three-fifths">
                <div className="columns pt-3 is-mobile">
                    <div className="column is-half">
                        <p className="is-size-4 has-text-weight-bold border-bottom">Success Metric</p>
                        <p className="is-size-5 pt-2">{this.props.success}</p>
                    </div>
 
                    <div className="column is-half">
                        <p className="is-size-4 has-text-weight-bold border-bottom">Timeline</p>
                        <p className="is-size-5 pt-2">{this.props.timeline}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="columns pt-3 is-centered">
            <div className="column is-three-fifths">
                <p className="is-size-4 has-text-weight-bold  border-bottom">Problem Statement</p>
                <p className="is-size-5 pt-2">{this.props.problem}</p>
            </div>
        </div>
    </div>
  }
}

export default ProjectSetup;