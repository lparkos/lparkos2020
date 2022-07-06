import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class InsightsBlock extends React.Component {
  render() {
    return <div className="columns pt-3 is-centered">
            <div className="column is-four-fifths">
                <div class="container pt-6 columns is-variable is-5 is-vcentered is-multiline">
                    <div class="column">
                        <div class="has-background-light has-text-centered p-5">
                            {this.props.insights1}
                        </div>
                    </div>
                    <div class="column">
                        <div class="has-background-light has-text-centered p-5">
                            {this.props.insights2}
                        </div>
                    </div>
                    <div class="column">
                        <div class="has-background-light has-text-centered p-5">
                            {this.props.insights3}
                        </div>
                    </div>
                    <div class="column">
                        <div class="has-background-light has-text-centered p-5">
                            {this.props.insights4}
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
  }
}

export default InsightsBlock;
