const root = document.getElementById('root');
const width = innerWidth;
const wpp = 'https://api.whatsapp.com/send/?phone=5531992661386&text&type=phone_number&app_absent=0';
const github = 'https://github.com/MatheuscAmaral';
const linkedin = 'https://www.linkedin.com/in/matheus-amaral-00762b265/';

if(width >= 1400) {
    root.innerHTML = `
    <div id="background">
            <main>
                <header id="header" style="margin-left: 20px">
                    <img id="logo" src="/assets/Images/logoMA.png">
                    <div id="info">
                        <strong><a id="about" href="#aboutMe"><p>Sobre</p></a></strong>
                        <strong><a id="proje" href="#projects"><p>Projetos</p></a></strong>
                        <strong><a id="curri" href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><p>Currículo</p></a></strong>
                        <strong><a id="talka" href="#faleComigo">Fale Comigo</a></strong>
                        <div id="dark">
                            <button onclick="darkMode()" class="button"><i class="fa-regular fa-moon fa-xl" style="color: #000000;"></i></button>
                        </div>
                    </div>
            
                    
                </header>
                    <div id="mid">
                    <div id="mid-text">
                            <div id="firstText">
                                <h3 id="title">Olá, Me chamo</h3>
                            </div>
                        
                            <div id="thirdRow">
                                <div id="secondText">
                                    <h1 id="nome">Matheus <span class="trocaCor">Amaral</span></h1>
                                    <strong><p><span class="animated"></span></p></strong>
                                </div>

                                <div id="buttons2" style="display: flex; align-itens: center; gap: 1rem;">
                                    <a href=${wpp} target="_blank" class="butt">Me contate</a>
                                    <a href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" class="butt2">Ver currículo</a>
                                </div>
                
                                <div id="icons">
                                    <a href=${github} target="_blank"><i class="fa-brands fa-github fa-lg" style="color: #0d1cf3;"></i></a>
                                    <a href=${linkedin} target="_blank"><i class="fa-brands fa-linkedin fa-lg" style="color: #0d1cf3;"></i></a>
                                </div>
                            </div>
                    </div>
                        <div class="container">
                            <img src="/assets/Images/logo1.svg" id="imagem">
                        </div>
                    </div>
                </main>

                <section id="projects">
                    <div class="titles">
                        <strong id="projTitle">Meus <span style="color: #0d1cf3;">Projetos</span></strong>
                    </div>
            
                    <div id="cards">
                        <div id="card">
                        <a href="https://rwasuplementos.com" target="_blank"><img src="/assets/Images/Rwa.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://portfolio-fernanda-amaral-nrpn.vercel.app/home.html" target="_blank"><img src="/assets/Images/porfoliomae.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://gfimpports.vercel.app/home.html" target="_blank"><img src="/assets/Images/gfimpports.png"></a>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <a id="button" href=${github} target="_blank">Ver Mais</a>
                    </div>
                </section>

                <section id="faleComigo">
                        <h1 id="titleTalk">Entre em <span style="color: #0d1cf3">contato</span> comigo</h1>
                        <div style="display: flex; gap: 13rem; justify-content: center; margin-bottom: 50px">
                            <div  style="display: flex; flex-direction: column; gap: 2rem">
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 20px; border: 0; border-radius: 5px"><i class="fa-solid fa-phone fa-xl" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">Me ligue</p>
                                        <span id="number"> 31 992661386</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 21px; border: 0; border-radius: 5px"><i class="fa-solid fa-at fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">E-mail</p>
                                        <span id="mail">matheuscamposdoamaral15@gmail.com</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 23px; border: 0; border-radius: 5px"><i class="fa-solid fa-location-dot fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">Endereço</p>
                                        <span id="ender">Contagem - MG</span>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem">
                                <div style="display: flex; gap: .5rem">
                                    <input 
                                        type="text" 
                                        placeholder="Assunto"
                                        required
                                        id="assunto"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 450px"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="E-mail"
                                        required
                                        id="email"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 450px"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Mensagem"
                                    required
                                    id="mensagem"
                                    style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; height: 130px"
                                />
                                <input 
                                    type="submit"
                                    value="Enviar mensagem"
                                    id="submit"
                                    onclick="enviar()"
                                    style="padding: 15px; width: 170px; border: 0; border-radius: 6px; margin-left: 795px; background-color: #0d1cf3; color: white; font-size: 15px"
                                />
                            </div>
                        </div>
                        <strong><p id="copy" style="display: flex; gap: .5rem;  align-items: center; justify-content: center; color: black; margin-top: 100px; font-size: 14px"><i class="fa-solid fa-copyright fa-lg" style="color: #0d1cf3;"></i>2023 Matheus Amaral</p></strong>
                        </div>
                </section>
            </div>`
}

else if (width > 900 && width <= 1400) {
    root.innerHTML = `
    <div id="background">
            <main>
                <header id="header">
                    <img id="logo" style="border 1px solid white" src="/assets/Images/logoMA.png">
                    <div id="info">
                        <strong><a id="about" href="#aboutMe"><p>Sobre</p></a></strong>
                        <strong><a id="proje" href="#projects"><p>Projetos</p></a></strong>
                        <strong><a id="curri" href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><p>Currículo</p></a></strong>
                        <strong><a id="talka" href="#faleComigo">Fale Comigo</a></strong>
                        <div id="dark">
                            <button onclick="darkMode()" class="button"><i class="fa-regular fa-moon fa-xl" style="color: #000000;"></i></button>
                        </div>
                    </div>
            
                    
                </header>
                    <div id="mid">
                    <div id="mid-text">
                            <div id="firstText">
                                <h3 id="title">Olá, Me chamo</h3>
                            </div>
                        
                            <div id="thirdRow">
                                <div id="secondText">
                                    <h1 id="nome">Matheus <span class="trocaCor">Amaral</span></h1>
                                    <strong><p><span class="animated"></span></p></strong>  
                                </div>

                                <div id="buttons2" style="display: flex; align-itens: center; gap: 1rem;">
                                    <a href=${wpp} target="_blank" class="butt">Me contate</a>
                                    <a href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" class="butt2">Ver currículo</a>
                                </div>
                
                                <div id="icons">
                                    <a href=${github} target="_blank"><i class="fa-brands fa-github fa-lg" style="color: #0d1cf3;"></i></a>
                                    <a href=${linkedin} target="_blank"><i class="fa-brands fa-linkedin fa-lg" style="color: #0d1cf3;"></i></a>
                                </div>
                            </div>
                    </div>
                        <div class="container">
                            <img src="/assets/Images/logo1.svg" id="imagem">
                        </div>
                    </div>
                </main>
                
                <section id="projects">
                    <div class="titles">
                        <strong id="projTitle">Meus <span style="color: #0d1cf3;">Projetos</span></strong>
                    </div>
            
                    <div id="cards">
                        <div id="card">
                        <a href="https://rwasuplementos.com" target="_blank"><img src="/assets/Images/Rwa.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://portfolio-fernanda-amaral-nrpn.vercel.app/home.html" target="_blank"><img src="/assets/Images/porfoliomae.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://gfimpports.vercel.app/home.html" target="_blank"><img src="/assets/Images/gfimpports.png"></a>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <a id="button" href=${github} target="_blank">Ver Mais</a>
                    </div>
                </section>

                <section id="faleComigo">
                        <h1 id="titleTalk">Entre em <span style="color: #0d1cf3">contato</span> comigo</h1>
                        <div style="display: flex; gap: 5rem; justify-content: center;">
                            <div style="display: flex; flex-direction: column; gap: 2rem">
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 20px; border: 0; border-radius: 5px"><i class="fa-solid fa-phone fa-xl" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">Me ligue</p>
                                        <span id="number"> 31 992661386</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 21px; border: 0; border-radius: 5px"><i class="fa-solid fa-at fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">E-mail</p>
                                        <span id="mail">matheuscamposdoamaral15@gmail.com</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 23px; border: 0; border-radius: 5px"><i class="fa-solid fa-location-dot fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">Endereço</p>
                                        <span id="ender">Contagem - MG</span>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem">
                                <div style="display: flex; gap: .5rem">
                                    <input 
                                        type="text" 
                                        placeholder="Assunto"
                                        required
                                        id="assunto"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 310px"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="E-mail"
                                        required
                                        id="email"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 310px"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Mensagem"
                                    required
                                    id="mensagem"
                                    style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; height: 130px"
                                />
                                <input 
                                    type="submit"
                                    value="Enviar mensagem"
                                    id="submit"
                                    onclick="enviar()"
                                    style="padding: 15px; width: 170px; border: 0; border-radius: 6px; margin-left: 515px; background-color: #0d1cf3; color: white; font-size: 15px"
                                />
                            </div>
                        </div>
                        <strong><p id="copy" style="display: flex; gap: .5rem;  align-items: center; justify-content: center; color: black; margin-top: 100px; font-size: 14px"><i class="fa-solid fa-copyright fa-lg" style="color: #0d1cf3;"></i>2023 Matheus Amaral</p></strong>
                        </div>
                </section>
            </div>`
}

else if (width > 500 && width <= 900) {
    root.innerHTML = `
    <div id="background">
            <main>
                <header id="header" style="display: flex; gap: 2rem;">
                    <img id="logo" style="border 1px solid white" src="/assets/Images/logoMA.png">
                    <div id="info">
                        <strong><a id="about" href="#aboutMe"><p>Sobre</p></a></strong>
                        <strong><a id="proje" href="#projects"><p>Projetos</p></a></strong>
                        <strong><a id="curri" href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><p>Currículo</p></a></strong>
                        <strong><a id="talka" href="#faleComigo">Fale Comigo</a></strong>
                        <div id="dark">
                            <button onclick="darkMode()" class="button"><i class="fa-regular fa-moon fa-xl" style="color: #000000;"></i></button>
                        </div>
                    </div>            
                </header>

                    <div id="mid" style="display: flex; flex-direction: column; gap: 7rem; margin-top: 60px">
                    <div id="mid-text" style="display: center; flex-direction: column; align-items: center">
                            <div id="firstText">
                                <h4 id="title">Olá, Me chamo</h4>
                            </div>
                        
                            <div id="thirdRow" style="display: flex; flex-diretion: column; gap: 2rem">
                                <div id="secondText">
                                    <h1 id="nome">Matheus <span class="trocaCor">Amaral</span></h1>
                                    <strong><p style="text-align: center"><span class="animated"></span></p></strong>
                                </div>

                                <div id="buttons2" style="display: flex; align-itens: center; gap: 1rem; justify-content: center">
                                    <a href=${wpp} target="_blank" class="butt">Me contate</a>
                                    <a href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" class="butt2">Ver currículo</a>
                                </div>
                
                                <div id="icons" style="display: flex; align-itens: center; gap: 1rem; justify-content: center; margin-bottom: 100px">
                                    <a href=${github} target="_blank"><i class="fa-brands fa-github fa-lg" style="color: #0d1cf3;"></i></a>
                                    <a href=${linkedin} target="_blank"><i class="fa-brands fa-linkedin fa-lg" style="color: #0d1cf3;"></i></a>
                                </div>
                            </>
                    </div>
                        <div class="container">
                            <img src="/assets/Images/logo1.svg" width="420px"  id="imagem">
                        </div>
                    </div>
                </main>
                
                <section id="projects">
                    <div class="titles">
                        <strong id="projTitle">Meus <span style="color: #0d1cf3;">Projetos</span></strong>
                    </div>
            
                    <div id="cards" style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center">
                        <div id="card">
                        <a href="https://rwasuplementos.com" target="_blank"><img src="/assets/Images/Rwa.png" style="width: 470px"></a>
                        </div>
                        <div id="card">
                            <a href="https://portfolio-fernanda-amaral-nrpn.vercel.app/home.html" target="_blank"><img style="width: 470px" src="/assets/Images/porfoliomae.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://gfimpports.vercel.app/home.html" target="_blank"><img style="width: 470px" src="/assets/Images/gfimpports.png"></a>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <a id="button" href=${github} style="padding: 26px; font-size: 24px; width: 150px; border-radius: 16px" target="_blank">Ver Mais</a>
                    </div>
                </section>

                <section id="faleComigo">
                        <h1 id="titleTalk">Entre em <span style="color: #0d1cf3">contato</span> comigo</h1>
                        <div style="display: flex; flex-direction: column; gap: 5rem; justify-content: center; margin-bottom: 130px">
                            <div style="display: flex; flex-direction: column; gap: 2rem; margin-left: 80px">
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 20px; border: 0; border-radius: 5px"><i class="fa-solid fa-phone fa-xl" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .3rem">
                                        <p style="color: lightgray; font-size: 20px">Me ligue</p>
                                        <span id="number style="font-size: 20px"> 31 992661386</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 21px; border: 0; border-radius: 5px"><i class="fa-solid fa-at fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .3rem">
                                        <p style="color: lightgray; font-size: 20px">E-mail</p>
                                        <span id="mail" style="font-size: 20px">matheuscamposdoamaral15@gmail.com</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 23px; border: 0; border-radius: 5px"><i class="fa-solid fa-location-dot fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .3rem">
                                        <p style="color: lightgray; font-size: 20px">Endereço</p>
                                        <span id="ender" style="font-size: 20px">Contagem - MG</span>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center;">
                                <div style="display: flex; gap: .5rem">
                                    <input 
                                        type="text" 
                                        placeholder="Assunto"
                                        required
                                        id="assunto"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 310px"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="E-mail"
                                        required
                                        id="email"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 310px"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Mensagem"
                                    required
                                    id="mensagem"
                                    style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; height: 130px; width: 660px"
                                />
                                <input 
                                    type="submit"
                                    value="Enviar mensagem"
                                    id="submit"
                                    onclick="enviar()"
                                    style="padding: 15px; width: 170px; border: 0; border-radius: 6px; margin-left: 515px; background-color: #0d1cf3; color: white; font-size: 15px"
                                />
                            </div>
                        </div>
                        <strong><p id="copy" style="display: flex; gap: .5rem;  align-items: center; justify-content: center; color: black; margin-top: 100px; font-size: 14px"><i class="fa-solid fa-copyright fa-lg" style="color: #0d1cf3;"></i>2023 Matheus Amaral</p></strong>
                        </div>
                </section>
            </div>`
}

else {
    root.innerHTML = `
    <div id="background">
            <main>
                <header id="header">
                    <div>
                        <i id="buttonMobile" class="fa-solid fa-bars-staggered fa-xl"  style="color: black;" onclick="mobile()"></i>
                    </div>
                    <img id="logo" src="/assets/Images/logoMA.png">
                    <div id="info">
                        <div id="dark">
                            <button onclick="darkMode()" class="button"><i class="fa-regular fa-moon fa-2xl" style="color: black;"></i></button>
                        </div>
                    </div>
                </header>
                    <div id="mid">
                    <div id="mid-text">
                            <div id="firstText">
                                <h3 id="title" style="color: #0d1cf3">Olá, Me chamo</h3>
                            </div>
                        
                            <div id="thirdRow">
                                <div id="secondText">
                                    <h1 id="nome" style="color: #0d1cf3">Matheus <span class="trocaCor">Amaral</span></h1>
                                    <strong><p style="color: gray"><span class="animated"></span></p></strong>
                                </div>

                                <div id="buttons2" style="display: flex; align-itens: center; justify-content: center;gap: 1rem;">
                                    <a href=${wpp} target="_blank" class="butt">Me contate</a>
                                    <a href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" class="butt2">Ver currículo</a>
                                </div>
                
                                <div id="icons" style="display: flex; align-itens: center; justify-content: center;">
                                    <a href=${github} target="_blank"><i class="fa-brands fa-github fa-xl" style="color: #0d1cf3;"></i></a>
                                    <a href=${linkedin} target="_blank"><i class="fa-brands fa-linkedin fa-xl" style="color: #0d1cf3;"></i></a>
                                </div>
                            </div>
                    </div>
                        <div class="container">
                            <img src="/assets/Images/logo1.svg" id="imagem">
                        </div>
                    </div>
                </main> 
                
                <section id="projects">
                    <div class="titles">
                        <strong id="projTitle" style="color: #0d1cf3">Meus <span style="color: #0d1cf3;">Projetos</span></strong>
                    </div>
            
                    <div id="cards">
                        <div id="card">
                        <a href="https://rwasuplementos.com" target="_blank"><img src="/assets/Images/Rwa.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://portfolio-fernanda-amaral-nrpn.vercel.app/home.html" target="_blank"><img src="/assets/Images/porfoliomae.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://gfimpports.vercel.app/home.html" target="_blank"><img src="/assets/Images/gfimpports.png"></a>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <a id="button" href=${github} target="_blank">Ver Mais</a>
                    </div>
                </section>

                <section id="faleComigo">
                        <h1 id="titleTalk" style="color: #0d1cf3">Entre em <span style="color: #0d1cf3">contato</span> comigo</h1>
                        <div style="display: flex; flex-direction: column-reverse; gap: 6rem; justify-content: center; align-itens: center">
                            <div style="display: flex; flex-direction: column; gap: 2rem; justify-content: center; margin-left: 20px">
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 20px; border: 0; border-radius: 5px"><i class="fa-solid fa-phone fa-xl" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">Me ligue</p>
                                        <span id="number" style="color: #0d1cf3"> 31 992661386</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 21px; border: 0; border-radius: 5px"><i class="fa-solid fa-at fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">E-mail</p>
                                        <span id="mail" style="font-size: 15px; color: #0d1cf3">matheuscamposdoamaral15@gmail.com</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 1rem">
                                    <button style="background-color: #0d1cf3; padding: 23px; border: 0; border-radius: 5px"><i class="fa-solid fa-location-dot fa-lg" style="color: #ffffff;"></i></button>
                                    <div style="display: flex; flex-direction: column; gap: .5rem">
                                        <p style="color: lightgray">Endereço</p>
                                        <span id="ender" style="color: #0d1cf3">Contagem - MG</span>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem">
                                <div style="display: flex; gap: .5rem; justify-content: center">
                                    <input 
                                        type="text" 
                                        placeholder="Assunto"
                                        required
                                        id="assunto"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 150px"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="E-mail"
                                        required
                                        id="email"
                                        style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; width: 150px"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Mensagem"
                                    required
                                    id="mensagem"
                                    style="padding: 13px; border-radius: 8px; border: 1px solid lightgray; height: 130px; width: 340px; margin-left: 10px"
                                />  
                                <input 
                                    type="submit"
                                    value="Enviar mensagem"
                                    id="submit"
                                    onclick="enviar()"
                                    style="padding: 15px; width: 170px; border: 0; border-radius: 6px; margin-left: 105px; background-color: #0d1cf3; color: white; font-size: 15px"
                                />
                            </div>
                        </div>
                        </div>
                </section>
            </div>`

        }

        function mobile() {
             background.innerHTML = `  
             <div id="superior" style="background-color: white">
                <div id="superiorTop" >
                    <div id="user"><strong>Olá, Visitante</strong></div>
                        <a href=""> <i class="fa-solid fa-xmark fa-xl" style="color: #171616;"></i></a>
                    </div>
                    <div id="low">
                        <div class="mobileCard" style="background-color: #01d;">
                            <a style="color: #fff;" href="https://www.canva.com/design/DAFcwM_WAcg/6w015JCe-npnIDy-OVG62A/view?utm_content=DAFcwM_WAcg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Currículo</a>
                        </div>
                        <div class="mobileCard" style="background-color: #01d;">
                            <a style="color: #fff;"href="https://api.whatsapp.com/send/?phone=5531997066818&text=ola&type=phone_number&app_absent=0">Me contate</a>
                        </div>
                    </div>
                </div>
            </div>`
        }

    const dark = document.getElementById('dark');
    const background = document.getElementById('background');
    const info = document.getElementById('info');
    const about = document.getElementById('about');
    const proje = document.getElementById('proje');
    const curri = document.getElementById('curri');
    const logo = document.getElementById('logo');
    const subtitle = document.getElementById('title');
    const nome = document.getElementById('nome');
    const projTitle = document.getElementById('projTitle');
    const titleTalk = document.getElementById('titleTalk');
    const number = document.getElementById('number');
    const mail = document.getElementById('mail');
    const ender = document.getElementById('ender');
    const sobre = document.getElementById('sobre');
    const copy = document.getElementById('copy');
    const superior = document.getElementById('superior');
    const user = document.getElementById('user');
    const Bmobile = document.getElementById('buttonMobile');



function darkMode() {
    if (width <= 500) {
        dark.innerHTML = `<i class="fa-regular fa-sun fa-2xl" style="color: white;"  onclick="lightMode()"></i>`
        Bmobile.style.color = 'white';
    }
    
    else {
        dark.innerHTML = `<i class="fa-regular fa-sun fa-lg" style="color: white;"  onclick="lightMode()"></i>`
    }
    
    background.style.backgroundColor = '#090911';
    copy.style.color = 'white';
    about.style.color = 'white';
    proje.style.color = 'white';
    curri.style.color = 'white';
    logo.style.color = 'white';
    title.style.color = 'white';
    nome.style.color = 'white';
    projTitle.style.color = 'white';
    titleTalk.style.color = 'white';
    number.style.color = 'blue';
    mail.style.color = 'blue';
    ender.style.color = 'blue';
    sobre.style.color = 'white';
}



function lightMode() {
   if(width <= 500) {
    dark.innerHTML = `<i class="fa-regular fa-moon fa-2xl" style="color: black;" onclick="darkMode()"></i>`;
    Bmobile.style.color = 'black';
   }

   else {
       dark.innerHTML = `<i class="fa-regular fa-moon fa-lg" style="color: black;" onclick="darkMode()"></i>`;
    }
    
    background.style.backgroundColor = '#fafafa';
    copy.style.color = 'black ';
    about.style.color = 'black';
    proje.style.color = 'black';
    curri.style.color = 'black';
    title.style.color = 'black';
    nome.style.color = 'black';
    projTitle.style.color = 'black';
    titleTalk.style.color = 'black';
    number.style.color = 'black';
    mail.style.color = 'black';
    ender.style.color = 'black';
    sobre.style.color = 'black';
}

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    })
    .type('Front-End Developer', [{delay: 900}]).delete(19)
    .type('Quality Assurance', [{delay: 500}]).delete(17)
    .type('Support Analyst', [{delay: 500}]).delete(15)
    
    .go()
})

function enviar() {
    const assunto = encodeURIComponent(document.getElementById('assunto').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const msg = encodeURIComponent(document.getElementById('mensagem').value);
    const numeroDeTelefone = "5531992661386";
    const mensagem = `Assunto: ${assunto} %0AEmail: ${email} %0AMensagem: ${msg}`;



    const url = `https://api.whatsapp.com/send?phone=${numeroDeTelefone}&text=${mensagem}`;

    
    window.location.href = url;
}


