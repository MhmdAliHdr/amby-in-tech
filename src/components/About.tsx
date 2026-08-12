import type { AboutType } from "../types/About"
function About(){
    const about: AboutType = {drawnImg: undefined, realImg: "https://res.cloudinary.com/s7eflphu/image/upload/v1786555848/mewebsite_v3dj81.png", description: "I am a creative computer scientist. I love building new experiences for people and myself every day. I am also very passionate about nature, space and art."}
    return (
        <div className="grid grid-cols-2 ml-auto mr-auto bg-[#261732] text-[#D6D0C5]">
            <img className="w-100 ml-90" src={about.realImg}></img>
            <div className="pt-50">
            <h2 className="text-9xl bentham-regular text-left pl-20"><b>i'm amby</b></h2>
            <div className="text-right pr-100 text-3xl bentham-regular pt-13 h-90">
                <b>{about.description}</b>
            </div>
            </div>
        </div>
    )
}

export default About