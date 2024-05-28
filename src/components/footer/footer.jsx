import React from "react";
import { useContext } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LightContext } from "../../contexts/LightContext";

function Footer({icon}) {
    const { light } = useContext(LightContext);

    return(
        <div style={{width: "100%", backgroundColor: light ? "white" : "#131111"}}>
            <hr style={{border: "1px dashed", borderColor: light ? "gray" : "white" , opacity: "0.2", marginBottom: "20px"}}/>
            <span className="flex justify-between"> 
                <span></span>

                <span fontSize={"12px"} style={{color: light ? "black" : "white"}} className="flex gap-1 text-xs pb-5 items-center">
                    {icon}
                    <p className="font-semibold">Matheus <span className="text-red-900">Amaral</span></p>
                </span> 

               <div className=" flex gap-2 text-lg pr-2 text-red-900">
                    <a href="https://github.com/MatheuscAmaral">
                        <FaGithub className="hover:text-red-700 transition-all" />
                    </a>

                    <a href="https://www.linkedin.com/in/matheus-amaral-00762b265/">
                        <FaLinkedin className="hover:text-red-700 transition-all"/>   
                    </a>
               </div>
            </span>

        </div>
    )
}

export default Footer;