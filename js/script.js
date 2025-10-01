// Мова за замовчуванням
let lang = 'en';

// Словник перекладів
const translations = {
  en: {
    header1: "About Me",
    header2: "Resume",
    aboutMe1: "Hello,",
    aboutMe2: "I'm Veronika !",
    aboutMe3: "I am a goal-oriented and responsible person taking my first steps in programming. I have experience working with HTML and CSS, as well as basic knowledge of Python, C/C++, and Java. I am distinguished by the ability to quickly adapt to new technologies, analytical thinking, and the ability to work effectively both independently and in a team. I am always eager to improve my skills and highly motivated to grow in the field of software development.",
    aboutMe4: "Thank you for visiting my portfolio! Please feel free to contact me if you have any questions or would like to discuss potential opportunities.",
    contact1: "CONTACT",
    contact2: "Lublin, Poland",
    resume1: "RESUME",
    resume2: "Language",
    resume3: "Ukraine <span>Native</span>",
    resume4: "English <span>Intermediate</span>",
    resume5: "Polish <span>Upper-Intermediate</span>",
    resume6: "Rusian <span>Proficient</span>",
    resume7: "Education",
    resume8: "2024-2028 Politechnika Lubelska",
    resume9: "Coding skils",
    resume10: "Courses",
    upshift1: "Participant / Khmelnytskyi / Nov 2023 – Apr 2024",
    upshift2: "My teamwork skills and innovative thinking were strengthened through participation in the UNICEF Upshift program.Participant of a 5-day innovation intensive UNICEF Upshift BootCamp with a focus on design thinking, project management, and social entrepreneurship. Developed and promoted a social project aimed at solving a local issue regarding the coexistence of internally displaced persons (IDPs) and the local population in Khmelnytskyi region. Conducted focus groups and surveys together with the team, presented the project to UNICEF experts and community partners, and received recommendations for scaling and funding.",
    upshift3: "As a program participant, I:",
    upshift4: "Worked with project documentation: planning, reports, presentations, and communication.",
    upshift5: "Prepared a project proposal and financial plan for a social startup.",
    upshift6: "Documented meeting minutes and prepared final reports for the team and mentors.",
    upshift7: "Project social media:"
  },
  uk: {
    header1: "Про мене",
    header2: "Резюме",
    aboutMe1: "Привіт,",
    aboutMe2: "Я Вероніка !",
    aboutMe3: "Я цілеспрямована та відповідальна людина, яка робить перші кроки в програмуванні. Маю досвід роботи з HTML та CSS, а також базові знання Python, C/C++ та Java. Відзначаюсь здатністю швидко адаптуватися до нових технологій, аналітичним мисленням та вмінням ефективно працювати як самостійно, так і в команді. Завжди прагну вдосконалювати свої навички та маю високу мотивацію для розвитку у сфері розробки програмного забезпечення.",
    aboutMe4: "Дякую, що відвідали моє портфоліо! Буду рада вашим запитанням або обговоренню можливих проєктів чи співпраці.",
    contact1: "КОНТАКТИ",
    contact2: "Люблін, Польща",
    resume1: "РЕЗЮМЕ",
    resume2: "Мова",
    resume3: "Україна <span>Рідна</span>",
    resume4: "Англійська <span>Середній</span>",
    resume5: "Польська <span>Вище середнього</span>",
    resume6: "Російська <span>Вільно</span>",
    resume7: "Освіта",
    resume8: "2024-2028 Politechnika Lubelska",
    resume9: "Навички програмування",
    resume10: "Курси",
    upshift1: "Учасник / Хмельницький / Листопад 2023 – Квітень 2024",
    upshift2: "Мої навички командної роботи та інноваційне мислення були зміцнені завдяки участі в програмі UNICEF Upshift. Учасник 5-денної інноваційної інтенсивної програми UNICEF Upshift BootCamp з акцентом на дизайн-мислення, управління проєктами та соціальне підприємництво. Розробила та просувала соціальний проєкт, спрямований на вирішення місцевої проблеми щодо співіснування внутрішньо переміщених осіб (ВПО) та місцевого населення в Хмельницькій області. Разом із командою провела фокус-групи та опитування, представила проєкт експертам UNICEF та партнерам громади, отримала рекомендації щодо масштабування та фінансування.",
    upshift3: "Як учасник програми, я:",
    upshift4: "Працювала з проєктною документацією: планування, звіти, презентації та комунікація",  
    upshift5: "Підготувала проєктну пропозицію та фінансовий план для соціального стартапу.",
    upshift6: "Вела протоколи засідань та готувала підсумкові звіти для команди та менторів.",
    upshift7: "Соціальні мережі проєкту:"

  },
  pl: {
    header1: "O mnie",
    header2: "CV",
    aboutMe1: "Cześć,",
    aboutMe2: "Mam na imię Veronika !",
    aboutMe3: "Jestem osobą zorientowaną na cel i odpowiedzialną, robiącą pierwsze kroki w programowaniu. Mam doświadczenie w pracy z HTML i CSS oraz podstawową znajomość Pythona, C/C++ i Javy. Wyróżniam się umiejętnością szybkiego dostosowywania się do nowych technologii, myśleniem analitycznym oraz efektywną pracą zarówno samodzielną, jak i w zespole. Zawsze chętnie doskonalę swoje umiejętności i mam wysoką motywację do rozwoju w dziedzinie tworzenia oprogramowania.",
    aboutMe4: "Dziękuję za odwiedzenie mojego portfolio! Zachęcam do kontaktu, jeśli masz pytania lub chcesz omówić potencjalną współpracę.",
    contact1: "KONTAKT",
    contact2: "Lublin, Polska",
    resume1: "CV",
    resume2: "Język",
    resume3: "Ukraina <span>Ojczysty</span>",
    resume4: "Angielski <span>Średniozaawansowany</span>",
    resume5: "Polski <span>Wyższy średniozaawansowany</span>",
    resume6: "Rosyjski <span>Biegły</span>",
    resume7: "Edukacja",
    resume8: "2024-2028 Politechnika Lubelska",
    resume9: "Umiejętności programistyczne",
    resume10: "Kursy",
    upshift1: "Uczestnik / Chmielnicki / Lis 2023 – Kwi 2024",
    upshift2: "Moje umiejętności pracy zespołowej i innowacyjne myślenie zostały wzmocnione dzięki udziałowi w programie UNICEF Upshift. Uczestnik 5-dniowego intensywnego programu innowacyjnego UNICEF Upshift BootCamp, skupiającego się na design thinking, zarządzaniu projektami i przedsiębiorczości społecznej. Opracowałam i promowałam projekt społeczny mający na celu rozwiązanie lokalnego problemu dotyczącego współistnienia wewnętrznie przesiedlonych osób (IDP) i lokalnej społeczności w obwodzie chmielnickim. Wraz z zespołem przeprowadziłam grupy fokusowe i ankiety, przedstawiłam projekt ekspertom UNICEF i partnerom społeczności oraz otrzymałam rekomendacje dotyczące skalowania i finansowania.",
    upshift3: "Jako uczestnik programu:",
    upshift4: "Pracowałam z dokumentacją projektową: planowanie, raporty, prezentacje i komunikacja", 
    upshift5: "Przygotowałam propozycję projektu i plan finansowy dla społecznego startupu.",
    upshift6: "Prowadziłam protokoły spotkań i przygotowywałam końcowe raporty dla zespołu i mentorów.",
    upshift7: "Media społecznościowe projektu:"
  },
  ru: {
    header1: "Обо мне",
    header2: "Резюме",
    aboutMe1: "Привет,",
    aboutMe2: "Я Вероника !",
    aboutMe3: "Я целеустремлённый и ответственный человек, делающий первые шаги в программировании. Имею опыт работы с HTML и CSS, а также базовые знания Python, C/C++ и Java. Отличаюсь способностью быстро адаптироваться к новым технологиям, аналитическим мышлением и умением эффективно работать как самостоятельно, так и в команде. Всегда стремлюсь улучшать свои навыки и имею высокую мотивацию для развития в сфере разработки программного обеспечения.",
    aboutMe4: "Спасибо за посещение моего портфолио! Пожалуйста, свяжитесь со мной, если у вас есть вопросы или вы хотите обсудить потенциальные возможности.",
    contact1: "КОНТАКТЫ",
    contact2: "Люблин, Польша",
    resume1: "РЕЗЮМЕ",
    resume2: "Язык",
    resume3: "Украина <span>Родной</span>",
    resume4: "Английский <span>Средний</span>",
    resume5: "Польский <span>Выше среднего</span>",
    resume6: "Русский <span>Свободно</span>",
    resume7: "Образование",
    resume8: "2024-2028 Politechnika Lubelska",
    resume9: "Навыки программирования",
    resume10: "Курсы",
    upshift1: "Участник / Хмельницкий / 11.2023 –  04.2024",
    upshift2: "Мои навыки командной работы и инновационное мышление были укреплены благодаря участию в программе UNICEF Upshift. Участник 5-дневного инновационного интенсивного курса UNICEF Upshift BootCamp с акцентом на дизайн-мышление, управление проектами и социальное предпринимательство. Разработала и продвигала социальный проект, направленный на решение местной проблемы сосуществования внутренне перемещенных лиц (ВПЛ) и местного населения в Хмельницкой области. Вместе с командой провела фокус-группы и опросы, представила проект экспертам UNICEF и партнерам сообщества, получила рекомендации по масштабированию и финансированию.",
    upshift3: "Как участник программы, я:",
    upshift4: "Работала с проектной документацией: планирование, отчёты, презентации и коммуникация",
    upshift5: "Подготовила проектное предложение и финансовый план для социального стартапа.",
    upshift6: "Вела протоколы заседаний и готовила итоговые отчёты для команды и менторов.",
    upshift7: "Социальные сети проекта:"
  }
};

const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-menu");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
  langMenu.classList.remove("active");
});

langMenu.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    translatePage();
    langMenu.classList.remove("active");
  });
});

function translatePage() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.dataset.translate;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // innerHTML зберігає <span> та <br>
    }
  });
}

translatePage();


langBtn.addEventListener('click', () => {
  langMenu.style.display = langMenu.style.display === 'flex' ? 'none' : 'flex';
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header_nav');
const navLinks = document.querySelectorAll('.header_nav li');

burger.addEventListener('click', () => {
  // Відкриття/закриття навігації
  nav.classList.toggle('nav-active');

  // Анімація посилань
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Анімація бургеру
  burger.classList.toggle('toggle');
});

// Закриття меню при кліку на посилання
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    navLinks.forEach(link => (link.style.animation = ''));
  });
});

// -----------------------------
// 3. Плавний скролл до секцій
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
