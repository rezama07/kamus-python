const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const htmlFiles = [
    path.join(baseDir, 'home.html'), // It's currently home.html, we'll rename it later
    path.join(baseDir, 'glosarium', 'index.html'),
    path.join(baseDir, 'peringatan-error', 'index.html'),
];

for (let i = 1; i <= 8; i++) {
    htmlFiles.push(path.join(baseDir, 'kamus-python', `bab-${i}.html`));
}

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Remove the auth block
        const authBlock1 = `    <script>\n        if (localStorage.getItem('access_granted') !== 'true') {\n            window.location.href = '../index.html';\n        }\n    </script>\n`;
        const authBlock2 = `    <script>\n        if (localStorage.getItem('access_granted') !== 'true') {\n            window.location.href = 'index.html';\n        }\n    </script>\n`;
        const authBlock3 = `<script>\n        if (localStorage.getItem('access_granted') !== 'true') {\n            window.location.href = '../index.html';\n        }\n    </script>`;
        
        // Use regex for flexibility just in case formatting differs slightly
        const regex1 = /\s*<script>\s*if\s*\(localStorage\.getItem\('access_granted'\)\s*!==\s*'true'\)\s*\{\s*window\.location\.href\s*=\s*'[^']+';\s*\}\s*<\/script>\s*/g;
        
        if (regex1.test(content)) {
            content = content.replace(regex1, '\n');
            fs.writeFileSync(file, content, 'utf-8');
            console.log(`Removed auth from ${file}`);
        } else {
            console.log(`Auth block not found in ${file}`);
        }
    } else {
        console.log(`${file} does not exist`);
    }
});
