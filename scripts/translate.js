const langSec = document.querySelector('.languageSection');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const knowledge = document.querySelector('.knowledge');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const buttons = document.querySelectorAll('.lang');
const langSelec = document.querySelector('.language_selected');
const headerp = document.querySelector('.header_p');
const headerh1 = document.querySelector('.header_h1');
const subAbout = document.querySelector('.sub_title_about');
const textAbout = document.querySelector('.about_col_text');
const tabSkill = document.querySelector('.skiLink');
const tabExp = document.querySelector('.expLink');
const tabEdu = document.querySelector('.eduLink');
const tabContSkill = document.querySelector('.skiCont');
const tabContExp = document.querySelector('.expCont');
const tabContEdu = document.querySelector('.eduCont');
const webH1 = document.querySelector('.webH1');
const webP = document.querySelector('.webP');
const gameH1 = document.querySelector('.gameH1');
const gameP = document.querySelector('.gameP');
const uiuxH1 = document.querySelector('.uiuxH1');
const uiuxP = document.querySelector('.uiuxP');
const subKnow = document.querySelector('.sub_title_know');
const proj1t = document.querySelector('.project1title');
const proj2t = document.querySelector('.project2title');
const proj3t = document.querySelector('.project3title');
const proj1c = document.querySelector('.project1cont');
const proj2c = document.querySelector('.project2cont');
const proj3c = document.querySelector('.project3cont');
const subContact = document.querySelector('.sub_title_contact');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');


        const attr = button.getAttribute('language');

        headerp.innerHTML = data[attr].header_p;
        langSelec.innerHTML = data[attr].language_selected;
        headerh1.innerHTML = data[attr].header_h1;
        subAbout.innerHTML = data[attr].sub_title_about;
        home.innerHTML = data[attr].home;
        portfolio.innerHTML = data[attr].portfolio;
        contact.innerHTML = data[attr].contact;
        knowledge.innerHTML = data[attr].knowledge;
        about.innerHTML = data[attr].about;
        textAbout.innerHTML = data[attr].about_col_text;
        tabSkill.innerHTML = data[attr].skiLink;
        tabExp.innerHTML = data[attr].expLink;
        tabEdu.innerHTML = data[attr].eduLink;
        tabContSkill.innerHTML = data[attr].skiCont;
        tabContEdu.innerHTML = data[attr].eduCont;
        tabContExp.innerHTML = data[attr].expCont;
        webP.innerHTML = data[attr].webP;
        webH1.innerHTML = data[attr].webH1;
        gameH1.innerHTML = data[attr].gameH1;
        gameP.innerHTML = data[attr].gameP;
        uiuxH1.innerHTML = data[attr].uiuxH1;
        uiuxP.innerHTML = data[attr].uiuxP;
        subKnow.innerHTML = data[attr].sub_title_know;
        subContact.innerHTML = data[attr].sub_title_contact;
        proj1t.innerHTML = data[attr].project1title;
        proj2t.innerHTML = data[attr].project2title;
        proj3t.innerHTML = data[attr].project3title;
        proj1c.innerHTML = data[attr].project1cont;
        proj2c.innerHTML = data[attr].project2cont;
        proj3c.innerHTML = data[attr].project3cont;        
    })
});

const data = {
    "english":
    {
        "header_p": 'Front End Developer /<br>Aspiring Game Creator',
        "language_selected": "EN-US",
        "header_h1": "Hi,<br> I'm <span>Iago Bacci</span>,<br>brazilian developer",
        "sub_title_about": "About Me",
        "home": "Home",
        "about": "About",
        "knowledge": "Knowledge",
        "contact": "Contact",
        "portfolio": "Portfolio",
        "about_col_text": "Passionate about technology and programming, I'm a university student deeply engaged in exploring various programming languages and methodologies. I thrive in collaborative environments and enjoy tackling coding challenges. I believe in the transformative power of technology and am committed to using my programming skills to contribute to meaningful projects.<br>With a solid foundation in programming principles, I'm excited to embark on new challenges and make an impact in the tech industry. Additionally, I have a keen interest in game development, where I can apply my technical knowledge creatively. Immersed in the game design process, I find endless inspiration to refine my skills.",
        "skiLink": "Skills",
        "expLink": "Experience",
        "eduLink": "Education",
        "skiCont": "<ul><li><span>UI/UX</span><br>Designing intuitive and visually appealing user interfaces.</li><li><span>HTML/CSS</span><br>Web development for structuring and styling content.</li><li><span>JavaScript Programming</span><br>Frontend scripting language for dynamic web interactions.</li><li><span>Game Development</span><br>Game creation using C# programming language.</li></ul>",
        "expCont": "<ul><li><span>No Work Experience Yet</span><br>Unfortunately, I don't have any real professional experience in the programming field yet,<br> only the projects listed in the 'portfolio' tab.<br>If you would like to see work experiences unrelated to the programming field, they are listed on the resume at the bottom, under the 'contact' section.</li></ul>",
        "eduCont": "<ul><li><span>Analysis and Systems Development</span><br>University of the Federal Institute of São Paulo - 2023/2026</li><li><span>HTML/CSS Course</span><br>HTML and CSS course (module 1 and 2) by Curso em Video - 2024</li><li><span>Start Game Dev</span><br>Unity game creation course by Crie Seus Jogos - 2024</li><li><span>Unreal Engine 4 Class: Blueprints</span><br>Unreal Engine 4 Course by Lucas Schmigel - Udemy 2024</li></ul>",
        "webH1": "Web Development",
        "gameH1": "Game Creation",
        "uiuxH1": "UI/UX Desing",
        "webP": "Web development involves the creation and maintenance of websites and web applications, encompassing everything from structuring and functionality to user interaction. This includes markup languages like HTML and XML, style languages like CSS, and programming languages like JavaScript and PHP. Web developers work to create effective digital experiences, optimizing performance, accessibility, and usability of their products.",
        "gameP": "Game creation involves the development of interactive experiences for entertainment or educational purposes. It encompasses a wide range of skills including game design, programming, art, sound design, and storytelling. Game creators strive to engage players through compelling gameplay mechanics, immersive worlds, and captivating narratives.",
        "uiuxP": "UI (User Interface) and UX (User Experience) design focus on creating seamless and intuitive interactions between users and digital products, such as websites, applications, and games. UI design involves the visual elements and layout of a product, while UX design focuses on the overall experience and usability. Both disciplines aim to optimize user satisfaction by considering factors such as accessibility, ease of use, and emotional engagement.",
        "sub_title_know": "My Knowledge",
        "project1title": "Pokemon Inspirated Game - JavaScript",
        "project2title": "MS4Life Website Project",
        "project3title": "HTML/CSS Android Challenge",
        "project1cont": "This game was based on a video on YouTube, being the first real contact I had with JavaScript outside of college classes. It was a very interesting project to work on, where I was able to acquire a lot of knowledge, especially related to object-oriented programming.",
        "project2cont": "A web project created for a group studying the use of mass spectrometry-based metabolomics to understand biological systems. My first experience with website creation, developed for a college assignment in the web development course.",
        "project3cont": "The website created as part of the HTML/CSS course challenge by CursoEmVídeo stands out primarily for its dynamic menus, responsiveness, and seamless image swapping during adaptation. The menus have been carefully designed to offer intuitive and efficient navigation, while responsiveness ensures a consistent user experience across various devices. Additionally, the image swapping during responsiveness contributes to visually appealing presentation tailored to different screens, providing an enhanced user experience.",
        "sub_title_contact": "Contact Me",        
    },
    "portuguese":
    {
        "home": "Inicio",
        "about": "Sobre",
        "knowledge": "Conhecimento",
        "contact": "Contato",
        "portfolio": "Portfólio",
        "header_p": "Desenvolvedor Front End /<br>Aspirante a Criador de Jogos",
        "language_selected": "PT-BR",
        "header_h1": "Olá,<br>Eu sou <span>Iago Bacci</span>,<br>desenvolvedor brasileiro",
        "sub_title_about": "Sobre Mim",
        "about_col_text": "Apaixonado por tecnologia e programação, sou um estudante universitário profundamente envolvido na exploração de várias linguagens de programação e metodologias. Gosto de enfrentar desafios de codificação e acredito no poder transformador da tecnologia, comprometendo-me a usar minhas habilidades de programação para contribuir com projetos significativos.<br>Com uma base sólida em princípios de programação, estou empolgado para embarcar em novos desafios e causar impacto na indústria de tecnologia. Além disso, tenho um grande interesse no desenvolvimento de jogos, onde posso aplicar meu conhecimento técnico de forma criativa. Imerso no processo de design de jogos, encontro inspiração infinita para aprimorar minhas habilidades.",
        "skiLink": "Habilidades",
        "expLink": "Experiência",
        "eduLink": "Escolaridade",
        "skiCont": "<ul><li><span>UI/UX</span><br>Design de interfaces de usuário intuitivas e visualmente atraentes.</li><li><span>HTML/CSS</span><br>Desenvolvimento web para estruturar e estilizar conteúdo.</li><li><span>JavaScript</span><br>Linguagem de script para interações dinâmicas no frontend</li><li><span>Game Development</span><br>Criação de jogos utilizando a linguagem de programação C#</li></ul>",
        "expCont": "<ul><li><span>Sem Experiência de Trabalho Ainda</span><br>Infelizmente ainda não tenho nenhuma experiência profissional real na área da programação, apenas os projetos listados na aba de 'portfolio'.<br>Se quiser ver expêriencias de trabalho não relatadas a área de programação, estão listadas no currículo ao final, na parte de 'contato'.</li></ul>",
        "eduCont": "<ul><li><span>Análise e Desenvolvimento de Sistemas</span><br>Instituto Federal de São Paulo - 2023/2026</li><li><span>Curso de HTML/CSS</span><br>Curso de HTML e CSS (módulo 1 e 2) pelo Curso em Vídeo - 2024</li><li><span><br>Início em Desenvolvimento de Jogos</span>Curso de criação de jogos Unity pelo Crie Seus Jogos - 2024</li><li><span>Aula de Unreal Engine 4: Blueprints</span><br>Curso de Unreal Engine 4 pelo Lucas Schmigel - Udemy 2024</li></ul>",
        "webH1": "Desenvolvimento Web",
        "gameH1": "Criação de Jogos",
        "uiuxH1": "UI/UX Desing",
        "webP": "O desenvolvimento web envolve a criação e manutenção de sites e aplicativos da web, abrangendo desde a estruturação e funcionalidade até a interação do usuário. Isso inclui linguagens de marcação, como HTML e XML, linguagens de estilo, como CSS, e linguagens de programação, como JavaScript e PHP. Os desenvolvedores web trabalham para criar experiências digitais eficazes, otimizando a performance, acessibilidade e usabilidade dos seus produtos.",
        "gameP": "A criação de jogos envolve o desenvolvimento de experiências interativas para entretenimento ou fins educacionais. Abrange uma ampla gama de habilidades, incluindo design de jogos, programação, arte, design de som e narrativa. Os criadores de jogos se esforçam para envolver os jogadores por meio de mecânicas de jogo envolventes, mundos imersivos e narrativas cativantes.",
        "uiuxP": "O design de UI (Interface do Usuário) e UX (Experiência do Usuário) concentra-se na criação de interações fluidas e intuitivas entre os usuários e produtos digitais, como sites, aplicativos e jogos. O design de UI envolve os elementos visuais e o layout de um produto, enquanto o design de UX se concentra na experiência geral e na usabilidade. Ambas as disciplinas visam otimizar a satisfação do usuário, considerando fatores como acessibilidade, facilidade de uso e engajamento emocional.",
        "sub_title_know": "Meus Conhecimentos",
        "project1title": "Jogo Inspirado em Pokemon - JavaScript",
        "project2title": "Projeto do Site 'MS4Life'",
        "project3title": "Desafio HTML/CSS Android",
        "project1cont": "Esse jogo foi feito com base num vídeo no Youtube, sendo o primeiro contato verdadeiro que tive com JavaScript fora das aulas da faculdade. Foi um projeto bastante interessante de estar fazendo, onde pude adquirir muito conhecimento, principalmente relacionado a programação orientada a objetos.",
        "project2cont": "Um projeto web criado para um grupo que estuda o uso da metabolômica baseada em espectometría de massa para compreender sistemas biológicos. O primeiro contato que tive com criação de sites, feito para um trabalho da faculdade da matéria de desenvolvimento web.",
        "project3cont": "O site desenvolvido como parte do desafio do curso HTML/CSS do CursoEmVídeo se destaca principalmente pelos seus menus dinâmicos, sua capacidade de adaptação a diferentes dispositivos (responsividade) e a troca de imagens que ocorre de forma fluida durante essa adaptação. Os menus foram cuidadosamente projetados para oferecer uma navegação intuitiva e eficiente, enquanto a responsividade garante uma experiência consistente ao usuário, independentemente do dispositivo que esteja utilizando para acessar o site. Além disso, a troca de imagens durante a responsividade contribui para uma apresentação visualmente atraente e adaptada às diferentes telas, proporcionando uma experiência de usuário aprimorada.",
        "sub_title_contact": "Contate-me"
    }
}

