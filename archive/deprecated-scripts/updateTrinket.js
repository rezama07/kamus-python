const fs = require('fs');
const path = require('path');

const defaultCodes = {
    'bab-1.html': 'print("Halo! Ini contoh data kita:")\nnama = "Budi"\numur = 25\nprint(nama, umur)',
    'bab-2.html': 'nama = input("Siapa nama kamu? ")\nprint(f"Halo {nama}!")',
    'bab-3.html': 'umur = 18\nif umur >= 17:\n    print("Boleh bikin KTP")\nelse:\n    print("Belum cukup umur")',
    'bab-4.html': 'for i in range(1, 6):\n    print(f"Perulangan ke-{i}")',
    'bab-5.html': 'def sapa(nama="Tamu"):\n    print(f"Halo {nama}!")\n\nsapa("Andi")',
    'bab-6.html': 'import random\nangka = random.randint(1, 100)\nprint("Angka acak:", angka)',
    'bab-7.html': 'try:\n    angka = int(input("Masukkan angka: "))\n    print(10 / angka)\nexcept ZeroDivisionError:\n    print("Tidak bisa dibagi nol!")\nexcept ValueError:\n    print("Itu bukan angka!")',
    'bab-8.html': 'class Kucing:\n    def __init__(self, nama):\n        self.nama = nama\n    def meong(self):\n        print(f"{self.nama} bilang: Meong!")\n\nkucing_saya = Kucing("Milo")\nkucing_saya.meong()'
};

const babDir = path.join(__dirname, 'kamus-python');

for (const [file, code] of Object.entries(defaultCodes)) {
    const filePath = path.join(babDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        const encodedCode = encodeURIComponent(code).replace(/'/g, "%27");
        
        // Find the trinket button
        const searchStr = `src=\\'https://trinket.io/embed/python3?toggleCode=true&amp;runOption=run\\'`;
        const replaceStr = `src=\\'https://trinket.io/embed/python3?toggleCode=true&amp;runOption=run&amp;code=${encodedCode}\\'`;
        
        if (content.includes(searchStr)) {
            content = content.replace(searchStr, replaceStr);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated Trinket in ${file}`);
        } else {
            console.log(`String not found in ${file}. Already updated?`);
        }
    }
}
