# Buts de la carrière de Xavi Simons

Ce projet affiche la liste de tous les buts de la carrière de Xavi Simons. Il utilise HTML, CSS et JavaScript pour afficher les données des buts dans une page web.

## Fonctionnalités

- Affichage de la liste de tous les buts de Xavi Simons.
- Chaque but affiche des détails tels que l'équipe adverse, la compétition, la date et d'autres informations pertinentes.
- Possibilité de cliquer sur un but pour afficher des détails supplémentaires.

## Comment utiliser le projet

1. **Ouvrir `index.html` dans un navigateur web :** Ouvrez le fichier `index.html` dans n'importe quel navigateur web moderne pour afficher la liste des buts de Xavi Simons.

2. **Afficher les détails des buts :** Cliquez sur un but pour afficher des détails supplémentaires comme le numéro du but, l'équipe, l'adversaire, la compétition, la date et d'autres détails pertinents.

## Structure des fichiers

- `index.html` : Fichier principal contenant la structure HTML de la page web.
- `style.css` : Feuille de style CSS pour le design de la page.
- `app.js` : Fichier JavaScript pour gérer la logique d'affichage des buts et des détails.

## Données des buts

Les données des buts sont stockées directement dans le fichier JavaScript `goals.js`. Les données sont organisées sous forme d'un tableau d'objets, chaque objet représentant un but avec ses détails.

## Exemple de code

Voici un exemple de code JavaScript pour afficher les buts de Xavi Simons :

```javascript
// Données des buts de Xavi Simons (exemple)
const xaviSimonsGoals = [
    { id: 1, team: "PSG", opponent: "Real Madrid", competition: "Ligue des champions", date: "2024-05-15", details: "Marqué à la 67e minute" },
    { id: 2, team: "PSG", opponent: "Barcelone", competition: "Ligue 1", date: "2022-03-20", details: "Marqué à la 55e minute" },
    // Ajoutez d'autres buts ici...
];
```

-----

# Xavi Simons Career Goals

## Description

This repository contains a simple web application to showcase all the career goals scored by Xavi Simons, a professional football player. The web app displays a list of goals along with relevant details such as the opponent team, competition, date, and additional information about each goal. Users can click on a goal to view more details in a modal, and they can navigate through the goals using navigation arrows.

## Usage

To view the goals, simply open the `index.html` file in a web browser. The list of goals will be displayed, and users can click on each goal to view more information in a modal. They can also navigate through the goals using the navigation arrows provided in the modal.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS)

## Structure

- `index.html`: Main HTML file containing the structure of the web page.
- `css/style.css`: CSS file for styling the web page.
- `js/app.js`: JavaScript file containing the logic for handling user interactions and displaying the goals.
- `image/`: Directory containing images, including team logos and navigation arrows.
- `goals.json`: JSON file containing data about each goal, including details such as team names, competition, date, etc.

## How to Contribute

If you'd like to contribute to this project, you can:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.
