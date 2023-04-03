import React from 'react'

const contact = () => {
  return (
    <div>
        <div className="container-xxl text-center justify-content-center bg-primary hero-header"><h1 >Contact</h1></div>
            <div className="container-xxl py-4">
                <div className="container-xxl py-6">
                    <div className="container-xxl">
                        <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Google Maps</div>
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7817.068309507269!2d104.835173!3d11.585216!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM1JzA2LjgiTiAxMDTCsDUwJzE0LjUiRQ!5e0!3m2!1sen!2skh!4v1675541209980!5m2!1sen!2skh" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            <h2 className="mb-5 mt-5">If You Have Any Query, Please Feel Free Contact Us</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
                                <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default contact