function Contact() {
    return(
        <projects>
            <h1>Contact Page</h1>

            <div className="mb-3 col-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"></input>
            </div>
            <div className="mb-3 col-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div className="mb-3 col-4">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
        </projects>
    )
}

export default Contact;