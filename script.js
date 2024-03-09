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