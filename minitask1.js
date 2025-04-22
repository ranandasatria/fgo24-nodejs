const fs = require('fs').promises
const path = require('path')

async function createFile(fileName) {
    try{
        const content = ""
        await fs.writeFile(fileName, content)
        console.log("write file success")
    }catch(err){
        console.log(err)
    }
}

const listMusic = [
    'The Strokes - Reptilia', 
    'The Strokes - Selfess', 
    'The Strokes - Soma',
    'Kangen Band - Yolanda',
    'Sound Horeg',
    'Wali - Yank',
    'SNSD - Gee',
    'JKT48 - Shonichi',
    'Silampukau - Balada Harian',
    'Iwan Fals - Cikal'    
]

listMusic.forEach(music=>{
    createFile(path.join("test", `${music}.mp3`))
})

// createFile(path.join("music", "example.txt"))