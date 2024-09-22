export default function UpdatePatientData() {
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
                <h1>Update Patient Data</h1>
              </div>
              <div style={{ margin: '30px' }}>
              <div className="form">Patient Name: <input type="text" placeholder="Enter name"></input></div><br></br>
              <div className="form">Patient ID: <input type="text" placeholder="Enter ID"></input></div><br></br>
              <div className="form">Admit Date: <input type="date" placeholder="Enter date of admit"></input></div><br></br>
              <div className="form">Discharge Date: <input type="text" placeholder="Date of discharge"></input></div><br></br>
              <div className="form">Diagonsis: <input type="text" placeholder="If dignosed"></input></div><br></br>
              <div className="form">Bed Occupancy: <input type="text" placeholder="Enter the occupied bed no."></input></div><br></br>
              <div className="form">Tests: <input type="text" placeholder="Tests performed"></input></div><br></br>
              <div className="form">Doctor: <input type="text" placeholder="Doctor Name"></input></div><br></br>
              <div className="form">Aadhar No.: <input type="text" placeholder="Enter the Aadhar No."></input></div><br></br>
              <div className="form">Billing Amount: <input type="text" placeholder="Enter the billing amount"></input></div><br></br>
              <div className="form">If under government health policy: <input type="text" placeholder="Yes or No"></input></div><br></br>
              <div className="form">Tehsil: <input type="text"></input></div><br></br>
              <div className="form">District: <input type="text"></input></div><br></br>
              <div className="form">Address: <input type="text" placeholder="Enter address"></input></div><br></br>
              <div className="form">Sub - region: <input type="text"></input></div><br></br>
              <div className="form">Pin - code: <input type="text"></input></div><br></br>
              </div>
              <div className="form-button">
                <button style={{ height: '50px', width: '300px', marginRight: '20px' }}>Submit</button>
                <button style={{ height: '50px', width: '300px', marginLeft: '20px' }}>Edit</button>
              </div>
              </div>
              </div>
    );
}