import { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faFileMedical, faVial } from '@fortawesome/free-solid-svg-icons';

const PatientDashboard = () => {
  const patientData = {
    name: 'Rahul Kumar',
    age: 35,
    gender: 'Male',
    Addhar_No: '****-****-****',
    contact: '9876543210',
    address: '123, Sector 12, Noida, UP',
  };

  const appointmentHistory = [
    {
      id: 1,
      date: '2022-01-10',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      department: 'Cardiology',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2022-02-15',
      time: '2:00 PM',
      doctor: 'Dr. Patel',
      department: 'Orthopedics',
      status: 'Completed',
    },
  ];

  const upcomingAppointments = [
    {
      id: 3,
      date: '2022-03-20',
      time: '11:00 AM',
      doctor: 'Dr. Jain',
      department: 'Dermatology',
      status: 'Pending',
    },
    {
      id: 4,
      date: '2022-04-10',
      time: '3:00 PM',
      doctor: 'Dr. Sharma',
      department: 'Gastroenterology',
      status: 'Pending',
    },
  ];

  const labTests = [
    {
      id: 1,
      test: 'Blood Sugar',
      result: '120 mg/dL',
      date: '2022-01-15',
    },
    {
      id: 2,
      test: 'Blood Pressure',
      result: '120/80 mmHg',
      date: '2022-02-10',
    },
  ];

  useEffect(() => {
    // API call to fetch patient data, appointment history, upcoming appointments, and lab tests
  }, []);

  return (
    <div style={{
        position: 'relative',
        overflowY: 'scroll',
        height: '90vh',
      }}>
        <div>
          <img src='https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?t=st=1726550544~exp=1726554144~hmac=f02a660d526a9f41618f7520ad0fb7201066640f10137ea5ff8045c1a3901335&w=996' height={200} width='100%'/>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '30px',
            marginTop: '60px',
            alignItems: 'flex-start',
            color: 'white',
          }}>
            <h1>Patient Dashboard</h1>
          </div>
    <Container fluid className="patient-dashboard">
      <Row>
        <Col md={3}>
          <Card className="patient-details">
            <Card.Body>
              <h3>Patient Details</h3>
              <ul>
                <li>
                  <strong>Name:</strong> {patientData.name}
                </li>
                <li>
                  <strong>Age:</strong> {patientData.age}
                </li>
                <li>
                  <strong>Gender:</strong> {patientData.gender}
                </li>
                <li>
                  <strong>ADDHAR NO.:</strong> {patientData.Addhar_No}
                </li>
                <li>
                  <strong>Contact:</strong> {patientData.contact}
                </li>
                <li>
                  <strong>Address:</strong> {patientData.address}
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <Card className="appointment-history">
                <Card.Body>
                  <h3>Past Appointment History</h3>
                  <ul>
                    {appointmentHistory.map((appointment) => (
                      <li key={appointment.id}>
                        <FontAwesomeIcon icon={faCalendar} /> {appointment.date} -{' '}
                        <FontAwesomeIcon icon={faClock} /> {appointment.time} -{' '}
                        {appointment.doctor} ({appointment.department}) -{' '}
                        <span className={`status ${appointment.status === 'Completed' ? 'completed' : 'pending'}`}>
                          {appointment.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="upcoming-appointments">
                <Card.Body>
                  <h3>Upcoming Appointments</h3>
                  <ul>
                    {upcomingAppointments.map((appointment) => (
                      <li key={appointment.id}>
                        <FontAwesomeIcon icon={faCalendar} /> {appointment.date} -{' '}
                        <FontAwesomeIcon icon={faClock} /> {appointment.time} -{' '}
                        {appointment.doctor} ({appointment.department}) -{' '}
                        <span className={`status ${appointment.status === 'Pending' ? 'pending' : 'completed'}`}>
                          {appointment.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card className="lab-tests">
                <Card.Body>
                  <h3>Lab Tests</h3>
                  <ul>
                    {labTests.map((labTest) => (
                      <li key={labTest.id}>
                        <FontAwesomeIcon icon={faVial} /> {labTest.test} -{' '}
                        {labTest.result} -{' '}
                        <FontAwesomeIcon icon={faCalendar} /> {labTest.date}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="vital-signs">
                <Card.Body>
                  <h3>Vital Signs</h3>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faFileMedical} /> Blood Pressure: 120/80 mmHg
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faFileMedical} /> Blood Sugar: 120 mg/dL
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='export-button-div'>
      <Button className="export-button">Export Data ⬇️</Button>
      </div>
    </Container>
    </div>
    </div>
  );
};

export default PatientDashboard;