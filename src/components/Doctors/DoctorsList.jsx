import React from 'react';
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
import doctors from './doctor';

const DoctorCard = ({ doctor }) => {
  const {
    id, picture, name, major, availability, price,
  } = doctor;

  return (
    <Card key={id}>
      <Card.Img variant="top" src={picture} style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
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
            <td>{price}</td>
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
  const doctorCards = doctors.map((doctor) => (
    <Col key={doctor.id}>
      <DoctorCard doctor={doctor} />
    </Col>
  ));

  const row = <Row xs={1} md={3} className="g-4">{doctorCards}</Row>;

  return (
    <div>
      <Container>
        {row}
      </Container>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default DoctorsList;
