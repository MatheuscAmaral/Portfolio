import React from "react";

function Footer({icon}) {
    return(
        <div style={{width: "100%"}}>
            <hr style={{border: "1px dashed gray", opacity: "0.2", marginBottom: "20px"}}/>
            <span style={{fontSize: "13px", display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem", marginBottom: "20px"}}> 
                <span fontSize={"12px"}>{icon}</span> Matheus Amaral
            </span>
        </div>
    )
}

export default Footer;