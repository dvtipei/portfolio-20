import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
    return (
        <MDBContainer className="mt-4">
            <MDBRow>
                <MDBCol md="14">
                    <h2>About Me</h2>
                    <hr class="solid bg-dark" />
                    <p style={{ fontSize: "25px" }}>
                        Hello, my name is Denis Tipei. I graduated as a Full Stack Web Developer
                        program from the University of Arizona and received a certificate of completion.
                        I live in Phoenix, AZ and I am looking for an opportunity as a Junior Web Developer 
                        to contribute in an awesome team. I am married and I have 2 children which I love spending
                        time with. I also enjoy sports, music, and being involved at my local church.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default AboutMe;