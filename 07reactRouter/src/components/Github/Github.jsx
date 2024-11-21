import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
	const data = useLoaderData();
	console.log(data, 'data');
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch('https://api.github.com/users/hiteshchoudhary')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);

	return (
		<>
			<div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
				Github Followers: {data?.followers}
				<img src={data?.avatar_url} alt="" />
			</div>
		</>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const res = await fetch('https://api.github.com/users/hiteshchoudhary');
	return res.json();
};
