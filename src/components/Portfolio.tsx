import type { PortfolioType } from "../types/Portfolio";
import Project from './Project'
function Portfolio() {
    const portfolio: PortfolioType = {projects: [{title: "Yarn On", description: "A tool to make writing crochet and knitting patterns easier. This gets rid of the hassles a lot of fiber artists struggle with when using standard writing software not targeted at fiber arts (Centering images, numbering rows, naming sections). There is also a handy export as PDF option.", url: "https://yarnon.mohammadali-hd3.workers.dev/", repo: "https://github.com/MhmdAliHdr/yarn-on", img: "https://res.cloudinary.com/s7eflphu/image/upload/v1786532195/logo_transparent_vqsxzs.png", skills: ["ReactJS", "TailwindCSS", "TypeScript"]},
         {title: "Student Sleep Quality Predictor", description: "A dashboard built over a synthesized Kaggle dataset that showcases different sleep qualities for students based on a list of features. The dashboard allows users to select from different visualization techniques (bargraphs, scatterplots, or line graphs). The tool also accepts input in order to predict the user's sleep quality based on a trained KNN-model.", repo: "https://github.com/MhmdAliHdr/predict_sleep_quality", url: "https://predict-sleep-quality-1.onrender.com/", img: "https://res.cloudinary.com/s7eflphu/image/upload/v1786534960/StudentSleepQualityLogoTransparent_b3zolm.png", skills: ["Python", "Dash", "Plotly"]}]}
    return (
        <>
        <h2 className="text-[#261732] text-6xl bentham-regular text-center pt-20"><b>projects</b></h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
        {portfolio.projects.map(project => {
        return (
            <Project key={project.title} title={project.title} description={project.description} url={project.url} repo={project.repo} img={project.img} skills={project.skills}></Project>)
        })}
        </div>
        </>
    )
}

export default Portfolio