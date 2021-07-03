/**
 * This function creates the list in nav bar dynamically from elements with id and className "section"
 */
function createNavList() {
    const navUl = document.getElementById('nav-list');
    const navSections = document.querySelectorAll('.section');
    for (const sec of navSections) {
        const li = document.createElement('li');
        li.classList.add('nav-list__item');
        const anch = document.createElement('a');
        anch.classList.add('nav-list__link')
        anch.href = '#' + sec.id;
        anch.innerText = sec.id.replaceAll('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
        li.append(anch);
        navUl.append(li);
        li.addEventListener('click', () => {
            navSections.forEach(sec => {
                sec.classList.remove("active")
            }
            );
            li.classList.add("active");
            li.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }

        );
    }

}
/**
 * This function removes the hash indicating the section scrolled to in the URL
 */
function removeHashFromURL() {
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}

/**
 * This function scrolls to the top of the page then button is clicked
 */
function toTopScroll() {
    let toTopBtn = document.getElementById('top-btn__content--desk');

    toTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    let scrollPosition = 0;
    window.addEventListener('scroll', function () {
        removeHashFromURL();
        if ((document.body.getBoundingClientRect()).top > scrollPosition) {
            document.getElementById('top-btn').classList.remove('active');
        } else {
            document.getElementById('top-btn').classList.add('active');
        }
        scrollPosition = (document.body.getBoundingClientRect()).top;
    });
}

function initializePage() {
    createNavList();
    toTopScroll();
}