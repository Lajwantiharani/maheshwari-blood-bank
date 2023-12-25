import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Shared/Layout/Layout";
import styles from "./namehide.module.css";

// Import the .png image
import request from "./request.png";

const App = () => {
  // Assuming users will be managed in state
  const [users, setUsers] = useState([]);

  const handleAddNew = () => {
    // Logic to handle adding a new user
    // This function can contain the logic to add a new user to the 'users' state
    // For example:
    // const newUser = { name: 'New User', email: 'new@example.com', ... };
    // setUsers([...users, newUser]);
  };
  const handleSearch = (term) => {
    // Logic to handle search
    // For example:
    // Implement search functionality based on the 'term'
  };

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <div className={styles.sidebar}>
          <Link to="/home">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/namehidingform">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faHome} />
              <span>Profile</span>
            </div>
          </Link>
          <Link to="/request">
            <div className={styles.icon}>
              <span>Request</span>
            </div>
          </Link>
          <Link to="/finddonor">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faSearch} />
              <span>Find Donor</span>
            </div>
          </Link>
        </div>
       
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            
            <h3 className="register"  style={{ marginLeft: "200px" }}>Registered User</h3>
            <button onClick={handleAddNew} style={{ marginLeft: "500px" }}>Add New</button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </div>
          </div>
           
            {/* Displaying Users */}
            <table className="users" style={{ marginLeft: "200px" }} >
              <thead>
                <tr>
                  <th  style={{ paddingRight: '100px'}}>#</th>
                 <th style={{ paddingRight: '100px'}}>Name</th>
                 <th style={{ paddingRight: '100px'}}>Email</th>
                  <th style={{ paddingRight: '100px'}}>Nukh</th>
                  <th style={{ paddingRight: '100px'}}>Akaah</th>
                  <th style={{ paddingRight: '100px'}}>BloodGroup</th>
                  <th style={{ paddingRight: '100px'}}>Action</th>
                  {/* Add other table headers */}
                </tr>
              </thead>
              <tbody>
              <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td> 
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td> 
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@twitter</td>
    </tr>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>style={{ textAlign: 'right' }}{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.nukh}</td>
                    <td>{user.akaah}</td>
                    <td>{user.bllodgroup}</td>
                    <td>{user.action}</td>
                    {/* Render other user details */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
     </div>
     
    </Layout>
  );
};

export default App;
