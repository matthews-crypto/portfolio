// animation pour le background
document.querySelector('.first-button').addEventListener('click', function() {

    document.querySelector('.animated-icon1').classList.toggle('open');
});

// animation du typeIt
new TypeIt(".presentaion", {
    strings: ["Hello.", "I'm Mathieu Khadim.", "Bienvenue"],
    speed: 50,
    waitUntilVisible: true,
}).go();