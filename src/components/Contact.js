const Contact = () => {
    return (
        <div id='contact-us'>
            <h1>Contact Us Page</h1>
            <form>
                <input className="contactUsFields" placeholder="Name"></input>
                <input className="contactUsFields" placeholder="E-Mail"></input>
                <button className="contactUsFields">Submit</button>
            </form>
        </div>
    )
}
export default Contact