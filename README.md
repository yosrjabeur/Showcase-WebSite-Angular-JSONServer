# Projet Angular - Gestion des Produits 

## Introduction

Ce projet est une application Angular pour la gestion des produits. Il permet aux utilisateurs d'ajouter, de mettre à jour, de supprimer et de lister des produits. L'application inclut également une fonctionnalité d'authentification pour sécuriser l'accès.

## Fonctionnalités

- Ajouter un produit avec nom, description, prix, et image.
- Mettre à jour les informations des produits existants.
- Supprimer des produits.
- Filtrer les produits.
- Favoris.
- Authentification des utilisateurs.

## Prérequis

- Angular CLI
- Node.js (v12 ou supérieur)
- Un serveur backend (simulé avec JSON Server dans cet exemple)

## Installation

1. Clonez le dépôt

    ```sh
    git clone https://github.com/votre-utilisateur/votre-repo](https://github.com/yosrjabeur/Showcase-WebSite-Angular-JSONServer.git
    cd votre-repo
    ```

2. Installez les dépendances

    ```sh
    npm install
    ```

3. Lancez le serveur backend (en utilisant JSON Server)

    ```sh
    npm install -g json-server
    json-server --watch db.json --port 3000
    ```

4. Démarrez l'application Angular

    ```sh
    ng serve
    ```

5. Ouvrez votre navigateur et accédez à `http://localhost:4200`.

## Utilisation

- **Page de Connexion**: Entrez vos informations d'identification pour vous connecter.
- **Tableau de Bord**: Accédez à vos produits, ajoutez-en de nouveaux, mettez à jour ou supprimez des produits existants.
- **Filtres**: Utilisez les filtres par mots clés.

## API

L'application utilise un serveur backend JSON Server pour simuler une API REST. Les principales routes API incluent :

- `GET /products` - Récupère la liste des produits
- `POST /products` - Ajoute un nouveau produit
- `PATCH /products/:id` - Met à jour un produit existant
- `DELETE /products/:id` - Supprime un produit

## Contribution

Les contributions sont les bienvenues ! Pour commencer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez votre branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.
