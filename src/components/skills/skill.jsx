import React from "react";

function Skill({icon}) {
    return (
        <div className="skill-container-card">
            <span style={{fontSize: "25px"}}>{icon}</span>
        </div>
    )
}

export default Skill;