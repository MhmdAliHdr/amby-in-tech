import type { PortfolioType } from "../types/Portfolio";
import { useState } from "react";
function Portfolio() {
    const [ portfolio, setPortfolio ] = useState<PortfolioType>({projects: [{title: "Yarn On", description: "A Fiber Arts Tool", url: "https://yarnon.mohammadali-hd3.workers.dev/", repo: "https://github.com/MhmdAliHdr/yarn-on", img: "https://res.cloudinary.com/s7eflphu/image/upload/v1784560246/logo_cuvzo4.png"}]})
    return (
        <>
        {portfolio.projects.map(project => {
        return (
            <div className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url}>DEMO</a>--
            <a href={project.repo} >REPO</a>
            <img src={project.img}></img>
            </div>)
        })}
        </>
    )
}

export default Portfolio