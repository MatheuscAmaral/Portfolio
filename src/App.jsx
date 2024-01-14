import { useState } from "react";
import "./App.css";
import logo from "./assets/logo ma.png";
import me from "./assets/me.jpg";
import { FaRegLightbulb, FaLightbulb, FaGithub, FaLinkedin  } from "react-icons/fa";


function App() {
  const [lightOn, setLightOn] = useState(true);

  
  function setLightState() {
    if(lightOn == true) {
      setLightOn(!lightOn)
    } else {
      setLightOn(!lightOn);
    }
  }

  return (
    <div id="page"
    style={{backgroundColor: lightOn ? "rgb(250, 250, 250)" : "#020114"}}>
      <header className="navbar">
        <div id="logo">
         <a href="#home">
          <img src={logo} alt="logo" width={"75px"}/>
         </a>
        </div>

        <nav>
            <ul>
              <li>
                <a href="#projects"
                  style={{color: lightOn ? "black" : "white"}}
                >
                  Projetos
                </a>
              </li>

              <li>
                <a href="#carrer"
                   style={{color: lightOn ? "black" : "white"}}
                >
                  Carreira
                </a>                
              </li>

              <li>
                <a href="#abilities"
                   style={{color: lightOn ? "black" : "white"}}
                >
                  Habilidades
                </a>
              </li>

              <li>
                <a href="#talkMe"
                   style={{color: lightOn ? "black" : "white"}}
                >
                  Fale <span className="secondary-color">comigo</span>
                </a>
              </li>
              
              <li>
                <FaLightbulb 
                  fontSize={"20px"}
                  onClick={setLightState}
                  style={{display: lightOn ? "block" : "none", cursor: "pointer"}}

                />
                <FaRegLightbulb 
                  fontSize={"20px"} 
                  onClick={setLightState}
                  style={{display: lightOn ? "none" : "block", cursor: "pointer", color: "white"}}
                />
              </li>
            </ul>
        </nav>
      </header>

      <main>
          <div id="home">
            <div className="container">
              <section className="text-wrapper">
                  <span
                     style={{color: lightOn ? "black" : "white"}}
                  >
                    Olá, me chamo
                  </span>
                  <span
                     style={{color: lightOn ? "black" : "white"}}
                  >
                    Matheus <span className="secondary-color">Amaral</span>
                  </span>
                  
                  <span className="secondary-color" id="work">Front-end Developer</span>

                  <div className="buttons">
                      <button id="button_talkMe">
                        <a href="#talkMe">
                          Me contate
                        </a>
                      </button>

                      <button id="button_curriculum">
                        <a id="curriculum" href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                            Ver Currículo
                        </a>
                      </button>
                  </div>

                  <div className="icons">
                    <a href="https://github.com/MatheuscAmaral" target="_blank">
                      <FaGithub 
                        id="gitHub"
                        className="secondary-color"
                        fontSize={"35px"}
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/matheus-amaral-00762b265/">
                      <FaLinkedin
                        id="linkedin"
                        className="secondary-color"
                        fontSize={"35px"}
                      />
                    </a>
                  </div>
              </section>

              <img src={me}  alt="foto principal"/>

            </div>
          </div>
      </main>

    </div>
  )
}

export default App
