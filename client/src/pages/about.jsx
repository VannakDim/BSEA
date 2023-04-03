import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import {axiosInstance} from '../config/axios';
import DOMPurify from "dompurify"
import { AuthContext } from "../context/authContext";
import Dialog from "../components/Dialog";


export const About = () => {

    const [posts, setPosts] = useState([])
    const [image, setImage] = useState()
    const [filePath, setFile] = useState(null)

    const {currentUser} = useContext(AuthContext)

    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false
      });
    const handleDialog = (message, isLoading) => {
        setDialog({
          message,
          isLoading
        })};
    const handleUpload = () => {
        handleDialog("Are you sure you want to change?", true);        
    };
    const areUSure = async (choose) => {
        if (choose) {
          await upload()
        //   Update to Database

          handleDialog("", false);
        } else {
          handleDialog("", false);
        }
      };

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axiosInstance.get(`/about`)
                setPosts(res.data)
                if(!image){
                    checkingImg()
                }
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    })

    const checkingImg = () =>{
        try {
            posts.map((post)=>(post.class==="about-img" &&
                setImage(post.description)
            ))
        }catch(err){
            console.log(err);
        }
    }

    const upload = async()=>{
        try {
          const formData = new FormData();
          formData.append("file", filePath)
          const res = await axiosInstance.post("/upload", formData)
          return res.data
        } catch (err) {
          console.log(err);
        }
      }


  return (
    <div>
        <div className="container-xxl text-center bg-primary hero-header"><h1>About</h1></div>
            <div className="container-xxl py-4">
                <div className="container-xxl py-4">
                    <div className="container">
                        <div className="row g-3 pt-5">
                            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                                
                                <div className="row g-3 mb-4">
                                    
                                    <div className='col-lg-6 col-md-12 about-img'>
                                        <img onClick={() => document.querySelector("#input_file").click() } id="get_file" className="img-fluid" src={image} alt="about-photos"/>
                                        {currentUser && currentUser.role==="admin" && <input type="file" hidden onChange={e =>{
                                            setFile(e.target.files[0])
                                            setImage(URL.createObjectURL(e.target.files[0]))
                                            handleUpload()
                                            }} id="input_file" accept=".jpg,.jpeg,.png" />
                                        }
                                    </div>
                                    {dialog.isLoading && (
                                        <Dialog
                                        //Update
                                        onDialog={areUSure}
                                        message={dialog.message}
                                        />
                                    )}
                                    <div className='col-lg-6 col-md-12 wow fadeInUp' data-wow-delay='0.15s'>
                                        
                                        {posts.map((post)=>(post.class==="about" &&
                                        <div key={post.id}>
                                        {currentUser && currentUser.role==="admin"
                                        ?
                                        <Link
                                            to={`/write`}
                                            state={post}
                                            style={{ color: "inherit", textDecoration: "none" }}
                                        ><h2 className="mb-4">{post.about}</h2></Link>
                                        :
                                        <h2 className="mb-4">{post.about}</h2>
                                        }
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(post.description),
                                            }}
                                        ></p>
                                        </div>))}
                                    </div>
                                </div>

                                <div className="row g-4 mb-4">
                                    {posts.map((post)=>(post.class==="h6" &&
                                    <div key={post.id} className="col-md-6 d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className={post.icon}></i>
                                        </div>
                                        <div className="ms-4">
                                        {currentUser && currentUser.role==="admin"
                                        ?
                                        <Link
                                            to={`/write`}
                                            state={post}
                                            style={{ color: "inherit", textDecoration: "none" }}
                                        ><h5 className="mb-4">{post.about}</h5></Link>
                                        :
                                        <h5 className="mb-4">{post.about}</h5>
                                        }
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(post.description),
                                            }}
                                        ></p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        {/* <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">បច្ចុប្បន្នភាព</div> */}
                        {posts.map((post)=>(post.class==="feature" &&
                        <div  key={post.id}>
                        {currentUser && currentUser.role==="admin"
                                        ?
                                        <Link
                                            to={`/write`}
                                            state={post}
                                            style={{ color: "inherit", textDecoration: "none" }}
                                        ><h5 className="mb-4">{post.about}</h5></Link>
                                        :
                                        <h5 className="mb-4">{post.about}</h5>
                                        }
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(post.description),
                                            }}
                                        ></p>
                        </div>
                        ))}
                    </div>

                    {/* SECTIONS */}
                    <div className="col-lg-6">
                        <div className="row g-5">
                        {posts.map((post)=>( post.class === "section" &&
                            <div key={post.id} className="col-sm-12 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className={post.icon}></i>
                                    </div>
                                    {currentUser && currentUser.role==="admin"
                                        ?
                                        
                                    <Link
                                        to={`/write`}
                                        state={post}
                                        style={{ color: "inherit", textDecoration: "none" }}
                                        ><h6 className="mb-0">{post.about}</h6></Link>
                                        :
                                        <h6 className="mb-0">{post.about}</h6>
                                        }
                                </div>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(post.description),
                                    }}
                                ></p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About