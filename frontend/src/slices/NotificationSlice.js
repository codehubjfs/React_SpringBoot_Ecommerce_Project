import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  notificationsList: [],
  error: '',
  status: 'idle',
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { rejectWithValue }) => {
    console.log("try")
    try {
      const response = await fetch('http://localhost:8086/notifications');
      console.log(response);
      if (!response.ok) throw new Error('No notifications found');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const markNotificationAsRead = createAsyncThunk(
  'notifications/markNotificationAsRead',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/notifications/${id}/read`, {
        method: 'PUT',
      });
      if (!response.ok) throw new Error('Failed to mark notification as read');
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const markAllNotificationsAsRead = createAsyncThunk(
  'notifications/markAllNotificationsAsRead',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8086/notifications/read-all', {
        method: 'PUT',
      });
      if (!response.ok) throw new Error('Failed to mark all notifications as read');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const NotificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.notificationsList = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = 'failed';
        state.notificationsList = [];
      })
      .addCase(markNotificationAsRead.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.notificationsList = state.notificationsList.map(notification =>
          notification.id === action.payload ? { ...notification, read: true } : notification
        );
        state.status = 'succeeded';
      })
      .addCase(markNotificationAsRead.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = 'failed';
      })
      .addCase(markAllNotificationsAsRead.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(markAllNotificationsAsRead.fulfilled, (state) => {
        state.notificationsList = state.notificationsList.map(notification => ({
          ...notification,
          read: true,
        }));
        state.status = 'succeeded';
      })
      .addCase(markAllNotificationsAsRead.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = 'failed';
      });
  },
});

export default NotificationSlice.reducer;


