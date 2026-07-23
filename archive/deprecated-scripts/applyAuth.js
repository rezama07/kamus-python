const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

const filesToUpdate = [
    { path: 'home.html', relRoot: '' },
    { path: 'kamus-python/index.html', relRoot: '../' },
    { path: 'kamus-python/bab-1.html', relRoot: '../' },
    { path: 'kamus-python/bab-2.html', relRoot: '../' },
    { path: 'kamus-python/bab-3.html', relRoot: '../' },
    { path: 'kamus-python/bab-4.html', relRoot: '../' },
    { path: 'kamus-python/bab-5.html', relRoot: '../' },
    { path: 'kamus-python/bab-6.html', relRoot: '../' },
    { path: 'kamus-python/bab-7.html', relRoot: '../' },
    { path: 'kamus-python/bab-8.html', relRoot: '../' },
    { path: 'glosarium/index.html', relRoot: '../' },
    { path: 'peringatan-error/index.html', relRoot: '../' }
];

filesToUpdate.forEach(fileObj => {
    const filePath = path.join(baseDir, fileObj.path);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // Update Links back to home
    if (fileObj.relRoot === '') {
        content = content.replace(/href="index\.html"/g, 'href="home.html"');
    } else {
        content = content.replace(/href="\.\.\/index\.html"/g, 'href="../home.html"');
    }

    // Script Guard
    const scriptGuard = `\n    <script>\n        if (localStorage.getItem('access_granted') !== 'true') {\n            window.location.href = '${fileObj.relRoot}index.html';\n        }\n    </script>`;
    
    if (!content.includes('access_granted')) {
        content = content.replace('</head>', `${scriptGuard}\n</head>`);
    }

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('Update complete.');
