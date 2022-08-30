import React from "react";
import {
    MDBCardGroup,
    MDBIcon,
    MDBContainer,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
}   from "mdbreact";

const Projects = () => {
    return (
        <MDBContainer className="mt-4">
            <MDBCardGroup deck className="mt-3">
                <MDBCard classname="border border-dark">
                    <MDBCardImage style={{ width: "400px" }} />
                <MDBCardBody>
                    <MDBCardTitle tag="h5"></MDBCardTitle>
                    <MDBCardText>

                    </MDBCardText>
                    <MDBBtn>
                        <MDBIcon />
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </MDBContainer>
    )
}

export default Projects;