// GRAFICA DE LINEAS - PELICULAS

fetch("https://swapi.info/api/films")
.then(response => response.json())
.then(films => {

    films.sort((a, b) => {
        return new Date(a.release_date) - new Date(b.release_date);
    });

    const labels = films.map(film => film.title);

    const years = films.map(film => {
        return new Date(film.release_date).getFullYear();
    });

    new Chartist.Line("#films-chart", {
        labels: labels,
        series: [years]
    });
})
.catch(error => console.log(error));


// GRAFICA DE BARRAS - PERSONAJES

fetch("https://swapi.info/api/people")
.then(response => response.json())
.then(people => {

    const firstTen = people.slice(0, 10);

    const labels = firstTen.map(person => person.name);

    const appearances = firstTen.map(person => {
        return person.films.length;
    });

    new Chartist.Bar("#people-chart", {
        labels: labels,
        series: [appearances]
    }, {
        axisY: {
            onlyInteger: true
        }
    });

})
.catch(error => console.log(error));