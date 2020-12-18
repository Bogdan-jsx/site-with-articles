import React from "react";
import "./news.css"
import { ThumbUp, ThumbDown, RemoveRedEye } from "@material-ui/icons"
import {Link} from 'react-router-dom'


export default function News({info}) {
  return (
      <Link to={`/page/${info._id}`} className="articleLink">
        <div className="news">
            <div style={{background: `url(${process.env.PUBLIC_URL}/images/beach.png)`, width: "295px", height: "190px"}} />
            <div className="infoElem"> 
                <h2 className="articleName">{info.title}</h2>
                <p className="artilceDescription">{info.description}</p>
                <div className="articleStats">
                    <ThumbUp/>
                    <p>{info.likes.length}</p>
                    <ThumbDown/>
                    <p>{info.dislikes.length}</p>
                    <RemoveRedEye/>
                    <p>{info.views}</p>
                </div>
            </div>
        </div>
      </Link>
  );
}