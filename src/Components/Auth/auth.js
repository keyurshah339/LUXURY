import { useDataContext } from "../../Context/data-context";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { useState } from "react";







export const AuthCheck = () => {
    const [username,setusername]=useState('')
    const [pass,setpass]=useState('')
    const [err,seterr]=useState(false)
    const navigate = useNavigate();

     function Authtry() {
     console.log("authtry")
        console.log(username,pass)
        if(username == 'tanay' && pass == 'neog@2022')
        {
             navigate("home")
        }
        else{
            seterr(true)
        }
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
            <p className="subtext">Username:tanay</p>
            <p className="subtext">Password:neog@2022</p>
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
            </div>
          </div>
        </div>

        <div style={{ margin: "auto" }}>
          {/* {loading ? (
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
        
        </>
    )
}