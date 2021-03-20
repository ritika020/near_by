import Cards from './Components/Cards'
import './App.css';
import i6 from './images/Group.png'
import i7 from './images/Vector.png'
function App() {
  return (

    <div className="Cards_container">
      <div className="Cards_heading"> &lt; Near By</div>
      <div className="row searchBar">
      
       <div className="col-10 input form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                  <input type="text" className="search form-control" placeholder="Search" />
                </div>
                <div className="col-1 lines_icon">
                <img 
                            src={i6} 
                            className="Cards_linesIcon"
                            />
                </div>
                <div className="col-1 filter_icon">
                <img 
                            src={i7} 
                            className="Cards_filterIcon"
                            />
                </div> 
</div>
<div className="row currentLoc">
<div className="col-1 locationIcon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
</div>
  <div className="col-5 current">
  <a href="#">
    Current Location
  </a></div>
</div>
      <div className="row">
      <Cards
             doctorName="Dr. Gouri Kannukar"
             speciality="Cardio - Thorrasic Surgeon"
             rating="4.7"
             clinicName="Sadanand Ayurvedic Clinic"
             price="750"
             areaNearby="3.2"
          />
      </div>
       <div className="row">
          <Cards
             doctorName="Dr. Gouri Kannukar"
             speciality="Cardio - Thorrasic Surgeon"
             rating="4.7"
             clinicName="Sadanand Ayurvedic Clinic"
             price="750"
             areaNearby="3.2"
          />

      </div>
      <div className="row">
      <Cards
             doctorName="Dr. Gouri Kannukar"
             speciality="Cardio - Thorrasic Surgeon"
             rating="4.7"
             clinicName="Sadanand Ayurvedic Clinic"
             price="750"
             areaNearby="3.2"
          />
      </div>
      <div className="row">
      <Cards
             doctorName="Dr. Gouri Kannukar"
             speciality="Cardio - Thorrasic Surgeon"
             rating="4.7"
             clinicName="Sadanand Ayurvedic Clinic"
             price="750"
             areaNearby="3.2"
          />
      </div> 
    </div>
    
//     <div className="Cards_container">
//   <div className="Cards_heading">Near By</div>
//   {/* <div class="grid"> */}

//   <div className="row">
//   <div className="col-4">
//         {/* <div className="col-4"> */}
//           <Cards
//             doctorName="Dr. Gouri Kannukar"
//             speciality="Cardio - Thorrasic Surgeon"
//             rating="4.7"
//             clinicName="Sadanand Ayurvedic Clinic"
//             price="750"
//             areaNearby="3.2"
//           />
          
//   <div >
//         <Cards
//             doctorName="1111Dr. Gouri Kannukar"
//             speciality="Cardio - Thorrasic Surgeon"
//             rating="4.7"
//             clinicName="Sadanand Ayurvedic Clinic"
//             price="750"
//             areaNearby="3.2"
//           />
//         </div>

//         <div >
//         <Cards
//             doctorName="222Dr. Gouri Kannukar"
//             speciality="Cardio - Thorrasic Surgeon"
//             rating="4.7"
//             clinicName="Sadanand Ayurvedic Clinic"
//             price="750"
//             areaNearby="3.2"
//           />
//         </div>

//         <div >
//         <Cards
//             doctorName="333Dr. Gouri Kannukar"
//             speciality="Cardio - Thorrasic Surgeon"
//             rating="4.7"
//             clinicName="Sadanand Ayurvedic Clinic"
//             price="750"
//             areaNearby="3.2"
//           />
//         </div>

//         {/* </div> */}
// </div>
//   <div >
//         <Cards
//             doctorName="444Dr. Gouri Kannukar"
//             speciality="Cardio - Thorrasic Surgeon"
//             rating="4.7"
//             clinicName="Sadanand Ayurvedic Clinic"
//             price="750"
//             areaNearby="3.2"
//           />
//         </div>

//     </div>
//     <div className="row">
//         {/* <div className="col-4"> */}
//           <Cards
//             doctorName="Dr. Gouri Kannukar"
//             speciality="Cardio - Thorrasic Surgeon"
//             rating="4.7"
//             clinicName="Sadanand Ayurvedic Clinic"
//             price="750"
//             areaNearby="3.2"
//           />
//   </div>
//        </div>
    
  );
}

export default App;
