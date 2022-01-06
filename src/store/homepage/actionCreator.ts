import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from './actionType';

export const getComments = (postId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_COMMENTS_PENDING
    });

    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

      dispatch({
        type: ActionType.GET_POST_COMMENTS_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_POST_COMMENTS_FAIL,
        payload: (err as Error).message
      });
    }
  };
};
