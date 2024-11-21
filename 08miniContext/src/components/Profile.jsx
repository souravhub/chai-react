import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
	const { user } = useContext(UserContext);
	if (!user) return <div>Not logged in</div>;
	return <div> Logged in as {user.username}</div>;
}

export default Profile;
