import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import configureMockStore from 'redux-mock-store';
// import axios from 'axios';
import 'matchmedia-polyfill';
import { BrowserRouter as Router } from 'react-router-dom';
import DoctorList from '../components/Doctors/doctors';
import { MaterialUIControllerProvider } from '../context';

// jest.mock('axios');
const mockStore = configureMockStore();
const store = mockStore({
  doctors: {
    doctors: [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        major: 'Cardiology',
        available_time: 'Mon-Fri 9am-5pm',
        fees: 100,
        profile_picture: 'https://example.com/john-doe.jpg',
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        major: 'Dermatology',
        available_time: 'Tue-Sat 10am-6pm',
        fees: 150,
        profile_picture: 'https://example.com/jane-smith.jpg',
      },
    ],
  },
});

describe('DoctorList', () => {
  it('renders the component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <MaterialUIControllerProvider>
            <DoctorList />
          </MaterialUIControllerProvider>
        </Router>
      </Provider>,
    );
    expect(getByText(/Dr\.\s+John\s+Doe/i)).toBeInTheDocument();
    expect(getByText(/Dr\.\s+Jane\s+Smith/i)).toBeInTheDocument();
    expect(getByText(/Cardiology/i)).toBeInTheDocument();
    expect(getByText(/Dermatology/i)).toBeInTheDocument();
    expect(getByText(/\$100 per consultation/i)).toBeInTheDocument();
    expect(getByText(/\$150 per consultation/i)).toBeInTheDocument();
  });
});
