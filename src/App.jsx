import { useState, useEffect } from "react";
import "./App.css";
import Card from './components/cards/card'
import logo from "./assets/logo ma.png";
import me from "./assets/me.jpg";
import { FaRegLightbulb, FaLightbulb, FaGithub, FaLinkedin  } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import rwa from "./assets/Rwa.png"
import gf from "./assets/gfimpports.png"
import pf from "./assets/porfoliomae.png"


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
          <img 
            src={logo} alt="logo" 
            style={{"--time": "0.5s"}} 
            width={"75px"}
          />
         </a>
        </div>

        <nav>
            <ul>
              <li style={{"--time": "0.5s"}}>
                <a href="#projects"
                  style={{color: lightOn ? "black" : "white"}}
                >
                  Projetos
                </a>
              </li>

              <li style={{"--time": "0.6s"}}>
                <a href="#carrer"
                   style={{color: lightOn ? "black" : "white"}}
                >
                  Carreira
                </a>                
              </li>

              <li style={{"--time": "0.7s"}}>
                <a href="#abilities"
                   style={{color: lightOn ? "black" : "white"}}
                >
                  Habilidades
                </a>
              </li>

              <li style={{"--time": "0.8s"}}>
                <a href="#talkMe"
                   style={{color: lightOn ? "black" : "white"}}
                >
                  Fale <span style={{color: "rgb(188, 17, 17)"}}>comigo</span>
                </a>
              </li>
              
              <li style={{"--time": "0.9s"}}>
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
          <div id="home" style={{position: "relative"}}>
            <div className="container">
              <section className="text-wrapper">
                  <span
                     style={{color: lightOn ? "black" : "white", "--time": "0.7s"}}
                  >
                    Olá, me chamo
                  </span>

                  <span
                     style={{color: lightOn ? "black" : "white", "--time": "0.8s"}}
                  >
                    Matheus <span className="secondary-color">Amaral</span>
                  </span>
                  
                  <span 
                    className="secondary-color"
                    id="work"
                    style={{"--time": "0.9s"}}
                  >
                    Front-end Developer
                  </span>

                  <div className="buttons">
                      <button id="button_talkMe" style={{"--time": "1s"}}>
                        <a href="#talkMe">
                          Me contate
                        </a>
                      </button>

                      <button id="button_curriculum" style={{"--time": "1s"}}>
                        <a id="curriculum" href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
                            Ver Currículo
                        </a>
                      </button>
                  </div>

                  <div className="icons_home">
                    <a href="https://github.com/MatheuscAmaral" target="_blank" style={{"--time": "1.1s"}}>
                      <FaGithub 
                        id="gitHub"
                        className="secondary-color"
                        fontSize={"35px"}
                      />
                    </a>

                    <a href="https://www.linkedin.com/in/matheus-amaral-00762b265/" style={{"--time": "1.1s"}}>
                      <FaLinkedin
                        id="linkedin"
                        className="secondary-color"
                        fontSize={"35px"}
                      />
                    </a>
                  </div>
              </section>

              <img 
                src={me} 
                id="myPicture"  
                alt="foto principal"
                style={{"--time": "2.3s"}}
              />
            </div>

            <a href="#projects" >
              <IoIosArrowDropdownCircle 
                className="arrowBottom"
                fontSize={"40px"}
                style={{border: "none", borderRadius: "50%", color: " rgb(132, 14, 14)", padding: "20px", left: "1rem", bottom: "1rem", position: "absolute", cursor: "pointer"}}
              />
            </a>
          </div>

          <div id="projects">
              <h1 style={{color: lightOn ? "black" : "white"}}>Meus <span className="secondary-color">Projetos</span></h1>

            <div className="cards-container">
              <Card
                imageUrl={rwa}  
                title={"Rwa"} 
                subTitle={"Suplementos"}
                description={"Descubra qualidade e facilidade em nossa loja virtual. Em breve, com o upgrade para React JS, ofereceremos uma experiência ainda mais envolvente para sua jornada de saúde."}
                light={lightOn}
                deploy={"https://rwasuplementos.com/"}
                github={"https://github.com/MatheuscAmaral/Rwa_Suplementos"}
                invert={"no"}
                />

              <Card
                imageUrl={gf}  
                title={"Gf"}
                subTitle={"Impports"} 
                description={"Um e-commerce intuitivo para facilitar a aquisição de eletrônicos. Em constante evolução, prometemos uma experiência digital ainda mais sofisticada para sua jornada de descobertas tecnológicas."}
                light={lightOn}
                deploy={"https://gfimpports.netlify.app/"}
                github={"https://github.com/MatheuscAmaral/GFImpports"}
                invert={"yes"}
                /> 
                           
              <Card
                imageUrl={pf}
                title={"Portfólio"}
                subTitle={"Nutricional"} 
                description={" Explore o portfólio nutricional, uma experiência online que visa inspirar hábitos saudáveis e oferecer informações valiosas sobre nutrição."}
                light={lightOn}
                deploy={"https://fernardaamaralnutricionista.com/home.html"}
                github={"https://github.com/MatheuscAmaral/portfolioFernandaAmaral"}
                invert={"no"}
              />    
            </div>
          </div>

          <div id="carrer">
            <h1 style={{color: lightOn ? "black" : "white"}}>Minha <span className="secondary-color">Carreira</span></h1>

          </div>
      </main>

    </div>
  )
}

export default App
