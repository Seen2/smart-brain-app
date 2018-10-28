import React from 'react';
import './ImageForm.css';
const ImageForm =({onInputChange,onSubmit})=>{
    return (
			<div className="form center" >
				<input onChange={onInputChange} type="text" />{' '}
				<button onClick={onSubmit}>Detect</button>
      </div>
    );
}

export default ImageForm;
