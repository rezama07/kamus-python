const searchData = [
    {
        "title": "📖 KATA 1: Variable",
        "preview": "Tempat penyimpanan data agar nilainya dapat diakses dan digunakan kembali di bagian lain program.",
        "url": "kamus-python/bab-1.html#kata-1",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 1: variable"
    },
    {
        "title": "📖 KATA 2: String",
        "preview": "Data berupa teks. Semua data yang berbentuk huruf, kata, atau kalimat dalam Python disebut String.",
        "url": "kamus-python/bab-1.html#kata-2",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 2: string"
    },
    {
        "title": "📖 KATA 3: Integer",
        "preview": "Angka bulat utuh. Tidak ada koma atau desimal.",
        "url": "kamus-python/bab-1.html#kata-3",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 3: integer"
    },
    {
        "title": "📖 KATA 4: Float",
        "preview": "Angka desimal atau angka yang memiliki nilai pecahan.",
        "url": "kamus-python/bab-1.html#kata-4",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 4: float"
    },
    {
        "title": "📖 KATA 5: Boolean",
        "preview": "Tipe data kepastian. Nilainya hanya ada dua kemungkinan: Benar (True) atau Salah (False). Tidak ada nilai ketiga.",
        "url": "kamus-python/bab-1.html#kata-5",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 5: boolean"
    },
    {
        "title": "📖 KATA 6: List",
        "preview": "Kumpulan banyak data yang disimpan secara berurutan dalam satu wadah.",
        "url": "kamus-python/bab-1.html#kata-6",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 6: list"
    },
    {
        "title": "📖 KATA 7: Dictionary",
        "preview": "Kumpulan data berpasangan yang terdiri dari \"Kata Kunci\" (Key) dan \"Nilainya\" (Value).",
        "url": "kamus-python/bab-1.html#kata-7",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 7: dictionary"
    },
    {
        "title": "📖 KATA 8: Tuple",
        "preview": "Kumpulan data berurutan (mirip List), namun isinya bersifat tetap (immutable). Isinya tidak dapat ditambah, dikurangi, a...",
        "url": "kamus-python/bab-1.html#kata-8",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 8: tuple"
    },
    {
        "title": "📖 KATA 9: Index",
        "preview": "Nomor urut posisi sebuah elemen di dalam suatu kelompok data.",
        "url": "kamus-python/bab-1.html#kata-9",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 9: index"
    },
    {
        "title": "📖 KATA 10: Comment",
        "preview": "Teks catatan yang ditulis oleh programmer di dalam kode, khusus untuk dibaca oleh manusia. Komputer akan mengabaikan bar...",
        "url": "kamus-python/bab-1.html#kata-10",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 10: comment"
    },
    {
        "title": "📖 KATA 11: Syntax",
        "preview": "Aturan mutlak mengenai tanda baca dan tata cara penulisan kode.",
        "url": "kamus-python/bab-1.html#kata-11",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 11: syntax"
    },
    {
        "title": "📖 KATA 12: None",
        "preview": "Kosong. Tidak ada data sama sekali. Berbeda dari angka nol (0) atau teks kosong, None benar-benar berarti tidak ada nila...",
        "url": "kamus-python/bab-1.html#kata-12",
        "category": "Kamus Python - Bab 1",
        "keywords": "📖 kata 12: none"
    },
    {
        "title": "📖 KATA 13: print",
        "preview": "Menampilkan sesuatu ke layar. Tanpa perintah ini, komputer memproses data di balik layar namun hasilnya tidak akan terli...",
        "url": "kamus-python/bab-2.html#kata-13",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 13: print"
    },
    {
        "title": "📖 KATA 14: input",
        "preview": "Meminta pengguna mengetikkan sesuatu melalui keyboard, kemudian menyimpan teks tersebut untuk diproses lebih lanjut.",
        "url": "kamus-python/bab-2.html#kata-14",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 14: input"
    },
    {
        "title": "📖 KATA 15: Function",
        "preview": "Sekumpulan langkah atau perintah yang dibungkus dalam satu nama, sehingga dapat dipanggil kapan saja tanpa perlu menulis...",
        "url": "kamus-python/bab-2.html#kata-15",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 15: function"
    },
    {
        "title": "📖 KATA 16: Parameter",
        "preview": "Variabel khusus yang ditempatkan di dalam fungsi untuk menerima nilai dari luar, sehingga hasil fungsi dapat disesuaikan...",
        "url": "kamus-python/bab-2.html#kata-16",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 16: parameter"
    },
    {
        "title": "📖 KATA 17: Return",
        "preview": "Mengembalikan hasil akhir dari sebuah fungsi kepada bagian kode yang memanggil fungsi tersebut.",
        "url": "kamus-python/bab-2.html#kata-17",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 17: return"
    },
    {
        "title": "📖 KATA 18: len",
        "preview": "Menghitung jumlah elemen atau karakter dalam suatu data.",
        "url": "kamus-python/bab-2.html#kata-18",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 18: len"
    },
    {
        "title": "📖 KATA 19: append",
        "preview": "Menambahkan satu elemen baru ke dalam sebuah List. Elemen baru selalu ditempatkan di posisi paling akhir.",
        "url": "kamus-python/bab-2.html#kata-19",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 19: append"
    },
    {
        "title": "📖 KATA 20: type",
        "preview": "Fungsi untuk memeriksa jenis tipe data dari suatu nilai (apakah String, Integer, Float, List, dsb.).",
        "url": "kamus-python/bab-2.html#kata-20",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 20: type"
    },
    {
        "title": "📖 KATA 21: import",
        "preview": "Memuat modul atau library tambahan yang tidak tersedia secara bawaan di Python.",
        "url": "kamus-python/bab-2.html#kata-21",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 21: import"
    },
    {
        "title": "📖 KATA 22: Operator Matematika",
        "preview": "Simbol yang digunakan untuk melakukan operasi perhitungan dasar.",
        "url": "kamus-python/bab-2.html#kata-22",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 22: operator matematika"
    },
    {
        "title": "📖 KATA 23: upper dan lower",
        "preview": "Fungsi untuk mengubah teks menjadi huruf kapital semua (upper) atau huruf kecil semua (lower).",
        "url": "kamus-python/bab-2.html#kata-23",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 23: upper dan lower"
    },
    {
        "title": "📖 KATA 24: f-string",
        "preview": "Cara yang ringkas dan efisien untuk menggabungkan teks biasa dengan nilai dari variabel.",
        "url": "kamus-python/bab-2.html#kata-24",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 24: f-string"
    },
    {
        "title": "📖 KATA 25: int",
        "preview": "Fungsi untuk mengonversi (mengubah) tipe data. int() mengubah teks menjadi angka bulat, sedangkan str() mengubah angka m...",
        "url": "kamus-python/bab-2.html#kata-25",
        "category": "Kamus Python - Bab 2",
        "keywords": "📖 kata 25: int"
    },
    {
        "title": "📖 KATA 26: if",
        "preview": "Perintah untuk memeriksa suatu kondisi. Jika kondisi tersebut terpenuhi (bernilai True), maka blok kode di dalamnya akan...",
        "url": "kamus-python/bab-3.html#kata-26",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 26: if"
    },
    {
        "title": "📖 KATA 27: else",
        "preview": "Blok alternatif yang dijalankan ketika kondisi if di atasnya tidak terpenuhi (bernilai False).",
        "url": "kamus-python/bab-3.html#kata-27",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 27: else"
    },
    {
        "title": "📖 KATA 28: elif",
        "preview": "Kondisi tambahan yang diperiksa setelah if tidak terpenuhi, dan sebelum else sebagai penanganan akhir.",
        "url": "kamus-python/bab-3.html#kata-28",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 28: elif"
    },
    {
        "title": "📖 KATA 29: Operator Pembanding",
        "preview": "Simbol untuk membandingkan dua nilai (apakah lebih besar, lebih kecil, atau tidak sama).",
        "url": "kamus-python/bab-3.html#kata-29",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 29: operator pembanding"
    },
    {
        "title": "📖 KATA 30: and",
        "preview": "Operator logika yang mengharuskan SEMUA kondisi bernilai True agar hasilnya True. Jika satu saja kondisi bernilai False,...",
        "url": "kamus-python/bab-3.html#kata-30",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 30: and"
    },
    {
        "title": "📖 KATA 31: or",
        "preview": "Operator logika yang menganggap hasilnya True jika minimal SATU kondisi bernilai True.",
        "url": "kamus-python/bab-3.html#kata-31",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 31: or"
    },
    {
        "title": "📖 KATA 32: not",
        "preview": "Operator yang membalikkan nilai logika. Jika suatu kondisi bernilai True, penambahan not akan membuatnya menjadi False, ...",
        "url": "kamus-python/bab-3.html#kata-32",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 32: not"
    },
    {
        "title": "📖 KATA 33: in",
        "preview": "Operator untuk memeriksa apakah suatu nilai terdapat di dalam sebuah List atau String, tanpa perlu memeriksa satu per sa...",
        "url": "kamus-python/bab-3.html#kata-33",
        "category": "Kamus Python - Bab 3",
        "keywords": "📖 kata 33: in"
    },
    {
        "title": "📖 KATA 34: for",
        "preview": "Menjalankan suatu blok kode secara berulang untuk setiap elemen dalam suatu kumpulan data. Digunakan ketika jumlah pengu...",
        "url": "kamus-python/bab-4.html#kata-34",
        "category": "Kamus Python - Bab 4",
        "keywords": "📖 kata 34: for"
    },
    {
        "title": "📖 KATA 35: while",
        "preview": "Menjalankan suatu blok kode secara terus-menerus selama kondisi yang ditentukan masih bernilai True. Digunakan ketika ju...",
        "url": "kamus-python/bab-4.html#kata-35",
        "category": "Kamus Python - Bab 4",
        "keywords": "📖 kata 35: while"
    },
    {
        "title": "📖 KATA 36: range",
        "preview": "Fungsi untuk menghasilkan urutan angka secara otomatis. Sering digunakan bersama for untuk menentukan berapa kali suatu ...",
        "url": "kamus-python/bab-4.html#kata-36",
        "category": "Kamus Python - Bab 4",
        "keywords": "📖 kata 36: range"
    },
    {
        "title": "📖 KATA 37: break",
        "preview": "Perintah untuk menghentikan perulangan secara paksa dan langsung keluar, meskipun perulangan belum mencapai batas akhirn...",
        "url": "kamus-python/bab-4.html#kata-37",
        "category": "Kamus Python - Bab 4",
        "keywords": "📖 kata 37: break"
    },
    {
        "title": "📖 KATA 38: continue",
        "preview": "Perintah untuk melewati iterasi saat ini dan langsung melanjutkan ke iterasi berikutnya. Berbeda dengan break yang mengh...",
        "url": "kamus-python/bab-4.html#kata-38",
        "category": "Kamus Python - Bab 4",
        "keywords": "📖 kata 38: continue"
    },
    {
        "title": "📖 KATA 39: def",
        "preview": "Mendefinisikan fungsi baru. Saat kode mencapai blok def, Python hanya menyimpan definisinya dan belum menjalankannya. Fu...",
        "url": "kamus-python/bab-5.html#kata-39",
        "category": "Kamus Python - Bab 5",
        "keywords": "📖 kata 39: def"
    },
    {
        "title": "📖 KATA 40: return",
        "preview": "Perintah kepada fungsi untuk mengembalikan nilai hasil kerjanya agar dapat disimpan ke variabel atau diproses lebih lanj...",
        "url": "kamus-python/bab-5.html#kata-40",
        "category": "Kamus Python - Bab 5",
        "keywords": "📖 kata 40: return"
    },
    {
        "title": "📖 KATA 41: parameter & argument",
        "preview": "Parameter: Variabel kosong yang ditempatkan di dalam kurung fungsi (def), yang menunggu untuk diisi dengan nilai saat fu...",
        "url": "kamus-python/bab-5.html#kata-41",
        "category": "Kamus Python - Bab 5",
        "keywords": "📖 kata 41: parameter & argument"
    },
    {
        "title": "📖 KATA 42: default parameter",
        "preview": "Nilai bawaan yang akan digunakan secara otomatis jika pengguna tidak menyediakan argument untuk parameter tersebut saat ...",
        "url": "kamus-python/bab-5.html#kata-42",
        "category": "Kamus Python - Bab 5",
        "keywords": "📖 kata 42: default parameter"
    },
    {
        "title": "📖 KATA 43: scope",
        "preview": "Aturan yang menentukan di bagian mana suatu variabel dapat diakses dan digunakan. Variabel yang didefinisikan di dalam f...",
        "url": "kamus-python/bab-5.html#kata-43",
        "category": "Kamus Python - Bab 5",
        "keywords": "📖 kata 43: scope"
    },
    {
        "title": "📖 KATA 44: import",
        "preview": "Memuat modul atau library dari luar ke dalam program agar fitur-fiturnya dapat digunakan.",
        "url": "kamus-python/bab-6.html#kata-44",
        "category": "Kamus Python - Bab 6",
        "keywords": "📖 kata 44: import"
    },
    {
        "title": "📖 KATA 45: from ... import",
        "preview": "Memuat hanya satu atau beberapa fungsi tertentu dari sebuah modul, tanpa memuat keseluruhan modul tersebut.",
        "url": "kamus-python/bab-6.html#kata-45",
        "category": "Kamus Python - Bab 6",
        "keywords": "📖 kata 45: from ... import"
    },
    {
        "title": "📖 KATA 46: as",
        "preview": "Memberikan nama alias (julukan) yang lebih pendek kepada modul yang diimpor, untuk memudahkan penulisan kode.",
        "url": "kamus-python/bab-6.html#kata-46",
        "category": "Kamus Python - Bab 6",
        "keywords": "📖 kata 46: as"
    },
    {
        "title": "📖 KATA 47: pip install",
        "preview": "Perintah untuk mengunduh dan menginstal library Python dari internet ke dalam sistem lokal.",
        "url": "kamus-python/bab-6.html#kata-47",
        "category": "Kamus Python - Bab 6",
        "keywords": "📖 kata 47: pip install"
    },
    {
        "title": "📖 KATA 48: pip list",
        "preview": "Perintah untuk menampilkan daftar semua library yang sudah terinstal di lingkungan Python saat ini.",
        "url": "kamus-python/bab-6.html#kata-48",
        "category": "Kamus Python - Bab 6",
        "keywords": "📖 kata 48: pip list"
    },
    {
        "title": "📖 KATA 49: try",
        "preview": "Memberi tahu Python bahwa blok kode berikut ini berpotensi menghasilkan error. Python diminta untuk mencoba menjalankann...",
        "url": "kamus-python/bab-7.html#kata-49",
        "category": "Kamus Python - Bab 7",
        "keywords": "📖 kata 49: try"
    },
    {
        "title": "📖 KATA 50: except",
        "preview": "Blok kode yang dijalankan ketika instruksi di dalam try menghasilkan error. Ini adalah rencana cadangan agar program tet...",
        "url": "kamus-python/bab-7.html#kata-50",
        "category": "Kamus Python - Bab 7",
        "keywords": "📖 kata 50: except"
    },
    {
        "title": "📖 KATA 51: finally",
        "preview": "Blok kode yang selalu dijalankan terlepas dari apakah proses try berhasil atau menghasilkan error. Biasanya digunakan un...",
        "url": "kamus-python/bab-7.html#kata-51",
        "category": "Kamus Python - Bab 7",
        "keywords": "📖 kata 51: finally"
    },
    {
        "title": "📖 KATA 52: else",
        "preview": "Blok kode yang hanya dijalankan jika instruksi di dalam try berhasil tanpa menghasilkan error sama sekali. Perbedaannya ...",
        "url": "kamus-python/bab-7.html#kata-52",
        "category": "Kamus Python - Bab 7",
        "keywords": "📖 kata 52: else"
    },
    {
        "title": "📖 KATA 53: except Exception as e",
        "preview": "Menangkap error dan menyimpan pesan detailnya ke dalam variabel (biasanya bernama e), sehingga informasi tentang penyeba...",
        "url": "kamus-python/bab-7.html#kata-53",
        "category": "Kamus Python - Bab 7",
        "keywords": "📖 kata 53: except exception as e"
    },
    {
        "title": "📖 KATA 54: raise",
        "preview": "Secara sengaja memicu error ketika kondisi tertentu melanggar aturan yang ditetapkan, meskipun secara teknis Python tida...",
        "url": "kamus-python/bab-7.html#kata-54",
        "category": "Kamus Python - Bab 7",
        "keywords": "📖 kata 54: raise"
    },
    {
        "title": "📖 KATA 55: class",
        "preview": "Template atau blueprint untuk membuat banyak objek yang memiliki struktur dan kemampuan yang sama, tanpa harus mendefini...",
        "url": "kamus-python/bab-8.html#kata-55",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 55: class"
    },
    {
        "title": "📖 KATA 56: object / instance",
        "preview": "Hasil konkret yang dibuat berdasarkan blueprint class. Setiap objek memiliki struktur yang sama dengan class-nya, namun ...",
        "url": "kamus-python/bab-8.html#kata-56",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 56: object / instance"
    },
    {
        "title": "📖 KATA 57: __init__",
        "preview": "Fungsi khusus yang dijalankan secara otomatis setiap kali objek baru dibuat dari sebuah class. Digunakan untuk menetapka...",
        "url": "kamus-python/bab-8.html#kata-57",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 57: __init__"
    },
    {
        "title": "📖 KATA 58: self",
        "preview": "Referensi ke objek yang sedang aktif saat itu. Digunakan agar fungsi di dalam class tahu objek mana yang sedang dioperas...",
        "url": "kamus-python/bab-8.html#kata-58",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 58: self"
    },
    {
        "title": "📖 KATA 59: Attribute / Property",
        "preview": "Data atau informasi yang melekat pada suatu objek, mendeskripsikan karakteristik atau keadaan objek tersebut.",
        "url": "kamus-python/bab-8.html#kata-59",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 59: attribute / property"
    },
    {
        "title": "📖 KATA 60: Method",
        "preview": "Fungsi yang didefinisikan di dalam class dan merepresentasikan aksi atau perilaku yang dapat dilakukan oleh objek terseb...",
        "url": "kamus-python/bab-8.html#kata-60",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 60: method"
    },
    {
        "title": "📖 KATA 61: Inheritance",
        "preview": "Mekanisme di mana sebuah class baru mewarisi semua atribut dan method dari class yang sudah ada, kemudian dapat ditambah...",
        "url": "kamus-python/bab-8.html#kata-61",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 61: inheritance"
    },
    {
        "title": "📖 KATA 62: super",
        "preview": "Fungsi untuk mengakses method atau __init__ dari class induk di dalam class turunan. Berguna agar class turunan tidak pe...",
        "url": "kamus-python/bab-8.html#kata-62",
        "category": "Kamus Python - Bab 8",
        "keywords": "📖 kata 62: super"
    },
    {
        "title": "📖 KATA 64: LLM",
        "preview": "Model kecerdasan buatan yang dilatih menggunakan data teks dalam jumlah sangat besar, sehingga mampu memahami dan mengha...",
        "url": "kamus-python/bab-9.html#kata-64",
        "category": "Kamus Python - Bab 9",
        "keywords": "📖 kata 64: llm"
    },
    {
        "title": "📖 KATA 65: Prompt",
        "preview": "Teks instruksi atau pertanyaan yang diberikan kepada model AI untuk memandu respons yang dihasilkan.",
        "url": "kamus-python/bab-9.html#kata-65",
        "category": "Kamus Python - Bab 9",
        "keywords": "📖 kata 65: prompt"
    },
    {
        "title": "📖 KATA 66: Token",
        "preview": "Satuan terkecil yang digunakan model AI untuk memproses teks. Sekaligus menjadi satuan penghitungan biaya penggunaan lay...",
        "url": "kamus-python/bab-9.html#kata-66",
        "category": "Kamus Python - Bab 9",
        "keywords": "📖 kata 66: token"
    },
    {
        "title": "📖 KATA 67: API Key",
        "preview": "Kode autentikasi unik yang diberikan oleh penyedia layanan AI kepada penggunanya. Kode ini diperlukan agar program Pytho...",
        "url": "kamus-python/bab-9.html#kata-67",
        "category": "Kamus Python - Bab 9",
        "keywords": "📖 kata 67: api key"
    },
    {
        "title": "📖 KATA 68: RAG",
        "preview": "Teknik yang memaksa model AI untuk mencari (Retrieve) jawaban dari dokumen yang disediakan terlebih dahulu, sebelum meng...",
        "url": "kamus-python/bab-10.html#kata-68",
        "category": "Kamus Python - Bab 10",
        "keywords": "📖 kata 68: rag"
    },
    {
        "title": "📖 KATA 69: Chunking",
        "preview": "Proses memecah dokumen panjang menjadi potongan-potongan teks yang lebih kecil, agar dapat diproses oleh model AI tanpa ...",
        "url": "kamus-python/bab-10.html#kata-69",
        "category": "Kamus Python - Bab 10",
        "keywords": "📖 kata 69: chunking"
    },
    {
        "title": "📖 KATA 70: Embeddings",
        "preview": "Proses mengubah teks menjadi representasi numerik (vektor) sehingga komputer dapat mengukur kemiripan makna antara dua t...",
        "url": "kamus-python/bab-10.html#kata-70",
        "category": "Kamus Python - Bab 10",
        "keywords": "📖 kata 70: embeddings"
    },
    {
        "title": "📖 KATA 71: Vector Database",
        "preview": "Database khusus yang dirancang untuk menyimpan dan mencari data dalam format vektor (Embedding) secara efisien.",
        "url": "kamus-python/bab-10.html#kata-71",
        "category": "Kamus Python - Bab 10",
        "keywords": "📖 kata 71: vector database"
    },
    {
        "title": "📖 KATA 72: Agent",
        "preview": "Sistem AI yang tidak hanya menghasilkan teks sebagai respons, tetapi diberikan kemampuan untuk berpikir, merencanakan la...",
        "url": "kamus-python/bab-11.html#kata-72",
        "category": "Kamus Python - Bab 11",
        "keywords": "📖 kata 72: agent"
    },
    {
        "title": "📖 KATA 73: Tools / Function Calling",
        "preview": "Fungsi atau aplikasi eksternal (seperti kalkulator, browser, atau kalender) yang diberikan kepada Agent sehingga ia dapa...",
        "url": "kamus-python/bab-11.html#kata-73",
        "category": "Kamus Python - Bab 11",
        "keywords": "📖 kata 73: tools / function calling"
    },
    {
        "title": "📖 KATA 74: LangChain / LangGraph",
        "preview": "Framework Python yang digunakan untuk mengintegrasikan model LLM, sistem RAG, dan Tools menjadi satu aplikasi AI yang te...",
        "url": "kamus-python/bab-11.html#kata-74",
        "category": "Kamus Python - Bab 11",
        "keywords": "📖 kata 74: langchain / langgraph"
    },
    {
        "title": "📖 KATA 75: NumPy",
        "preview": "Library Python yang dioptimalkan untuk melakukan operasi matematis pada data numerik dalam jumlah besar secara efisien.",
        "url": "kamus-python/bab-12.html#kata-75",
        "category": "Kamus Python - Bab 12",
        "keywords": "📖 kata 75: numpy"
    },
    {
        "title": "📖 KATA 76: Array",
        "preview": "Struktur data khusus buatan NumPy yang dirancang untuk menyimpan kumpulan angka secara terstruktur dan efisien, mendukun...",
        "url": "kamus-python/bab-12.html#kata-76",
        "category": "Kamus Python - Bab 12",
        "keywords": "📖 kata 76: array"
    },
    {
        "title": "📖 KATA 77: Pandas",
        "preview": "Library Python paling populer untuk membaca, mengolah, dan memanipulasi data berbentuk tabel. Catatan: nama ini tidak be...",
        "url": "kamus-python/bab-12.html#kata-77",
        "category": "Kamus Python - Bab 12",
        "keywords": "📖 kata 77: pandas"
    },
    {
        "title": "📖 KATA 78: DataFrame",
        "preview": "Struktur data dua dimensi dalam Pandas yang menyerupai tabel, memiliki baris dan kolom dengan nama yang dapat diidentifi...",
        "url": "kamus-python/bab-12.html#kata-78",
        "category": "Kamus Python - Bab 12",
        "keywords": "📖 kata 78: dataframe"
    },
    {
        "title": "📖 KATA 79: Data Cleaning",
        "preview": "Proses mengidentifikasi dan memperbaiki data yang tidak lengkap, tidak konsisten, atau tidak valid sebelum data tersebut...",
        "url": "kamus-python/bab-12.html#kata-79",
        "category": "Kamus Python - Bab 12",
        "keywords": "📖 kata 79: data cleaning"
    },
    {
        "title": "📖 KATA 80: Data Pipeline",
        "preview": "Rangkaian proses otomatis yang mengalirkan data dari sumber, melalui tahap pembersihan dan transformasi, hingga ke tujua...",
        "url": "kamus-python/bab-12.html#kata-80",
        "category": "Kamus Python - Bab 12",
        "keywords": "📖 kata 80: data pipeline"
    },
    {
        "title": "📖 KATA 81: FastAPI",
        "preview": "Pustaka (library) Python yang digunakan untuk membuat pintu gerbang elektronik (API) agar aplikasi lain (seperti aplikas...",
        "url": "kamus-python/bab-13.html#kata-81",
        "category": "Kamus Python - Bab 13",
        "keywords": "📖 kata 81: fastapi"
    },
    {
        "title": "📖 KATA 82: Uvicorn",
        "preview": "Aplikasi server web ringan yang bertugas untuk menjalankan dan menjaga agar loket FastAPI selalu aktif dan siap menerima...",
        "url": "kamus-python/bab-13.html#kata-82",
        "category": "Kamus Python - Bab 13",
        "keywords": "📖 kata 82: uvicorn"
    },
    {
        "title": "📖 KATA 83: Pydantic",
        "preview": "Pustaka bawaan di dalam FastAPI yang bertugas memvalidasi dan memastikan data kiriman pengguna (Request) memiliki format...",
        "url": "kamus-python/bab-13.html#kata-83",
        "category": "Kamus Python - Bab 13",
        "keywords": "📖 kata 83: pydantic"
    },
    {
        "title": "📖 KATA 84: Docker",
        "preview": "Teknologi pengemasan perangkat lunak yang membungkus kode program, versi Python, pustaka (library), dan seluruh konfigur...",
        "url": "kamus-python/bab-13.html#kata-84",
        "category": "Kamus Python - Bab 13",
        "keywords": "📖 kata 84: docker"
    },
    {
        "title": "📖 KATA 85: Container",
        "preview": "Wujud aktif dari aplikasi yang telah dibungkus oleh Docker dan sedang berjalan secara mandiri di dalam memori komputer.",
        "url": "kamus-python/bab-13.html#kata-85",
        "category": "Kamus Python - Bab 13",
        "keywords": "📖 kata 85: container"
    },
    {
        "title": "📖 KATA 86: Docker Image",
        "preview": "Cetak biru (blueprint) atau file beku yang berisi seluruh kode program, sistem operasi mini, dan instruksi lengkap untuk...",
        "url": "kamus-python/bab-13.html#kata-86",
        "category": "Kamus Python - Bab 13",
        "keywords": "📖 kata 86: docker image"
    },
    {
        "title": "📖 KATA 87: Dockerfile",
        "preview": "Berkas konfigurasi berbasis teks polos tanpa ekstensi (bernama Dockerfile) yang berisi daftar instruksi berurutan untuk ...",
        "url": "kamus-python/bab-13.html#kata-87",
        "category": "Kamus Python - Bab 13",
        "keywords": "📖 kata 87: dockerfile"
    },
    {
        "title": "📖 KATA 88: Cloud Computing",
        "preview": "Layanan penyewaan sumber daya komputer (server, penyimpanan data, jaringan) milik perusahaan besar yang dapat diakses me...",
        "url": "kamus-python/bab-14.html#kata-88",
        "category": "Kamus Python - Bab 14",
        "keywords": "📖 kata 88: cloud computing"
    },
    {
        "title": "📖 KATA 89: AWS / GCP",
        "preview": "Penyedia layanan infrastruktur cloud terbesar di dunia. AWS (Amazon Web Services) dikelola oleh Amazon, sedangkan GCP (G...",
        "url": "kamus-python/bab-14.html#kata-89",
        "category": "Kamus Python - Bab 14",
        "keywords": "📖 kata 89: aws / gcp"
    },
    {
        "title": "📖 KATA 90: Hugging Face Spaces",
        "preview": "Platform hosting berbasis cloud gratisan yang dirancang khusus untuk para pengembang AI untuk membagikan dan memamerkan ...",
        "url": "kamus-python/bab-14.html#kata-90",
        "category": "Kamus Python - Bab 14",
        "keywords": "📖 kata 90: hugging face spaces"
    },
    {
        "title": "📖 KATA 91: Streamlit / Gradio",
        "preview": "Pustaka Python yang digunakan untuk membuat antarmuka web interaktif secara instan dari skrip Python, tanpa memerlukan p...",
        "url": "kamus-python/bab-14.html#kata-91",
        "category": "Kamus Python - Bab 14",
        "keywords": "📖 kata 91: streamlit / gradio"
    },
    {
        "title": "📖 KATA 92: Live API",
        "preview": "Status yang menunjukkan bahwa API/layanan web Anda yang sebelumnya hanya berjalan di komputer lokal (localhost), kini te...",
        "url": "kamus-python/bab-14.html#kata-92",
        "category": "Kamus Python - Bab 14",
        "keywords": "📖 kata 92: live api"
    },
    {
        "title": "📖 KATA 93: Endpoint",
        "preview": "Titik akses berupa URL ujung yang sangat spesifik pada sebuah API yang disediakan untuk menangani satu fungsi atau tugas...",
        "url": "kamus-python/bab-14.html#kata-93",
        "category": "Kamus Python - Bab 14",
        "keywords": "📖 kata 93: endpoint"
    },
    {
        "title": "📖 KATA 94: LangSmith",
        "preview": "Platform pemantauan dari tim LangChain yang memungkinkan developer menelusuri dan menganalisis setiap langkah pemrosesan...",
        "url": "kamus-python/bab-15.html#kata-94",
        "category": "Kamus Python - Bab 15",
        "keywords": "📖 kata 94: langsmith"
    },
    {
        "title": "📖 KATA 95: Logging",
        "preview": "Proses pencatatan otomatis setiap kejadian penting (berhasil atau gagal) yang terjadi selama program berjalan, lengkap d...",
        "url": "kamus-python/bab-15.html#kata-95",
        "category": "Kamus Python - Bab 15",
        "keywords": "📖 kata 95: logging"
    },
    {
        "title": "📖 KATA 96: Too Many Requests",
        "preview": "Respons error dari penyedia layanan AI yang menunjukkan bahwa program telah mengirimkan terlalu banyak permintaan dalam ...",
        "url": "kamus-python/bab-15.html#kata-96",
        "category": "Kamus Python - Bab 15",
        "keywords": "📖 kata 96: too many requests"
    },
    {
        "title": "📖 KATA 97: Latency",
        "preview": "Waktu yang dibutuhkan sistem mulai dari permintaan dikirimkan hingga respons pertama diterima dari AI.",
        "url": "kamus-python/bab-15.html#kata-97",
        "category": "Kamus Python - Bab 15",
        "keywords": "📖 kata 97: latency"
    },
    {
        "title": "📖 KATA 98: Throughput",
        "preview": "Jumlah permintaan atau tugas yang dapat diproses oleh sistem dalam satuan waktu tertentu (biasanya per detik atau per me...",
        "url": "kamus-python/bab-15.html#kata-98",
        "category": "Kamus Python - Bab 15",
        "keywords": "📖 kata 98: throughput"
    },
    {
        "title": "📖 KATA 99: Timeout",
        "preview": "Batas waktu maksimum yang ditetapkan untuk sebuah proses. Jika proses tidak selesai dalam waktu yang ditentukan, koneksi...",
        "url": "kamus-python/bab-15.html#kata-99",
        "category": "Kamus Python - Bab 15",
        "keywords": "📖 kata 99: timeout"
    },
    {
        "title": "📖 KATA 100: Agentic IDE",
        "preview": "Lingkungan pengembangan kode (seperti VS Code) yang telah terintegrasi dengan AI. AI ini dapat membaca keseluruhan struk...",
        "url": "kamus-python/bab-16.html#kata-100",
        "category": "Kamus Python - Bab 16",
        "keywords": "📖 kata 100: agentic ide"
    },
    {
        "title": "📖 KATA 101: Claude 3.5 Sonnet / Frontend AI",
        "preview": "Model AI buatan Anthropic yang diakui luas di kalangan developer sebagai model paling andal untuk keperluan penulisan ko...",
        "url": "kamus-python/bab-16.html#kata-101",
        "category": "Kamus Python - Bab 16",
        "keywords": "📖 kata 101: claude 3.5 sonnet / frontend ai"
    },
    {
        "title": "📖 KATA 102: Reasoning Models",
        "preview": "Model AI generasi terbaru yang dirancang untuk memproses masalah secara mendalam dan bertahap sebelum memberikan jawaban...",
        "url": "kamus-python/bab-16.html#kata-102",
        "category": "Kamus Python - Bab 16",
        "keywords": "📖 kata 102: reasoning models"
    },
    {
        "title": "📖 KATA 103: Pair Programming",
        "preview": "Pendekatan pengembangan modern di mana programmer dan AI bekerja bersama secara bergantian (programmer menentukan arah d...",
        "url": "kamus-python/bab-16.html#kata-103",
        "category": "Kamus Python - Bab 16",
        "keywords": "📖 kata 103: pair programming"
    },
    {
        "title": "📖 KATA 104: Git & GitHub",
        "preview": "",
        "url": "kamus-python/bab-17.html#kata-104",
        "category": "Kamus Python - Bab 17",
        "keywords": "📖 kata 104: git & github"
    },
    {
        "title": "📖 KATA 105: Pull Request",
        "preview": "Proses pengajuan formal untuk menggabungkan kode baru ke dalam basis kode utama tim, setelah melalui proses tinjauan ole...",
        "url": "kamus-python/bab-17.html#kata-105",
        "category": "Kamus Python - Bab 17",
        "keywords": "📖 kata 105: pull request"
    },
    {
        "title": "📖 KATA 106: CI/CD",
        "preview": "Sistem otomasi (seperti GitHub Actions) yang secara otomatis menjalankan serangkaian proses setiap kali kode baru diungg...",
        "url": "kamus-python/bab-17.html#kata-106",
        "category": "Kamus Python - Bab 17",
        "keywords": "📖 kata 106: ci/cd"
    },
    {
        "title": "📘 Istilah: Artificial Intelligence (AI)",
        "preview": "Kecerdasan buatan. Kemampuan komputer untuk meniru proses berpikir, belajar, dan pengambilan keputusan seperti yang dila...",
        "url": "glosarium/index.html#term-1",
        "category": "Glosarium Python",
        "keywords": "artificial intelligence (ai)"
    },
    {
        "title": "📘 Istilah: Machine Learning (ML)",
        "preview": "Cabang AI di mana sistem belajar dari data secara mandiri, tanpa perlu diprogram secara eksplisit untuk setiap aturan ya...",
        "url": "glosarium/index.html#term-2",
        "category": "Glosarium Python",
        "keywords": "machine learning (ml)"
    },
    {
        "title": "📘 Istilah: Deep Learning (DL)",
        "preview": "Cabang ML yang menggunakan jaringan saraf tiruan berlapis-lapis untuk memproses data kompleks seperti gambar, suara, ata...",
        "url": "glosarium/index.html#term-3",
        "category": "Glosarium Python",
        "keywords": "deep learning (dl)"
    },
    {
        "title": "📘 Istilah: Supervised Learning",
        "preview": "Pendekatan pelatihan di mana model belajar dari data yang sudah dilengkapi dengan label jawaban yang benar.",
        "url": "glosarium/index.html#term-4",
        "category": "Glosarium Python",
        "keywords": "supervised learning"
    },
    {
        "title": "📘 Istilah: Unsupervised Learning",
        "preview": "Pendekatan pelatihan di mana model mencari pola tersembunyi dari data yang tidak memiliki label jawaban.",
        "url": "glosarium/index.html#term-5",
        "category": "Glosarium Python",
        "keywords": "unsupervised learning"
    },
    {
        "title": "📘 Istilah: Reinforcement Learning",
        "preview": "Pendekatan pelatihan di mana model belajar melalui mekanisme coba-coba, dengan reward jika hasilnya benar dan penalti ji...",
        "url": "glosarium/index.html#term-6",
        "category": "Glosarium Python",
        "keywords": "reinforcement learning"
    },
    {
        "title": "📘 Istilah: Neural Network",
        "preview": "Jaringan saraf tiruan. Arsitektur algoritma komputer yang terinspirasi dari cara kerja neuron di otak manusia yang salin...",
        "url": "glosarium/index.html#term-7",
        "category": "Glosarium Python",
        "keywords": "neural network"
    },
    {
        "title": "📘 Istilah: Training",
        "preview": "Proses pelatihan model AI menggunakan data, agar model dapat mempelajari pola dan meningkatkan kemampuannya.",
        "url": "glosarium/index.html#term-8",
        "category": "Glosarium Python",
        "keywords": "training"
    },
    {
        "title": "📘 Istilah: Inference",
        "preview": "Proses penggunaan model yang sudah terlatih untuk membuat prediksi dari data baru yang belum pernah dilihat sebelumnya.",
        "url": "glosarium/index.html#term-9",
        "category": "Glosarium Python",
        "keywords": "inference"
    },
    {
        "title": "📘 Istilah: Overfitting",
        "preview": "Kondisi di mana model terlalu menyesuaikan diri dengan data latihan sehingga performanya sangat baik pada data latihan, ...",
        "url": "glosarium/index.html#term-10",
        "category": "Glosarium Python",
        "keywords": "overfitting"
    },
    {
        "title": "📘 Istilah: Underfitting",
        "preview": "Kondisi di mana model tidak cukup belajar dari data latihan sehingga tidak mampu menangkap pola yang relevan.",
        "url": "glosarium/index.html#term-11",
        "category": "Glosarium Python",
        "keywords": "underfitting"
    },
    {
        "title": "📘 Istilah: Feature",
        "preview": "Atribut atau karakteristik dari data yang digunakan sebagai masukan untuk model. Contoh: luas tanah dan jumlah kamar seb...",
        "url": "glosarium/index.html#term-12",
        "category": "Glosarium Python",
        "keywords": "feature"
    },
    {
        "title": "📘 Istilah: Label / Target",
        "preview": "Nilai output yang ingin diprediksi oleh model. Contoh: harga rumah itu sendiri.",
        "url": "glosarium/index.html#term-13",
        "category": "Glosarium Python",
        "keywords": "label / target"
    },
    {
        "title": "📘 Istilah: Epoch (dibaca: e-pok)",
        "preview": "Satu siklus penuh di mana model selesai memproses seluruh data latihan dari awal hingga akhir.",
        "url": "glosarium/index.html#term-14",
        "category": "Glosarium Python",
        "keywords": "epoch (dibaca: e-pok)"
    },
    {
        "title": "📘 Istilah: Batch Size",
        "preview": "Jumlah sampel data yang diproses secara bersamaan dalam satu iterasi sebelum model memperbarui parameternya.",
        "url": "glosarium/index.html#term-15",
        "category": "Glosarium Python",
        "keywords": "batch size"
    },
    {
        "title": "📘 Istilah: Accuracy (Akurasi)",
        "preview": "Persentase prediksi yang benar dari keseluruhan prediksi yang dibuat oleh model.",
        "url": "glosarium/index.html#term-16",
        "category": "Glosarium Python",
        "keywords": "accuracy (akurasi)"
    },
    {
        "title": "📘 Istilah: Precision",
        "preview": "Proporsi prediksi positif yang benar-benar positif. Metrik ini penting untuk menghindari kesalahan identifikasi positif ...",
        "url": "glosarium/index.html#term-17",
        "category": "Glosarium Python",
        "keywords": "precision"
    },
    {
        "title": "📘 Istilah: Recall",
        "preview": "Proporsi kasus positif yang berhasil diidentifikasi oleh model. Metrik ini penting untuk memastikan tidak ada kasus posi...",
        "url": "glosarium/index.html#term-18",
        "category": "Glosarium Python",
        "keywords": "recall"
    },
    {
        "title": "📘 Istilah: F1-Score",
        "preview": "Rata-rata harmonik dari Precision dan Recall, memberikan gambaran keseimbangan antara keduanya.",
        "url": "glosarium/index.html#term-19",
        "category": "Glosarium Python",
        "keywords": "f1-score"
    },
    {
        "title": "📘 Istilah: Loss Function",
        "preview": "Fungsi yang mengukur seberapa jauh prediksi model dari nilai yang sebenarnya. Semakin kecil nilainya, semakin akurat mod...",
        "url": "glosarium/index.html#term-20",
        "category": "Glosarium Python",
        "keywords": "loss function"
    },
    {
        "title": "📘 Istilah: Gradient Descent",
        "preview": "Algoritma optimasi yang digunakan model untuk menyesuaikan parameternya secara bertahap guna meminimalkan nilai Loss Fun...",
        "url": "glosarium/index.html#term-21",
        "category": "Glosarium Python",
        "keywords": "gradient descent"
    },
    {
        "title": "📘 Istilah: Hyperparameter",
        "preview": "Konfigurasi yang ditetapkan oleh engineer sebelum proses pelatihan dimulai dan tidak diubah secara otomatis oleh model s...",
        "url": "glosarium/index.html#term-22",
        "category": "Glosarium Python",
        "keywords": "hyperparameter"
    },
    {
        "title": "📘 Istilah: Fine-Tuning",
        "preview": "Proses melatih kembali model yang sudah terlatih secara umum menggunakan data spesifik, agar model menjadi lebih ahli di...",
        "url": "glosarium/index.html#term-23",
        "category": "Glosarium Python",
        "keywords": "fine-tuning"
    },
    {
        "title": "📘 Istilah: Model (Model AI)",
        "preview": "Sistem AI yang telah selesai dilatih dan siap digunakan untuk melakukan tugas tertentu, seperti menjawab pertanyaan atau...",
        "url": "glosarium/index.html#term-24",
        "category": "Glosarium Python",
        "keywords": "model (model ai)"
    },
    {
        "title": "📘 Istilah: Dataset",
        "preview": "Kumpulan data yang digunakan sebagai bahan pelatihan atau evaluasi model AI.",
        "url": "glosarium/index.html#term-25",
        "category": "Glosarium Python",
        "keywords": "dataset"
    },
    {
        "title": "📘 Istilah: Algoritma (Algorithm)",
        "preview": "Serangkaian langkah logis yang terstruktur untuk menyelesaikan suatu masalah atau mencapai suatu tujuan.",
        "url": "glosarium/index.html#term-26",
        "category": "Glosarium Python",
        "keywords": "algoritma (algorithm)"
    },
    {
        "title": "📘 Istilah: Data Pipeline",
        "preview": "Alur proses otomatis yang mengalirkan data dari sumber melalui serangkaian transformasi hingga mencapai tujuan akhirnya.",
        "url": "glosarium/index.html#term-27",
        "category": "Glosarium Python",
        "keywords": "data pipeline"
    },
    {
        "title": "📘 Istilah: Structured Data",
        "preview": "Data yang terorganisir dalam format yang jelas dan konsisten, seperti tabel dengan baris dan kolom (misalnya file Excel ...",
        "url": "glosarium/index.html#term-28",
        "category": "Glosarium Python",
        "keywords": "structured data"
    },
    {
        "title": "📘 Istilah: Unstructured Data",
        "preview": "Data yang tidak memiliki format baku, seperti teks bebas, email, gambar, audio, atau video.",
        "url": "glosarium/index.html#term-29",
        "category": "Glosarium Python",
        "keywords": "unstructured data"
    },
    {
        "title": "📘 Istilah: Generative AI (GenAI)",
        "preview": "Jenis AI yang tidak hanya menganalisis data, tetapi juga dapat menciptakan konten baru seperti teks, gambar, suara, atau...",
        "url": "glosarium/index.html#term-30",
        "category": "Glosarium Python",
        "keywords": "generative ai (genai)"
    },
    {
        "title": "📘 Istilah: Natural Language Processing (NLP)",
        "preview": "Cabang AI yang memungkinkan komputer memahami, menginterpretasi, dan merespons bahasa manusia secara alami.",
        "url": "glosarium/index.html#term-31",
        "category": "Glosarium Python",
        "keywords": "natural language processing (nlp)"
    },
    {
        "title": "📘 Istilah: Foundation Model",
        "preview": "Model AI berukuran besar yang dilatih dengan data dalam jumlah masif dari berbagai sumber, sehingga memiliki kemampuan u...",
        "url": "glosarium/index.html#term-32",
        "category": "Glosarium Python",
        "keywords": "foundation model"
    },
    {
        "title": "📘 Istilah: Parameters",
        "preview": "Nilai-nilai numerik internal yang menjadi representasi pengetahuan model AI. Semakin banyak parameter (seperti 7B atau 7...",
        "url": "glosarium/index.html#term-33",
        "category": "Glosarium Python",
        "keywords": "parameters"
    },
    {
        "title": "📘 Istilah: Weights (Bobot)",
        "preview": "Nilai yang merepresentasikan kekuatan koneksi antar komponen dalam jaringan saraf model AI. Nilai ini diperbarui selama ...",
        "url": "glosarium/index.html#term-34",
        "category": "Glosarium Python",
        "keywords": "weights (bobot)"
    },
    {
        "title": "📘 Istilah: Prompt Engineering",
        "preview": "Teknik menyusun instruksi yang efektif dan spesifik untuk model AI, agar menghasilkan output yang akurat dan relevan.",
        "url": "glosarium/index.html#term-35",
        "category": "Glosarium Python",
        "keywords": "prompt engineering"
    },
    {
        "title": "📘 Istilah: System Prompt",
        "preview": "Instruksi awal yang diberikan di balik layar untuk mendefinisikan peran, batasan, atau kepribadian model AI sebelum beri...",
        "url": "glosarium/index.html#term-36",
        "category": "Glosarium Python",
        "keywords": "system prompt"
    },
    {
        "title": "📘 Istilah: User Prompt",
        "preview": "Pertanyaan atau instruksi yang diketikkan langsung oleh pengguna kepada model AI.",
        "url": "glosarium/index.html#term-37",
        "category": "Glosarium Python",
        "keywords": "user prompt"
    },
    {
        "title": "📘 Istilah: Zero-Shot Prompting",
        "preview": "Teknik meminta model AI mengerjakan tugas tanpa memberikan contoh apapun sebelumnya.",
        "url": "glosarium/index.html#term-38",
        "category": "Glosarium Python",
        "keywords": "zero-shot prompting"
    },
    {
        "title": "📘 Istilah: Few-Shot Prompting",
        "preview": "Teknik memberikan beberapa contoh (pasangan pertanyaan-jawaban) di dalam prompt sebelum mengajukan pertanyaan utama, aga...",
        "url": "glosarium/index.html#term-39",
        "category": "Glosarium Python",
        "keywords": "few-shot prompting"
    },
    {
        "title": "📘 Istilah: Chain of Thought (CoT)",
        "preview": "Teknik prompting yang mendorong model AI untuk menjabarkan proses berpikirnya langkah demi langkah sebelum memberikan ja...",
        "url": "glosarium/index.html#term-40",
        "category": "Glosarium Python",
        "keywords": "chain of thought (cot)"
    },
    {
        "title": "📘 Istilah: Hallucination (Halusinasi)",
        "preview": "Kondisi di mana model AI menghasilkan informasi yang tidak akurat atau tidak berdasar, namun disampaikan dengan keyakina...",
        "url": "glosarium/index.html#term-41",
        "category": "Glosarium Python",
        "keywords": "hallucination (halusinasi)"
    },
    {
        "title": "📘 Istilah: Context Window",
        "preview": "Batas maksimal teks yang dapat diproses oleh model dalam satu sesi percakapan. Ketika percakapan melampaui batas ini, mo...",
        "url": "glosarium/index.html#term-42",
        "category": "Glosarium Python",
        "keywords": "context window"
    },
    {
        "title": "📘 Istilah: Temperature",
        "preview": "Parameter yang mengatur tingkat variasi dalam output model AI. Nilai mendekati 0 menghasilkan respons yang konsisten dan...",
        "url": "glosarium/index.html#term-43",
        "category": "Glosarium Python",
        "keywords": "temperature"
    },
    {
        "title": "📘 Istilah: Top-K / Top-P",
        "preview": "Parameter lanjutan yang dikombinasikan dengan Temperature untuk membatasi pilihan kata yang dipertimbangkan model saat m...",
        "url": "glosarium/index.html#term-44",
        "category": "Glosarium Python",
        "keywords": "top-k / top-p"
    },
    {
        "title": "📘 Istilah: Embedding",
        "preview": "Proses representasi teks dalam bentuk vektor numerik, yang memungkinkan sistem mengukur kemiripan makna antar teks secar...",
        "url": "glosarium/index.html#term-45",
        "category": "Glosarium Python",
        "keywords": "embedding"
    },
    {
        "title": "📘 Istilah: Vector Database",
        "preview": "Database yang dioptimalkan untuk menyimpan dan mencari data dalam format vektor. Berbeda dengan database konvensional ya...",
        "url": "glosarium/index.html#term-46",
        "category": "Glosarium Python",
        "keywords": "vector database"
    },
    {
        "title": "📘 Istilah: Chunking",
        "preview": "Proses memecah dokumen panjang menjadi segmen-segmen yang lebih kecil agar dapat diproses dalam batasan kapasitas model ...",
        "url": "glosarium/index.html#term-47",
        "category": "Glosarium Python",
        "keywords": "chunking"
    },
    {
        "title": "📘 Istilah: Cosine Similarity",
        "preview": "Metrik matematis yang digunakan untuk mengukur tingkat kemiripan antara dua vektor berdasarkan sudut di antara keduanya.",
        "url": "glosarium/index.html#term-48",
        "category": "Glosarium Python",
        "keywords": "cosine similarity"
    },
    {
        "title": "📘 Istilah: Agent (Agen Otonom)",
        "preview": "Sistem AI yang tidak hanya merespons pertanyaan, tetapi dapat merencanakan, memilih alat, dan mengambil tindakan secara ...",
        "url": "glosarium/index.html#term-49",
        "category": "Glosarium Python",
        "keywords": "agent (agen otonom)"
    },
    {
        "title": "📘 Istilah: Tool Calling / Function Calling",
        "preview": "Kemampuan LLM untuk memicu eksekusi fungsi atau layanan eksternal (seperti pencarian web atau akses database) ketika inf...",
        "url": "glosarium/index.html#term-50",
        "category": "Glosarium Python",
        "keywords": "tool calling / function calling"
    },
    {
        "title": "📘 Istilah: LangChain",
        "preview": "Library Python populer untuk membangun aplikasi AI yang mengintegrasikan LLM, Vector Database, dan Prompt menjadi satu a...",
        "url": "glosarium/index.html#term-51",
        "category": "Glosarium Python",
        "keywords": "langchain"
    },
    {
        "title": "📘 Istilah: LangGraph",
        "preview": "Framework dari tim LangChain yang dirancang untuk membangun alur kerja agen otonom yang mendukung proses siklik (perulan...",
        "url": "glosarium/index.html#term-52",
        "category": "Glosarium Python",
        "keywords": "langgraph"
    },
    {
        "title": "📘 Istilah: OpenAI API",
        "preview": "Layanan berbayar untuk mengakses model AI milik OpenAI (seperti GPT-4) melalui kode program.",
        "url": "glosarium/index.html#term-53",
        "category": "Glosarium Python",
        "keywords": "openai api"
    },
    {
        "title": "📘 Istilah: Hugging Face",
        "preview": "Platform komunitas untuk berbagi dan mengakses model AI secara terbuka. Sering disebut sebagai \"GitHub-nya dunia AI.\"",
        "url": "glosarium/index.html#term-54",
        "category": "Glosarium Python",
        "keywords": "hugging face"
    },
    {
        "title": "📘 Istilah: Token",
        "preview": "Satuan pemrosesan teks yang digunakan model AI. Panjang percakapan dan kompleksitas instruksi secara langsung memengaruh...",
        "url": "glosarium/index.html#term-55",
        "category": "Glosarium Python",
        "keywords": "token"
    },
    {
        "title": "📘 Istilah: LLM (Large Language Model)",
        "preview": "Model AI berukuran besar yang dikhususkan untuk memahami dan menghasilkan teks bahasa manusia. Contoh: ChatGPT, Gemini, ...",
        "url": "glosarium/index.html#term-56",
        "category": "Glosarium Python",
        "keywords": "llm (large language model)"
    },
    {
        "title": "📘 Istilah: RAG (Retrieval-Augmented Generation)",
        "preview": "Teknik yang memaksa model AI untuk mengambil informasi dari dokumen yang disediakan sebelum menghasilkan jawaban, guna m...",
        "url": "glosarium/index.html#term-57",
        "category": "Glosarium Python",
        "keywords": "rag (retrieval-augmented generation)"
    },
    {
        "title": "📘 Istilah: Hybrid Search",
        "preview": "Teknik pencarian yang menggabungkan kecocokan kata persis (berbasis karakter) dan kecocokan makna (berbasis vektor) untu...",
        "url": "glosarium/index.html#term-58",
        "category": "Glosarium Python",
        "keywords": "hybrid search"
    },
    {
        "title": "📘 Istilah: Re-ranking / Cross Encoder",
        "preview": "Tahap penyortiran ulang hasil pencarian. Setelah sejumlah dokumen ditemukan, model khusus menilai ulang relevansinya dan...",
        "url": "glosarium/index.html#term-59",
        "category": "Glosarium Python",
        "keywords": "re-ranking / cross encoder"
    },
    {
        "title": "📘 Istilah: Semantic Cache",
        "preview": "Sistem penyimpanan sementara yang menyimpan respons AI berdasarkan makna pertanyaan. Jika pertanyaan dengan makna serupa...",
        "url": "glosarium/index.html#term-60",
        "category": "Glosarium Python",
        "keywords": "semantic cache"
    },
    {
        "title": "📘 Istilah: Quantization (Kuantisasi)",
        "preview": "Teknik kompresi model AI berukuran besar agar dapat dijalankan pada perangkat dengan kapasitas komputasi terbatas, denga...",
        "url": "glosarium/index.html#term-61",
        "category": "Glosarium Python",
        "keywords": "quantization (kuantisasi)"
    },
    {
        "title": "📘 Istilah: PEFT (Parameter-Efficient Fine-Tuning)",
        "preview": "Teknik pelatihan ulang yang efisien, di mana hanya sebagian kecil parameter model yang disesuaikan sehingga tidak memerl...",
        "url": "glosarium/index.html#term-62",
        "category": "Glosarium Python",
        "keywords": "peft (parameter-efficient fine-tuning)"
    },
    {
        "title": "📘 Istilah: LoRA (Low-Rank Adaptation)",
        "preview": "Salah satu metode PEFT yang paling populer, memungkinkan spesialisasi model AI pada bidang tertentu dengan kebutuhan sum...",
        "url": "glosarium/index.html#term-63",
        "category": "Glosarium Python",
        "keywords": "lora (low-rank adaptation)"
    },
    {
        "title": "📘 Istilah: Streaming (LLM Streaming)",
        "preview": "Teknik menampilkan output AI secara bertahap (kata demi kata) secara real-time, tanpa menunggu model selesai memproses s...",
        "url": "glosarium/index.html#term-64",
        "category": "Glosarium Python",
        "keywords": "streaming (llm streaming)"
    },
    {
        "title": "📘 Istilah: Agent Memory",
        "preview": "Kemampuan sistem AI otonom untuk menyimpan dan mengingat riwayat interaksi dari sesi-sesi sebelumnya.",
        "url": "glosarium/index.html#term-65",
        "category": "Glosarium Python",
        "keywords": "agent memory"
    },
    {
        "title": "📘 Istilah: TTS (Text-to-Speech) & STT (Speech-to-Text)",
        "preview": "Teknologi konversi antara teks dan suara, di mana TTS mengubah teks menjadi suara dan STT mengubah suara menjadi teks.",
        "url": "glosarium/index.html#term-66",
        "category": "Glosarium Python",
        "keywords": "tts (text-to-speech) & stt (speech-to-text)"
    },
    {
        "title": "📘 Istilah: OCR (Optical Character Recognition)",
        "preview": "Teknologi untuk mengekstrak teks dari format gambar atau dokumen scan yang tidak dapat langsung dibaca secara digital.",
        "url": "glosarium/index.html#term-67",
        "category": "Glosarium Python",
        "keywords": "ocr (optical character recognition)"
    },
    {
        "title": "📘 Istilah: Open-Weights",
        "preview": "Model AI yang parameternya (bobot) dapat diunduh dan digunakan secara bebas, meskipun detail proses pelatihannya tidak d...",
        "url": "glosarium/index.html#term-68",
        "category": "Glosarium Python",
        "keywords": "open-weights"
    },
    {
        "title": "📘 Istilah: Proprietary Model (Closed Source)",
        "preview": "Model AI yang bersifat tertutup dan hanya dapat diakses melalui API berbayar, tanpa opsi untuk mengunduh atau menjalanka...",
        "url": "glosarium/index.html#term-69",
        "category": "Glosarium Python",
        "keywords": "proprietary model (closed source)"
    },
    {
        "title": "📘 Istilah: Guardrails",
        "preview": "Mekanisme keamanan yang berfungsi mencegat dan menolak input atau output yang tidak sesuai dengan kebijakan yang telah d...",
        "url": "glosarium/index.html#term-70",
        "category": "Glosarium Python",
        "keywords": "guardrails"
    },
    {
        "title": "📘 Istilah: Prompt Injection",
        "preview": "Serangan keamanan di mana pengguna menyelipkan instruksi tersembunyi dalam input untuk memanipulasi perilaku model AI ag...",
        "url": "glosarium/index.html#term-71",
        "category": "Glosarium Python",
        "keywords": "prompt injection"
    },
    {
        "title": "📘 Istilah: Jailbreaking",
        "preview": "Upaya memanipulasi model AI agar menghasilkan konten yang seharusnya dilarang atau dibatasi oleh kebijakannya.",
        "url": "glosarium/index.html#term-72",
        "category": "Glosarium Python",
        "keywords": "jailbreaking"
    },
    {
        "title": "📘 Istilah: Deployment",
        "preview": "Proses memindahkan aplikasi dari lingkungan pengembangan lokal ke server yang dapat diakses oleh pengguna secara publik.",
        "url": "glosarium/index.html#term-73",
        "category": "Glosarium Python",
        "keywords": "deployment"
    },
    {
        "title": "📘 Istilah: Local",
        "preview": "Kondisi di mana program hanya dapat berjalan di perangkat pengembang sendiri dan belum tersedia untuk pengguna lain.",
        "url": "glosarium/index.html#term-74",
        "category": "Glosarium Python",
        "keywords": "local"
    },
    {
        "title": "📘 Istilah: Production (Prod)",
        "preview": "Lingkungan aktif di mana aplikasi sudah dirilis dan sedang digunakan oleh pengguna nyata.",
        "url": "glosarium/index.html#term-75",
        "category": "Glosarium Python",
        "keywords": "production (prod)"
    },
    {
        "title": "📘 Istilah: Staging / Development",
        "preview": "Lingkungan pengujian yang menyerupai Production, digunakan untuk memverifikasi kode sebelum dirilis ke pengguna nyata.",
        "url": "glosarium/index.html#term-76",
        "category": "Glosarium Python",
        "keywords": "staging / development"
    },
    {
        "title": "📘 Istilah: Container (Docker)",
        "preview": "Paket yang berisi aplikasi beserta seluruh dependensinya, sehingga aplikasi dapat berjalan secara konsisten di berbagai ...",
        "url": "glosarium/index.html#term-77",
        "category": "Glosarium Python",
        "keywords": "container (docker)"
    },
    {
        "title": "📘 Istilah: Image (Docker Image)",
        "preview": "Blueprint atau template yang digunakan untuk membuat Container. Container harus dibuat dari sebuah Image.",
        "url": "glosarium/index.html#term-78",
        "category": "Glosarium Python",
        "keywords": "image (docker image)"
    },
    {
        "title": "📘 Istilah: Container Registry",
        "preview": "Repositori penyimpanan khusus untuk Docker Image (seperti Docker Hub atau Google Artifact Registry).",
        "url": "glosarium/index.html#term-79",
        "category": "Glosarium Python",
        "keywords": "container registry"
    },
    {
        "title": "📘 Istilah: API (Application Programming Interface)",
        "preview": "Antarmuka yang memungkinkan dua sistem atau aplikasi berbeda untuk saling berkomunikasi dan bertukar data.",
        "url": "glosarium/index.html#term-80",
        "category": "Glosarium Python",
        "keywords": "api (application programming interface)"
    },
    {
        "title": "📘 Istilah: API Gateway",
        "preview": "Komponen yang berfungsi sebagai titik masuk utama untuk semua permintaan dari pengguna ke layanan backend. Bertanggung j...",
        "url": "glosarium/index.html#term-81",
        "category": "Glosarium Python",
        "keywords": "api gateway"
    },
    {
        "title": "📘 Istilah: REST API",
        "preview": "Standar arsitektur yang paling umum digunakan untuk komunikasi antar layanan melalui protokol HTTP.",
        "url": "glosarium/index.html#term-82",
        "category": "Glosarium Python",
        "keywords": "rest api"
    },
    {
        "title": "📘 Istilah: Load Balancer",
        "preview": "Komponen yang mendistribusikan permintaan masuk secara merata ke beberapa server, untuk mencegah satu server mengalami k...",
        "url": "glosarium/index.html#term-83",
        "category": "Glosarium Python",
        "keywords": "load balancer"
    },
    {
        "title": "📘 Istilah: Latency (Latensi)",
        "preview": "Waktu yang dibutuhkan sistem untuk memproses suatu permintaan dan mengirimkan respons. Semakin kecil nilainya, semakin r...",
        "url": "glosarium/index.html#term-84",
        "category": "Glosarium Python",
        "keywords": "latency (latensi)"
    },
    {
        "title": "📘 Istilah: Throughput",
        "preview": "Jumlah permintaan atau transaksi yang dapat diproses oleh sistem dalam satuan waktu tertentu.",
        "url": "glosarium/index.html#term-85",
        "category": "Glosarium Python",
        "keywords": "throughput"
    },
    {
        "title": "📘 Istilah: Scaling",
        "preview": "Proses penyesuaian kapasitas sistem. Horizontal scaling berarti menambah jumlah server, sementara Vertical scaling berar...",
        "url": "glosarium/index.html#term-86",
        "category": "Glosarium Python",
        "keywords": "scaling"
    },
    {
        "title": "📘 Istilah: Managed Service",
        "preview": "Layanan cloud di mana infrastruktur dikelola oleh penyedia layanan, sehingga developer dapat fokus pada pengembangan apl...",
        "url": "glosarium/index.html#term-87",
        "category": "Glosarium Python",
        "keywords": "managed service"
    },
    {
        "title": "📘 Istilah: Serverless",
        "preview": "Paradigma deployment di mana developer tidak perlu mengelola server secara langsung. Kode hanya dieksekusi dan dikenakan...",
        "url": "glosarium/index.html#term-88",
        "category": "Glosarium Python",
        "keywords": "serverless"
    },
    {
        "title": "📘 Istilah: CI/CD (Continuous Integration/Continuous Deployment)",
        "preview": "Praktik dan alat otomasi untuk mengintegrasikan, menguji, dan mendistribusikan kode baru ke lingkungan produksi secara b...",
        "url": "glosarium/index.html#term-89",
        "category": "Glosarium Python",
        "keywords": "ci/cd (continuous integration/continuous deployment)"
    },
    {
        "title": "📘 Istilah: Endpoint",
        "preview": "URL atau alamat spesifik yang disediakan oleh API untuk menerima permintaan dari sistem lain.",
        "url": "glosarium/index.html#term-90",
        "category": "Glosarium Python",
        "keywords": "endpoint"
    },
    {
        "title": "📘 Istilah: Environment Variables (.env)",
        "preview": "Variabel konfigurasi yang disimpan di luar kode utama, digunakan untuk menyimpan data sensitif seperti API Key atau kred...",
        "url": "glosarium/index.html#term-91",
        "category": "Glosarium Python",
        "keywords": "environment variables (.env)"
    },
    {
        "title": "📘 Istilah: Logs",
        "preview": "Catatan aktivitas sistem yang dibuat secara otomatis. Berfungsi sebagai referensi utama untuk investigasi ketika terjadi...",
        "url": "glosarium/index.html#term-92",
        "category": "Glosarium Python",
        "keywords": "logs"
    },
    {
        "title": "📘 Istilah: Monitoring",
        "preview": "Pemantauan kondisi sistem secara real-time untuk mendeteksi anomali atau tanda-tanda penurunan performa sebelum berdampa...",
        "url": "glosarium/index.html#term-93",
        "category": "Glosarium Python",
        "keywords": "monitoring"
    },
    {
        "title": "📘 Istilah: Infrastructure as Code (IaC)",
        "preview": "Pendekatan di mana infrastruktur server dan cloud dikelola melalui kode yang dapat diversi dan direplikasi, bukan melalu...",
        "url": "glosarium/index.html#term-94",
        "category": "Glosarium Python",
        "keywords": "infrastructure as code (iac)"
    },
    {
        "title": "📘 Istilah: SSH (Secure Shell)",
        "preview": "Protokol jaringan yang memungkinkan akses dan pengelolaan server jarak jauh secara aman melalui perintah teks.",
        "url": "glosarium/index.html#term-95",
        "category": "Glosarium Python",
        "keywords": "ssh (secure shell)"
    },
    {
        "title": "📘 Istilah: SSL/TLS",
        "preview": "Protokol keamanan yang mengenkripsi komunikasi antara pengguna dan server (ditandai dengan ikon gembok pada browser).",
        "url": "glosarium/index.html#term-96",
        "category": "Glosarium Python",
        "keywords": "ssl/tls"
    },
    {
        "title": "📘 Istilah: Server",
        "preview": "Paradigma deployment di mana developer tidak perlu mengelola server secara langsung. Kode hanya dieksekusi dan dikenakan...",
        "url": "glosarium/index.html#term-97",
        "category": "Glosarium Python",
        "keywords": "server"
    },
    {
        "title": "📘 Istilah: Database (DB)",
        "preview": "Sistem penyimpanan terstruktur untuk menyimpan data secara persisten dan memungkinkan akses serta pengelolaan data secar...",
        "url": "glosarium/index.html#term-98",
        "category": "Glosarium Python",
        "keywords": "database (db)"
    },
    {
        "title": "📘 Istilah: Cloud (Komputasi Awan)",
        "preview": "Model penyewaan sumber daya komputasi (server, penyimpanan, jaringan) dari penyedia layanan besar melalui internet, tanp...",
        "url": "glosarium/index.html#term-99",
        "category": "Glosarium Python",
        "keywords": "cloud (komputasi awan)"
    },
    {
        "title": "📘 Istilah: GPU (Graphics Processing Unit)",
        "preview": "Unit pemrosesan grafis yang juga berfungsi sebagai akselerator komputasi paralel, sangat dibutuhkan untuk pelatihan dan ...",
        "url": "glosarium/index.html#term-100",
        "category": "Glosarium Python",
        "keywords": "gpu (graphics processing unit)"
    },
    {
        "title": "📘 Istilah: VRAM (Video RAM)",
        "preview": "Memori internal yang terdapat pada GPU. Kapasitas VRAM menentukan ukuran maksimum model AI yang dapat dimuat dan diprose...",
        "url": "glosarium/index.html#term-101",
        "category": "Glosarium Python",
        "keywords": "vram (video ram)"
    },
    {
        "title": "📘 Istilah: Webhook",
        "preview": "Mekanisme notifikasi otomatis di mana server mengirimkan data ke URL tertentu secara langsung ketika suatu kejadian terj...",
        "url": "glosarium/index.html#term-102",
        "category": "Glosarium Python",
        "keywords": "webhook"
    },
    {
        "title": "📘 Istilah: Rate Limit (Error 429)",
        "preview": "Pembatasan yang diterapkan oleh penyedia API terhadap jumlah permintaan yang dapat dikirimkan dalam periode waktu terten...",
        "url": "glosarium/index.html#term-103",
        "category": "Glosarium Python",
        "keywords": "rate limit (error 429)"
    },
    {
        "title": "📘 Istilah: Agile",
        "preview": "Metodologi pengembangan perangkat lunak yang membagi proyek besar menjadi siklus-siklus kerja pendek (sprint) untuk memu...",
        "url": "glosarium/index.html#term-104",
        "category": "Glosarium Python",
        "keywords": "agile"
    },
    {
        "title": "📘 Istilah: Sprint",
        "preview": "Periode waktu tertentu (biasanya 1–2 minggu) yang dialokasikan untuk menyelesaikan serangkaian tugas yang telah direncan...",
        "url": "glosarium/index.html#term-105",
        "category": "Glosarium Python",
        "keywords": "sprint"
    },
    {
        "title": "📘 Istilah: Scrum",
        "preview": "Framework Agile yang menstrukturkan pekerjaan tim melalui peran, artefak, dan rutinitas tertentu, termasuk pertemuan har...",
        "url": "glosarium/index.html#term-106",
        "category": "Glosarium Python",
        "keywords": "scrum"
    },
    {
        "title": "📘 Istilah: Kanban",
        "preview": "Sistem manajemen alur kerja berbasis papan visual (seperti Trello atau Jira) yang memperlihatkan status setiap tugas sec...",
        "url": "glosarium/index.html#term-107",
        "category": "Glosarium Python",
        "keywords": "kanban"
    },
    {
        "title": "📘 Istilah: Code Review",
        "preview": "Proses peninjauan kode oleh anggota tim lain sebelum kode tersebut digabungkan ke basis kode utama.",
        "url": "glosarium/index.html#term-108",
        "category": "Glosarium Python",
        "keywords": "code review"
    },
    {
        "title": "📘 Istilah: Pull Request (PR)",
        "preview": "Mekanisme pengajuan perubahan kode untuk ditinjau dan disetujui oleh anggota tim sebelum digabungkan ke branch utama.",
        "url": "glosarium/index.html#term-109",
        "category": "Glosarium Python",
        "keywords": "pull request (pr)"
    },
    {
        "title": "📘 Istilah: Merge",
        "preview": "Proses menggabungkan perubahan kode yang telah disetujui ke dalam basis kode utama.",
        "url": "glosarium/index.html#term-110",
        "category": "Glosarium Python",
        "keywords": "merge"
    },
    {
        "title": "📘 Istilah: Branch",
        "preview": "Salinan terpisah dari basis kode yang digunakan untuk mengembangkan fitur atau memperbaiki bug secara terisolasi, tanpa ...",
        "url": "glosarium/index.html#term-111",
        "category": "Glosarium Python",
        "keywords": "branch"
    },
    {
        "title": "📘 Istilah: Conflict",
        "preview": "Kondisi yang terjadi ketika dua atau lebih developer memodifikasi bagian kode yang sama secara bersamaan, sehingga siste...",
        "url": "glosarium/index.html#term-112",
        "category": "Glosarium Python",
        "keywords": "conflict"
    },
    {
        "title": "📘 Istilah: Documentation",
        "preview": "Catatan tertulis yang menjelaskan cara kerja, struktur, atau penggunaan suatu sistem, agar dapat dipahami oleh pengemban...",
        "url": "glosarium/index.html#term-113",
        "category": "Glosarium Python",
        "keywords": "documentation"
    },
    {
        "title": "📘 Istilah: Technical Debt",
        "preview": "Akumulasi konsekuensi dari solusi teknis yang dibuat dengan cepat namun tidak optimal, yang pada akhirnya perlu diperbai...",
        "url": "glosarium/index.html#term-114",
        "category": "Glosarium Python",
        "keywords": "technical debt"
    },
    {
        "title": "📘 Istilah: MVP (Minimum Viable Product)",
        "preview": "Versi paling sederhana dari suatu produk yang sudah memiliki fungsi inti dan dapat digunakan oleh pengguna awal untuk me...",
        "url": "glosarium/index.html#term-115",
        "category": "Glosarium Python",
        "keywords": "mvp (minimum viable product)"
    },
    {
        "title": "📘 Istilah: Prototype",
        "preview": "Model atau demonstrasi awal yang dibuat untuk menguji kelayakan suatu konsep atau desain sebelum pengembangan penuh dimu...",
        "url": "glosarium/index.html#term-116",
        "category": "Glosarium Python",
        "keywords": "prototype"
    },
    {
        "title": "📘 Istilah: Stakeholder",
        "preview": "Pihak-pihak yang memiliki kepentingan dalam proyek, termasuk klien, manajemen, tim pengembang, dan pengguna akhir.",
        "url": "glosarium/index.html#term-117",
        "category": "Glosarium Python",
        "keywords": "stakeholder"
    },
    {
        "title": "📘 Istilah: Requirement",
        "preview": "Deskripsi fungsional atau teknis dari apa yang harus dapat dilakukan oleh suatu sistem atau fitur.",
        "url": "glosarium/index.html#term-118",
        "category": "Glosarium Python",
        "keywords": "requirement"
    },
    {
        "title": "📘 Istilah: Compliance",
        "preview": "Kepatuhan terhadap regulasi hukum, standar industri, atau kebijakan internal yang berlaku (seperti GDPR atau regulasi pe...",
        "url": "glosarium/index.html#term-120",
        "category": "Glosarium Python",
        "keywords": "compliance"
    },
    {
        "title": "📘 Istilah: Scalability",
        "preview": "Kemampuan sistem untuk mempertahankan performa yang stabil ketika jumlah pengguna atau volume data meningkat secara sign...",
        "url": "glosarium/index.html#term-121",
        "category": "Glosarium Python",
        "keywords": "scalability"
    },
    {
        "title": "📘 Istilah: Maintenance",
        "preview": "Aktivitas berkelanjutan untuk menjaga sistem tetap berfungsi dengan baik, termasuk perbaikan bug, pembaruan keamanan, da...",
        "url": "glosarium/index.html#term-122",
        "category": "Glosarium Python",
        "keywords": "maintenance"
    },
    {
        "title": "📘 Istilah: Unit Test",
        "preview": "Kode pengujian yang secara otomatis memverifikasi apakah komponen terkecil dari program bekerja sesuai yang diharapkan.",
        "url": "glosarium/index.html#term-123",
        "category": "Glosarium Python",
        "keywords": "unit test"
    },
    {
        "title": "📘 Istilah: Production-Ready",
        "preview": "Kondisi di mana kode dianggap cukup stabil, aman, dan telah melalui pengujian yang memadai untuk dijalankan di lingkunga...",
        "url": "glosarium/index.html#term-124",
        "category": "Glosarium Python",
        "keywords": "production-ready"
    },
    {
        "title": "📘 Istilah: Documentation-First",
        "preview": "Catatan tertulis yang menjelaskan cara kerja, struktur, atau penggunaan suatu sistem, agar dapat dipahami oleh pengemban...",
        "url": "glosarium/index.html#term-125",
        "category": "Glosarium Python",
        "keywords": "documentation-first"
    },
    {
        "title": "📘 Istilah: Open-Source License",
        "preview": "Ketentuan hukum yang mengatur cara penggunaan, modifikasi, dan distribusi kode sumber terbuka (seperti MIT atau Apache 2...",
        "url": "glosarium/index.html#term-126",
        "category": "Glosarium Python",
        "keywords": "open-source license"
    },
    {
        "title": "📘 Istilah: Soft Skill",
        "preview": "Kemampuan interpersonal dan non-teknis seperti komunikasi, manajemen waktu, kolaborasi, dan penyelesaian konflik yang pe...",
        "url": "glosarium/index.html#term-127",
        "category": "Glosarium Python",
        "keywords": "soft skill"
    },
    {
        "title": "📘 Istilah: Pair Programming",
        "preview": "Teknik kolaborasi di mana dua developer bekerja bersama pada satu tugas: satu menulis kode, satu lagi meninjau dan membe...",
        "url": "glosarium/index.html#term-128",
        "category": "Glosarium Python",
        "keywords": "pair programming"
    },
    {
        "title": "📘 Istilah: Refactoring",
        "preview": "Proses merestrukturisasi kode yang sudah ada untuk meningkatkan keterbacaan dan efisiensi, tanpa mengubah perilaku atau ...",
        "url": "glosarium/index.html#term-129",
        "category": "Glosarium Python",
        "keywords": "refactoring"
    },
    {
        "title": "📘 Istilah: Backlog",
        "preview": "Daftar lengkap fitur, perbaikan, atau tugas yang telah diidentifikasi namun belum dijadwalkan untuk dikerjakan.",
        "url": "glosarium/index.html#term-130",
        "category": "Glosarium Python",
        "keywords": "backlog"
    },
    {
        "title": "📘 Istilah: Issue Tracking",
        "preview": "Sistem pencatatan dan pengelolaan bug, permintaan fitur, atau tugas pengembangan (di GitHub dikenal sebagai \"Issues\").",
        "url": "glosarium/index.html#term-131",
        "category": "Glosarium Python",
        "keywords": "issue tracking"
    },
    {
        "title": "📘 Istilah: Release Cycle",
        "preview": "Jadwal terencana untuk merilis versi baru dari suatu produk atau layanan.",
        "url": "glosarium/index.html#term-132",
        "category": "Glosarium Python",
        "keywords": "release cycle"
    },
    {
        "title": "📘 Istilah: Versioning",
        "preview": "Sistem penomoran yang digunakan untuk membedakan antar versi produk atau library (misalnya v1.0.0, v1.1.0).",
        "url": "glosarium/index.html#term-133",
        "category": "Glosarium Python",
        "keywords": "versioning"
    },
    {
        "title": "📘 Istilah: Alpha/Beta Testing",
        "preview": "Fase pengujian produk sebelum rilis resmi (Alpha dilakukan secara internal, sedangkan Beta melibatkan sekelompok penggun...",
        "url": "glosarium/index.html#term-134",
        "category": "Glosarium Python",
        "keywords": "alpha/beta testing"
    },
    {
        "title": "📘 Istilah: ReadMe",
        "preview": "File teks utama dalam sebuah repositori yang menjelaskan tujuan proyek, cara instalasi, dan cara penggunaan.",
        "url": "glosarium/index.html#term-136",
        "category": "Glosarium Python",
        "keywords": "readme"
    },
    {
        "title": "📘 Istilah: Dependencies",
        "preview": "Daftar library atau modul eksternal yang diperlukan agar suatu program dapat berjalan dengan benar.",
        "url": "glosarium/index.html#term-137",
        "category": "Glosarium Python",
        "keywords": "dependencies"
    },
    {
        "title": "📘 Istilah: Environment (Env)",
        "preview": "Variabel konfigurasi yang disimpan di luar kode utama, digunakan untuk menyimpan data sensitif seperti API Key atau kred...",
        "url": "glosarium/index.html#term-138",
        "category": "Glosarium Python",
        "keywords": "environment (env)"
    },
    {
        "title": "📘 Istilah: Virtual Environment (venv / conda)",
        "preview": "Lingkungan Python yang terisolasi untuk setiap proyek, sehingga dependensi antar proyek tidak saling bertentangan atau m...",
        "url": "glosarium/index.html#term-139",
        "category": "Glosarium Python",
        "keywords": "virtual environment (venv / conda)"
    },
    {
        "title": "📘 Istilah: Debugging Tools",
        "preview": "Perangkat yang membantu developer mengidentifikasi dan memperbaiki bug, seperti debugger bawaan di VS Code.",
        "url": "glosarium/index.html#term-140",
        "category": "Glosarium Python",
        "keywords": "debugging tools"
    },
    {
        "title": "📘 Istilah: Architecture Pattern",
        "preview": "Pola desain yang mendefinisikan struktur dan organisasi komponen dalam sebuah sistem (misalnya Model-View-Controller).",
        "url": "glosarium/index.html#term-141",
        "category": "Glosarium Python",
        "keywords": "architecture pattern"
    },
    {
        "title": "📘 Istilah: Cross-Platform",
        "preview": "Kemampuan aplikasi untuk berjalan di berbagai sistem operasi (Windows, macOS, Linux) tanpa modifikasi kode.",
        "url": "glosarium/index.html#term-142",
        "category": "Glosarium Python",
        "keywords": "cross-platform"
    },
    {
        "title": "📘 Istilah: User Experience (UX)",
        "preview": "Kualitas keseluruhan pengalaman pengguna saat berinteraksi dengan suatu sistem, termasuk kemudahan penggunaan dan kepuas...",
        "url": "glosarium/index.html#term-143",
        "category": "Glosarium Python",
        "keywords": "user experience (ux)"
    },
    {
        "title": "📘 Istilah: User Interface (UI)",
        "preview": "Elemen visual dari suatu aplikasi yang dapat dilihat dan diinteraksikan langsung oleh pengguna.",
        "url": "glosarium/index.html#term-144",
        "category": "Glosarium Python",
        "keywords": "user interface (ui)"
    },
    {
        "title": "📘 Istilah: Ngoding / Coding",
        "preview": "Kegiatan menulis instruksi dalam bahasa pemrograman untuk memberikan perintah kepada komputer.",
        "url": "glosarium/index.html#term-145",
        "category": "Glosarium Python",
        "keywords": "ngoding / coding"
    },
    {
        "title": "📘 Istilah: Run / Execute",
        "preview": "Perintah untuk menjalankan program agar komputer mengeksekusi instruksi yang telah ditulis.",
        "url": "glosarium/index.html#term-146",
        "category": "Glosarium Python",
        "keywords": "run / execute"
    },
    {
        "title": "📘 Istilah: Bug (dibaca: Bag)",
        "preview": "Program insentif di mana organisasi memberikan penghargaan kepada individu yang berhasil menemukan dan melaporkan kerent...",
        "url": "glosarium/index.html#term-147",
        "category": "Glosarium Python",
        "keywords": "bug (dibaca: bag)"
    },
    {
        "title": "📘 Istilah: Debugging (dibaca: Di-ba-ging)",
        "preview": "Perangkat yang membantu developer mengidentifikasi dan memperbaiki bug, seperti debugger bawaan di VS Code.",
        "url": "glosarium/index.html#term-148",
        "category": "Glosarium Python",
        "keywords": "debugging (dibaca: di-ba-ging)"
    },
    {
        "title": "📘 Istilah: Library / Package",
        "preview": "Kumpulan kode yang sudah dikembangkan oleh pihak lain dan dapat digunakan kembali dalam program melalui perintah import,...",
        "url": "glosarium/index.html#term-149",
        "category": "Glosarium Python",
        "keywords": "library / package"
    },
    {
        "title": "📘 Istilah: Terminal / CLI / Command Prompt",
        "preview": "Antarmuka berbasis teks yang memungkinkan pengguna memberikan perintah langsung kepada sistem operasi.",
        "url": "glosarium/index.html#term-150",
        "category": "Glosarium Python",
        "keywords": "terminal / cli / command prompt"
    },
    {
        "title": "📘 Istilah: Repo / Repository",
        "preview": "Penyimpanan digital (biasanya di GitHub) yang berisi seluruh file dan riwayat perubahan kode suatu proyek.",
        "url": "glosarium/index.html#term-151",
        "category": "Glosarium Python",
        "keywords": "repo / repository"
    },
    {
        "title": "📘 Istilah: Frontend (Front-end)",
        "preview": "Bagian dari aplikasi yang berinteraksi langsung dengan pengguna, mencakup tampilan visual seperti tombol, formulir, dan ...",
        "url": "glosarium/index.html#term-152",
        "category": "Glosarium Python",
        "keywords": "frontend (front-end)"
    },
    {
        "title": "📘 Istilah: Backend (Back-end)",
        "preview": "Bagian dari aplikasi yang berjalan di sisi server, menangani logika bisnis, pemrosesan data, dan komunikasi dengan datab...",
        "url": "glosarium/index.html#term-153",
        "category": "Glosarium Python",
        "keywords": "backend (back-end)"
    },
    {
        "title": "📘 Istilah: Open Source",
        "preview": "Perangkat lunak yang kode sumbernya tersedia secara publik dan dapat digunakan, dimodifikasi, serta didistribusikan oleh...",
        "url": "glosarium/index.html#term-154",
        "category": "Glosarium Python",
        "keywords": "open source"
    },
    {
        "title": "📘 Istilah: Framework",
        "preview": "Kerangka kerja pengembangan yang menyediakan struktur dasar dan komponen umum, sehingga developer dapat fokus pada logik...",
        "url": "glosarium/index.html#term-155",
        "category": "Glosarium Python",
        "keywords": "framework"
    },
    {
        "title": "📘 Istilah: Git & GitHub",
        "preview": "Git adalah sistem kontrol versi yang mencatat setiap perubahan pada kode secara lokal. GitHub adalah platform berbasis c...",
        "url": "glosarium/index.html#term-156",
        "category": "Glosarium Python",
        "keywords": "git & github"
    },
    {
        "title": "📘 Istilah: IDE / Code Editor",
        "preview": "Perangkat lunak yang digunakan untuk menulis, mengedit, dan menjalankan kode (contoh: Visual Studio Code, PyCharm).",
        "url": "glosarium/index.html#term-157",
        "category": "Glosarium Python",
        "keywords": "ide / code editor"
    },
    {
        "title": "📘 Istilah: PIP (Python Package Installer)",
        "preview": "Alat bawaan Python untuk mengunduh dan menginstal library tambahan dari repositori publik PyPI.",
        "url": "glosarium/index.html#term-158",
        "category": "Glosarium Python",
        "keywords": "pip (python package installer)"
    },
    {
        "title": "📘 Istilah: Hardcode (Hard-coding)",
        "preview": "Praktik menuliskan nilai secara langsung dan tetap di dalam kode, alih-alih menggunakan variabel atau konfigurasi yang d...",
        "url": "glosarium/index.html#term-159",
        "category": "Glosarium Python",
        "keywords": "hardcode (hard-coding)"
    },
    {
        "title": "📘 Istilah: Clean Code",
        "preview": "Praktik menulis kode yang terstruktur, mudah dibaca, dan mudah dipahami oleh developer lain, bukan hanya sekadar dapat d...",
        "url": "glosarium/index.html#term-160",
        "category": "Glosarium Python",
        "keywords": "clean code"
    },
    {
        "title": "📘 Istilah: Script / Scripting",
        "preview": "File program tunggal (biasanya berakhiran .py) yang berisi serangkaian perintah untuk menjalankan satu tugas otomatis te...",
        "url": "glosarium/index.html#term-161",
        "category": "Glosarium Python",
        "keywords": "script / scripting"
    },
    {
        "title": "📘 Istilah: Web Scraping",
        "preview": "Teknik menggunakan program untuk mengumpulkan data dari halaman web secara otomatis.",
        "url": "glosarium/index.html#term-162",
        "category": "Glosarium Python",
        "keywords": "web scraping"
    },
    {
        "title": "📘 Istilah: OOP (Object-Oriented Programming)",
        "preview": "Paradigma pemrograman yang mengorganisir kode di sekitar konsep \"objek\", yaitu entitas yang memiliki data (atribut) dan ...",
        "url": "glosarium/index.html#term-163",
        "category": "Glosarium Python",
        "keywords": "oop (object-oriented programming)"
    },
    {
        "title": "📘 Istilah: Path / Directory",
        "preview": "Alamat lokasi file atau folder dalam sistem file komputer (contoh: C:/Dokumen/proyek_python/).",
        "url": "glosarium/index.html#term-164",
        "category": "Glosarium Python",
        "keywords": "path / directory"
    },
    {
        "title": "📘 Istilah: Syntax Sugar",
        "preview": "Sintaks dalam bahasa pemrograman yang dirancang untuk memudahkan penulisan dan pembacaan kode, sebagai alternatif yang l...",
        "url": "glosarium/index.html#term-165",
        "category": "Glosarium Python",
        "keywords": "syntax sugar"
    },
    {
        "title": "📘 Istilah: PEP 8 (dibaca: pep-eight)",
        "preview": "Panduan resmi gaya penulisan kode Python yang mendefinisikan standar format dan konvensi untuk menjaga konsistensi dan k...",
        "url": "glosarium/index.html#term-166",
        "category": "Glosarium Python",
        "keywords": "pep 8 (dibaca: pep-eight)"
    },
    {
        "title": "📘 Istilah: JSON (JavaScript Object Notation)",
        "preview": "Format teks standar untuk pertukaran data antar sistem. Strukturnya sangat mirip dengan Dictionary di Python, menggunaka...",
        "url": "glosarium/index.html#term-167",
        "category": "Glosarium Python",
        "keywords": "json (javascript object notation)"
    },
    {
        "title": "📘 Istilah: Try-Except (Error Handling)",
        "preview": "Mekanisme penanganan error yang memungkinkan program merespons kegagalan secara terkontrol, alih-alih berhenti secara ti...",
        "url": "glosarium/index.html#term-169",
        "category": "Glosarium Python",
        "keywords": "try-except (error handling)"
    },
    {
        "title": "📘 Istilah: Boilerplate",
        "preview": "Kode template standar yang harus ditulis berulang kali untuk setiap proyek baru sebagai fondasi awal, sebelum logika int...",
        "url": "glosarium/index.html#term-170",
        "category": "Glosarium Python",
        "keywords": "boilerplate"
    },
    {
        "title": "📘 Istilah: PoC (Proof of Concept)",
        "preview": "Implementasi berskala kecil yang dibuat untuk membuktikan bahwa suatu ide atau pendekatan teknis dapat diwujudkan sebelu...",
        "url": "glosarium/index.html#term-171",
        "category": "Glosarium Python",
        "keywords": "poc (proof of concept)"
    },
    {
        "title": "📘 Istilah: Microservices",
        "preview": "Arsitektur perangkat lunak yang memecah aplikasi menjadi layanan-layanan kecil yang independen, masing-masing bertanggun...",
        "url": "glosarium/index.html#term-172",
        "category": "Glosarium Python",
        "keywords": "microservices"
    },
    {
        "title": "📘 Istilah: Monolith",
        "preview": "Arsitektur di mana seluruh komponen aplikasi (antarmuka, logika bisnis, dan database) dibangun dan didistribusikan sebag...",
        "url": "glosarium/index.html#term-173",
        "category": "Glosarium Python",
        "keywords": "monolith"
    },
    {
        "title": "🔴 Error: 🔴 SyntaxError",
        "preview": "\"Terdapat kesalahan penulisan pada kode. Harap periksa kembali apakah ada tanda baca yang hilang atau tidak sesuai.\"",
        "url": "peringatan-error/index.html#error-1",
        "category": "Peringatan Error",
        "keywords": "🔴 syntaxerror"
    },
    {
        "title": "🔴 Error: 🔴 NameError",
        "preview": "\"Python tidak dapat menemukan variabel atau fungsi dengan nama yang disebutkan. Nama tersebut belum pernah didefinisikan...",
        "url": "peringatan-error/index.html#error-2",
        "category": "Peringatan Error",
        "keywords": "🔴 nameerror"
    },
    {
        "title": "🔴 Error: 🔴 TypeError",
        "preview": "\"Python tidak dapat melakukan operasi yang diminta karena tipe data yang terlibat tidak kompatibel satu sama lain.\"",
        "url": "peringatan-error/index.html#error-3",
        "category": "Peringatan Error",
        "keywords": "🔴 typeerror"
    },
    {
        "title": "🔴 Error: 🔴 IndentationError",
        "preview": "\"Struktur indentasi (lekukan) dalam kode tidak konsisten atau tidak sesuai dengan aturan Python.\"",
        "url": "peringatan-error/index.html#error-4",
        "category": "Peringatan Error",
        "keywords": "🔴 indentationerror"
    },
    {
        "title": "🔴 Error: 🔴 IndexError",
        "preview": "\"Python mencoba mengakses elemen pada posisi yang tidak ada dalam struktur data tersebut.\"",
        "url": "peringatan-error/index.html#error-5",
        "category": "Peringatan Error",
        "keywords": "🔴 indexerror"
    },
    {
        "title": "🔴 Error: 🔴 KeyError",
        "preview": "\"Python tidak dapat menemukan Key yang diminta di dalam Dictionary karena Key tersebut tidak ada.\"",
        "url": "peringatan-error/index.html#error-6",
        "category": "Peringatan Error",
        "keywords": "🔴 keyerror"
    },
    {
        "title": "🔴 Error: 🔴 ValueError",
        "preview": "\"Tipe data sudah benar, tetapi nilai yang diberikan tidak valid atau tidak dapat diproses untuk operasi yang diminta.\"",
        "url": "peringatan-error/index.html#error-7",
        "category": "Peringatan Error",
        "keywords": "🔴 valueerror"
    },
    {
        "title": "🔴 Error: 🔴 AttributeError",
        "preview": "\"Objek yang dimaksud tidak memiliki atribut atau method yang dipanggil.\"",
        "url": "peringatan-error/index.html#error-8",
        "category": "Peringatan Error",
        "keywords": "🔴 attributeerror"
    },
    {
        "title": "🔴 Error: 🔴 ModuleNotFoundError / ImportError",
        "preview": "\"Python tidak dapat menemukan modul atau library yang diminta karena belum terinstal di lingkungan ini.\"",
        "url": "peringatan-error/index.html#error-9",
        "category": "Peringatan Error",
        "keywords": "🔴 modulenotfounderror / importerror"
    },
    {
        "title": "🔴 Error: 🔴 FileNotFoundError",
        "preview": "\"Python tidak dapat menemukan file yang diminta di lokasi yang disebutkan.\"",
        "url": "peringatan-error/index.html#error-10",
        "category": "Peringatan Error",
        "keywords": "🔴 filenotfounderror"
    },
    {
        "title": "🔴 Error: 🔴 TimeoutError",
        "preview": "\"Permintaan ke server atau layanan eksternal tidak mendapatkan respons dalam batas waktu yang ditentukan.\"",
        "url": "peringatan-error/index.html#error-11",
        "category": "Peringatan Error",
        "keywords": "🔴 timeouterror"
    },
    {
        "title": "🔴 Error: 🔴 JSONDecodeError",
        "preview": "\"Python mencoba mengurai (parse) data sebagai format JSON, namun data yang diterima tidak memiliki format JSON yang vali...",
        "url": "peringatan-error/index.html#error-12",
        "category": "Peringatan Error",
        "keywords": "🔴 jsondecodeerror"
    },
    {
        "title": "🎁 BONUS: Membuat Modul Sendiri",
        "preview": "Selain meminjam dari Python, Anda bisa membuat alat buatan Anda sendiri! Caranya sangat mudah dengan membuat file .py terpisah.",
        "url": "kamus-python/bab-6.html#bonus-modul",
        "category": "Kamus Python - Bab 6",
        "keywords": "bonus modul import file"
    }
];