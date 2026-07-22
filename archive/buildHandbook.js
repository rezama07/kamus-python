const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

const baseDir = __dirname;

// Read chapters in order
const chapterFiles = [
    { id: 1, file: 'kamus-python/bab-1.html' },
    { id: 2, file: 'kamus-python/bab-2.html' },
    { id: 3, file: 'kamus-python/bab-3.html' },
    { id: 4, file: 'kamus-python/bab-4.html' },
    { id: 5, file: 'kamus-python/bab-5.html' },
    { id: 6, file: 'kamus-python/bab-6.html' },
    { id: 7, file: 'kamus-python/bab-7.html' },
    { id: 8, file: 'kamus-python/bab-8.html' },
    { id: 9, file: 'kamus-python/bab-9.html' },
    { id: 10, file: 'kamus-python/bab-10.html' },
    { id: 11, file: 'kamus-python/bab-11.html' },
    { id: 12, file: 'kamus-python/bab-12.html' },
    { id: 15, file: 'kamus-python/bab-15.html' },
    { id: 16, file: 'kamus-python/bab-16.html' },
    { id: 17, file: 'kamus-python/bab-17.html' },
];

let tocItems = [];
let chaptersHTML = '';

// 1. Process Halaman Nol from kamus-python/index.html
const mainIndexContent = fs.readFileSync(path.join(baseDir, 'kamus-python', 'index.html'), 'utf-8');
const mainIndexRoot = parse(mainIndexContent);
const introSections = mainIndexRoot.querySelector('.intro-sections');
let halamanNolHTML = '';
if (introSections) {
    halamanNolHTML = `
    <section class="handbook-section page-divider" id="halaman-nol">
        <div class="section-header">
            <h2 class="section-title">🚦 HALAMAN NOL: Rambu Lalu Lintas Python</h2>
            <p class="section-subtitle">Aturan Main & Rambu Dasar Komputer</p>
        </div>
        ${introSections.innerHTML}
    </section>
    `;
    tocItems.push({ id: 'halaman-nol', title: 'Halaman Nol: Rambu Lalu Lintas Python' });
}

// 2. Process Chapters 1-17
chapterFiles.forEach(ch => {
    const filePath = path.join(baseDir, ch.file);
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const root = parse(content);
    
    const pageTitle = root.querySelector('.page-title') ? root.querySelector('.page-title').text.trim() : `BAB ${ch.id}`;
    const pageSub = root.querySelector('.page-header p') ? root.querySelector('.page-header p').text.trim() : '';
    const bodyContent = root.querySelector('.content-body');
    
    // Remove trinket container and chapter navigation for clean handbook
    if (bodyContent) {
        bodyContent.querySelectorAll('#trinket-container, .chapter-navigation, #scrollTopBtn, script').forEach(el => el.remove());
    }

    const secId = `bab-${ch.id}`;
    tocItems.push({ id: secId, title: pageTitle });

    chaptersHTML += `
    <section class="handbook-section page-divider" id="${secId}">
        <div class="section-header">
            <h2 class="section-title">${pageTitle}</h2>
            <p class="section-subtitle">${pageSub}</p>
        </div>
        ${bodyContent ? bodyContent.innerHTML : ''}
    </section>
    `;
});

// 3. Process Glosarium (FULL Extraction)
const glosariumContent = fs.readFileSync(path.join(baseDir, 'glosarium', 'index.html'), 'utf-8');
const glosariumRoot = parse(glosariumContent);
const glosariumContainer = glosariumRoot.querySelector('.container');

let glosariumHTML = '';
if (glosariumContainer) {
    glosariumContainer.querySelectorAll('.back-link, .page-header, script, #scrollTopBtn').forEach(el => el.remove());
    tocItems.push({ id: 'glosarium-section', title: 'Glosarium Istilah Python' });
    glosariumHTML = `
    <section class="handbook-section page-divider" id="glosarium-section">
        <div class="section-header">
            <h2 class="section-title">📘 GLOSARIUM ISTILAH PYTHON</h2>
            <p class="section-subtitle">Kumpulan Lengkap Istilah & Bahasa Gaul Pemrograman</p>
        </div>
        ${glosariumContainer.innerHTML}
    </section>
    `;
}

// 4. Process Peringatan Error
const errorContent = fs.readFileSync(path.join(baseDir, 'peringatan-error', 'index.html'), 'utf-8');
const errorRoot = parse(errorContent);
const errorBody = errorRoot.querySelector('.content-body');
if (errorBody) {
    errorBody.querySelectorAll('#scrollTopBtn, script').forEach(el => el.remove());
}

let errorHTML = '';
if (errorBody) {
    tocItems.push({ id: 'error-section', title: 'Peringatan Error & Obatnya' });
    errorHTML = `
    <section class="handbook-section page-divider" id="error-section">
        <div class="section-header">
            <h2 class="section-title" style="color: #ef4444;">🔴 PERINGATAN ERROR</h2>
            <p class="section-subtitle">Menerjemahkan Teks Merah Menjadi Bahasa Manusia</p>
        </div>
        ${errorBody.innerHTML}
    </section>
    `;
}

// Build Table of Contents HTML
let tocHTML = `
<section class="handbook-section page-divider" id="table-of-contents">
    <div class="section-header">
        <h2 class="section-title">📜 DAFTAR ISI HANDBOOK</h2>
        <p class="section-subtitle">Struktur & Panduan Modul Pembelajaran</p>
    </div>
    <ul class="toc-list">
`;
tocItems.forEach((item, index) => {
    tocHTML += `<li><a href="#${item.id}"><span class="toc-num">${index + 1}.</span> <span class="toc-text">${item.title}</span></a></li>`;
});
tocHTML += `</ul></section>`;

// Full Handbook HTML Page
const handbookFullPage = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Handbook Kamus Python - Panduan Lengkap</title>
    <!-- Open Sans & Fira Code Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🐍%3C/text%3E%3C/svg%3E">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-yaml.min.js"></script>
    
    <style>
        /* --- CORE TYPOGRAPHY (OPEN SANS & FIRA CODE) --- */
        :root {
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --card-border: #334155;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --accent: #38bdf8;
            --accent-hover: #0284c7;
            --font-main: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            --font-code: 'Fira Code', monospace;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: var(--font-main);
            background-color: var(--bg-color);
            color: var(--text-primary);
            line-height: 1.6;
            font-size: 14.5px;
            -webkit-font-smoothing: antialiased;
        }

        code, pre, kbd, samp, .language-python, .language-bash, .language-yaml {
            font-family: var(--font-code) !important;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-main);
            font-weight: 700;
            letter-spacing: -0.01em;
        }

        /* --- LAYOUT CONTAINER --- */
        .handbook-container {
            max-width: 920px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
        }

        /* --- COVER PAGE --- */
        .cover-page {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
            border: 1px solid var(--card-border);
            border-radius: 1.25rem;
            padding: 3.5rem 2rem;
            margin-bottom: 3rem;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
            page-break-after: always;
        }

        .cover-logo {
            font-size: 4.5rem;
            margin-bottom: 1rem;
            animation: pulse 3s ease-in-out infinite;
        }

        .cover-title {
            font-size: 2.8rem;
            font-weight: 800;
            color: var(--text-primary);
            line-height: 1.2;
            margin-bottom: 0.75rem;
            background: linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .cover-subtitle {
            font-size: 1.2rem;
            color: var(--text-secondary);
            max-width: 650px;
            margin-bottom: 2.5rem;
            font-weight: 400;
        }

        .cover-meta {
            margin-top: auto;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
            display: flex;
            justify-content: space-around;
            color: var(--text-secondary);
            font-size: 0.85rem;
        }

        /* --- SECTIONS & COMPACT CARDS --- */
        .handbook-section {
            margin-bottom: 3rem;
        }

        .page-divider {
            page-break-before: always;
        }

        .section-header {
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--card-border);
        }

        .section-title {
            font-size: 1.75rem;
            color: var(--accent);
            margin-bottom: 0.25rem;
        }

        .section-subtitle {
            color: var(--text-secondary);
            font-size: 1rem;
        }

        /* COMPACT CARDS FIT MULTIPLE PER PAGE */
        .card, .word-card, .term-card, .error-card {
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 0.75rem;
            padding: 1.25rem 1.5rem;
            margin-bottom: 1.25rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            break-inside: avoid;
            page-break-inside: avoid;
        }

        .glossary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .word-title, .term-title, .error-title {
            font-size: 1.2rem;
            color: var(--text-primary);
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .word-section, .term-section, .error-section {
            margin-bottom: 0.85rem;
        }

        .word-section:last-child {
            margin-bottom: 0;
        }

        .word-section h4, .error-section h4 {
            font-size: 0.95rem;
            color: var(--accent);
            margin-bottom: 0.35rem;
            font-weight: 600;
        }

        /* --- TABLE OF CONTENTS --- */
        .toc-list {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }

        .toc-list li a {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 0.5rem;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s ease;
        }

        .toc-list li a:hover {
            border-color: var(--accent);
            transform: translateX(4px);
            background: rgba(56, 189, 248, 0.05);
        }

        .toc-num {
            color: var(--accent);
            font-family: var(--font-code);
            font-weight: 700;
        }

        /* --- FIX HORIZONTAL SCROLL / NO NOISY SCROLLBAR IN CODE BLOCKS --- */
        pre {
            border-radius: 0.6rem !important;
            margin: 0.75rem 0 !important;
            padding: 1rem 1.25rem !important;
            background: #0d1117 !important; /* DARK CODE BACKGROUND FOR SYNTAX COLORS */
            border: 1px solid #30363d !important;
            white-space: pre-wrap !important; /* NO HORIZONTAL SCROLLBAR - WRAP CODE & COMMENTS CLEANLY */
            word-break: break-word !important;
            overflow-x: hidden !important;
        }

        code {
            font-size: 0.9rem !important;
            line-height: 1.55 !important;
            white-space: pre-wrap !important;
            word-break: break-word !important;
            color: #e6edf3 !important;
        }

        /* --- TOP NAV BAR --- */
        .handbook-nav {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--card-border);
            padding: 0.85rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-brand {
            font-weight: 700;
            color: var(--text-primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .nav-actions {
            display: flex;
            gap: 0.75rem;
        }

        .btn-action {
            background: var(--accent);
            color: #0f172a;
            border: none;
            padding: 0.5rem 1.1rem;
            border-radius: 0.5rem;
            font-weight: 700;
            font-family: var(--font-main);
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.85rem;
            transition: all 0.2s ease;
        }

        .btn-action:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-primary);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* --- PRINT / PDF OPTIMIZATION (HIGH-CONTRAST DARK CODE & COMPACT FLOW) --- */
        @media print {
            .handbook-nav, #scrollTopBtn {
                display: none !important;
            }

            body {
                background: #ffffff !important;
                color: #0f172a !important;
                font-size: 10.5pt;
            }

            .handbook-container {
                max-width: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
            }

            .cover-page {
                min-height: 95vh !important;
                border: none !important;
                box-shadow: none !important;
                background: #ffffff !important;
                page-break-after: always;
            }

            .cover-title {
                color: #0284c7 !important;
                background: none !important;
                -webkit-text-fill-color: initial !important;
            }

            .cover-subtitle, .cover-meta {
                color: #475569 !important;
            }

            .page-divider {
                page-break-before: always;
            }

            .card, .word-card, .term-card, .error-card {
                background: #f8fafc !important;
                border: 1px solid #cbd5e1 !important;
                box-shadow: none !important;
                break-inside: avoid !important;
                page-break-inside: avoid !important;
                margin-bottom: 1rem !important;
                padding: 1rem 1.25rem !important;
                color: #0f172a !important;
            }

            .section-title {
                color: #0284c7 !important;
            }

            .word-title, .term-title, .error-title {
                color: #0f172a !important;
            }

            /* DARK BACKGROUND FOR CODE IN PRINT FOR VIBRANT SYNTAX HIGHLIGHTING */
            pre {
                background: #0d1117 !important;
                border: 1px solid #30363d !important;
                color: #e6edf3 !important;
                white-space: pre-wrap !important;
                word-break: break-word !important;
                overflow-x: hidden !important;
                break-inside: avoid !important;
                page-break-inside: avoid !important;
            }

            code {
                color: #e6edf3 !important;
                white-space: pre-wrap !important;
                word-break: break-word !important;
            }

            /* SYNTAX HIGHLIGHT TOKEN PRESERVATION IN PRINT */
            .token.comment, .token.prolog, .token.doctype, .token.cdata { color: #8b949e !important; }
            .token.punctuation { color: #c9d1d9 !important; }
            .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol { color: #79c0ff !important; }
            .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin { color: #a5d6ff !important; }
            .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string { color: #d2a8ff !important; }
            .token.atrule, .token.attr-value, .token.keyword { color: #ff7b72 !important; }
            .token.function, .token.class-name { color: #d2a8ff !important; }

            .toc-list li a {
                background: #ffffff !important;
                border: 1px solid #e2e8f0 !important;
                color: #0f172a !important;
            }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    </style>
</head>
<body>

    <!-- TOP NAVIGATION BAR -->
    <nav class="handbook-nav">
        <a href="index.html" class="nav-brand">
            <span>🐍</span> Kamus Python Handbook
        </a>
        <div class="nav-actions">
            <a href="index.html" class="btn-action btn-secondary">&larr; Beranda Web</a>
            <button onclick="window.print()" class="btn-action">🖨️ Cetak / Simpan PDF</button>
        </div>
    </nav>

    <div class="handbook-container">
        
        <!-- COVER PAGE -->
        <div class="cover-page">
            <div class="cover-logo">🐍</div>
            <h1 class="cover-title">HANDBOOK KAMUS PYTHON</h1>
            <p class="cover-subtitle">Panduan Komprehensif dari Bahan Baku Dasar, Logika, Functions, OOP, AI Engineering, LLM, RAG, Agentic AI, hingga CI/CD.</p>
            <div class="cover-meta">
                <div>Edisi Lengkap (Bab 1 - 17)</div>
                <div>Format: Printable Handbook</div>
                <div>Tahun: 2026</div>
            </div>
        </div>

        <!-- TABLE OF CONTENTS -->
        ${tocHTML}

        <!-- HALAMAN NOL -->
        ${halamanNolHTML}

        <!-- CHAPTERS 1 - 17 -->
        ${chaptersHTML}

        <!-- GLOSARIUM SECTION -->
        ${glosariumHTML}

        <!-- ERROR WARNINGS SECTION -->
        ${errorHTML}

    </div>

    <!-- SCROLL TO TOP BUTTON -->
    <button id="scrollTopBtn" title="Kembali ke atas" style="position: fixed; bottom: 2rem; right: 2rem; width: 45px; height: 45px; border-radius: 50%; background: var(--accent); color: #0f172a; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(0,0,0,0.4); z-index: 900;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px;"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>

    <script>
        const scrollTopBtn = document.getElementById("scrollTopBtn");
        window.addEventListener("scroll", function() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                scrollTopBtn.style.display = "flex";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });
        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'handbook.html'), handbookFullPage, 'utf-8');
console.log('Successfully generated updated handbook.html with fixes!');
