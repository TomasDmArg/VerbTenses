"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.articles = void 0;

var _config = require("../config");

var articles = {
  "present-simple": {
    name: "Present Simple",
    image: "".concat(_config.config.domain, "/card1.svg"),
    description: "Fácil - 10min",
    url: "/tenses/present-simple",
    content: {
      title: "Present Simple",
      by: "Tomas Di Mauro",
      minutes_to_read: 10,
      dificulty: "Fácil",
      introduction: "El presente simple es utilizado para hablar de algo que ocurre habitualmente, se usa en primera persona (I, we), en segunda persona (you) y en tercera persona (he, she, it) donde se le agrega al verbo o acción una s al final",
      form: [["Sujeto", "Conjugación"], ["I/you/we/they", "verbo. Ej: learn"], ["He/she/it", "verbo + s. Ej: learns"]],
      structure: [["#Sentencias afirmativas", "#Sujeto + verbo.", "Ejemplos: \n I play football. \n He eats pizza. \n They go to the cinema."], ["\n#Sentencias negativas", "#Sujeto + verbo auxiliar (to do) + auxiliar negativo (“not”) + verbo.", "Ejemplos:\nI don’t play football.\nHe doesn’t eat pizza.\nThey don’t go to the cinema."], ["\n#Sentencias interrogativas", "#Verbo auxiliar(to do) + sujeto + verbo principal + question mark (?)", "Ejemplos:\nDo you play football?\nDo you eat pizza?\nDo they go to the cinema?"]],
      moreuses: [["Para hablar de hechos", "Elephants live in Africa.\nMar del Plata is a city in Argentina"], ["Para instrucciones", "Open the box\nDo your homework\nGo to the store"], ["Para eventos programados", "I leave tomorrow at 10\nThe party is tomorrow at 11"]]
    }
  },
  "present-continuous": {
    name: "Present Continuous",
    image: "".concat(_config.config.domain, "/card2.svg"),
    description: "Fácil - 10min",
    url: "/tenses/present-continuous",
    content: {
      title: "Present Continuous",
      by: "Tomas Di Mauro",
      minutes_to_read: 10,
      dificulty: "Fácil",
      introduction: "El presente continuo es utilizado para:\n Hablar de algo que ocurre en el momento que estamos hablando, como por ejemplo para decir que está lloviendo decis: It's raining.\nPara algo que ocurre en la actualidad pero que no lo estas haciendo ahora, como decir que actualmente estas buscando trabajo: I'm currently looking for a job.\n  Tambien, para algo que si o si ocurrirá en el futuro próximo, como decir que vas a salir a una cena a la noche: I'm going to a dinner tonight",
      form: [["Sujeto", "Auxiliar", "Conjugación"], ["I", "am", "verb + ing"], ["He/she/it", "is", "verb + ing"], ["you/we/they", "are", "verb + ing"]],
      structure: [["#Sentencias afirmativas", "#Sujeto + to be + verbo + ing.", "Ejemplos:\nI am learning.\nHe is eating.\nThey are going to the cinema."], ["#Sentencias negativas", "#Sujeto + to be + auxiliar negativo (“not”) + verbo + ing.", "Ejemplos:\nI am not learning.\nHe is not eating.\nThey are not going to the cinema"], ["#Sentencias interrogativas", "#Verbo auxiliar (to be) + sujeto + verbo+ing", "Ejemplos:\nAre you learning?\nAre you eating?\nAre they going to the cinema?"]],
      moreuses: []
    }
  },
  "past-simple": {
    name: "Past Simple",
    image: "".concat(_config.config.domain, "/card3.svg"),
    description: "Medio - 10min",
    url: "/tenses/past-simple",
    content: {
      title: "Past Simple",
      by: "Tomas Di Mauro",
      minutes_to_read: 10,
      dificulty: "Medium",
      introduction: "El pasado simple es utilizado para hablar de algo que ya ha ocurrido en el pasado, en verbos regulares se le agrega -ed \n\n/Excepciones:\n • Si el verbo termina en -e, se le agrega -d al final (ej. trusted), \n• Si termina en una vocal corta y una consonante (excepto “y” o “w”), doblamos la consonante final. (ej. stop -> stopped), \n• Con verbos que terminan en una consonante y una “y”, se cambia la “y” por una “i”) (ej. study -> studied).\n\n /Pronunciación: \n • Si el verbo termina en “p”, “f”, “k” o “s”, se pronuncia -ed como si fuera una “t” en español. \n • Si teminan en “b”, “g”, “l”, “m”, “n”, “v”, “z” o vocal, se pronuncia -ed como si fuera una “d”,\n • Si terminan en “d” o “t”, pronunciamos la -ed como “id”",
      form: [["Verbo", "Past Simple"], ["be", "was/were"], ["have", "had"], ["do", "did"]],
      structure: [["#Sentencias afirmativas", "#Sujeto + verbo", "Ejemplos:\nI was learning.\nHe was eating.\nThey were going to the cinema."], ["#Sentencias negativas", "#Sujeto + to be + not", "Ejemplos:\nI was not learning.\nHe was not eating.\nThey were not going to the cinema."], ["#Sentencias interrogativas", "#Verbo auxiliar (to do) + sujeto + ... + question mark (?)", "Ejemplos:\nDid you learn?\nDid you eat?\nDid they go to the cinema?", "#To be + sujeto", "Ejemplos:\nWas I learning?\nWas I eating?\nWere they going to the cinema?"]],
      moreuses: [["Para una serie de acciones que ocurrieron y terminaron en el pasado", "I studied many hours and passed the exam"], ["Para acciones que se han repetido en el pasado", "He walked 10 blocks to the school every day "], ["Para acciones que ocurrieron por mucho tiempo en el pasado", "I work as a developer for many years"], ["Para hechos del pasado", "Alan Turing lived in London."]]
    }
  },
  "future": {
    name: "Future",
    image: "".concat(_config.config.domain, "/card4.svg"),
    description: "Fácil - 10min",
    url: "/tenses/future",
    content: {
      title: "Future",
      by: "Tomas Di Mauro",
      minutes_to_read: 10,
      dificulty: "Fácil",
      introduction: "Este tiempo se usa para expresar acciones que ocurrirán en el futuro, se puede expresar con will o usando going to",
      form: [],
      structure: [["#Sentencias afirmativas", "#Will: Sujeto + will + verbo", "Ejemplos:\nI will learn.\nHe will eat.\nThey will go to the cinema.", "#Going to: Sujeto + to be + going to + verbo", "Ejemplos:\nI am going to learn.\nHe is going to eat.\nThey are going to the cinema"], ["#Sentencias negativas", "#Will: Sujeto + will + not + verbo", "Ejemplos:\nI will not learn.\nHe will not eat.\nThey will not go to the cinema.", "#Going to: Sujeto + to be + not + going to + verbo", "Ejemplos:\nI am not going to learn.\nHe is not going to eat.\nThey are not going to the cinema"], ["#Sentencias interrogativas", "#Will: Will + sujeto + verbo + .. + question mark (?)", "Ejemplos:\nWill you learn?\nWill you eat?\nWill they go to the cinema?", "#Going to: To be + sujeto + going to + verbo + .. + question mark (?)", "Ejemplos:\nAre you going to learn?\nAre you going to eat?\nAre they going to the cinema?"]],
      moreuses: [["Para una promesa", "E.g. I'll study for the exam."], ["Para hacer planes", "E.g. I'm going to take an English class"], ["Para predecir algo", "E.g. I'll be back in a week"]]
    }
  }
};
exports.articles = articles;