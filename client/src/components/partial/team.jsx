import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios";
import "./style.scss"

function Team (){
    const [teams, setTeams] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axiosInstance.get(`/team/`)
                setTeams(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    })
    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" >
                    {/* <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div> */}
                    <h2 className="mb-5">Meet Our Team Members</h2>
                </div>
                
                    <div id="card-list" className="row g-4 text-center">
                    {teams.map((team)=>(
                        <div key={team.id} className="col-lg-3 col-md-6 justify-center wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <h5>{team.name}</h5>
                                <p className="mb-4">{team.position}</p>
                                <img className="img-fluid team rounded-circle w-100 mb-4" src={team.imgPath} alt="profile" />
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-square text-primary bg-white m-1" href={team.fb}><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
        )}

export default Team