import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3 " style= {{backgroundColor: "#f2f2f2",color:"black"}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyrights reserved by {" "}
          <a href="" style= {{backgroundColor: "#f2f2f2",color:"black"}}>K L University Students  </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
