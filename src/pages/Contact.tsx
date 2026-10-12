function Contact() {
    return (
        <>
        <div className="grid grid-cols-1 bg-[#261732] text-center px-6">
        <h2 className="text-[#D6D0C5] text-4xl md:text-6xl bentham-regular text-center pb-10 pt-16 md:pt-20"><b>contact me</b></h2>
        <form
        className="grid w-full ml-2 mx-auto grid-cols-1"
        action="https://formspree.io/f/xaewjnde"
        method="POST"
        >
        <label>
            <b className="grid grid-cols-1 mt-5 text-[#D6D0C5] text-3xl md:text-4xl bentham-regular">email:</b>
            <input className="bg-[#D6D0C5] w-full h-12 px-3 text-base md:w-80 md:h-10 border-3 border-dashed border-[#261732] bentham-regular focus:outline-none" type="email" name="email"/>
        </label>
        <label>
            <b className="grid grid-cols-1 mt-5 text-[#D6D0C5] text-4xl bentham-regular">subject:</b>
            <input className="bg-[#D6D0C5] w-full md:w-80 h-12 md:h-10 px-3 text-base border-3 border-dashed border-[#261732] bentham-regular focus:outline-none" name="subject"></input>
        </label>
        <label>
            <b className="grid grid-cols-1 mt-5 text-[#D6D0C5] text-3xl md:text-4xl bentham-regular">message:</b>
            <textarea className="bg-[#D6D0C5] h-64 md:h-110 w-full md:w-150 p-3 text-base border-3 border-dashed border-[#261732] bentham-regular focus:outline-none" name="message"></textarea>
        </label>
        <button className="mb-13 mx-auto bg-[#D6D0C5] text-3xl md:text-4xl mt-10 px-8 py-4 min-h-11 border-3 border-dashed border-[#261732] bentham-regular text-center" type="submit">send</button>
        </form>
        </div>
        </>
    )
}

export default Contact