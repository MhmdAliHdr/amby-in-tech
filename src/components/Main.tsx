import { useState, type ReactElement } from "react";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Main(){
    const [currentPage, setCurrentPage] = useState<string>("Contact")
    return (
    <>
    <input type="radio" name="page" value="Blog" onChange={(e) => {setCurrentPage(e.target.value)}}></input> Blog
    <input type="radio" name="page" value="Portfolio" onChange={(e) => {setCurrentPage(e.target.value)}}></input> Portfolio
    <input type="radio" name="page" value="Contact" onChange={(e) => {setCurrentPage(e.target.value)}}></input> Contact
    {
        currentPage == "Blog" ? <Blog></Blog> : (currentPage == "Portfolio" ? <Portfolio></Portfolio> : <Contact></Contact>)
    }
    </>
    )
}
export default Main