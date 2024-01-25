import React, { useState, useEffect } from "react";
import "./App.css";
import Card from './components/cards/card'
import Skill from "./pages/skill";
import Footer from "./components/footer/footer";
import Inputs from "./components/inputs/inputs";
import Carrer from "./pages/carrer";
import RadioCard from "./components/radio/radio";
// import Button from "./components/button/button";
import me from "./assets/me.jpg";
import {Box,  Button,  SlideFade, useDisclosure} from '@chakra-ui/react'
import Header from "./components/header/header";
import { FaRegLightbulb, FaLightbulb, FaGithub, FaLinkedin, FaReact, FaNode, FaGitAlt, FaRegCopyright } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { PiFileCssBold, PiFileHtmlBold  } from "react-icons/pi";
import { TbFileTypeSql } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { motion } from "framer-motion"
import rwa from "./assets/Rwa.png"
import gf from "./assets/gfimpports.png"
import pf from "./assets/porfoliomae.png"


function App() {
  const [lightOn, setLightOn] = useState(true);
  const { isOpen, onToggle } = useDisclosure();
  const [selectedValue, setSelectedValue] = React.useState('Whatsapp');
  const bodyElement = document.querySelector('body');

  
  useEffect(() => {
      bodyElement.style.backgroundColor = lightOn ? "rgb(250, 250, 250)" : "#020114";
  }, [lightOn]);

  function setLightState() {
    if(lightOn == true) {
      setLightOn(!lightOn)
    } else {
      setLightOn(!lightOn);
    }
  }

  return (
    <div id="page">
      <main>
          <Header light={lightOn}/>
          <div id="home" style={{position: "relative", marginTop: "100px"}}>
            <div className="container flex place-content-evenly items-center ">
              <section className="text-wrapper flex flex-col gap-3 justify-center items-center md:justify-start md:items-start">
                    <span
                      style={{color: lightOn ? "black" : "white", "--time": "0.7s"}}
                      className="text-xl"
                    >
                      Olá, me chamo
                    </span>

                    <span
                      style={{color: lightOn ? "black" : "white", "--time": "0.8s"}}
                      className="text-5xl md:text-6xl font-semibold"
                    >
                      Matheus <span className="secondary-color">Amaral</span>
                    </span>
                    
                    <span 
                      className="secondary-color text-xl"
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
                  className="hidden md:block"
                />
            </div>

              <a href="#projects">
                <IoIosArrowDropdownCircle 
                  className="arrowButton"
                  fontSize={"40px"}
                  style={{border: "none", borderRadius: "50%", color: " rgb(132, 14, 14)", padding: "20px", left: "1rem", bottom: "1rem", position: "absolute", cursor: "pointer"}}
                />
              </a>
          </div>

          <div id="projects">
            <h1 style={{ color: lightOn ? 'black' : 'white' }}>
              Meus <span className="secondary-color">Projetos</span>
            </h1>

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

            {/* <Carrer/> */}
          </div>

          <div id="skills" style={{paddingBottom: "200px"}}>
            <h1 style={{color: lightOn ? "black" : "white"}}>Minhas <span className="secondary-color">Habilidades</span></h1>

            <div className="skills-container" style={{color: lightOn ? "black" : "white"}}>
              <Skill
                icon={<PiFileHtmlBold />}
              />
              <Skill
                icon={<PiFileCssBold/>}
              />
              <Skill
                icon={<FaReact />}
              />
              <Skill
                icon={<DiJavascript1/>}
              />
              <Skill
                icon={<FaNode />}
              />
              <Skill
                icon={<DiJqueryLogo/>}
              />
              <Skill
                icon={<FaGitAlt/>}
              />
              <Skill
                icon={<RiBootstrapLine />}
              />
              <Skill
                icon={<TbFileTypeSql  />}
              />
              
            </div>
          </div>

          <div id="talkMe" style={{paddingBottom: "200px"}}>
            <h1 style={{color: lightOn ? "black" : "white"}}>Fale <span className="secondary-color">comigo</span></h1>

            <div className='flex items-center flex-col gap-2'>
                <div className='flex gap-2'>
                    <RadioCard setSelectedValue={setSelectedValue} />
                </div>
            </div>

            <div className="content_talk flex justify-center gap-5">
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <Inputs/>
                  <button className="secondary-color-background w-52" style={{padding: '8px', borderRadius: '5px', color: 'white', fontSize: '12px'}}>Enviar mensagem</button>
                </div>

                <div className="hidden md:flex md:flex-col md:gap-10 md:items-start md:justify-start">
                  {/* <Button/> */}
                  <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem"}}> 
                   <Button borderRadius={"50%"} padding={"0px"} backgroundColor={"#840e0e"} onMouseEnter={onToggle} onMouseLeave={onToggle} _hover={{backgroundColor: 'red'}}>
                      <BsFillTelephoneFill 
                        fontSize={"15px"}
                        style={{color: "white"}}
                      />
                    </Button>
                    <SlideFade in={isOpen} offsetY='20px'>
                      <Box
                        p='0px'
                        style={{color: lightOn ? "black" : "white"}}
                        rounded='md'
                        fontSize='13px'
                      >
                        <h5 style={{color: "light-gray", paddingLeft: "2px"}}>Me ligue</h5>
                        <p>(31) 99266-1386</p>
                      </Box>
                    </SlideFade>
                  </div>

                  <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem"}}> 
                   <Button borderRadius={"50%"} padding={"0px"} backgroundColor={"#840e0e"} onMouseEnter={onToggle} onMouseLeave={onToggle} _hover={{backgroundColor: 'red'}}>
                      <BsMailbox2 
                        fontSize={"15px"}
                        style={{color: "white"}}
                      />
                    </Button>
                    <SlideFade in={isOpen} offsetY='20px'>
                      <Box
                        p='0px'
                        style={{color: lightOn ? "black" : "white"}}
                        rounded='md'
                        fontSize='13px'
                      >
                        <h5 style={{color: "light-gray", paddingLeft: "2px"}}>E-mail:</h5>
                        <p>matheuscamposdoamaral15@gmail.com</p>
                      </Box>
                    </SlideFade>
                  </div>

                  <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem"}}> 
                   <Button borderRadius={"50%"} padding={"0px"} backgroundColor={"#840e0e"} onMouseEnter={onToggle} onMouseLeave={onToggle} _hover={{backgroundColor: 'red'}}>
                      <FaLocationCrosshairs 
                        fontSize={"15px"}
                        style={{color: "white"}}                  
                      />
                    </Button>
                    <SlideFade in={isOpen} offsetY='20px'>
                      <Box
                        p='0px'
                        style={{color: lightOn ? "black" : "white"}}
                        rounded='md'
                        fontSize='13px'
                      >
                        <h5 style={{color: "light-gray", paddingLeft: "2px"}}>Localização:</h5>
                        <p>Contagem - MG</p>
                      </Box>
                    </SlideFade>
                  </div>

                </div>
            </div>
          </div>
      </main>

      <footer>
          <Footer
            icon={<FaRegCopyright />}
            light={lightOn}
          />
      </footer>
    </div>
  )
}

export default App
