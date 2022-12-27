const burgerMenu = document.querySelector('.burger_icon');
const closeIcon = document.querySelector('.close_icon');
const navList = document.querySelector('.nav_var_list_m');
const navProgram = document.querySelector('.nav_list_link_p');
const navSpeakers = document.querySelector('.nav_list_link_s');
const navPartners = document.querySelector('.nav_list_link_pa');
const speakersData = [
  {
    name: 'Carlos smidth',
    title: 'Professor od Biotechnology at ULC Berkeley, California',
    description: 'he has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_one.jpg'
  },

  {
    name: 'Benjamin bottom',
    title: 'Investor and chairman of BLP ventures, Vancouver',
    description: 'he has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_two.jpg'
  },

  {
    name: 'David Kurvalrtz',
    title: 'Bioethicist, autor of the book: editing human germline, Harvard, Boston',
    description: 'he has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_three.jpg'
  },

  {
    name: 'Alexa Van Dourzem',
    title: 'Molecular Genetist, CEO of customRNA Labs, San Mateo, California',
    description: 'she has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_four.jpg'
  },

  {
    name: 'Juliana Franco',
    title: 'Director of the Metabolic and Cancer Research Center, Barcelona',
    description: 'she has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_five.jpg'
  },

  {
    name: 'Irina Jakovkish',
    title: 'Transhumanism art creator, director of the Modern Art Museum, Vienna',
    description: 'she has worked in numerous projects in the anti cancer field in 2019 he sintetized a vaccine capable of curing several types of Leukemia',
    photo: './assets/speakers/speaker_six.jpg'
  },

];

function toggleActive () {
  burgerMenu.classList.toggle('inactive');
  closeIcon.classList.toggle('inactive');
  navList.classList.toggle('inactive')
}

burgerMenu.addEventListener('click', toggleActive);

closeIcon.addEventListener('click', () => {
  toggleActive();
  window.location.assign("#");
});

navProgram.addEventListener('click', toggleActive);

navSpeakers.addEventListener('click', toggleActive);

navPartners.addEventListener('click', toggleActive);



