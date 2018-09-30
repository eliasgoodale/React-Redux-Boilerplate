import { FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
	items: [],
	item: {},
}

/*
	In postActions we send the action.type and json payload using the dispatch method
*/

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload, 
			};
		case NEW_POST:
			return {
				...state,
				item: action.payload,
			};

		default:
			return state;
	}
}