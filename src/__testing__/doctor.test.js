import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import 'matchmedia-polyfill';
import thunk from 'redux-thunk';
import { MaterialUIControllerProvider } from '../context';
import DoctorList from '../components/Doctors/doctors';

const mockStore = configureMockStore([thunk]);

describe('DoctorList', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      doctors: {
        doctors: [
          {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            profile_picture: 'https://example.com/profile.jpg',
            major: 'Cardiology',
            available_time: 'Monday-Friday',
            fees: '100',
          },
          {
            id: 2,
            first_name: 'Jane',
            last_name: 'Doe',
            profile_picture: 'https://example.com/profile.jpg',
            major: 'Dermatology',
            available_time: 'Monday-Wednesday',
            fees: '80',
          },
        ],
      },
    });
  });

  it('renders the doctor list', async () => {
    render(
      <Provider store={store}>
        <Router>
          <MaterialUIControllerProvider>
            <DoctorList />
          </MaterialUIControllerProvider>
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      const doctorNames = screen.getAllByText(/dr\./i);
      expect(doctorNames).toHaveLength(5);
      const doctorMajors = screen.getAllByText(/major/i);
      expect(doctorMajors).toHaveLength(5);
      const doctorAvailabilities = screen.getAllByText(/availability/i);
      expect(doctorAvailabilities).toHaveLength(5);
      const doctorFees = screen.getAllByText(/price of services/i);
      expect(doctorFees).toHaveLength(5);
      const reserveNowButtons = screen.getAllByText(/reserve now/i);
      expect(reserveNowButtons).toHaveLength(5);
    });
  });
});
