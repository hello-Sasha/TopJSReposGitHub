import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setRepos} from '../../store/reposReducer';
import './List.css';
import { Slider } from "../Slide/Slide";
import { Skeleton } from "../skeleton/Skeleton";





export const List=()=>{
    const [loading, setLoading] = useState(true);
    const repos = useSelector((state) => state.repos.repos)
    const dispatch = useDispatch()

    useEffect(()=>{
        setTimeout( async () => {
             await fetch('https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc')
                .then((resp)=>resp.json())
                .then((resp)=>dispatch(setRepos(resp.items.flat())))
                .then(setLoading(false));
        },5000)
    },[])

   if(loading){return(
        <div className="list-main-container">
            <h1 className="header_main">TOP MOST POPULAR JAVASCRIPT REPOSITORIES</h1>
            <div className="list-card">
                <Skeleton/>
            </div>
        </div>
   )} else {
    return (
        <div className="list-main-container">
           <h1 className="header_main">TOP MOST POPULAR JAVASCRIPT REPOSITORIES</h1>
       
            <div className="list-card">
                <Slider repos={repos}/>
            </div>
        </div>
    )}
}