document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const progress = parseInt(bar.getAttribute("data-progress"));
        bar.style.setProperty("--progress", progress);
        const textNode = bar.querySelector("span");
        animateProgressBar(bar, textNode, progress);
    });

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


function animateProgressBar(bar, textNode, targetProgress) {
    let currentProgress = 0;
    const step = targetProgress / 100;
    let text = 'years of experience'

    if (window.matchMedia('(max-width: 480px)').matches) {
        text='years of exp.'
    } else {
        textNode.classList.remove('small-screen-font');
        text = 'years of experience'
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



function changeLanguage() {
    //var language = document.getElementById('languageSelect').value;

    var button = document.getElementById('languageButton');
    var language = button.textContent === 'EN' ? 'en' : 'es';
    button.textContent = language === 'en' ? 'EN' : 'ES';

    fetch('texts/' + language + '.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('jobTitle').textContent = data.title;
            document.getElementById('aboutMe').textContent = data.aboutMe;
            document.getElementById('skills').textContent = data.skills;
            document.getElementById('contact').textContent = data.contact;
            document.getElementById('downloadResume').textContent = data.downloadResume;
            document.getElementById('aboutMe_details_1').textContent = data.aboutMe_details_1;
            document.getElementById('aboutMe_details_2').textContent = data.aboutMe_details_2;
            document.getElementById('aboutMe_details_3').textContent = data.aboutMe_details_3;
            document.getElementById('viewCertificate').textContent = data.viewCertificate;
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
