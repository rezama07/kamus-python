const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
let searchData = [];

// 1. Process Kamus Python (Bab 1 - 8)
for (let i = 1; i <= 8; i++) {
    const filePath = path.join(baseDir, 'kamus-python', `bab-${i}.html`);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Regex for word cards. Looks for: <div class="word-card"> ... <h3 class="word-title">📖 KATA (\d+): (.*?)<span
    // We will replace the <div class="word-card"> with <div class="word-card" id="kata-$1">
    
    // Using a more manual block-by-block approach to reliably get preview
    const cardRegex = /<div class="word-card"([^>]*)>([\s\S]*?)<\/div>\s*<!--/g;
    
    // Actually, splitting by <div class="word-card" is safer
    let parts = content.split(/<div class="word-card"[^>]*>/);
    let newContent = parts[0];
    
    for (let j = 1; j < parts.length; j++) {
        let block = parts[j];
        
        // Find title
        const titleMatch = block.match(/<h3 class="word-title">📖 KATA (\d+):\s*(.*?)<span/);
        if (titleMatch) {
            const wordNum = titleMatch[1];
            const wordName = titleMatch[2].trim();
            const id = `kata-${wordNum}`;
            
            // Add ID to div
            newContent += `<div class="word-card" id="${id}">` + block;
            
            // Extract preview (first <p> after ARTINYA)
            let preview = "";
            const pMatch = block.match(/<h4>🗣️ ARTINYA DALAM BAHASA MANUSIA:<\/h4>\s*<p>(.*?)<\/p>/s);
            if (pMatch) {
                // Strip inner tags like <strong>
                preview = pMatch[1].replace(/<[^>]+>/g, '').trim();
                // Truncate
                if (preview.length > 120) preview = preview.substring(0, 120) + "...";
            }
            
            searchData.push({
                title: `📖 KATA ${wordNum}: ${wordName}`,
                preview: preview,
                url: `kamus-python/bab-${i}.html#${id}`,
                category: `Kamus Python - Bab ${i}`,
                keywords: `${wordName.toLowerCase()} kata ${wordNum}`
            });
            
        } else {
            newContent += `<div class="word-card">` + block;
        }
    }
    
    fs.writeFileSync(filePath, newContent, 'utf-8');
}

// 2. Process Glosarium
const glosariumPath = path.join(baseDir, 'glosarium', 'index.html');
if (fs.existsSync(glosariumPath)) {
    let content = fs.readFileSync(glosariumPath, 'utf-8');
    let parts = content.split(/<div class="term-card"[^>]*>/);
    let newContent = parts[0];
    
    for (let j = 1; j < parts.length; j++) {
        let block = parts[j];
        
        const titleMatch = block.match(/<div class="term-title">(\d+)\.\s*(.*?)<\/div>/);
        if (titleMatch) {
            const termNum = titleMatch[1];
            const termName = titleMatch[2].replace(/<[^>]+>/g, '').trim(); // Remove inner tags like spans
            const id = `term-${termNum}`;
            
            newContent += `<div class="term-card" id="${id}">` + block;
            
            let preview = "";
            const descMatch = block.match(/<p class="term-desc">(.*?)<\/p>/s);
            if (descMatch) {
                preview = descMatch[1].replace(/<[^>]+>/g, '').trim();
                if (preview.length > 120) preview = preview.substring(0, 120) + "...";
            }
            
            searchData.push({
                title: `📘 Istilah: ${termName}`,
                preview: preview,
                url: `glosarium/index.html#${id}`,
                category: `Glosarium Python`,
                keywords: termName.toLowerCase()
            });
        } else {
            newContent += `<div class="term-card">` + block;
        }
    }
    fs.writeFileSync(glosariumPath, newContent, 'utf-8');
}

// 3. Process Peringatan Error
const errorPath = path.join(baseDir, 'peringatan-error', 'index.html');
if (fs.existsSync(errorPath)) {
    let content = fs.readFileSync(errorPath, 'utf-8');
    let parts = content.split(/<div class="error-card"[^>]*>/);
    let newContent = parts[0];
    
    for (let j = 1; j < parts.length; j++) {
        let block = parts[j];
        
        const titleMatch = block.match(/<h3 class="error-title">🔴 (\d+)\.\s*(.*?)<span/);
        if (titleMatch) {
            const errorNum = titleMatch[1];
            const errorName = titleMatch[2].trim();
            const id = `error-${errorNum}`;
            
            newContent += `<div class="error-card" id="${id}">` + block;
            
            let preview = "";
            const pMatch = block.match(/<h4>🤖 Maksud Komputer:<\/h4>\s*<p>(.*?)<\/p>/s);
            if (pMatch) {
                preview = pMatch[1].replace(/<[^>]+>/g, '').trim();
                if (preview.length > 120) preview = preview.substring(0, 120) + "...";
            }
            
            searchData.push({
                title: `🔴 Error: ${errorName}`,
                preview: preview,
                url: `peringatan-error/index.html#${id}`,
                category: `Peringatan Error`,
                keywords: errorName.toLowerCase()
            });
        } else {
            newContent += `<div class="error-card">` + block;
        }
    }
    fs.writeFileSync(errorPath, newContent, 'utf-8');
}

// Write search-data.js
const searchDataContent = `const searchData = ${JSON.stringify(searchData, null, 4)};`;
fs.writeFileSync(path.join(baseDir, 'search-data.js'), searchDataContent, 'utf-8');

console.log(`Generated search database with ${searchData.length} entries.`);
