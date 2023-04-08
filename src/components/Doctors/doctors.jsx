import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';
import { Button, Container, Table } from 'react-bootstrap';
import Slider from 'react-slick';
import doctors from './doctor';
import DashboardLayout from '../layouts/DashboardLayout';
import Navbar from '../Navbar';
import './doctors.css';

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
    <DashboardLayout>
      <Navbar />
      <Container>
        <Slider
          infinite={settings.infinite}
          dots={settings.dots}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
        >
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column align-items-center justify-content-between pt-5">
                <div className="w-100 px-4">
                  <img src={doctor.picture} alt="doctor" className="w-100" />
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
                    <Link className="float-md-end discover__link" to="/doctorslist">
                      Discover all doctors
                    </Link>
                  </div>
                  <div className="w-100 p-4">
                    <img src="https://www.slidegeeks.com/pics/dgm/l/a/Administration_Of_Hospital_Departments_Ppt_PowerPoint_Presentation_Visual_Aids_Outline_Slide_1.jpg" alt="hospital" className="w-100 mt-2" />
                  </div>
                </div>
              </div>
              <Button className="float-end reserve__btn">
                <FaCalendarAlt />
                {' '}
                Reserve now
                {' '}
                <IoIosArrowDropright />
              </Button>
            </div>
          ))}
        </Slider>
      </Container>
    </DashboardLayout>
  );
};

export default DoctorList;
