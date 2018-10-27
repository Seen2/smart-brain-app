import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo=()=> {
    return (
			<div style={{padding:'20px'}} >
				<Tilt className="Tilt" options={{ max : 25 }} style={logoStyle} >
					<div className="Tilt-inner">
						<img height={"80px"} width={"120px"} src={brain} alt="logo"/> 
					</div>
				</Tilt>
      </div>
    );
}  
const logoStyle={
	margin:'10',
	textAlign:'center',
	padding:'30px',
	height:'150px',
	width:'120px',
	backgroundImage: 'linear-gradient(to right, grey ,red)',
	border:'1px solid grey'
}
export default Logo;
