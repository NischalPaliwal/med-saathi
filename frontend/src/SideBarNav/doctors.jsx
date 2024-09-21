import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'specialty', headerName: 'Specialty', width: 150 },
    { field: 'presence', headerName: 'Presence', width: 100, type: 'boolean' },
    { field: 'numAppointments', headerName: 'No. of Appointments', width: 150, type: 'number' },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'hospital', headerName: 'Hospital', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
  ];

  const rows = [
    { id: 1, name: 'Dr. Rohan Gupta', specialty: 'Cardiology', presence: true, numAppointments: 5, email: 'rohangupta@example.com', phone: '9812345670', hospital: 'Apollo Hospital', city: 'Delhi' },
    { id: 2, name: 'Dr. Priya Sharma', specialty: 'Pediatrics', presence: false, numAppointments: 3, email: 'priyasharma@example.com', phone: '9876543210', hospital: 'Fortis Hospital', city: 'Mumbai' },
    { id: 3, name: 'Dr. Karan Singh', specialty: 'Orthopedics', presence: true, numAppointments: 2, email: 'karansingh@example.com', phone: '9956784321', hospital: 'Max Hospital', city: 'Gurgaon' },
    { id: 4, name: 'Dr. Nalini Rao', specialty: 'Gynecology', presence: true, numAppointments: 4, email: 'nalini.rao@example.com', phone: '9812345670', hospital: 'Columbia Asia Hospital', city: 'Bangalore' },
    { id: 5, name: 'Dr. Rajesh Patel', specialty: 'General Surgery', presence: false, numAppointments: 1, email: 'rajeshpatel@example.com', phone: '9876543210', hospital: 'Lilavati Hospital', city: 'Mumbai' },
    { id: 6, name: 'Dr. Swati Jain', specialty: 'Dermatology', presence: true, numAppointments: 3, email: 'swatijain@example.com', phone: '9956784321', hospital: 'Medanta Hospital', city: 'Gurgaon' },
    { id: 7, name: 'Dr. Amit Kumar', specialty: 'Neurology', presence: false, numAppointments: 2, email: 'amitkumar@example.com', phone: '9812345670', hospital: 'AIIMS', city: 'Delhi' },
    { id: 8, name: 'Dr. Ramesh Gupta', specialty: 'Urology', presence: true, numAppointments: 4, email: 'rameshgupta@example.com', phone: '9876543210', hospital: 'Fortis Hospital', city: 'Mumbai' },
    { id: 9, name: 'Dr. Sunita Singh', specialty: 'Oncology', presence: false, numAppointments: 1, email: 'sunitasingh@example.com', phone: '9956784321', hospital: 'Tata Memorial Hospital', city: 'Mumbai' },
    { id: 10, name: 'Dr. Vikram Sharma', specialty: 'Cardiothoracic Surgery', presence: true, numAppointments: 3, email: 'vikramsharma@example.com', phone: '9812345670', hospital: 'Apollo Hospital', city: 'Delhi' },
    { id: 11, name: 'Dr. Nisha Patel', specialty: 'Pediatric Surgery', presence: false, numAppointments: 2, email: 'nishapatel@example.com', phone: '9876543210', hospital: 'Lilavati Hospital', city: 'Mumbai' },
    { id: 12, name: 'Dr. Rajiv Jain', specialty: 'Gastroenterology', presence: true, numAppointments: 4, email: 'rajivjain@example.com', phone: '9956784321', hospital: 'Medanta Hospital', city: 'Gurgaon' },
    { id: 13, name: 'Dr. Pooja Gupta', specialty: 'Endocrinology', presence: false, numAppointments: 1, email: 'poojagupta@example.com', phone: '9812345670', hospital: 'Fortis Hospital', city: 'Mumbai' },
    { id: 14, name: 'Dr. Anil Kumar', specialty: 'Nephrology', presence: true, numAppointments: 3, email: 'anilkumar@example.com', phone: '9876543210', hospital: 'AIIMS', city: 'Delhi' },
    { id: 15, name: 'Dr. Suresh Patel', specialty: 'Ophthalmology', presence: false, numAppointments: 2, email: 'sureshpatel@example.com', phone: '9956784321', hospital: 'Lilavati Hospital', city: 'Mumbai' },
    { id: 16, name: 'Dr. Ritu Jain', specialty: 'ENT', presence: true, numAppointments: 4, email: 'ritujain@example.com', phone: '9812345670', hospital: 'Medanta Hospital', city: 'Gurgaon' },
    { id: 17, name: 'Dr. Vinay Kumar', specialty: 'Orthopedic Surgery', presence: false, numAppointments: 1, email: 'vinaykumar@example.com', phone: '9876543210', hospital: 'Fortis Hospital', city: 'Mumbai' },
    { id: 18, name: 'Dr. Neeta Singh', specialty: 'Dermatology', presence: true, numAppointments: 3, email: 'neetasingh@example.com', phone: '9956784321', hospital: 'Columbia Asia Hospital', city: 'Bangalore' },
    { id: 19, name: 'Dr. Manoj Patel', specialty: 'General Medicine', presence: false, numAppointments: 2, email: 'manojpatel@example.com', phone: '9812345670', hospital: 'Lilavati Hospital', city: 'Mumbai' },
    { id: 20, name: 'Dr. Sushma Jain', specialty: 'Psychiatry', presence: true, numAppointments: 4, email: 'dummy@example.com', phone: 2456787906, hospital: 'Geetanajali Hospital', city: 'Udaipur'}
    ];

export default function Doctors() {
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
          <h1>Doctors</h1>
        </div>
        <div style={{
            margin: '30px'
        }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
        </div>
      </div>
    </div>
  );
}