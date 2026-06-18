class MoviesFactory {
   constructor(data, type) {
       // Si le type correspond à l'ancienne API, alors retourne-moi l'ancien formatage
       switch (type) {
           case 'oldApi':
               return new OldMovie(data)
           // Sinon retourne-moi le nouveau formatage
           case 'newApi':
               return new Movie(data)
       }
        // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
        throw 'Unknown type format'
   }
}
