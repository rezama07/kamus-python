const fs = require('fs');
const path = require('path');

const glossaryPath = path.join(__dirname, 'glosarium', 'index.html');
if (fs.existsSync(glossaryPath)) {
    let content = fs.readFileSync(glossaryPath, 'utf-8');
    
    // Pattern: <div class="term-title">1. Title</div>
    // Replace <div class="term-title">\d+\.\s+ with <div class="term-title">
    content = content.replace(/<div class="term-title">\s*\d+\.\s*/g, '<div class="term-title">');
    
    fs.writeFileSync(glossaryPath, content, 'utf-8');
    console.log("Glossary numbers removed.");
} else {
    console.log("Glossary not found.");
}
