import React, {useEffect, useState} from 'react';

class Loading extends React.Component {
  render() {
    return <div>
      <div className="link-container">
        <div class="loader-spin">
            <div class="spinnerBlock">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      </div>
    </div>
  }
}

export default Loading;
