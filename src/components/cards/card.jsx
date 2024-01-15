import React from "react";

function Card({imageUrl, title, description, light}) {
    return (
        <div className="card" style={{display: "flex", flexDirection: "column", width: "400px", border: "0"}}>
            <img 
                src={imageUrl}
                style={{width: "100%", borderRadius: "8px 8px 0px 0px", boxShadow: "0px 0px 1px 0px gray"}}
            />

            <div className="card-content" style={{textAlign: "center", padding: "0px 40px 40px 40px", wordWrap: "break-word", borderRadius: "0px 0px 8px 8px", boxShadow: "0px 0px 1px 0px black", height: "160px"}}>
                <h3 style={{color: light ? "black" : "white"}}>
                    {title}
                </h3>
                <span style={{color: light ? "black" : "white", fontSize: "14px"}}>
                    {description}
                </span>
            </div>
        </div>
    )
}

export default Card; 