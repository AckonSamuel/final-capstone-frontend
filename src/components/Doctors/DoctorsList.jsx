import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Card,
  Table,
  Col,
  Row,
} from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';
import DashboardLayout from '../layouts/DashboardLayout';
import Navbar from '../Navbar';
import { getDoctors } from '../../redux/slices/doctorsSlice';

const DoctorCard = ({ doctor }) => {
  const {
    id,
    profile_picture: profilePicture,
    first_name: firstName,
    last_name: lastName,
    major,
    available_time: availability,
    fees,
  } = doctor;

  return (
    <Card key={id}>
      <Card.Img variant="top" src={profilePicture} style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>
          Dr.
          {' '}
          {firstName}
          {' '}
          {lastName}
        </Card.Title>
      </Card.Body>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td>Major</td>
            <td>{major}</td>
          </tr>
          <tr>
            <td>Availability</td>
            <td>{availability}</td>
          </tr>
          <tr>
            <td>Price of Services</td>
            <td>
              $
              {' '}
              {fees}
              {' '}
              per consultation
            </td>
          </tr>
        </tbody>
      </Table>
      <Card.Body>
        <Button className="float-end reserve__btn">
          <FaCalendarAlt />
          {' '}
          Reserve now
          {' '}
          <IoIosArrowDropright />
        </Button>
      </Card.Body>
    </Card>
  );
};

const DoctorsList = () => {
  const dispatch = useDispatch();
  const doctorDetails = useSelector((state) => state.doctors.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = doctorDetails.slice(indexOfFirstCard, indexOfLastCard);

  const doctorCards = currentCards.map((doctor) => (
    <Col key={doctor.id}>
      <DoctorCard doctor={doctor} />
    </Col>
  ));

  // Pagination logic
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(doctorDetails.length / cardsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number} className="page-item">
      <Button className="page-link" onClick={() => setCurrentPage(number)}>{number}</Button>
    </li>
  ));

  const row = <Row xs={1} md={3} className="g-4">{doctorCards}</Row>;

  return (
    <div>
      <DashboardLayout>
        <Navbar />
        <Container style={{ marginTop: '5rem' }}>
          {row}
          <ul className="pagination justify-content-center mt-4">{renderPageNumbers}</ul>
        </Container>
      </DashboardLayout>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    profile_picture: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    available_time: PropTypes.string.isRequired,
    fees: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorsList;
