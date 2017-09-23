import React from "react";
import Player from "./Players";
import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";
import PropTypes from 'prop-types';

export default class App extends React.Component {
	render() {
		var subtitle="Created by Ray"
		return (
			<div>

				<TitleBar
						title={this.props.title} subtitle={subtitle}
				/>
			{/*create div with wrapper class . PlayersList and AddPlayer inside*/}
				<div className="wrapper">
				{/*Rende  AddPlayer Component here */}
				<PlayerList players={this.props.players} />
				<AddPlayer />	
				</div>
			</div>
		);
	}
}

App.propTypes = {
  players: PropTypes.array.isRequired,
  title:PropTypes.string.isRequired
};