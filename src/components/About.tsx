import type { AboutType } from "../types/About"
function About(){
    const about: AboutType = {drawnImg: undefined, realImg: "https://res.cloudinary.com/s7eflphu/image/upload/v1786555848/mewebsite_v3dj81.png", description: "I am a creative computer scientist. I love building new experiences for people and myself every day. I am also very passionate about nature, space and art."}
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ml-auto mr-auto bg-[#261732] text-[#D6D0C5]">
            <meta name="keywords" content="amby ambyintech React Developer JavaScript TypeScript Python Belgium HTML CSS TailwindCSS Tailwind Programming Programmer Software Engineering Engineer"></meta>
            <img className="w-full mx-auto rounded-full aspect-square object-cover object-[50%_25%] md:aspect-auto md:rounded-none max-w-xs md:max-w-none md:w-1/2 md:ml-90" src={about.realImg} alt="portrait of Amby"></img>
            <div className="pt-8 pb-10 md:pt-30 md:pb-0">
            <h2 className="text-5xl sm:text-7xl md:text-9xl bentham-regular text-center md:text-left md:pl-20 px-6 md:px-0"><b>i'm amby</b></h2>
            <div className="text-center md:text-right px-6 md:px-0 md:pr-100 text-xl md:text-3xl bentham-regular pt-6 md:pt-13 md:h-90">
                <b>{about.description}</b>
                <div className="flex flex-row mt-10 w-full mx-auto py-4 md:py-5 px-10 md:px-13 border-5 border-dashed border-[#261732] bg-[#f3f3f3] text-[#261732]">
                    <img className="w-1/5 h-1/5" src={"https://res.cloudinary.com/s7eflphu/image/upload/v1786691355/logo_vub_wit_ncdgpe.png"} alt="Lebanese University Logo"></img>
                    <div className="grid grid-cols-1">
                        <p className="text-sm">Vrije Universiteit Brussel</p>
                        <p className="text-2xl">Master of Applied Sciences and Engineering: Computer Science</p>
                    </div>
                </div>
                <div className="flex flex-row mt-5 mx-auto py-4 md:py-5 px-10 md:px-13 border-5 border-dashed border-[#261732] bg-[#f3f3f3] text-[#261732]">
                    <img className="w-1/5 pl-1 h-1/6 pt-1" src={"https://res.cloudinary.com/s7eflphu/image/upload/v1786691307/LULogo_pnm18t.png"} alt="Lebanese University Logo"></img>
                    <div className="grid grid-cols-1">
                        <p className="text-sm">Lebanese University</p>
                        <p className="text-2xl">Bachelor of Science: Computer Science</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About