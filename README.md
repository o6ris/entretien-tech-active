Consignes : 
    • Frontend : Créer un site web qui contient au moins :
        ○ Une case de texte dans laquelle l'utilisateur va entrer un nombre 
        ○ Un bouton qui, lorsque cliqué, envoie le nombre entré par l'utilisateur au serveur qui va stocker ce nombre dans une liste de nombres
        ○ L'affichage dynamique de la liste de nombres stockée sur le serveur, mais triée par ordre croissant, ce tri devra être effectué côté serveur
        ○ Un peu de css pour rendre l'ensemble propre, compréhensible et utilisable

    • Backend :
        ○ Disposer d'une base de données pouvant contenir une liste de nombres
        ○ Construire une API, toute interaction avec la base de données devra passer par cette API
        ○ Le tri de la liste de nombres devra se faire côté serveur
        
## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
