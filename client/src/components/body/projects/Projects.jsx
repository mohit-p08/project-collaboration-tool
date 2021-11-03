/* 
Name of the Module : Projects
Date of Module Creation : 2/10/2021
Author of the module: Jaimin Prajapati
What the module does : show all uploaded projects
Modification history : 
    Card-Bottom Button and Like Button Effect
*/

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProjects, dispatchGetAllProjects } from '../../../redux/actions/projectAction';
import { NavLink } from 'react-router-dom'
import './projects.css'
import Dataproject from '../home/Dataproject'
import ProjectImgCarousel from './ProjectImgCarousel'
import Footer from '../home/Footer';

const Projects = () => {

    const auth = useSelector(state => state.auth);
    const token = useSelector(state => state.token);
    const projects = useSelector(state => state.projects);

    const { user, isAdmin } = auth;

    const [avatar, setAvatar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [callback, setCallback] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAdmin || user) {
            fetchAllProjects(token).then(res => {
                dispatch(dispatchGetAllProjects(res));
            })
        }
    }, [token, isAdmin, dispatch, callback]);

    return (
        <>
        <div className="projects-main-container">
            <div className="grd-projects mt-5 p-5">
                {
                    projects.map(project => {
                        return (
                            <>
                                {/* key={project._id} */}
                                <div className="Card">

                                    {/* Project Images  */}
                                    <div className="img-div">
                                        <ProjectImgCarousel className="project-img" />
                                    </div>


                                    {/* Project detail/overview  */}
                                    <div className="project-detail">

                                        <span><b>{project.title}</b></span>
                                        <br /><br />
                                        <p>{project.overview}</p>

                                    </div>

                                    <div className="flx-card-bottom">

                                            <div className="d-flex flex-row">
                                                <button className="like-button">
                                                    <i className="bi bi-heart-fill btn pt-2 like-icon"></i> <b>30k</b>
                                                </button>
                                            </div>

                                            <NavLink exact to={`/joinproject/${project._id}`}>
                                                <button className="button button-readmore"> <b> Read More </b></button>
                                            </NavLink>

                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        
        {/* Using Footer Module on Home Page */}
        {/* <Footer /> */}
        </>
    )
}

export default Projects