# NODE JS
-> Runtime Environtment untuk menjalankan kode JS di luar browser
-> Memungkinan berkomunikasi langsung dengan sistem operasi
-> Memungkinkan pembuatan aplikasi berbasis desktop dengan menggunakan kode JS
<!-- <!-
```mermaid 
flowchart

- [file.js] --> [node js]
 --> sistem operasi --> output --> pengguna --> menjalankan --> file.js

## Internal dan external package

Internal:
sintaks import 
```cmd
const fs = require('fs') // import commonjs
```
-  FS (file system) - untuk berinteraksi dengan file system
- path - untuk berinteraksi dengan path
- http - untuk membuat 
- crypto
dapat langsung digunakan dengan melakukan import nama package

External:
Membantu pengerjaan project lebih cepat. 
Didapat dari **npm**
Cara install: *npm install nama-package*
- Moment - untuk berinteraksi dengan object date
- Express - untuk membuat server http
- handlebars - templating engine 
- ejs - templating engine

## Package administration
-> Package manager digunakan untuk menggunakan package external
-> paling terkenal npm
-> alternatif: yarn dan pnpm
-> tapi penggunaan harus konsisten, jangan dicampur, biar package administration ga kacau

- npm init
-> untuk menginisiasi project nodejs

- npm install nama-package
-> Untuk melakukan pemasangan package external

- npm install --save-dev nama package /atau npm install -D 
-> Untuk melakukan pemasangan package external yang hanya 
    digunakan pada fase development contoh eslint

- npm uninstall nama-package

- npm install -y
-> Untuk install package secara otomatis

## npm script 
-> Selain untuk package adminis.. npm juga bisa digunakan untuk menjalankan project yang dibuatkan berdasarkan script yang dideklarasikan dalam file package.json
-> npm run nama-key

## CommonJS dan ESModule
-> CommonJS adalah sintaks export/import default pada nodejs

## Import dan export pada CommonJS
->import package:
const namaPackage: require("nama-package")

->import local module
const  namaModule = require("./relative/path/file.js")

function namaFungsi(){
    console.log("Hello")
}

-> export module
module.exports = namaFungsing


minitask
- Membuat program interaktif bernama "convert tanggal" untuk mengubah input tanggal 24-04-2015
menjadi 24/04/2015 menggunakan package moment
- Jika input user tidak sesuai format. maka outputkan pesan "Format tanggal salah"
- Membuat padanan program tanpa external package, tapi dengan menggunakan alur sendiri

nama repo: fgo24-node-dateconver
 npm, init, index.json, deklarasi script
 yang diupload package.json dan package utama, index js     

 ## Linter: ESLint
 - Linter adalah tools untuk menganalisa kesalahan pada kode yang ditulis
 - Dapat dimanfaatkan untuk membuat penulisan kode lebih konsisten berdasarkan aturan yang didefinisikan
 - Gunakan package eslint (+extension vscode)
 - Untuk pemasangan dan inisiasi
    ->npm install --save-dev eslinst
    ->npm eslint --init
- Untuk meriksa kesalahan:
    ->npx eslint file.js

## Error handling and tracing
Kekurangan program:
- Runtime tidak tahu bahwa sudah terjadi error pada program
- Error hanya bisa dilihat dari output
- Tidak dapat diberikan proses lanjutan jika terjadi error
- Sulit dicari (tracing)

## Debugging

--node --inspect-break index.js

/homework   