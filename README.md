![img](/public/github-1.svg)

Proyect for High School (EEST N°5 5°)

# Public API
Base URL: https://vt.tmdm.com.ar/api/

## `GET` Articles
### `articles/{id}`
id: string

### Example

```
https://vt.tmdm.com.ar/api/articles/all - All articles
https://vt.tmdm.com.ar/api/articles/present-simple - Only Present Simple
```

### Response example
```
// https://vt.tmdm.com.ar/api/articles/present-continuous

{
  "name": "Present Continuous",
  "image": "https://vt.tmdm.com.ar/card2.svg",
  "description": "Fácil - 10min",
  "url": "/tenses/present-continuous",
  "content": {
    "title": "Present Continuous",
    "by": "Tomas Di Mauro",
    "minutes_to_read": 10,
    "dificulty": "Fácil",
    "introduction": "El presente continuo es utilizado para:\n Hablar de algo que ocurre en el momento que estamos hablando, como por ejemplo para decir que está lloviendo decis: It's raining.\nPara algo que ocurre en la actualidad pero que no lo estas haciendo ahora, como decir que actualmente estas buscando trabajo: I'm currently looking for a job.\n  Tambien, para algo que si o si ocurrirá en el futuro próximo, como decir que vas a salir a una cena a la noche: I'm going to a dinner tonight",
    "form": [
      [
        "Sujeto",
        "Auxiliar",
        "Conjugación"
      ],
      [
        "I",
        "am",
        "verb + ing"
      ],
      [
        "He/she/it",
        "is",
        "verb + ing"
      ],
      [
        "you/we/they",
        "are",
        "verb + ing"
      ]
    ],
    "structure": [
      [
        "#Sentencias afirmativas",
        "#Sujeto + to be + verbo + ing.",
        "Ejemplos:\nI am learning.\nHe is eating.\nThey are going to the cinema."
      ],
      [
        "#Sentencias negativas",
        "#Sujeto + to be + auxiliar negativo (“not”) + verbo + ing.",
        "Ejemplos:\nI am not learning.\nHe is not eating.\nThey are not going to the cinema"
      ],
      [
        "#Sentencias interrogativas",
        "#Verbo auxiliar (to be) + sujeto + verbo+ing",
        "Ejemplos:\nAre you learning?\nAre you eating?\nAre they going to the cinema?"
      ]
    ],
    "moreuses": [
      
    ]
  }
}
```
