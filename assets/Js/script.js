const root = document.getElementById('root');
const width = innerWidth;
const wpp = 'https://api.whatsapp.com/send/?phone=5531992661386&text&type=phone_number&app_absent=0';
const github = 'https://github.com/MatheuscAmaral';
const linkedin = 'https://www.linkedin.com/in/matheus-amaral-00762b265/';

if(width >= 1400) {
    root.innerHTML = `
    <div id="background">
            <main>
                <header id="header">
                    <img id="logo" src="/assets/Images/logo 1.png">
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

                <section id="aboutMe">
                    <h1 id="sobre">Sobre <span style="color: #0d1cf3">mim</span></h1>
                    <div style="margin-top: 100px; display: flex; justify-content: center">
                         <img src="/assets/Images/me.jpg">
                    </div>
                </section>
                
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
                    <a id="button" href=${github} target="_blank">Ver Mais</a>
                </section>

                <section id="faleComigo">
                        <h1 id="titleTalk">Entre em <span style="color: #0d1cf3">contato</span> comigo</h1>
                        <div style="display: flex; gap: 13rem; justify-content: center;">
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
                    <img id="logo" src="/assets/Images/logo 1.png">
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

                <section id="aboutMe">
                    <h1 id="sobre">Sobre <span style="color: #0d1cf3">mim</span></h1>
                    <div style="margin-top: 100px; display: flex; justify-content: center">
                         <img src="/assets/Images/me.jpg">
                    </div>
                </section>
                
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
                    <a id="button" href=${github} target="_blank">Ver Mais</a>
                </section>

                <section id="faleComigo">
                        <h1 id="titleTalk">Entre em <span style="color: #0d1cf3">contato</span> comigo</h1>
                        <div style="display: flex; gap: 13rem; justify-content: center;">
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

else if (width > 500 && width <= 900) {

}

else {

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




function darkMode() {
    dark.innerHTML = `<button onclick="lightMode()" class="button"><i class="fa-regular fa-sun fa-xl" style="color: #ffffff;" ></i></button>`
    
    background.style.backgroundColor = '#090911';
    about.style.color = 'white';
    proje.style.color = 'white';
    curri.style.color = 'white';
    logo.style.color = 'white'
    title.style.color = 'white';
    nome.style.color = 'white';
    projTitle.style.color = 'white';
    titleTalk.style.color = 'white';
    number.style.color = 'blue';
    mail.style.color = 'blue';
    ender.style.color = 'blue';
    sobre.style.color = 'white';
    copy.style.color = 'white';
}



function lightMode() {
    dark.innerHTML = `<button onclick="darkMode()" class="button"><i class="fa-regular fa-moon fa-xl" style="color: #000000;"></i></button>`;
    
    background.style.backgroundColor = '#fafafa';
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
    copy.style.color = 'black ';
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

