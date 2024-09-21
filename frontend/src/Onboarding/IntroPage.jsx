import dashboard_demo from "../assets/dashboard-demo.png";
import inventory_demo from "../assets/inventory-dashboard.png";
import doctor_demo from "../assets/doctor-demo.png";
import patient_demo from "../assets/patient-dashboard-demo.png";

export default function IntroPage() {
    return (
        <div className="outermost_div">
            <div className="welcome_message">
                <h1>WELCOME to MedSaathi,</h1>
                <h3><i>A hospital management interface designed to disrupt medical sector!!!</i></h3>
            </div>
            <div className="description_1">
                <h3>Welcome to MedSaathi, the ultimate healthcare management system for Super Admins. Our platform is designed to provide unparalleled control and visibility over healthcare operations, enabling Super Admins to make informed decisions and drive excellence in patient care.</h3>
                <h3>With MedSaathi, Super Admins can: </h3>
                <ul>
                <li>Manage multiple healthcare facilities and locations from a single dashboard</li>
                <li>Monitor and analyze key performance indicators (KPIs) in real-time</li>
                <li>Configure system settings and customize workflows to meet specific needs</li>
                <li>Assign roles and permissions to users, ensuring secure access to sensitive data</li>
                <li>Our system also offers a range of features for patients and healthcare providers, including personalized health dashboards, secure messaging, and automated reminders. But as a Super Admin, you will have the power to oversee it all, ensuring that your healthcare organization runs smoothly and efficiently.</li>
                </ul>
            </div>
            <div className="description_2">
                <h1>Amazing and understandable analytical dashboard.....</h1>
            </div>
            <div className="dashboard_image">
                <img src={dashboard_demo}></img>
            </div>
            <div className="description_2">
                <h1>Doctor Records.....</h1>
            </div>
            <div className="dashboard_image">
                <img src={doctor_demo}></img>
            </div>
            <div className="description_2">
                <h1>Patient Information Page.....</h1>
            </div>
            <div className="dashboard_image">
                <img src={patient_demo}></img>
            </div>
            <div className="description_2">
                <h1>Inventory Access Page.....</h1>
            </div>
            <div className="dashboard_image">
                <img src={inventory_demo}></img>
            </div>
            <div className="description_2">
                <h1>and many more.....</h1>
            </div>
        </div>
    );
}