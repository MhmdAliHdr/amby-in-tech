import type { AboutType } from "../types/About"
function About(){
    const about: AboutType = {drawnImg: undefined, realImg: "https://res.cloudinary.com/s7eflphu/image/upload/v1786555848/mewebsite_v3dj81.png", description: "I am a creative computer scientist. I love building new experiences for people and myself every day. I am also very passionate about nature, space and art."}
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ml-auto mr-auto bg-[#261732] text-[#D6D0C5]">
            <img className="w-full max-w-xs md:max-w-none md:w-100 md:ml-90" src={about.realImg} alt="portrait of Amby"></img>
            <div className="pt-8 pb-10 md:pt-50 md:pb-0">
            <h2 className="text-5xl sm:text-7xl md:text-9xl bentham-regular text-center md:text-left md:pl-20 px-6 md:px-0"><b>i'm amby</b></h2>
            <div className="text-center md:text-right px-6 md:px-0 md:pr-100 text-xl md:text-3xl bentham-regular pt-6 md:pt-13 md:h-90">
                <b>{about.description}</b>
            </div>
            </div>
        </div>
    )
}

export default About