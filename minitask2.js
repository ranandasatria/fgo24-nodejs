//ambil data, balik urutan musik dan artis, masukin ke folder music
const fs = require('fs').promises
const path = require('path')
const url = "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json"

async function createFile(fileName) {
    try {
        const content = ""
        await fs.writeFile(fileName, content)
        console.log("write file success:", fileName)
    } catch (err) {
        console.log(err)
    }
}

async function getMusic(){
    try {
        const fetchData = await fetch(url)
        const data = await fetchData.json()

        const dibalik = data.map(item => item.split(" - ").reverse().join())

        dibalik.forEach(music=>{
            createFile(path.join("music", `${music}.mp3`))
        })
    } catch (err){
        console.log(err)
    }
}
getMusic()  