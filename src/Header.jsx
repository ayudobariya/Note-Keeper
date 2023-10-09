import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
	return (
		<>
			<div className="header">
				<img src={logo} alt="logo" height="80p" width='70px' style={{ marginRight: "10px" }} />
				<h1> Ayushi Keep </h1>
			</div>
		</>
	);
}

export default Header;