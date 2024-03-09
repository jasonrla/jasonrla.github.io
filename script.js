document.addEventListener('DOMContentLoaded', function() {
    
    loadLanguage('en');
    progressBarSettings();

    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
        let root = document.documentElement;
        if (checkbox.checked) {
            root.style.setProperty('--primary-color', 'var(--primary-color-dark)');
            root.style.setProperty('--secondary-color', 'var(--secondary-color-dark)');
            root.style.setProperty('--column-color', 'var(--column-color-dark)');
            root.style.setProperty('--text-color', 'var(--text-color-dark)');
            root.style.setProperty('--text-pogressbar', 'var(--text-pogressbar-dark)');
        } else {
            root.style.setProperty('--primary-color', 'var(--primary-color-light)');
            root.style.setProperty('--secondary-color', 'var(--secondary-color-light)');
            root.style.setProperty('--column-color', 'var(--column-color-light)');
            root.style.setProperty('--text-color', 'var(--text-color-light)');
            root.style.setProperty('--text-pogressbar', 'var(--text-pogressbar-light)');
        }
    });
});

function progressBarSettings() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const progress = parseInt(bar.getAttribute("data-progress"));
        bar.style.setProperty("--progress", progress);
        const textNode = bar.querySelector("span");
        animateProgressBar(bar, textNode, progress);
    });
}

function animateProgressBar(bar, textNode, targetProgress) {

    var button = document.getElementById('languageButton');
    var lang = button.textContent === 'EN' ? 'es' : 'en';

    let currentProgress = 0;
    const step = targetProgress / 100;
    let text = lang === 'en' ? 'years of experience' : 'años de experiencia';

    if (window.matchMedia('(max-width: 480px)').matches) {
        text = lang === 'en' ? 'years of exp.' : 'años de exp.'
    } else {
        textNode.classList.remove('small-screen-font');
        text = lang === 'en' ? 'years of experience' : 'años de experiencia';
    }

        function updateProgress() {
        if (currentProgress < targetProgress) {
            currentProgress += step;
            textNode.textContent = Math.floor(currentProgress) + " " + text;
            bar.style.setProperty("--progress", currentProgress);
            requestAnimationFrame(updateProgress);
        } else {
            textNode.textContent = targetProgress + " " + text;
        }
        }
        updateProgress();
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});

function descargarCurriculum() {
    var url = 'resume/Resume Jason Lopez.pdf';
    window.open(url);
}

function loadLanguage(language) {
    languageSettings(language);
}

function changeLanguage() {
    var button = document.getElementById('languageButton');
    var language = button.textContent === 'ENG' ? 'en' : 'es';
    button.textContent = language === 'en' ? 'ESP' : 'ENG';
    languageSettings(language);
    progressBarSettings();
}

function languageSettings(language) {

    fetch('texts/' + language + '.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('languageButton').textContent = data.langIcon;
            document.getElementById('name').textContent = data.name;
            document.getElementById('jobTitle').textContent = data.title;
            document.getElementById('aboutMe').textContent = data.aboutMe;
            document.getElementById('aboutMeTitle').textContent = data.aboutMe;
            document.getElementById('skills').textContent = data.skills;
            document.getElementById('contactMe').textContent = data.contact;
            document.getElementById('contactMeTitle').textContent = data.contact;
            document.getElementById('downloadResume').textContent = data.downloadResume;
            document.getElementById('aboutMe_details_1').textContent = data.aboutMe_details_1;
            document.getElementById('aboutMe_details_2').textContent = data.aboutMe_details_2;
            document.getElementById('aboutMe_details_3').textContent = data.aboutMe_details_3;
            document.getElementById('viewCertificate1').textContent = data.viewCertificate;
            document.getElementById('viewCertificate2').textContent = data.viewCertificate;
            document.getElementById('viewCertificate3').textContent = data.viewCertificate;
            document.getElementById('viewCertificate4').textContent = data.viewCertificate;
            document.getElementById('programmingLanguage').textContent = data.programmingLanguage;
            document.getElementById('automationTools').textContent = data.automationTools;
            document.getElementById('database').textContent = data.database;
            document.getElementById('otherTools').textContent = data.otherTools;
            document.getElementById('email').textContent = data.email;
            document.getElementById('phone').textContent = data.phone;
            document.getElementById('location').textContent = data.location;
            document.getElementById('timeZone').textContent = data.timeZone;
            document.getElementById('scheduleMetting').textContent = data.scheduleMetting;

        })
        .catch(e => {
            console.log('There was a problem with your fetch request' + e.message);
        });
}
