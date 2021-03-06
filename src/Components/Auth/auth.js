import { useDataContext } from "../../Context/data-context";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Redirect, useHistory} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';









export const AuthCheck = () => {

  const {login,setlogin} = useDataContext();
  const [loading,setloading] = useState(false);

    
  
    const [username,setusername]=useState('')
      const [pass,setpass]=useState('')
      const [err,seterr]=useState(false)
      const navigate = useNavigate();

    async function Authtry() {

      setloading(true)
     await axios.post('https://agile-headland-48240.herokuapp.com/login', {username: username, password: pass})
      .then(res => {


        setlogin(true)
        reRoute()
      })
      .catch(error => {
        seterr(true)
      })
      .finally(() => setloading(false))

  }


  async function GuestLogin() {

    setloading(true)
   await axios.post('https://agile-headland-48240.herokuapp.com/login', {username: 'admin', password: 'admin'})
    .then(res => {


      setlogin(true)
      reRoute()
    })
    .catch(error => {
      seterr(true)
    })
    .finally(() => setloading(false))

}

 function reRoute(){
  console.log('inside reRoute')
  seterr(false)
  navigate("/", { replace: true });
  
 }

 function userSignup (){
  navigate("/signup", { replace: true });
 }



    return(
        <>
     <div>
      <div
        className="main"
          style={{
            width: "auto",
            height: "100vh",
            display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
      {/* <img className="heroimg" src={heroimg}/> */}
      </div>

        <div
          style={{
            width: "700px",
            height: "350px",
            margin: "auto",
            display: "flex",
          }}
        >
            <div className="info-section" style={{ margin: "auto" }}>
              <h3>Welcome to Luxury</h3>
              
              <p className="subtext">Please login/Sign UP!</p>
              <br/>
            
              <h5 onClick={userSignup} style={{textDecoration: 'underline',cursor:'pointer'}}>New User ? Sign up!</h5>
            </div>
            

          <div style={{ margin: "auto" }}>
            <div style={{ marginBottom: "1rem" }}>
              {err ? (
                <p class="lbl-red subtext">
                  {" "}
                  Please enter valid username and password!{" "}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              
              <input
                // onChange={(event) => setname(event.target.value)}
                placeholder="Username"
                style={{
                  marginBottom: "1rem",
                  width: "200px",
                  height: "30px",
                  borderRadius: "0.5rem",
                }}
                onChange={(e) => setusername(e.target.value)}
              ></input>
            </div>

            <div>
              <input
                type="password"
                // onChange={(event) => setpassword(event.target.value)}
                placeholder="Password"
                style={{
                  marginBottom: "1rem",
                  width: "200px",
                  height: "30px",
                  borderRadius: "0.5rem",
                }}
                onChange={(e) => setpass(e.target.value)}
              ></input>
            </div>

            <div style={{ margin: "auto" }}>
              <button onClick={Authtry} className="button">
                Login
              </button>
              <br />
              <br />

              <button onClick={GuestLogin} className="button">
                Guest Login
              </button>
            </div>
          </div>
        </div>

        <div style={{ margin: "auto" }}>
                {loading == true && <Box sx={{ display: 'flex' }}>
      <CircularProgress color="success" />
    </Box>}
        </div>
      </div>
    </div>
        
        </>
    )
}
