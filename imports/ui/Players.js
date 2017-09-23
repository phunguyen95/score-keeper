import React from "react";
import { Players } from "./../api/players";
import PropTypes from "prop-types";
import FlipMove from 'react-flip-move';

class Player extends React.Component {
	handleDelete(id) {
		Players.remove({ _id: id }, function(err, result) {
			console.log("success");
		});
	}

	handleUpdateIncrement(id) {
		Players.update({ _id: id }, { $inc: { score: 1 } });
	}
	handleUpdateDecrement(id) {
		Players.update({ _id: id }, { $inc: { score: -1 } });
	}
	render() {
		let itemClassName=`item item--position-${this.props.player.rank}`;

		return (
			<div className={itemClassName}>
				<div className="player">
					<div>
						<h3 className="player__name">
						{this.props.player.name}
						</h3>
						<p className="player__stats">
							 {this.props.player.position} place{this.props.player.score} points
						</p>
					</div>
					<div className="player__actions">
						<button
							className="button button--round"
							onClick={() =>
								this.handleUpdateIncrement(
									this.props.player._id
								)}
						>
							+
						</button>
						<button
							className="button button--round"
							onClick={() =>
								this.handleUpdateDecrement(
									this.props.player._id
								)}
						>
							-
						</button>

						<button
							className="button button--round"
							onClick={() =>
								this.handleDelete(this.props.player._id)}
						>
							x
						</button>
					</div>
				</div>
			</div>
		);
	}
}
Player.propTypes = {
	player: PropTypes.object.isRequired
};
export default Player;