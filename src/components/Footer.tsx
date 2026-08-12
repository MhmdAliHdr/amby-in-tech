import type { FooterType } from "../types/Footer"

function Footer() {
    const footerInfo: FooterType = {email: "mohammadali.hd3@gmail.com", address: "Boutersem, Belgium", phoneNumber: "+32 479 19 08 51"}
    return (
        <div className="flex flex-row justify-center gap-8 items-center mr-auto ml-auto mb-13 mt-13 text-center text-[#261732]">
        <b className="w-80"><svg className="mr-auto ml-auto w-13" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#261732"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
        {footerInfo.email}
        </b>
        <b className="w-80">
        <svg className="mr-auto ml-auto w-13" xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 -960 960 960" fill="#261732"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
        {footerInfo.address}
        </b>
        <b className="w-80">
        <svg className="mr-auto ml-auto w-13" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#261732"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
        {footerInfo.phoneNumber}
        </b>
        </div>
    )
}

export default Footer