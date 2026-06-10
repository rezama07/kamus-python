document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Database dummy untuk pencarian konten statis
        const data = [
        { title: "Kamus Python - Bab 1: Pengenalan (Bahan Baku & Wadah)", url: "kamus-python/bab-1.html", desc: "Dasar-dasar Python, instalasi, dan sintaks awal.", keywords: "variable, variabel, string, teks, integer, angka bulat, float, desimal, boolean, true, false, list, daftar, dictionary, tuple, index, comment, komentar, syntax, sintaks, none" },
        { title: "Kamus Python - Bab 2: Kompor & Pisau (Aksi & Output)", url: "kamus-python/bab-2.html", desc: "Perintah aksi dan output dasar.", keywords: "print, cetak, input, masukkan, def, function, fungsi, parameter, return, kembalikan, len, panjang, append, tambah, type, tipe, import, matematika, upper, lower, f-string, format, int(), str()" },
        { title: "Kamus Python - Bab 3: Aturan Resep (Logika Keputusan JIKA-MAKA)", url: "kamus-python/bab-3.html", desc: "Logika kondisi if, else, elif.", keywords: "if, jika, else, elif, ==, !=, >, <, and, dan, or, atau, not, in, dalam" },
        { title: "Kamus Python - Bab 4: Pengulangan Pekerjaan (Loops)", url: "kamus-python/bab-4.html", desc: "Logika perulangan for, while.", keywords: "for, loop, while, pengulangan, range, break, berhenti, continue, lanjut" },
        { title: "Glosarium Python", url: "glosarium/index.html", desc: "Kumpulan lengkap istilah pemrograman Python dan bahasa gaul.", keywords: "bug, deploy, api, repo, frontend, backend, database, framework, llm, oop, json, pep 8, pip, virtual environment, venv, indentation, interpreter, compiler, ngoding, coding, run, execute, library, package, terminal, cli, local, production, prompting, server, open source, token, model, dataset, rag, cloud, git, github, algoritma, ide, hardcode, clean code, script, web scraping, path, syntax sugar, refactoring, try-except, boilerplate" },
        { title: "Peringatan Error", url: "peringatan-error/index.html", desc: "Daftar error umum dan solusi jitunya.", keywords: "syntaxerror, salah ejaan, nameerror, manggil nama ga dikenal, typo, typeerror, salah wujud data, int(), str(), indentationerror, spasi berantakan, tab" }
    ];

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = "";

        if (query.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        const filtered = data.filter(item => 
            item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query) || (item.keywords && item.keywords.toLowerCase().includes(query))
        );

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const a = document.createElement("a");
                a.href = item.url;
                a.className = "search-result-item";
                
                const title = document.createElement("div");
                title.className = "search-title";
                title.textContent = item.title;
                
                const desc = document.createElement("div");
                desc.className = "search-desc";
                desc.textContent = item.desc;

                a.appendChild(title);
                a.appendChild(desc);
                searchResults.appendChild(a);
            });
        } else {
            const noResult = document.createElement("div");
            noResult.className = "search-no-result";
            noResult.textContent = `Tidak ditemukan hasil untuk "${query}"`;
            searchResults.appendChild(noResult);
        }

        searchResults.style.display = "block";
    });

    // Sembunyikan dropdown hasil jika user klik di luar area search
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = "none";
        }
    });

    // Munculkan kembali dropdown kalau input diklik dan masih ada isinya
    searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim().length > 0) {
            searchResults.style.display = "block";
        }
    });
});

