import { configureStore } from '@reduxjs/toolkit';
import { notificationSlice } from './notifications/notification.slice';
import { userSlice } from './users/user.slice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		notification: notificationSlice.reducer,
	}
});

export type AppDispatch = typeof store.dispatch;