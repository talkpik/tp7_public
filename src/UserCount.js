import React, { Component} from 'react';

class UserCount extends Component {
	state={
		count:null,
	};

	async componentDidMount(){
		const url="https://api.countapi.xyz/update/talkpik1/website/?amount=1";
		const response=await fetch(url);
		const data = await response.json();
		this.setState({count:data.value});
	}

	render(){		  
  		return (
	  		<div className="UserCount" style={{display:"none"}}>
	  			<p>This page has</p>
				<h1 id="count">{this.state.count}</h1>
				<p>views</p>
	  		</div>
		  );
	}
}
export default UserCount;