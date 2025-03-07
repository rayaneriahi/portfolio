const skills = document.querySelectorAll('.skill');
const skillsContainer = document.querySelector('#skills-container');

const gap = parseFloat(getComputedStyle(skillsContainer).gap);
const space = skills[0].offsetWidth + gap;
const time = 600;

async function animation() {
    return new Promise(resolve => {
        for (let i = 0; i < skills.length; i++) {
            const skill = skills[i];

            setTimeout(() => {
                if (i > 0) {
                    skill.style.left = space + 'px';
                }

                if (i > 1) {
                    setTimeout(() => {
                        skill.style.left = space * 2 + 'px'; 
                    }, time);
                }

                if (i > 2) {
                    setTimeout(() => {
                        skill.style.left = space * 3 + 'px'; 
                    }, time * 2);
                }

                if (i > 3) {
                    setTimeout(() => {
                        skill.style.left = space * 4 + 'px'; 
                    }, time * 3);
                }

                if (i > 4) {
                    setTimeout(() => {
                        skill.style.left = space * 5 + 'px'; 
                    }, time * 4);
                }

                if (i > 5) {
                    setTimeout(() => {
                        skill.style.left = space * 6 + 'px'; 
                    }, time * 5);
                }

                if (i > 6) {
                    setTimeout(() => {
                        skill.style.left = space * 7 + 'px';

                        setTimeout(() => {
                            resolve();
                        }, 1000);
                    }, time * 6);
                }
            }, 1000);
        }
    });
}

window.innerWidth >= 785 ? animation().then(() => animationended()) : animationended();

function animationended() {
    skillsContainer.style.position = 'static';
    skillsContainer.style.height = 'auto';
    skills.forEach(skill => {
        skill.style.position = 'static';
        skill.style.left = '0';
    });
}

console.log(window.innerHeight);
console.log(window.innerWidth);