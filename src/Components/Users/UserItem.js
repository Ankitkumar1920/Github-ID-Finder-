import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				className='round-img'
				style={{ width: "100px" }}
				alt='profile img'
			/>
			<h3>{login}</h3>
			<div>
				<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
					View Full Profile
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
