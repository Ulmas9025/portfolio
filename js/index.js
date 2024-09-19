const nameEl = document.getElementById('name');
const aboutEl = document.getElementById('about');
const projectsTitleEl = document.getElementById('projectsTitle');
const contactTitleEl = document.getElementById('contactTitle');
const phoneLabelEl = document.getElementById('phoneLabel');
const telegramLabelEl = document.getElementById('telegramLabel');
const emailLabelEl = document.getElementById('emailLabel');

const translations = {
    uzb: {
        name: 'Ulmas Inoyatov',
        about: "Js bo'yicha dasturchiman. HTML, CSS, SCSS, JavaScript, Node.js, Express.js, Vue.js, Bootstrap, Tailwind CSS, Figma, MongoDB va SQL bo'yicha bilimim bor.",
        projectsTitle: 'Loyihalarim',
        contactTitle: 'Aloqa ma\'lumotlari',
        phoneLabel: 'Telefon: +998900473647',
        telegramLabel: 'Telegram: EnDLesS_9025',
        emailLabel: 'Email: i.ulmas9025@gmail.com'
    },
    rus: {
        name: 'Улмас Иноятов',
        about: "Я разработчик на JavaScript. У меня есть знания по HTML, CSS, SCSS, JavaScript, Node.js, Express.js, Vue.js, Bootstrap, Tailwind CSS, Figma, MongoDB и SQL.",
        projectsTitle: 'Мои проекты',
        contactTitle: 'Контактная информация',
        phoneLabel: 'Телефон: +998900473647',
        telegramLabel: 'Телеграм: EnDLesS_9025',
        emailLabel: 'Эл. почта: i.ulmas9025@gmail.com'
    },
    eng: {
        name: 'Ulmas Inoyatov',
        about: "I am a JavaScript developer. I have knowledge in HTML, CSS, SCSS, JavaScript, Node.js, Express.js, Vue.js, Bootstrap, Tailwind CSS, Figma, MongoDB, and SQL.",
        projectsTitle: 'My Projects',
        contactTitle: 'Contact Information',
        phoneLabel: 'Phone: +998900473647',
        telegramLabel: 'Telegram: EnDLesS_9025',
        emailLabel: 'Email: i.ulmas9025@gmail.com'
    }
};

// Tilni o'zgartirish uchun bayroqlarni hodisaga ulaymiz
document.getElementById('uzbFlag').addEventListener('click', () => setLanguage('uzb'));
document.getElementById('rusFlag').addEventListener('click', () => setLanguage('rus'));
document.getElementById('engFlag').addEventListener('click', () => setLanguage('eng'));

function setLanguage(language) {
    const translation = translations[language];
    nameEl.textContent = translation.name;
    aboutEl.textContent = translation.about;
    projectsTitleEl.textContent = translation.projectsTitle;
    contactTitleEl.textContent = translation.contactTitle;
    phoneLabelEl.textContent = translation.phoneLabel;
    telegramLabelEl.textContent = translation.telegramLabel;
    emailLabelEl.textContent = translation.emailLabel;
}

async function fetchGitHubRepos() {
    const username = 'Ulmas9025'; // GitHub username
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        const repos = await response.json();

        const repoList = document.getElementById('projects-list');
        repos.forEach(repo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description ? repo.description : 'No description'}</p>
            `;
            repoList.appendChild(li);
        });
    } catch (error) {
        console.error('Failed to fetch GitHub repos:', error);
    }
}

fetchGitHubRepos();
