import type { AboutType } from "../types/About"
function About(){
    const about: AboutType = {drawnImg: undefined, realImg: "https://res.cloudinary.com/s7eflphu/image/upload/f_auto,q_auto/1784645799983_vjpoor", description: "I am a computer scientist."}
    return (
        <>
        <img className="w-80 ml-68 mt-30 rounded-full" src={about.realImg}></img>
        <div className="ml-85">
            {about.description}
        </div>
        </>
    )
}

export default About