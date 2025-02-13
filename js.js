// Add keyframes animation for subtle image effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
@keyframes gentleFloat {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

@keyframes gentleFloatHover {
    0%, 100% {
        transform: translateY(0) scale(1.02);
    }
    50% {
        transform: translateY(-8px) scale(1.02); 
    }
}

@keyframes softPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.02);
    }
}

@keyframes softPulseHover {
    0%, 100% {
        transform: scale(1.02);
    }
    50% {
        transform: scale(1.04);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes slideInText {
    0% {
        opacity: 0;
        transform: translateX(-20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}`;
document.head.appendChild(styleSheet);

// Language translations
const translations = {
    english: {
        title: "Odyssey Boat",
        boatTour: "Boat Tour",
        partyBoat: "Party Boat", 
        aboutUs: "About Us",
        ourCrew: "Our Crew",
        adventure: "Adventure",
        specialOffers: "Special Offers",
        heroTitle: "Unleash the Waves<br>Chase the Horizon!",
        boatTourText: "The tour departs from Budva, along the coast to Petrovac. Along the way, you'll enjoy panoramic views of Budva Old Town, the beaches of Bečići and Rafailovići, as well as numerous hidden coves. Upon arrival in Petrovac, you can enjoy beaches and city walks. The tour lasts 4-5 hours.",
        partyBoatText: "This is a fun tour with a DJ, music, drinks, and socializing on the boat. The boat departs from Budva at 16:00, and during the ride you enjoy an energetic atmosphere, swimming in the sea, and the beautiful coasts of Montenegro. Return is around 20:00.",
        aboutUsText: "We are a family that has been in the shipping industry all our lives. With years of experience working with ships, we've gone through all the challenges and beauty of life at sea. Our tradition and passion for boats has guided us through generations. We are dedicated to providing unforgettable experiences on the water, convinced that love for the sea and quality service make our offer special.",
        crewText: "Our crew is a team of professionals dedicated to providing premium service on the water. With years of experience, we ensure your safety and comfort, making each tour unforgettable.",
        adventureText: "For nature and exploration lovers, our adventure offer is the perfect choice! Enjoy jumping from the boat, swimming in the crystal clear sea, and exploring secret caves along the Budva coast. These tours provide a unique opportunity to discover hidden coves and natural beauties that you can only experience from a boat. The crew will take you to the most beautiful and inaccessible places, where you can relax and enjoy nature, swimming and exploring, while we take care of your safety and comfort.",
        offersText: "Take advantage of our special offer and rent a boat at affordable prices! Whether you want to enjoy a relaxing day at sea, explore hidden places or plan a party with friends, our boat is the perfect choice.",
        language: "Language"
    },
    serbian: {
        title: "Odyssey Boat",
        boatTour: "Tura Brodom",
        partyBoat: "Party Brod",
        aboutUs: "O Nama",
        ourCrew: "Naša Posada",
        adventure: "Avantura",
        specialOffers: "Specijalne Ponude", 
        heroTitle: "Oseti Talase<br>Juri Horizont!",
        boatTourText: "Tura polazi iz Budve, uz obalu do Petrovca. Na putu ćete uživati u panoramskom pogledu na Stari grad Budvu, plaže Bečića i Rafailovića, kao i brojne skrivene uvale. Po dolasku u Petrovac, možete uživati u plažama i šetnjama gradom. Tura traje 4-5 sati.",
        partyBoatText: "Ovo je zabavna tura sa DJ-om, muzikom, pićem i druženjem na brodu. Brod polazi iz Budve u 16:00, a tokom vožnje uživate u energičnoj atmosferi, plivanju u moru i prelepim obalama Crne Gore. Povratak je oko 20:00.",
        aboutUsText: "Mi smo porodica koja je celog života u brodarskoj industriji. Sa dugogodišnjim iskustvom u radu sa brodovima, prošli smo kroz sve izazove i lepotu života na moru. Naša tradicija i strast prema brodovima nas je vodila kroz generacije. Posvećeni smo pružanju nezaboravnih iskustava na vodi, uvereni da ljubav prema moru i kvalitetan servis čine našu ponudu posebnom.",
        crewText: "Naša posada je tim profesionalaca posvećenih pružanju vrhunske usluge na vodi. Sa dugogodišnjim iskustvom, obezbeđujemo vašu sigurnost i komfor, čineći svaku turu nezaboravnom.",
        adventureText: "Za ljubitelje prirode i istraživanja, naša avanturistička ponuda je savršen izbor! Uživajte u skakanju sa broda, plivanju u kristalno čistom moru i istraživanju tajnih pećina duž budvanske obale. Ove ture pružaju jedinstvenu priliku da otkrijete skrivene uvale i prirodne lepote koje možete doživeti samo sa broda. Posada će vas odvesti do najlepših i nedostupnih mesta, gde možete opušteno uživati u prirodi, plivanju i istraživanju, dok se brinemo o vašoj sigurnosti i komforu.",
        offersText: "Iskoristite našu specijalnu ponudu i iznajmite brod po povoljnim cenama! Bilo da želite da uživate u opuštajućem danu na moru, istražujete skrivena mesta ili planirate zabavu sa prijateljima, naš brod je savršen izbor.",
        language: "Jezik"
    },
    russian: {
        title: "Odyssey Boat",
        boatTour: "Морская Прогулка",
        partyBoat: "Праздничный Круиз",
        aboutUs: "О Нас",
        ourCrew: "Наша Команда",
        adventure: "Приключения",
        specialOffers: "Специальные Предложения",
        heroTitle: "Покорите Волны<br>Стремитесь к Горизонту!",
        boatTourText: "Тур отправляется из Будвы вдоль побережья до Петроваца. По пути вы насладитесь панорамным видом на Старый город Будвы, пляжи Бечичи и Рафаиловичи, а также множество скрытых бухт. По прибытии в Петровац вы можете насладиться пляжами и прогулками по городу. Тур длится 4-5 часов.",
        partyBoatText: "Это развлекательный тур с диджеем, музыкой, напитками и общением на борту. Лодка отправляется из Будвы в 16:00, и во время поездки вы наслаждаетесь энергичной атмосферой, плаванием в море и красивыми берегами Черногории. Возвращение около 20:00.",
        aboutUsText: "Мы семья, которая всю жизнь занимается судоходством. Имея многолетний опыт работы с кораблями, мы прошли через все вызовы и красоту морской жизни. Наши традиции и страсть к лодкам вели нас через поколения. Мы стремимся обеспечить незабываемые впечатления на воде, уверенные, что любовь к морю и качественный сервис делают наше предложение особенным.",
        crewText: "Наша команда - это профессионалы, преданные предоставлению первоклассного обслуживания на воде. С многолетним опытом мы обеспечиваем вашу безопасность и комфорт, делая каждый тур незабываемым.",
        adventureText: "Для любителей природы и исследований наше приключенческое предложение - идеальный выбор! Наслаждайтесь прыжками с лодки, плаванием в кристально чистом море и исследованием секретных пещер вдоль побережья Будвы. Эти туры предоставляют уникальную возможность открыть для себя скрытые бухты и природные красоты, которые можно испытать только с лодки. Команда доставит вас к самым красивым и недоступным местам, где вы сможете расслабиться и наслаждаться природой, плаванием и исследованиями, пока мы заботимся о вашей безопасности и комфорте.",
        offersText: "Воспользуйтесь нашим специальным предложением и арендуйте лодку по доступным ценам! Хотите ли вы насладиться расслабляющим днем на море, исследовать скрытые места или планируете вечеринку с друзьями, наша лодка - идеальный выбор.",
        language: "Язык"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Create language switcher container
    const langSwitcherContainer = document.createElement('div');
    langSwitcherContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        z-index: 1000;
    `;

    // Create language switcher button
    const langSwitcher = document.createElement('div');
    langSwitcher.style.cssText = `
        width: 120px;
        height: 50px;
        background: var(--primary-color);
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: transform 0.3s ease;
    `;
    
    langSwitcher.innerHTML = '🌐 Language';
    
    // Create contact button container
    const contactContainer = document.createElement('div');
    contactContainer.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        display: flex;
        align-items: center;
        z-index: 1000;
    `;

    // Create contact button
    const contactButton = document.createElement('div');
    contactButton.style.cssText = `
        width: 120px;
        height: 50px;
        background: var(--primary-color);
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: transform 0.3s ease;
    `;

    contactButton.innerHTML = '📞 Contact';

    // Create contact info popup
    const contactInfo = document.createElement('div');
    contactInfo.style.cssText = `
        position: fixed;
        bottom: 140px;
        right: 20px;
        background: var(--primary-color);
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        display: none;
        z-index: 1000;
    `;

    contactInfo.innerHTML = `
        <div style="color: white; margin-bottom: 10px;">
            <a href="tel:+38269999999" style="color: white; text-decoration: none;">
                📞 +382 69 999 999
            </a>
        </div>
        <div>
            <a href="https://instagram.com/odysseyboat" target="_blank" style="color: white; text-decoration: none;">
                📸 @odysseyboat
            </a>
        </div>
    `;

    // Add elements to containers
    contactContainer.appendChild(contactButton);
    langSwitcherContainer.appendChild(langSwitcher);
    
    // Add containers to body
    document.body.appendChild(contactContainer);
    document.body.appendChild(langSwitcherContainer);
    document.body.appendChild(contactInfo);

    let isContactVisible = false;

    contactButton.onclick = () => {
        if (!isContactVisible) {
            contactInfo.style.display = 'block';
            contactButton.style.transform = 'scale(0.95)';
        } else {
            contactInfo.style.display = 'none';
            contactButton.style.transform = 'scale(1)';
        }
        isContactVisible = !isContactVisible;
    };

    // Close contact info when clicking outside
    document.addEventListener('click', (e) => {
        if (isContactVisible && !contactInfo.contains(e.target) && !contactButton.contains(e.target)) {
            contactInfo.style.display = 'none';
            contactButton.style.transform = 'scale(1)';
            isContactVisible = false;
        }
    });

    langSwitcher.onclick = () => {
        showLanguageModal();
    };

    // Check if language is already selected
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        updateContent(savedLanguage);
    } else {
        showLanguageModal();
    }

    // Apply animations to images and navbar effects
    const images = document.querySelectorAll('.img-fluid');
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('#hero');
    const sections = document.querySelectorAll('section');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Close navbar when clicking nav links on mobile and handle smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Close mobile menu if open
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }

            // Get target section and scroll with offset for navbar height
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle navbar transparency
    window.addEventListener('scroll', () => {
        // Only apply transparent background on desktop
        if (window.innerWidth >= 992) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            if (window.scrollY > heroBottom - navbar.offsetHeight) {
                navbar.style.backgroundColor = '#111111';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        }
    });

    // Set initial navbar background based on screen size
    if (window.innerWidth >= 992) {
        navbar.style.backgroundColor = 'transparent';
    } else {
        navbar.style.backgroundColor = '#111111';
    }

    // Update navbar background on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            if (window.scrollY > heroBottom - navbar.offsetHeight) {
                navbar.style.backgroundColor = '#111111';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        } else {
            navbar.style.backgroundColor = '#111111';
        }
    });
    
    images.forEach((img) => {
        img.style.animation = 'gentleFloat 6s ease-in-out infinite';
        img.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        img.style.transform = 'scale(1)';
        
        let hasAnimated = false;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    img.style.animation = 'none';
                    void img.offsetWidth;
                    img.style.animation = 'gentleFloatHover 2s ease-in-out';
                    hasAnimated = true;
                    
                    setTimeout(() => {
                        img.style.animation = 'gentleFloat 6s ease-in-out infinite';
                    }, 2000);
                    
                    observer.unobserve(img);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(img);
    });
});

function showLanguageModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: #FFFFFF;
        padding: 40px;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 0 30px rgba(0,0,0,0.1);
        animation: scaleIn 0.5s ease-out;
    `;

    const createLanguageButton = (lang, text) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.style.cssText = `
            margin: 10px;
            padding: 15px 30px;
            font-size: 18px;
            border: none;
            border-radius: 4px;
            background: linear-gradient(145deg, #001F3F, #003366);
            color: white;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
            animation-delay: ${['english', 'serbian', 'russian'].indexOf(lang) * 0.2}s;
            clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
        `;
        
        btn.onmouseover = () => {
            btn.style.transform = 'scale(1.05)';
            btn.style.boxShadow = '0 5px 15px rgba(0,31,63,0.3)';
        };
        
        btn.onmouseout = () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = 'none';
        };
        
        btn.onclick = () => {
            setLanguage(lang);
            modal.remove();
        };
        return btn;
    };

    modalContent.innerHTML = `
        <h2 style="color: #001F3F; margin-bottom: 30px; font-size: 28px; animation: fadeIn 0.5s ease-out;">
            Select Language / Изаберите језик / Выберите язык
        </h2>
    `;

    modalContent.appendChild(createLanguageButton('english', 'English'));
    modalContent.appendChild(createLanguageButton('serbian', 'Српски'));
    modalContent.appendChild(createLanguageButton('russian', 'Русский'));

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Function to set language and update content
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    updateContent(lang);
}

// Function to update content based on selected language
function updateContent(lang) {
    const content = translations[lang];
    
    // Update title
    document.title = content.title;
    
    // Update navigation links and ensure they stay on one line
    const navLinks = {
        'boat-tour': content.boatTour,
        'party-boat': content.partyBoat,
        'about': content.aboutUs,
        'crew': content.ourCrew,
        'adventure': content.adventure,
        'offers': content.specialOffers
    };

    Object.entries(navLinks).forEach(([id, text]) => {
        const link = document.querySelector(`a[href="#${id}"]`);
        if (link) {
            if (id === 'offers') {
                link.querySelector('span').textContent = text;
            } else {
                link.textContent = text;
            }
            // Add styles to prevent text wrapping
            link.style.whiteSpace = 'nowrap';
            link.parentElement.style.whiteSpace = 'nowrap';
        }
    });
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (content[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = content[key];
            } else {
                element.innerHTML = content[key];
            }
        }
    });

    // Update language switcher text
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        langSwitcher.innerHTML = `🌐 ${content.language}`;
    }
    
    // Update hero title
    document.querySelector('#hero h2').innerHTML = content.heroTitle;
    
    // Update section headings
    document.querySelector('#boat-tour h2').textContent = content.boatTour.toUpperCase();
    document.querySelector('#party-boat h2').textContent = content.partyBoat.toUpperCase();
    document.querySelector('#about h2').textContent = content.aboutUs.toUpperCase();
    document.querySelector('#crew h2').textContent = content.ourCrew.toUpperCase();
    document.querySelector('#adventure h2').textContent = content.adventure.toUpperCase();
    document.querySelector('#offers h2').textContent = content.specialOffers.toUpperCase();
    
    // Update section content
    document.querySelector('#boat-tour .lead').textContent = content.boatTourText;
    document.querySelector('#party-boat .lead').textContent = content.partyBoatText;
    document.querySelector('#about .lead').textContent = content.aboutUsText;
    document.querySelector('#crew .lead').textContent = content.crewText;
    document.querySelector('#adventure .lead').textContent = content.adventureText;
    document.querySelector('#offers .lead').textContent = content.offersText;
}
