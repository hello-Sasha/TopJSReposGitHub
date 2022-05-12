import React from "react";
import { Slideritem } from "../SlideItem/Slideritem";
import {IoMdClose} from 'react-icons/io'
import './Modal.css';

export const Modal=({card, onClose})=>{
    
    return(
        <div children="modal-container">
            <div className="screen"></div>
            <div className="modal">
                <IoMdClose className="icon-close" onClick={()=>onClose()}/>
                <Slideritem 
                    name={card.name}
                    description={card.description}
                    forks={card.forks_count} 
                    stars={card.stargazers_count}
                    link={card.homepage}
                    topic={card.topics}
                    owner={card.owner.login}
                />
            </div>
        </div>
    )
}