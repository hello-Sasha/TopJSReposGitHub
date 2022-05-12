import React from "react";
import './Skeleton.css';
import {IoMdStarOutline}  from 'react-icons/io';
import {CgGitFork} from 'react-icons/cg';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIosNew } from 'react-icons/md';
import { SkeletonText } from "./SkeletonText";

export const Skeleton=()=>{

    return(
        <div className="skeleton-container">
            <div className="skeleton-card">
                <MdArrowBackIosNew className="icon left"/>
                <MdArrowForwardIos  className="icon right"/>
                <div className="skeleton-description">
                    <SkeletonText subheader="subheader-class" widthRow="80%"/>
                    <SkeletonText rowsCount={2}/>
                    <SkeletonText  widthRow="90%"/>
                    <div className="stat-skeleton">
                        <div className="skeleton-group">
                                <IoMdStarOutline className="icon-small"/>
                                <SkeletonText widthRow="70%"/>
                        </div>
                        <div className="skeleton-group">
                            <CgGitFork className="icon-small"/>
                            <SkeletonText widthRow="70%"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}