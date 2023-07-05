MAMORONA BRANCHE ALOUH ZAY VO MICODE OOHHH......

# src/routes.js
Ce le fichier de configuration pour chaque route de React en utilisant la fonction useRoutes de 'react-router-dom' pour creer un routeur.

# src/Components
## src/Components/Containers
C'est ici qu'on place les composants qui enveloppe les autres.Ce dont la composants qui englobe tous.Par exemple une composant qui comporte le header et footer,et les autres elements s'insert au milieu de ce composant.

## src/Components/UI
C'est ici qu'on place les elements styliser et la configuration du theme de styled-component.Toutes les styles doit etre defini ici avec styled-component et non avec CSS.

## src/Components/WithFeatures
C'est ici que les composants comportant les fonctionnaliters.

# src/Hooks
C'est ici qu'on place les hooks personnalises.

# src/Pages
Contient toutes les composants de page.

# src/Services
Contient les services externe a React.
## src/Services/webApiService.js
Instances d'Axios utiliser pour toutes les envoyes de requete vers le RESTApi.
## src/Services/socketService.js
Instances de SocketIo-Client pour la connection au socket principal.

# src/Store
Toutes fichier ayant une relation avec Redux et React-Redux.

# src/Utils
Fontions ou constants utiles pour le developpement.
