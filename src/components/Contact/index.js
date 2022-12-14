import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
    return (
        <MDBContainer className="mt-4">
            <MDBRow>
                <MDBCol md="14" className="text-center">
                    <h2>Contact Information</h2>
                    <hr class="solid bg-dark" />
                    <hr className="hr-light w-25" />
                    <h3>Cell Phone</h3>
                    <hr className="hr-dark w-25" />
                    <a href="tel:602-710-4825">
                    <MDBIcon icon="phone-alt" /> 602-710-4825
                    </a>
                    <hr className="hr-light w-25" />
                    <h3>E-mail</h3>
                    <hr className="hr-dark w-25" />
                    <a href="mailto:tipei_denis@yahoo.com">
                    <MDBIcon icon="envelope" /> collinhodgs@gmail.com
                    </a>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ContactInfo;