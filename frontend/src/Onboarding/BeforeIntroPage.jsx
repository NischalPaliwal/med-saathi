import Doctor_Icon from "../assets/doctor-icon.jpg";
import Patient_Icon from "../assets/patient_icon.png";
import Admin_Icon from "../assets/admin-icon.png";

export default function BeforeIntroPage() {
    return (
        <div style={{ 
            position: 'relative',
            height: '85vh',
            width: '100%',
            margin: '30px',
            marginTop: '10px'
            }}>
         <div>
            <h1>Who are you?</h1>
         </div>
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }}>
            <button style={{ marginRight: '20px' }}>
                <img style={{ width: '220px', height: '220px' }} src={Admin_Icon}></img>
                <div>Admin</div>
            </button>
            <button style={{ marginRight: '20px', marginLeft: '20px' }}>
                <img style={{ width: '220px', height: '220px' }} src={Doctor_Icon}></img>
                <div>Doctor</div>
            </button>
            <button style={{ marginRight: '20px', marginLeft: '20px' }}>
                <img style={{ width: '220px', height: '220px' }} src={Patient_Icon}></img>
                <div>Patient</div>
            </button>
         </div>
         </div>
    );
}