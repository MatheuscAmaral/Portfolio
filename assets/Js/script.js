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
                        <strong><a id="talka" href=${wpp}>Fale Comigo</a></strong>
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
                                    <strong><p id="cargo">Front-end Developer</p></strong>
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
                    <img src="/assets/Images/me.jpg" >
                    
                </section>
            
            
                <section id="projects">
                    <div class="titles">
                        <strong>PROJETOS</strong>
                    </div>
            
                    <div id="cards">
                        <div id="card">
                        <a href="https://rwasuplementos.com" target="_blank"><img src="/assets/Images/Rwa.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://portfolio-fernanda-amaral-nrpn.vercel.app/home.html" target="_blank"><img src="/assets/Images/porfoliomae.png"></a>
                        </div>
                        <div id="card">
                            <a href="https://gfimports.vercel.app/home.html" target="_blank"><img src="/assets/Images/gfimpports.png"></a>
                        </div>
                    </div>
                    <a id="button" href=${github} target="_blank">Ver Mais</a>
                </section>
            
    </div>
    <footer>
        <div id="backTop">
            <a href="#header"><img src="/assets/Images/ic_baseline-double-arrow.png" ></a>
            <strong><a href="#header">VOLTE PARA O TOPO</a></strong>
        </div>
        <div id="iconsFooter">
            <a href="https://www.instagram.com/uomatheus/"><i class="fa-brands fa-square-instagram fa-2xl" style="color: #ffffff;"></i></a>
            <a href=${linkedin}><i class="fa-brands fa-linkedin fa-2xl" style="color: #ffffff;"></i></a>
            <a href=${github}><i class="fa-brands fa-square-github fa-2xl" style="color: #ffffff;"></i></a>
        </div>
        <p><strong><i class="fa-solid fa-copyright fa-lg" style="color: #ffffff;"></i>2023 Matheus Amaral</strong> Copyright</p>
    </footer>`
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


function darkMode() {
    dark.innerHTML = `<button onclick="lightMode()" class="button"><i class="fa-regular fa-sun fa-xl" style="color: #ffffff;" ></i></button>`
    
    background.style.backgroundColor = '#090911';
    about.style.color = 'white';
    proje.style.color = 'white';
    curri.style.color = 'white';
    logo.style.color = 'white'
    title.style.color = 'white';
    nome.style.color = 'white';
}

function lightMode() {
    dark.innerHTML = `<button onclick="darkMode()" class="button"><i class="fa-regular fa-moon fa-xl" style="color: #000000;"></i></button>`;
    
    background.style.backgroundColor = '#fafafa';
    about.style.color = 'black';
    proje.style.color = 'black';
    curri.style.color = 'black';
    title.style.color = 'black';
    nome.style.color = 'black';
}