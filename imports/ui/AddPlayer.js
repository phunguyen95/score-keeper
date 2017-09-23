import React from 'react';
import { Players } from "./../api/players";

class AddPlayer extends React.Component {
	 

	 handleSubmit(event){
	let playerName = event.target.playerName.value; //from form
	event.preventDefault(); //stop page refresh;
	if (playerName) {
		event.target.playerName.value ='';
		Players.insert({
			name: playerName,
			score: 0
		});
	}
}

	render(){
		return(<div className="item">
				<form className="form"onSubmit={this.handleSubmit.bind(this)}> {/*flex-grow :1 scss*/}
					<input className="form__input"
						type="text"
						name="playerName"
						placeholder="Player name"
					/>

					<button className="button">Add Player</button>
				</form>
			</div>
			);
	}
}
export default AddPlayer;