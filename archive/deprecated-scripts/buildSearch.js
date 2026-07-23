const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

const baseDir = __dirname;
let searchData = [];

// 1. Kamus Python
const chapterList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i of chapterList) {
    const filePath = path.join(baseDir, 'kamus-python', `bab-${i}.html`);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let root = parse(content);
    
    const wordCards = root.querySelectorAll('.word-card');
    wordCards.forEach(card => {
        let titleEl = card.querySelector('.word-title');
        if (!titleEl) return;
        
        let id = card.getAttribute('id');
        let fullTitle = titleEl.text.trim();
        let wordName = fullTitle;
        const spanEl = titleEl.querySelector('span');
        if (spanEl) {
            wordName = fullTitle.replace(spanEl.text, '').trim();
        }
        
        let preview = "";
        const sections = card.querySelectorAll('.word-section');
        for (let sec of sections) {
            if (sec.text.includes('ARTINYA DALAM BAHASA MANUSIA:') || sec.text.includes('PENJELASAN SEDERHANA:')) {
                const pEl = sec.querySelector('p');
                if (pEl) {
                    preview = pEl.text.trim();
                    if (preview.length > 120) preview = preview.substring(0, 120) + "...";
                }
            }
        }
        
        searchData.push({
            title: wordName,
            preview: preview,
            url: `kamus-python/bab-${i}.html#${id}`,
            category: `Kamus Python - Bab ${i}`,
            keywords: wordName.toLowerCase()
        });
    });
}

// 2. Glosarium
const glosariumPath = path.join(baseDir, 'glosarium', 'index.html');
if (fs.existsSync(glosariumPath)) {
    let content = fs.readFileSync(glosariumPath, 'utf-8');
    let root = parse(content);
    
    const termCards = root.querySelectorAll('.term-card');
    termCards.forEach((card, index) => {
        let titleEl = card.querySelector('.term-title');
        if (!titleEl) return;
        
        let termName = titleEl.text.trim();
        let id = card.getAttribute('id');
        if (!id) {
             id = `term-${index + 1}`;
             card.setAttribute('id', id);
        }
        
        let preview = "";
        const pEl = card.querySelector('p.term-desc');
        if (pEl) {
            preview = pEl.text.trim();
            if (preview.length > 120) preview = preview.substring(0, 120) + "...";
        }
        
        searchData.push({
            title: `📘 Istilah: ${termName}`,
            preview: preview,
            url: `glosarium/index.html#${id}`,
            category: `Glosarium Python`,
            keywords: termName.toLowerCase()
        });
    });
    
    fs.writeFileSync(glosariumPath, root.toString(), 'utf-8');
}

// 3. Peringatan Error
const errorPath = path.join(baseDir, 'peringatan-error', 'index.html');
if (fs.existsSync(errorPath)) {
    let content = fs.readFileSync(errorPath, 'utf-8');
    let root = parse(content);
    
    const errorCards = root.querySelectorAll('.error-card');
    errorCards.forEach(card => {
        let titleEl = card.querySelector('.error-title');
        if (!titleEl) return;
        
        let id = card.getAttribute('id');
        let fullTitle = titleEl.text.trim();
        let errorName = fullTitle;
        const spanEl = titleEl.querySelector('span');
        if (spanEl) {
            errorName = fullTitle.replace(spanEl.text, '').trim();
        }
        
        let preview = "";
        const sections = card.querySelectorAll('.error-section');
        for (let sec of sections) {
            if (sec.text.includes('Maksud Komputer:')) {
                const pEl = sec.querySelector('p');
                if (pEl) {
                    preview = pEl.text.trim();
                    if (preview.length > 120) preview = preview.substring(0, 120) + "...";
                }
            }
        }
        
        searchData.push({
            title: `🔴 Error: ${errorName}`,
            preview: preview,
            url: `peringatan-error/index.html#${id}`,
            category: `Peringatan Error`,
            keywords: errorName.toLowerCase()
        });
    });
}

// Bonus Modul in Bab 6
searchData.push({
    title: `🎁 BONUS: Membuat Modul Sendiri`,
    preview: `Selain meminjam dari Python, Anda bisa membuat alat buatan Anda sendiri! Caranya sangat mudah dengan membuat file .py terpisah.`,
    url: `kamus-python/bab-6.html#bonus-modul`,
    category: `Kamus Python - Bab 6`,
    keywords: `bonus modul import file`
});

// Write search-data.js
const searchDataContent = `const searchData = ${JSON.stringify(searchData, null, 4)};`;
fs.writeFileSync(path.join(baseDir, 'search-data.js'), searchDataContent, 'utf-8');

console.log(`Generated search database with ${searchData.length} entries using node-html-parser.`);
