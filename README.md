# Isharat Amal - Emergency Medical Response Platform

## Description
Isharat Amal (Signal of Hope) is a web-based emergency medical response 
platform designed to connect patients in critical need with nearby 
qualified doctors. The application features real-time location mapping, 
emergency notifications, and a doctor rating system to ensure quick and 
reliable medical assistance.

**Tagline:** "نجدة سريعة لأمل قريب" (Quick Help for a Nearby Hope)

## Features
- **User Authentication:** Separate login/registration for patients and doctors
- **Role-Based Access:** Different interfaces for patients and medical professionals
- **Real-Time Emergency Mapping:** Interactive map showing nearest medical help
- **Emergency Request System:** Patients can request immediate medical assistance
- **Doctor Profiles:** Doctor information including specializations and ratings
- **Emergency Notifications:** Real-time alerts for doctors near emergency locations
- **Doctor Rating System:** Patients can rate and review doctors
- **Expected Time Arrival (ETA):** Display estimated arrival time for responders
- **Responsive Design:** Works on desktop and mobile devices
- **Bilingual Support:** Interface available in Arabic and English

## User Roles

### Patient
- Register with basic information
- Request emergency medical help
- View nearby doctors on map
- Rate and review doctors
- Track ETA of arriving medical professional

### Doctor
- Register with medical credentials (ID number, qualifications, certificates)
- Receive emergency notifications
- Accept or reject help requests
- View patient location on map
- Build profile with ratings and assistance count

## Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Mapping:** Leaflet.js (open-source mapping library)
- **Storage:** LocalStorage for client-side data management
- **Responsive Design:** CSS Flexbox and Media Queries
- **Language:** Arabic & English support

## Project Pages

### 1. **main.html** - Login Page
- User authentication interface
- Username and password input
- Link to registration page

### 2. **register.html** - Registration Page
- Create new account (patient or doctor)
- Role selection dropdown
- Doctor-specific fields:
  - ID number verification
  - Medical qualifications
  - Document upload for credentials verification

### 3. **map.html** - Emergency Map Interface
- Interactive Leaflet map showing nearby medical help
- Emergency situation description dropdown
- Real-time location tracking
- "Request Help" button for emergencies

### 4. **notification.html** - Doctor Notification System
- Alert section for incoming help requests
- Patient location display
- Expected arrival time (ETA) calculation
- Accept/Reject request buttons

### 5. **star.html** - Doctor Profile Page
- Doctor name and profile information
- Number of successful assists
- Accumulated points/rating
- Patient reviews and ratings section

## File Structure
```
Isharat-Amal/
├── index.html (main.html)
├── register.html
├── map.html
├── notification.html
├── star.html
├── app.js (Main application logic)
├── notification.js (Notification handling)
├── style.css (Styling for all pages)
├── fund logo.png
└── README.md
```

## How to Use

### For Patients
1. Open `main.html` in browser
2. Login or register as patient
3. View map of nearby doctors
4. Select emergency type from dropdown
5. Click "Request Help" button
6. Wait for doctor response and ETA

### For Doctors
1. Register with medical credentials
2. Login to system
3. Receive emergency notifications
4. View patient location on map
5. Accept request to begin assistance
6. Track patient and provide medical response

## Key Functions

### JavaScript Functions (app.js)
- `loginForm submit event` - Handle user login
- `toggleDoctorFields()` - Show/hide doctor-specific fields based on role
- `localStorage operations` - Save user data locally

### Notification Functions (notification.js)
- `receiveHelpRequest(location, eta)` - Display emergency alert
- `acceptRequest()` - Accept emergency assistance request

## Design Features
- **Color Scheme:** Pink gradient theme (#ff69b4, #d63384) - calming medical aesthetic
- **Layout:** Centered container design with responsive spacing
- **Typography:** Clear hierarchy with appropriate font sizes
- **Accessibility:** Right-to-left (RTL) support for Arabic language
- **User Experience:** Intuitive navigation and clear call-to-action buttons

## Project Context
- **Type:** Innovation & Entrepreneurship Course Project
- **Team Size:** 2 members
- **Purpose:** Prototype design for emergency medical response platform
- **Course:** Fundamentals of Innovation & Entrepreneurship -- Fall 2024

## What I Learned
- HTML5 semantic markup and forms
- CSS3 styling and responsive design principles
- Vanilla JavaScript event handling and DOM manipulation
- LocalStorage API for client-side data persistence
- Leaflet.js library integration for mapping
- User interface design for critical systems
- User-centered design thinking
- Arabic language web development
- Team collaboration in startup ideation

## Features for Future Development
- Backend server integration (Node.js/PHP)
- Real-time notifications using WebSockets
- GPS integration for accurate location tracking
- Payment system for premium services
- Insurance verification system
- Medical history management
- Call/SMS integration
- Mobile app development (React Native/Flutter)
- Real-time chat between patient and doctor
- Ambulance dispatch system
- Hospital integration

## Installation & Setup
1. Clone or download this repository
2. Ensure all files are in the same directory
3. Open `main.html` in a modern web browser
4. No server setup required (client-side only prototype)


## Notes
- This is a **prototype/proof-of-concept** design
- Data is stored locally using browser localStorage
- Maps require internet connection for Leaflet.js library
- Full functionality requires backend implementation

## Contact
- **Email:** abdulqashmar@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/abdulqader-qashmar/
- **GitHub:** https://github.com/A-Qashmar

## License
This project is part of university coursework for the course 
"Fundamentals of Innovation & Entrepreneurship Fall 2024".
