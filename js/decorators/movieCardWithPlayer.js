function movieCardWithPlayer(movieCard) {

    if (movieCard.movie.actor === "sylvester") {
        movieCard.$wrapper.addEventListener('click', () => {
            console.log("click")
            const Player = new PlayerModal(movieCard._movie)
            Player.render()
        });
    }

    return movieCard;
}
