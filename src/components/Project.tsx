import type { ProjectType } from "../types/Project";
function Project(props: ProjectType) {
    return (
        <div className="text-center pt-10 pb-10 rounded-tr-3xl rounded-bl-3xl m-6 sm:m-12 md:m-30 md:mt-20">
        <div className="bg-[#ffffff] pt-10 pb-10 border-t-5 border-l-5 border-r-5 border-dashed border-[#D6D0C5]">
        <img className="h-32 md:h-40 w-full max-w-[27.5rem] px-4 mx-auto object-contain" src={props.img} alt={props.title}></img>
        </div>
        <div className="bg-[#f3f3f3] border-[#243c5a] border-b-5 border-l-5 border-r-5 border-dashed border-[#D6D0C5] pb-10 pt-10">
        <h1 className="bentham-regular text-3xl md:text-4xl text-[#261732] px-4">{props.title}</h1>
        <hr className="mt-5 mb-5"></hr>
        <p className="bentham-regular text-lg md:text-2xl text-[#261732] md:h-51 px-6 md:px-10">{props.description}</p>
        <hr className="mt-5 mb-5"></hr>
        <div className="flex flex-row justify-center mt-5 px-4">
        {props.skills?.map(s => {
        return (
            <i className="bg-[#261732] text-[#D6D0C5] px-4 py-2 pr-5 text-sm md:text-base">
            {s}
            </i>
        )
        })}
        </div>
        <hr className="mt-5 mb-5"></hr>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-8 px-4">
        <a className="flex flex-row items-center gap-1 bg-[#261732] text-[#D6D0C5] px-3 py-2 min-h-11" href={props.url}>
        <svg className="bg-[#261732] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#D6D0C5"><path d="M398-120q-27 0-51.5-11.5T305-164L46-483l26-25q19-19 45-22t47 12l116 81v-403q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v557l-111-78 118 146q6 7 14 11t17 4h282q33 0 56.5-23.5T760-280v-280q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560v280q0 66-47 113t-113 47H398Zm122-240Zm-80-80v-240q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680v240h-80Zm160 0v-200q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v200h-80Z"/></svg>
        DEMO</a>
        <a className="flex flex-row items-center gap-1 bg-[#261732] text-[#D6D0C5] px-3 py-2 min-h-11" href={props.repo}>
        <svg className="bg-[#261732] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#D6D0C5"><path d="M398-120q-27 0-51.5-11.5T305-164L46-483l26-25q19-19 45-22t47 12l116 81v-403q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v557l-111-78 118 146q6 7 14 11t17 4h282q33 0 56.5-23.5T760-280v-280q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560v280q0 66-47 113t-113 47H398Zm122-240Zm-80-80v-240q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680v240h-80Zm160 0v-200q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v200h-80Z"/></svg>
        REPO</a>
        </div>
        </div>
        </div>
    )
}

export default Project