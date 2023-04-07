import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import Slider from 'react-slick';
import './doctors.css';

const doctors = [
  {
    id: '1',
    name: 'Dr. John Smith',
    major: 'Cardiology',
    availability: 'Monday - Friday, 9am - 5pm',
    price: '$200 per consultation',
    picture: 'https://www.shutterstock.com/image-photo/portrait-her-she-nicelooking-attractive-260nw-1729215223.jpg',
  },
  {
    id: '2',
    name: 'Dr. Jane Doe',
    major: 'Pediatrics',
    availability: 'Tuesday - Thursday, 10am - 6pm',
    price: '$150 per consultation',
    picture: 'https://thumbs.dreamstime.com/b/male-doctor-portrait-isolated-white-background-56744085.jpg',
  },
];

const DoctorList = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
  // <div>
    <Container>
      <Slider
        infinite={settings.infinite}
        dots={settings.dots}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column align-items-center justify-content-between pt-5">
              <div className="w-100 px-4">
                <img src={doctor.picture} alt="" className="w-100" />
              </div>
              <div className="mobile__width w-50 align-self-start">
                <div className="w-100 px-4">
                  <h2 className="mb-3 float-md-end">{doctor.name}</h2>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>Major</td>
                        <td>{doctor.major}</td>
                      </tr>
                      <tr>
                        <td>Availability</td>
                        <td>{doctor.availability}</td>
                      </tr>
                      <tr>
                        <td>Price of Services</td>
                        <td>{doctor.price}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <Button variant="primary" className="float-end reserve__button">Reserve</Button>
          </div>
        ))}
      </Slider>
    </Container>
  // </div>
  );
};

export default DoctorList;
