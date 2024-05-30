// import React from 'react';
// import { Link } from 'react-router-dom';
// import EditProfileModal from '../components/EditProfileModal';
// import { Modal, Button } from 'react-bootstrap';
// import profile from '../assets/admin.jpeg' 

// // Breadcrumb component
// function Breadcrumb() {
//     return (
//         <nav aria-label="breadcrumb ">
//             <ol className="breadcrumb py-3 px-3">
//                 <li className="breadcrumb-item"><a href="#">Home</a></li>
//                 <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
//                 <li className="breadcrumb-item active" aria-current="page">Profile</li>
//             </ol>
//         </nav>
//     );
// }

// // Profile Picture component
// function ProfilePicture() {
//     return (
//         <div className="col-md-12 bg-white p-0 px-3 py-3 mb-3" style={{marginTop:'-70px'}}>
//             <div className="d-flex flex-column align-items-center">
//                 <img className="photo" src={profile} style={{ height: '150px', width: '150px' ,borderRadius:'100%'}} alt="Admin Profile Picture" />
//                 <p className="fw-bold h4 mt-3">Sathish R S</p>
//                 <p className="text-muted">Administrator</p>
//                 <p className="text-muted mb-3">Bengaluru</p>
//                 <div className="d-flex ">
//                          <EditProfileModal />
//                 </div>
//                 <div>
//                     <div className="d-flex bg-white p-0 px-2 pb-3 mb-3">
//                         <div className="border-bottom py-2 px-3">
//                         <a href='#'><span className="fas fa-globe text-primary"></span></a>
//                         </div>
//                         <div className="border-bottom py-2 px-3">
//                         <a href='#'><span className="fab fa-github-alt text-dark"></span></a>
//                         </div>
//                         <div className="border-bottom py-2 px-3">
//                         <a href='#'><span className="fab fa-twitter text-info"></span></a>
//                         </div>
//                         <div className="border-bottom py-2 px-3">
//                         <a href='#'><span className="fab fa-instagram text-danger"></span></a>
//                         </div>
//                         <div className="py-2 px-3">
//                         <a href='#'><span className="fab fa-facebook-f text-primary"></span></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




// // Personal Information component
// function PersonalInformation() {
//     return (
//         <div className="col-12 bg-white px-3 mb-3 pb-3">
//             <div className="d-flex align-items-center justify-content-between border-bottom">
//                 <p className="py-2">Full Name</p>
//                 <p className="py-2 text-muted">Sathish R S</p>
//             </div>
//             <div className="d-flex align-items-center justify-content-between border-bottom">
//                 <p className="py-2">Employe ID</p>
//                 <p className="py-2 text-muted">8927</p>
//             </div>
//             <div className="d-flex align-items-center justify-content-between border-bottom">
//                 <p className="py-2">Email</p>
//                 <p className="py-2 text-muted">sathish.tech@gmail.com</p>
//             </div>
//             <div className="d-flex align-items-center justify-content-between border-bottom">
//                 <p className="py-2">Personal Email</p>
//                 <p className="py-2 text-muted">sathish123@gmail.com</p>
//             </div>

//             <div className="d-flex align-items-center justify-content-between border-bottom">
//                 <p className="py-2">Phone</p>
//                 <p className="py-2 text-muted">(123) 456-7890</p>
//             </div>
//             <div className="d-flex align-items-center justify-content-between border-bottom">
//                 <p className="py-2">Mobile</p>
//                 <p className="py-2 text-muted">(098) 765-4321</p>
//             </div>
//             <div className="d-flex align-items-center justify-content-between">
//                 <p className="py-2">Address</p>
//                 <p className="py-2 text-muted">Whitefield,Bangalore</p>
//             </div>
//         </div>
//     );
// }




// // ProfilePage component
// function ProfilePage() {
//     return (
//         <main style={{ marginTop: '0px', width: '100%' }}>
//             <div className="container" style={{ height: '100vh' }}>
//                 <div className="row d-flex justify-content-center align-items-center">
//                     <div className="col-md-10">
//                         {/* <div className="row">
//                             <Breadcrumb />
//                         </div> */}
//                         <div className="row">
//                             <div className="col">
//                                 <ProfilePicture />
//                                 <PersonalInformation />
                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }


// export default ProfilePage;

// src/pages/ProfilePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../slices/profileSlices';
import EditProfileModal from '../components/EditProfileModal';
import profileImg from '../assets/admin.jpeg';

function ProfilePage() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  
  const status = useSelector((state) => state.profile.status);
  const error = useSelector((state) => state.profile.error);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <><br></br>
    <main style={{ marginTop: '0px', width: '100%' }}>
      <div className="container" style={{ height: '100vh' }}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col">
                <div className="col-md-12 bg-white p-0 px-3 py-3 mb-3" style={{ marginTop: '-30px' }}>
                  <div className="d-flex flex-column align-items-center">
                    <img className="photo" src={profileImg} style={{ height: '150px', width: '150px', borderRadius: '100%' }} alt="Admin Profile Picture" />
                    <p className="fw-bold h4 mt-3">{profile.name}</p>
                    <p className="text-muted">Administrator</p>
                    <p className="text-muted mb-3">{profile.location}</p>
                    <div className="d-flex">
                        <div>
                            <div className="d-flex bg-white p-0 px-2 pb-3 mb-3">
                                <div className="border-bottom py-2 px-3">
                                <a href='#'><span className="fas fa-globe text-primary"></span></a>
                                </div>
                                <div className="border-bottom py-2 px-3">
                                <a href='#'><span className="fab fa-github-alt text-dark"></span></a>
                                </div>
                                <div className="border-bottom py-2 px-3">
                                <a href='#'><span className="fab fa-twitter text-info"></span></a>
                                </div>
                                <div className="border-bottom py-2 px-3">
                                <a href='#'><span className="fab fa-instagram text-danger"></span></a>
                                </div>
                                <div className="py-2 px-3">
                                <a href='#'><span className="fab fa-facebook-f text-primary"></span></a>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    <EditProfileModal profile={profile} />
                  </div>
                </div>
                <div className="col-12 bg-white px-3 mb-3 pb-3">
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="py-2">Full Name</p>
                    <p className="py-2 text-muted">{profile.name}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="py-2">Employee ID</p>
                    <p className="py-2 text-muted">{profile.employeeId}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="py-2">Official Email</p>
                    <p className="py-2 text-muted">{profile.email}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="py-2">Personal Email</p>
                    <p className="py-2 text-muted">{profile.personalEmail}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="py-2">Office</p>
                    <p className="py-2 text-muted">{profile.phone}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="py-2">Mobile</p>
                    <p className="py-2 text-muted">{profile.mobile}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="py-2">Address</p>
                    <p className="py-2 text-muted">{profile.address}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export const useAdminId = () => {
  const profile = useSelector((state) => state.profile.profile);
  return profile ? profile.id : null;
};
export default ProfilePage;
