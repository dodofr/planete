
let grid = document.querySelector(".grid")
let button = document.querySelector("#btn")
let nom = []
// let descriptif = [] /// a du servir mais je n'en ai pas souvenir
let climat = []
let diametre = []
let terrain = []
let pop =[]
let grav = []
let img =["image/tatouine.jpg","image/alderan.jpg","image/iavin4.jpg","image/hoth.jpg","image/dagobah.jpg","image/bespin.jpg","image/endor.jpg",
"image/naboo.jpg","image/corrus.jpg","image/kamino.jpg"]


fetch ("https://swapi.dev/api/planets/") /// API
    .then(reponse => reponse.json())                              
    .then((picture) =>{
        for (let i = 0; i < 10; i++) {
            
            nom.push(picture.results[i].name)
            climat.push(picture.results[i].climate)
            pop.push(picture.results[i].population)
            grav.push(picture.results[i].gravity)
            diametre.push(picture.results[i].diameter)
            terrain.push(picture.results[i].terrain)
            
            let div = document.createElement("div")
            let nomImprime = document.createElement("h2")
            let image = document.createElement("img")
            let climate = document.createElement("p")
            let population = document.createElement("p")
            let gravity = document.createElement("p")
            let diameter = document.createElement("p")
            let terrai = document.createElement("p")


            nomImprime.innerHTML = nom[i]
            image.src = img[i]
            climate.innerHTML ="Climate : " + climat[i]
            population.innerHTML ="Population : " + pop[i] + " habitants"
            gravity.innerHTML ="Gravity : " + grav[i]
            diameter.innerHTML ="diamètre : " + diametre[i] + " kms"
            terrai.innerHTML ="surface : " + terrain[i]  


           
            div.appendChild(nomImprime)
            div.appendChild(image)
            div.appendChild(climate)
            div.appendChild(population)
            div.appendChild(gravity)
            div.appendChild(diameter)
            div.appendChild(terrai)

            grid.appendChild(div)  
            console.log(picture)
        }
        })


        button.addEventListener("click", () => {              
        fetch ("https://swapi.dev/api/planets/?page=2") /// API
        .then(reponse => reponse.json())                              
        .then((pagedeux) =>{
            let nom = []
            // let descriptif = []
            let climat = []
            let pop =[]
            let diametre = []
            let terrain = []
            let grav = []
            let imga =["image/geneosi.jpg","image/utapau.jpg","image/mustafar.jpg","image/kashiii.jpg","image/polis.jpg","image/magneto.jpg",
            "image/felucia.jpg","image/catonemo.jpg","image/saleucami.jpg","image/stewjon.jpg"]
            
            for (let i = 0; i < 10; i++) {
                
                nom.push(pagedeux.results[i].name)
                climat.push(pagedeux.results[i].climate)
                pop.push(pagedeux.results[i].population)
                grav.push(pagedeux.results[i].gravity)
                diametre.push(pagedeux.results[i].diameter)
                terrain.push(pagedeux.results[i].terrain)
                
                let div = document.createElement("div")
                let nomImprime = document.createElement("h2")
                let image = document.createElement("img")
                let climate = document.createElement("p")
                let population = document.createElement("p")
                let gravity = document.createElement("p")
                let diameter = document.createElement("p")
                let terrai = document.createElement("p")
    
                nomImprime.innerHTML = nom[i]
                image.src = imga[i]
                climate.innerHTML ="Climate : " + climat[i]
                population.innerHTML ="Population : " + pop[i] + " habitants"
                gravity.innerHTML ="Gravity : " + grav[i]
                diameter.innerHTML ="diamètre : " + diametre[i] + " kms"
                terrai.innerHTML ="surface : " + terrain[i] 
    
               
                div.appendChild(nomImprime)
                div.appendChild(image)
                div.appendChild(climate)
                div.appendChild(population)
                div.appendChild(gravity)
                div.appendChild(diameter)
                div.appendChild(terrai)
    
                grid.appendChild(div)  
                console.log(pagedeux)
                button.remove()
                
            }
            let a = document.createElement("button")
                document.body.appendChild(a)
                a.setAttribute("id", "btndeux");
                a.innerText = "voir la suite"


                let bro  = document.querySelector("#btndeux")
                bro.addEventListener("click", () => {
                   
                let trool = document.createElement("h1")
                trool.innerHTML = "Je suis en formation, doucement !!!!"
                document.body.appendChild(trool)
    
                 })

            })

           
            
        })

            


























/// methode Lucas bien meilleur a faire quand j'aurais le temps


// fetch ("https://swapi.dev/api/planets/") /// API
//     .then(reponse => reponse.json())                              
//     .then((picture) =>{
//         picture.results.map((item) => {
//             let div = document.createElement("div")
//             let nomImprime = document.createElement("h2")
//             let climate = document.createElement("p")
//             nomImprime.innerHTML = item.name
//             climate.innerHTML ="climate :" + item.climate
//             div.appendChild(nomImprime)
//             div.appendChild(climate)
//             document.body.appendChild(div)
//         }) 


        
//       }
    
//        )
      
    
