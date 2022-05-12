import React from "react";
import './Slideitem.css';
import {IoMdStarOutline}  from 'react-icons/io';
import {CgGitFork} from 'react-icons/cg';
import {BsLink45Deg} from 'react-icons/bs';

export const Slideritem=({name,description, forks=10, stars=204, link="", topic=[],owner=""})=>{

    return(
        <div className={owner?"modal-card":"regular-card"}>
            <p className="owner">{owner}</p>
            <p className={owner?"card_header-modal":"card_header"}>{name.toUpperCase()}</p>
            <div className="card_desciption">
                <div className="card-text">{description}</div>
                <div className="link_icon_group">
                    {link?  
                        <a href={link} className="group link" target="_blank" rel="noreferrer">
                            <BsLink45Deg className="icon-small"/> 
                            {link.slice(link.indexOf('//')+2)}
                        </a>: ""
                    }
                </div>
                <div className="topic-group">{topic.map((el, index)=><span key={index} className="topic-item">{el}</span>)}</div>
                <div className="stat_data">
                    <div className="group"><IoMdStarOutline className="icon-small"/>{stars}</div>
                    <div className="group"><CgGitFork className="icon-small"/>{forks}</div>
                </div>
                
            </div>
       
        </div>
    )
}