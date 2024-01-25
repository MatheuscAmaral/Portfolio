import React from "react";
import {FaGithub} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Card({imageUrl, title, subTitle, description, light, deploy, github, invert}) {
    return (
        <div className={`card flex md:${invert === 'no' ? 'flex-row' : 'flex-row-reverse'} flex-col items-center w-full border-0 gap-10`}>
            <img 
                src={imageUrl}
                style={{width: "550px", borderRadius: "8px",}}
            />

            <div className="card-content" style={{textAlign: "center", padding: "0px 40px 40px 40px", width: "350px", wordWrap: "break-word", height: "160px"}}>
                <h3 style={{color: light ? "black" : "white", fontSize: "22px", fontWeight: "500", marginBottom: "20px"}}>
                    {title} <span className="secondary-color">{subTitle}</span>
                </h3>
                <span style={{color: light ? "black" : "white"}}>
                    {description}
                </span>

                <div className="icons">
                    <a className="icons_button" href={deploy} target="_blank">
                        <CgWebsite
                            className="secondary-color"
                            style={{fontSize: "25px"}}
                        />
                    </a>

                    <a className="icons_button" href={github} target="_blank">
                        <FaGithub
                             className="secondary-color"
                             style={{fontSize: "21px"}}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card; 