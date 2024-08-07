import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/cards/card";
import Skill from "./pages/skill";
import Footer from "./components/footer/footer";
import Inputs from "./components/inputs/inputs";
import Carrer from "./pages/carrer";
import { SiMysql } from "react-icons/si";
import RadioCard from "./components/radio/radio";
// import Button from "./components/button/button";
import me from "./assets/me.jpg";
import { Box, Button, SlideFade, useDisclosure } from "@chakra-ui/react";
import Header from "./components/header/header";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNode,
  FaGitAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { FaLocationCrosshairs, FaPhp } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { PiFileCssBold, PiFileHtmlBold } from "react-icons/pi";
import {
  TbBrandLaravel,
  TbBrandTypescript,
  TbFileTypeSql,
} from "react-icons/tb";
import { RiBootstrapLine, RiTailwindCssLine } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { motion } from "framer-motion";
import mtx from "./assets/mtx.png";
import gf from "./assets/gfimpports.png";
import pf from "./assets/porfoliomae.png";
import logo from "./assets/logoMA.png";
import { useContext } from "react";
import { LightContext } from "./contexts/LightContext";

function App() {
  const { light } = useContext(LightContext);
  const { isOpen, onToggle } = useDisclosure();
  const [selectedValue, setSelectedValue] = React.useState("Whatsapp");
  const bodyElement = document.querySelector("body");

  return (
    <div id="page">
      <main style={{ backgroundColor: light ? "white" : "#131111" }}>
        <Header light={light} logo={logo} />
        <div id="home" style={{ position: "relative", marginTop: "100px" }}>
          <div className="container flex place-content-evenly items-center px-5">
            <section className="text-wrapper flex flex-col gap-3 justify-center items-center md:justify-start md:items-start">
              <span
                style={{ color: light ? "black" : "white", "--time": "0.7s" }}
                className="text-xl font-medium"
              >
                Olá, me chamo
              </span>

              <span
                style={{ color: light ? "black" : "white", "--time": "0.8s" }}
                className="text-4xl md:text-6xl font-semibold"
              >
                Matheus <span className="secondary-color">Amaral</span>
              </span>

              <span
                className="secondary-color text-xl font-medium"
                id="work"
                style={{ "--time": "0.9s" }}
              >
                Front-end Developer
              </span>

              <div className="buttons">
                <button id="button_talkMe" style={{ "--time": "1s" }}>
                  <a href="#talkMe">Me contate</a>
                </button>

                <button id="button_curriculum" style={{ "--time": "1s" }}>
                  <a
                    id="curriculum"
                    href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                    target="_blank"
                  >
                    Ver Currículo
                  </a>
                </button>
              </div>

              <div className="icons_home">
                <a
                  href="https://github.com/MatheuscAmaral"
                  target="_blank"
                  style={{ "--time": "1.1s" }}
                >
                  <FaGithub
                    id="gitHub"
                    className="secondary-color"
                    fontSize={"35px"}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/matheus-amaral-00762b265/"
                  target="_blank"
                  style={{ "--time": "1.1s" }}
                >
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
              style={{ "--time": "2.3s" }}
              className="hidden md:block"
            />
          </div>

          <a href="#projects">
            <IoIosArrowDropdownCircle
              className="arrowButton"
              fontSize={"40px"}
              style={{
                border: "none",
                borderRadius: "50%",
                color: " rgb(132, 14, 14)",
                padding: "20px",
                left: "1rem",
                bottom: "1rem",
                position: "absolute",
                cursor: "pointer",
              }}
            />
          </a>
        </div>

        <div id="projects">
          <h1
            style={{ color: light ? "black" : "white" }}
            className="text-3xl md:text-4xl"
          >
            Meus <span className="secondary-color">Projetos</span>
          </h1>

          <div className="cards-container">
            <Card
              imageUrl={mtx}
              title={"MTX"}
              subTitle={"E-commerce"}
              description={
                "Bem-vindo à plataforma do MTX. Aqui reside uma experiência de usuário meticulosamente construída, alimentada por React com TypeScript, e moldada para tornar sua jornada de compras mais fluida e envolvente do que nunca."
              }
              light={light}
              deploy={"https://mtx-ecommerce.vercel.app"}
              github={"https://github.com/MatheuscAmaral/mtx-ecommerce"}
              invert={"no"}
            />

            <Card
              imageUrl={gf}
              title={"Gf"}
              subTitle={"Impports"}
              description={
                "Um e-commerce intuitivo para facilitar a aquisição de eletrônicos. Em constante evolução, prometemos uma experiência digital ainda mais sofisticada para sua jornada de descobertas tecnológicas."
              }
              light={light}
              deploy={"https://gfimpports.netlify.app/"}
              github={"https://github.com/MatheuscAmaral/GFImpports"}
              invert={"yes"}
            />

            <Card
              imageUrl={pf}
              title={"Portfólio"}
              subTitle={"Nutricional"}
              description={
                " Explore o portfólio nutricional, uma experiência online que visa inspirar hábitos saudáveis e oferecer informações valiosas sobre nutrição."
              }
              light={light}
              deploy={"https://fernardaamaralnutricionista.com/home.html"}
              github={
                "https://github.com/MatheuscAmaral/portfolioFernandaAmaral"
              }
              invert={"no"}
            />
          </div>
        </div>

        <div id="carrer">
          <h1
            className="text-3xl md:text-4xl"
            style={{ color: light ? "black" : "white" }}
          >
            Minha <span className="secondary-color">Carreira</span>
          </h1>

          <Carrer />
        </div>

        <div id="skills" style={{ paddingBottom: "200px" }}>
          <h1
            className="text-3xl md:text-4xl"
            style={{ color: light ? "black" : "white" }}
          >
            Minhas <span className="secondary-color">Habilidades</span>
          </h1>

          <div
            className="skills-container"
            style={{ color: light ? "black" : "white" }}
          >
            <Skill icon={<FaReact />} />
            <Skill icon={<FaNode />} />
            <Skill icon={<DiJavascript1 />} />
            <Skill icon={<TbBrandTypescript />} />
            <Skill icon={<FaPhp />} />
            <Skill icon={<TbBrandLaravel />} />
            <Skill icon={<RiTailwindCssLine />} />
            <Skill icon={<PiFileHtmlBold />} />
            <Skill icon={<PiFileCssBold />} />
            <Skill icon={<DiJqueryLogo />} />
            <Skill icon={<FaGitAlt />} />
            <Skill icon={<RiBootstrapLine />} />
            <Skill icon={<TbFileTypeSql />} />
            <Skill icon={<SiMysql />} />
          </div>
        </div>

        <div id="talkMe" style={{ paddingBottom: "200px" }}>
          <h1
            className="text-3xl md:text-4xl"
            style={{ color: light ? "black" : "white" }}
          >
            Fale <span className="secondary-color">comigo</span>
          </h1>

          <div className="flex items-center flex-col gap-2">
            <div className="flex gap-2">
              <RadioCard setSelectedValue={setSelectedValue} />
            </div>
          </div>

          <div className="content_talk flex justify-center gap-5">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              className="mx-auto lg:ml-52"
            >
              <Inputs />

              <button
                className="secondary-color-background w-52"
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Enviar mensagem
              </button>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:gap-10 lg:items-start lg:justify-start">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Button
                  borderRadius={"50%"}
                  padding={"0px"}
                  backgroundColor={"#840e0e"}
                  onMouseEnter={onToggle}
                  onMouseLeave={onToggle}
                  _hover={{ backgroundColor: "red" }}
                >
                  <BsFillTelephoneFill
                    fontSize={"15px"}
                    style={{ color: "white" }}
                  />
                </Button>
                
                <SlideFade in={isOpen} offsetY="20px">
                  <Box
                    p="0px"
                    style={{ color: light ? "black" : "white" }}
                    rounded="md"
                    fontSize="13px"
                  >
                    <strong style={{ color: "light-gray", paddingLeft: "2px" }}>
                      Me ligue
                    </strong>
                    <p>(31) 99266-1386</p>
                  </Box>
                </SlideFade>
              </div>
                
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Button
                  borderRadius={"50%"}
                  padding={"0px"}
                  backgroundColor={"#840e0e"}
                  onMouseEnter={onToggle}
                  onMouseLeave={onToggle}
                  _hover={{ backgroundColor: "red" }}
                >
                  <BsMailbox2 fontSize={"15px"} style={{ color: "white" }} />
                </Button>
                <SlideFade in={isOpen} offsetY="20px">
                  <Box
                    p="0px"
                    style={{ color: light ? "black" : "white" }}
                    rounded="md"
                    fontSize="13px"
                  >
                    <strong style={{ color: "light-gray", paddingLeft: "2px" }}>
                      E-mail:
                    </strong>
                    <p>matheuscamposdoamaral15@gmail.com</p>
                  </Box>
                </SlideFade>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Button
                  borderRadius={"50%"}
                  padding={"0px"}
                  backgroundColor={"#840e0e"}
                  onMouseEnter={onToggle}
                  onMouseLeave={onToggle}
                  _hover={{ backgroundColor: "red" }}
                >
                  <FaLocationCrosshairs
                    fontSize={"15px"}
                    style={{ color: "white" }}
                  />
                </Button>

                <SlideFade in={isOpen} offsetY="20px">
                  <Box
                    p="0px"
                    style={{ color: light ? "black" : "white" }}
                    rounded="md"
                    fontSize="13px"
                  >
                    <strong style={{ color: "light-gray", paddingLeft: "2px" }}>
                      Localização:
                    </strong>
                    <p>Contagem - MG</p>
                  </Box>
                </SlideFade>
              </div>
            </div>
          </div>

          <section className="flex flex-col lg:hidden gap-10 justify-start">
            <div className="flex items-center gap-3">
              <Button backgroundColor={"#840e0e"}>
                <BsFillTelephoneFill
                  fontSize={"15px"}
                  style={{ color: "white" }}
                />
              </Button>

              <div
                className="flex flex-col gap-1 text-sm"
                style={{ color: light ? "black" : "white" }}
              >
                <strong style={{ color: "light-gray", paddingLeft: "2px" }}>
                  Me ligue:
                </strong>

                <p>(31) 99266-1386</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button backgroundColor={"#840e0e"}>
                <BsMailbox2 fontSize={"15px"} style={{ color: "white" }} />
              </Button>

              <div
                className="flex flex-col gap-1 text-sm"
                style={{ color: light ? "black" : "white" }}
              >
                <strong style={{ color: "light-gray", paddingLeft: "2px" }}>
                  E-mail:
                </strong>

                <p>matheuscamposdoamaral15@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button backgroundColor={"#840e0e"}>
                <FaLocationCrosshairs
                  fontSize={"17px"}
                  style={{ color: "white" }}
                />
              </Button>

              <div
                className="flex flex-col gap-1 text-sm"
                style={{ color: light ? "black" : "white" }}
              >
                <strong style={{ color: "light-gray", paddingLeft: "2px" }}>
                  Localização:
                </strong>

                <p>Contagem - MG</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <Footer icon={<FaRegCopyright />} light={light} />
      </footer>
    </div>
  );
}

export default App;
