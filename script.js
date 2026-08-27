document.addEventListener("DOMContentLoaded", () => {
    // 1. Sayğac (Counter) animasiyası
    const counter = document.getElementById("work-counter");
    if (counter) {
        let count = 0;
        const target = parseInt(counter.getAttribute("data-target")) || 7;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                let interval = setInterval(() => {
                    if (count < target) {
                        count++;
                        counter.innerText = count;
                    } else {
                        clearInterval(interval);
                    }
                }, 150);
                observer.disconnect();
            }
        });
        observer.observe(counter);
    }

    // 2. Scroll edəndə Menyuda (Header) aktiv linkin dəyişməsi
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links li");

    if (sections.length > 0) {
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(li => {
                const aTag = li.querySelector("a");
                if (aTag) {
                    li.classList.remove("active");
                    if (current && aTag.getAttribute("href") === `#${current}`) {
                        li.classList.add("active");
                    }
                }
            });
        });
    }
});