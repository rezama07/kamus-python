$base_dir = "."

# 1. Append to styles.css
$css_to_append = @"

/* --- KAMUS BAB STYLES --- */
.word-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; backdrop-filter: blur(10px); }
.word-title { font-size: 1.5rem; color: var(--accent); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; }
.word-section { margin-bottom: 1.25rem; }
.word-section:last-child { margin-bottom: 0; }
.word-section h4 { display: flex; align-items: center; gap: 0.5rem; font-size: 1rem; margin-bottom: 0.25rem; color: var(--text-primary); }
.word-section p, .word-section ul { color: var(--text-secondary); margin-left: 1.7rem; line-height: 1.6; }

/* --- GLOSARIUM STYLES --- */
.intro-box { background: var(--card-bg); border-left: 4px solid var(--accent); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; backdrop-filter: blur(10px); }
.intro-box.error-intro { border-left: 4px solid #ef4444; }
.glossary-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; }
.term-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 1rem; padding: 1.5rem; backdrop-filter: blur(10px); transition: transform 0.3s ease, border-color 0.3s ease; display: flex; flex-direction: column; }
.term-card:hover { transform: translateY(-5px); border-color: var(--accent); }
.term-title { font-size: 1.15rem; color: var(--accent); margin-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; font-weight: 600; }
.term-desc { color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem; margin-top: auto; }

/* --- PERINGATAN ERROR STYLES --- */
.error-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; backdrop-filter: blur(10px); border-left: 4px solid #ef4444; transition: transform 0.3s ease; }
.error-card:hover { transform: translateY(-3px); }
.error-title { font-size: 1.5rem; color: #ef4444; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; }
.error-section { margin-bottom: 1.25rem; }
.error-section:last-child { margin-bottom: 0; }
.error-section h4 { display: flex; align-items: center; gap: 0.5rem; font-size: 1rem; margin-bottom: 0.25rem; color: var(--text-primary); }
.error-section p { color: var(--text-secondary); margin-left: 1.7rem; line-height: 1.6; }

/* --- NAVIGATION & BREADCRUMB --- */
.breadcrumb { color: var(--text-secondary); font-size: 0.95rem; margin-top: 1.5rem; margin-bottom: -1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.chapter-navigation { display: flex; justify-content: space-between; margin-top: 3rem; margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--card-border); }
.nav-btn { display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; background: rgba(56, 189, 248, 0.1); color: var(--accent); text-decoration: none; border-radius: 0.5rem; font-weight: 600; transition: all 0.2s ease; border: 1px solid rgba(56, 189, 248, 0.2); }
.nav-btn:hover { background: rgba(56, 189, 248, 0.2); transform: translateY(-2px); }
.nav-btn.next-btn { margin-left: auto; }

/* --- PRISM.JS CODE OVERRIDES --- */
pre[class*="language-"] { border-radius: 0.5rem !important; margin-left: 1.7rem !important; border-left: 3px solid var(--accent) !important; background: rgba(0,0,0,0.3) !important; }
code[class*="language-"] { font-family: 'Consolas', monospace !important; font-size: 0.95rem !important; text-shadow: none !important; }

/* --- TRINKET EMBED --- */
.embed-container { margin-top: 3rem; margin-bottom: 1rem; border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid var(--card-border); }
"@
Add-Content -Path "styles.css" -Value $css_to_append

# 2. Update Search
$search_content = Get-Content "search.js" -Raw
$new_search_data = @"
    const data = [
        { title: "Kamus Python - Bab 1: Pengenalan (Bahan Baku & Wadah)", url: "kamus-python/bab-1.html", desc: "Dasar-dasar Python, instalasi, dan sintaks awal.", keywords: "variable, variabel, string, teks, integer, angka bulat, float, desimal, boolean, true, false, list, daftar, dictionary, tuple, index, comment, komentar, syntax, sintaks, none" },
        { title: "Kamus Python - Bab 2: Kompor & Pisau (Aksi & Output)", url: "kamus-python/bab-2.html", desc: "Perintah aksi dan output dasar.", keywords: "print, cetak, input, masukkan, def, function, fungsi, parameter, return, kembalikan, len, panjang, append, tambah, type, tipe, import, matematika, upper, lower, f-string, format, int(), str()" },
        { title: "Kamus Python - Bab 3: Aturan Resep (Logika Keputusan JIKA-MAKA)", url: "kamus-python/bab-3.html", desc: "Logika kondisi if, else, elif.", keywords: "if, jika, else, elif, ==, !=, >, <, and, dan, or, atau, not, in, dalam" },
        { title: "Kamus Python - Bab 4: Pengulangan Pekerjaan (Loops)", url: "kamus-python/bab-4.html", desc: "Logika perulangan for, while.", keywords: "for, loop, while, pengulangan, range, break, berhenti, continue, lanjut" },
        { title: "Glosarium Python", url: "glosarium/index.html", desc: "Kumpulan lengkap istilah pemrograman Python dan bahasa gaul.", keywords: "bug, deploy, api, repo, frontend, backend, database, framework, llm, oop, json, pep 8, pip, virtual environment, venv, indentation, interpreter, compiler, ngoding, coding, run, execute, library, package, terminal, cli, local, production, prompting, server, open source, token, model, dataset, rag, cloud, git, github, algoritma, ide, hardcode, clean code, script, web scraping, path, syntax sugar, refactoring, try-except, boilerplate" },
        { title: "Peringatan Error", url: "peringatan-error/index.html", desc: "Daftar error umum dan solusi jitunya.", keywords: "syntaxerror, salah ejaan, nameerror, manggil nama ga dikenal, typo, typeerror, salah wujud data, int(), str(), indentationerror, spasi berantakan, tab" }
    ];
"@
$search_content = $search_content -replace '(?s)const data = \[.*?\n    \];', $new_search_data
$search_content = $search_content -replace '(?s)item.title.toLowerCase\(\).includes\(query\) \|\|\s*item.desc.toLowerCase\(\).includes\(query\)', 'item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query) || (item.keywords && item.keywords.toLowerCase().includes(query))'
Set-Content "search.js" -Value $search_content

# 3. Update HTML files
$html_files = @(
    "kamus-python/bab-1.html",
    "kamus-python/bab-2.html",
    "kamus-python/bab-3.html",
    "kamus-python/bab-4.html",
    "glosarium/index.html",
    "peringatan-error/index.html"
)

$bab_titles = @(
    "Bahan Baku & Wadah",
    "Kompor & Pisau (Aksi & Output)",
    "Aturan Resep (Logika Keputusan JIKA-MAKA)",
    "Pengulangan Pekerjaan (Loops)"
)

$prism_cdn = @"
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
</head>
"@

for ($i = 0; $i -lt $html_files.Length; $i++) {
    $file = $html_files[$i]
    $content = Get-Content $file -Raw
    
    # Remove <style>
    $content = $content -replace '(?s)<style>.*?</style>\r?\n*', ''
    
    if ($file -match 'peringatan-error') {
        $content = $content -replace 'class="intro-box"', 'class="intro-box error-intro"'
    }
    
    if ($file -match 'bab-') {
        $content = $content -replace '</head>', $prism_cdn
        
        $bab_num = $i + 1
        $title = $bab_titles[$i]
        $breadcrumb = "<div class=`"breadcrumb`">Bab $bab_num dari 4 &mdash; $title</div>"
        $content = $content -replace '(<header class="page-header">)', "$breadcrumb`n        `$1"
        
        $nav_html = "`n        <div class=`"embed-container`">`n            <iframe src=`"https://trinket.io/embed/python3?toggleCode=true&runOption=run`" width=`"100%`" height=`"400`" frameborder=`"0`" marginwidth=`"0`" marginheight=`"0`" allowfullscreen></iframe>`n        </div>`n`n        <div class=`"chapter-navigation`">`n"
        if ($bab_num -gt 1) {
            $prev = $bab_num - 1
            $nav_html += "            <a href=`"bab-$prev.html`" class=`"nav-btn prev-btn`">&larr; Bab Sebelumnya</a>`n"
        }
        if ($bab_num -lt 4) {
            $next = $bab_num + 1
            $nav_html += "            <a href=`"bab-$next.html`" class=`"nav-btn next-btn`">Bab Berikutnya &rarr;</a>`n"
        }
        $nav_html += "        </div>"
        
        $content = $content -replace '</div>\s*<!-- content-body -->', "$nav_html`n        </div> <!-- content-body -->"
        
        # Convert code boxes
        $content = [Regex]::Replace($content, '(?s)<div class="code-box">(.*?)</div>', {
            param($m)
            $inner = $m.Groups[1].Value.Trim()
            
            $inner = [Regex]::Replace($inner, '(?s)<span class="code-comment">\s*(.*?)\s*</span>', {
                param($cm)
                $commentText = $cm.Groups[1].Value.Trim()
                if ($commentText.StartsWith('(') -and $commentText.EndsWith(')')) {
                    $commentText = $commentText.Substring(1, $commentText.Length - 2).Trim()
                }
                $commentText = [Regex]::Replace($commentText, '<[^>]+>', '')
                
                $lines = $commentText -split '\r?\n'
                $res = ""
                foreach ($line in $lines) {
                    if (![string]::IsNullOrWhiteSpace($line)) {
                        $res += "`n# " + $line.Trim()
                    }
                }
                return $res
            })
            
            return "<pre><code class=`"language-python`">$inner</code></pre>"
        })
    }
    
    Set-Content $file -Value $content
}
