function Contact() {
    return (
        <>
        <div className="grid grid-cols-1 bg-[#261732] text-center">
        <h2 className="text-[#D6D0C5] text-6xl bentham-regular text-center pb-10 pt-20"><b>contact me</b></h2>
        <form
        className="grid mr-auto ml-auto grid-cols-1"
        action="https://formspree.io/f/xaewjnde"
        method="POST"
        >
        <label>
            <b className="grid grid-cols-1 mt-5 text-[#D6D0C5] text-4xl bentham-regular">email:</b>
            <input className="bg-[#D6D0C5] w-80 h-10 border-3 border-dashed border-[#261732] bentham-regular focus:outline-none" type="email" name="email"/>
        </label>
        <label>
            <b className="grid grid-cols-1 mt-5 text-[#D6D0C5] text-4xl bentham-regular">subject:</b>
            <input className="bg-[#D6D0C5] w-80 h-10 border-3 border-dashed border-[#261732] bentham-regular focus:outline-none" name="subject"></input>
        </label>
        <label>
            <b className="grid grid-cols-1 mt-5 text-[#D6D0C5] text-4xl bentham-regular">message:</b>
            <textarea className="bg-[#D6D0C5] h-110 w-150 border-3 border-dashed border-[#261732] bentham-regular focus:outline-none" name="message"></textarea>
        </label>
        <button className="mb-13 mr-auto ml-auto bg-[#D6D0C5] text-4xl mt-10 w-38 h-19 border-3 border-dashed border-[#261732] bentham-regular text-center" type="submit">send</button>
        </form>
        </div>
        </>
    )
}

export default Contact