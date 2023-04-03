
import React from 'react'

const Error= ()=>{
    return(
        <div class="container-xxl hero-header py-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page is under construction!</h1>
                        <p class="mb-4">Thank you for your time on my webpage.</p>
                        <a class="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error