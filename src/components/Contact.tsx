import type { ContactType } from "../types/Contact";

function Contact() {
    const contactInfo: ContactType = {email: "amby.dev.haidar@gmail.com", address: "Boutersem, Belgium", phoneNumber: "+32 479 19 08 51"}
    return (
        <>
        <h2>Contact Info</h2>
        <p>Email: {contactInfo.email}</p>
        <p>Address: {contactInfo.address}</p>
        <p>Phone Number: {contactInfo.phoneNumber}</p>
        </>
    )
}

export default Contact