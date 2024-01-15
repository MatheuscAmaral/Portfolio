import React from "react";
import {FaGithub} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Card({imageUrl, title, subTitle, description, light}) {
    return (
        <div className="card" style={{display: "flex", width: "100%", border: "0"}}>
            <img 
                src={imageUrl}
                style={{width: "450px", borderRadius: "8px", boxShadow: "0px 0px 1px 0px gray"}}
            />

            <div className="card-content" style={{textAlign: "center", padding: "0px 40px 40px 40px", width: "300px", wordWrap: "break-word", height: "160px"}}>
                <h3 style={{color: light ? "black" : "white", fontSize: "18px", fontWeight: "500"}}>
                    {title} <span className="secondary-color">{subTitle}</span>
                </h3>
                <span style={{color: light ? "black" : "white", fontSize: "12px"}}>
                    {description}
                </span>

                <div className="icons">
                    <a className="icons_button" href="#">
                        <CgWebsite
                            className="secondary-color"
                            style={{fontSize: "22px"}}
                        />
                    </a>

                    <a className="icons_button" href="#">
                        <FaGithub
                             className="secondary-color"
                             style={{fontSize: "20px"}}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card; 