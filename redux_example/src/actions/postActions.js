import { FETCH_POSTS, NEW_POST } from './types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const createPost = (postData) => dispatch => {
	console.log('posting...');
	fetch(API_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
		.then(res => res.json())
		.then(post => dispatch({
			type: NEW_POST,
			payload: post,
		}));
}


export const fetchPosts = () => dispatch => {
	console.log('fetching...');		 
	fetch(API_URL)
		.then(res => res.json())
		.then(posts => dispatch({
			type: FETCH_POSTS,
			payload: posts,
		}));	//dispatch data to the reducer
}