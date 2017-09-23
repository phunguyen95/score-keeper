import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Players,calculatePlayerPosition } from "./../imports/api/players";
import { Tracker } from "meteor/tracker";

import App from "./../imports/ui/App";

//The goal here is to register a callback, so we want to reference our function as opposed to calling it. The referenced function will be called when the form is submitted and the event fires.

Meteor.startup(() => {
	Tracker.autorun(() => {
		//when one of thoese queries changes it reruns the function which means that if we
		let players = Players.find(
			{},
			{
				sort: {score:-1}
			}
		).fetch();
		let posiitonPlayer=calculatePlayerPosition(players);

		let title = "Score Keeper";

		ReactDOM.render(
			<App title={title} players={posiitonPlayer} />,
			document.getElementById("app")
		);
	});
});