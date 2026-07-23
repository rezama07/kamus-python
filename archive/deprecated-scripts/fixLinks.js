const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const filesToFix = [
    path.join(baseDir, 'glosarium', 'index.html'),
    path.join(baseDir, 'kamus-python', 'index.html'),
    path.join(baseDir, 'peringatan-error', 'index.html')
];

filesToFix.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        if (content.includes('href="../home.html"')) {
            content = content.replace(/href="\.\.\/home\.html"/g, 'href="../index.html"');
            fs.writeFileSync(file, content, 'utf-8');
            console.log(`Fixed link in ${file}`);
        }
    }
});
