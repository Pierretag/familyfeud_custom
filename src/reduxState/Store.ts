import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import TeamSlice from './TeamSlice';

export const store = configureStore({
    reducer: {
        team: TeamSlice,
    },
});
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
