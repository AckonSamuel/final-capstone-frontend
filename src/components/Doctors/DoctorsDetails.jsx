import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Container, Table } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';
import DashboardLayout from '../layouts/DashboardLayout';
import Navbar from '../Navbar';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = useSelector((state) => state.doctors.doctors.find((d) => d.id === id));

  return (
    <DashboardLayout>
      <Navbar />
      <Container>
        <h2 className="text-center">Doctor Details</h2>
        {doctor && (
        <div>
          <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column align-items-center justify-content-between pt-5">
            <div className="w-100 px-4">
              <img src={doctor.profile_picture} alt={doctor.first_name} className="w-100 doctor__image" />
            </div>
            <div className="mobile__width w-50 align-self-start">
              <div className="w-100 px-4">
                <h2 className="mb-3 float-md-end">
                  Dr.
                  {' '}
                  {doctor.first_name}
                  {' '}
                  {doctor.last_name}
                </h2>
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td>Major</td>
                      <td>{doctor.major}</td>
                    </tr>
                    <tr>
                      <td>Availability</td>
                      <td>{doctor.available_time}</td>
                    </tr>
                    <tr>
                      <td>Price of Services</td>
                      <td>
                        $
                        {' '}
                        {doctor.fees}
                        {' '}
                        per consultation
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Link className="float-md-end discover__link" to="/home">
                  Discover all doctors
                </Link>
              </div>
              <div className="w-100 p-4">
                <img src="https://www.slidegeeks.com/pics/dgm/l/a/Administration_Of_Hospital_Departments_Ppt_PowerPoint_Presentation_Visual_Aids_Outline_Slide_1.jpg" alt="hospital" className="w-100 mt-2" />
              </div>
            </div>
          </div>
          <Link className="text-decoration-none" to="/home">
            <Button className="float-start reserve__btn">
              Back
              {' '}
              <IoIosArrowDropright />
            </Button>
          </Link>
          <Button className="float-end reserve__btn">
            <FaCalendarAlt />
            {' '}
            Reserve now
            {' '}
            <IoIosArrowDropright />
          </Button>
        </div>
        )}
      </Container>
    </DashboardLayout>
  );
};

export default DoctorDetails;
