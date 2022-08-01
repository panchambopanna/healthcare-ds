import './App.css';
import {Navbar} from './components'

function App() {

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      
      {/* {(auth)?<Dashboard/>:<Home/>} */}
       
      {/* if logged show the below */}

      {/* Main content 
        - Login page
          - Three cards to select role: Doc, Patient and Pharma
        - Main page
          if Doctor
            a. Add new patient option
            b. Search patient by name or id 
            c. Update patient info
            d. Patient Prev visit history
            e. Symptom registration
            f. Provide prescription as per symptoms which includes next visit date
            g. Delete patient info

          if Patient
            a. See prescription (flows from doc f)
            b. Notification for next visit (Marquee text on Login; flows from f)

          if Pharmacist
            a. Search patientby name if
            b. See prescription
            c. Static bill generation as per prescription provided
      */}

      {/* if not logged show home */}


      {/* Footer - Useless */}
      
      </div>
    
    
  );
}

export default App;
