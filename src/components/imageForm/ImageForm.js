import React, { Component } from 'react';
import './ImageForm.css';
class ImageForm extends Component {
  render() {
    return (
			<div className="form center" >
				<input type="text" />{' '}
				<input type="submit" value="Detect" />
      </div>
    );
  }
}

export default ImageForm;
