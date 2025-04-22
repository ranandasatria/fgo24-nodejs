// Memindahkan file ke folder baru

// Algoritma:
// 1. Akses file dalam folder
// 2. Pisahkan artis dan judul
// 3. Buat folder berdasarkan nama artis
// 4. Pindahkan judul ke folder sesuai artisnya


const fs = require('fs').promises
const path = require('path')

const main = async ()=>{
    try{
    const listFiles = await fs.readdir('music') // baca folder 'music'
    listFiles.forEach(file =>{ // akses semua isi dari folder 'music' 
        processFiles(file) // jalankan proses ngotak-ngatik file
    })
    }catch(err){
        console.log(err)
    }
}  

const processFiles = async (file)=>{
   try{
        const artist = file.split(" - ")[0] // list nama artis
        const newFolder = path.join('music', artist) // folder yang akan dibuat
        await fs.mkdir(newFolder, { recursive: true}) // buat folder dan cek kalau foldernya sudah ada
       
        const oldPath = path.join('music', file) // path lama yang isi filenya mau dipindahkan
        const newPath = path.join(newFolder, file) // path baru tujuan dari file yang ingin dipindahkan
        await fs.rename(oldPath, newPath) // pindahkan path lama ke path baru
    }catch(err){
    console.log(err)
    }
}

main()

// catatan: 
// 1. Await tidak bisa digunakan dalam forEach, jadi harus bikin function promise yang berdiri sendiri.
// 2. Ketika program dijalankan untuk yang kedua kalinya di terminal, muncul error EINVAL pada bagian rename
//    karena di folder music/, file aslinya udah ga ada, tapi program tetap nyoba fs.rename(oldPath, newPath), 
//    padahal oldPath udah kosong. Untuk solusi mungkin bisa tambahin cara handling error atau throw error di catch .