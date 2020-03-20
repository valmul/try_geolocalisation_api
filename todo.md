# A Etudier
- Comment obtenir une autorisation d'accès permanente à la géolocatisation pour un site
- Comment capturer des positions avec le service worker
- Comment capturer des positions à intervalle régulier ou sur déplacement


# Commentaire sur Google
Pour effectuer des tests, j'ai hébergé mes fichiers dans un bucket google
- projet google: tvs-essai-01
- stockage: bucket 202003_essai 
- répertoire (ou plutôt chemin)  geoloc
- [url](https://storage.googleapis.com/202003_essai/geoloc/index.html)
- [create a static website](https://cloud.google.com/storage/docs/hosting-static-website?hl=fr#co%C3%BBts)
- [give public access to static files](https://cloud.google.com/storage/docs/access-control/making-data-public?hl=fr#objects)


Pour donner un accès public, pour le user allUsers donner un accès en lecture
Une icône de lien apparaît alors dans le bucket.

## Améliorations possibles
- Pour éviter d'être embêter par les délais de mise à jour de cache, il faudrait pouvoir postfixé tous mes fichiers par un numéro de version qui s'incrémente

Pour donner un accès public, pour le user allUsers donner un accès en lecture
Une icône de lien apparaît alors dans le bucket.

# Remarques sur l'api:
- mon téléphone me donne une altitude
- je n'ai pas bien compris commment utiliser l'accuracy

Liste de mes valeurs sur le téléphone:
        position.coords.latitude OK
        position.coords.longitude OK
        position.coords.altitude OK

        position.coords.accuracy OK  14,6 à l'intérieur de la maison
        position.coords.altitudeAccuracy : null
        position.coords.heading : null à tester lors d'un mouvement
        position.coords.speed: null  à tester lors d'un mouvement

