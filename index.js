const superHeroToken = 1054287591948269
const heroButton = document.getElementById('dg')
const heroImageDiv = document.getElementById('heroImage')
const SearchButtonDiv = document.getElementById('SearchButton')
const searchInputDiv = document.getElementById('SearchInput')
const baseUrl = `https://www.superheroapi.com/api.php/${superHeroToken}`


const getSuperhero = (id) => {
    fetch(`${baseUrl}/${id}`)
    .then(Response => Response.json())
    .then(json =>{
         console.log(json)
        //  const superhero = json
         showHeroInfo(json)
        })
}

const showHeroInfo =(character) =>{
    const name = `<h2>${character.name}</h2>`
    const img = `<img src = "${character.image.url}" height = 400 width = 400>`
    const stats = Object.keys(character.powerstats).map(stat =>{
        return `<p>${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
    }).join('')
    heroImageDiv.innerHTML = `${name} ${img} ${stats}`
}
const searchedSuperHero = (name) =>{
    fetch(`${baseUrl}/search/${name}`)
    .then(Response => Response.json())
    .then(json =>{
         const hero = json.results[0]
         showHeroInfo(hero)
        })
}

const randomHero = () =>{
    const noOfSuperHero = 731
    return Math.floor(Math.random()*noOfSuperHero)+1
}
heroButton.onclick = () => getSuperhero(randomHero())
SearchButtonDiv.onclick = () => searchedSuperHero(searchInputDiv.value)
