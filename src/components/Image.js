import React, {useEffect, useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Image extends React.Component {
  render() {
    return <div class="container">
              <div className="columns is-centered pt-6">
                <figure className="column is-four-fifths image has-text-centered">
                    <LazyLoadImage
                    effect="blur"
                    src={this.props.image} />
                </figure>
              </div>
    </div>
  }
}

export default Image;
