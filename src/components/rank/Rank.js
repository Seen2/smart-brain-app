import React from 'react';

export default class Rank extends React.Component{
	render(){
		const rank=5;
		return(
			<div>
				<h2>{`userName you Rank is:`}</h2>
				<h1>{rank}</h1>
			</div>
		);
	}
}
