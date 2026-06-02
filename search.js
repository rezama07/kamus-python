document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Database dummy untuk pencarian konten statis
    const data = [
        { title: "Kamus Python - Bab 1: Pengenalan (Bahan Baku & Wadah)", url: "kamus-python/bab-1.html", desc: "Dasar-dasar Python, instalasi, dan sintaks awal. Variabel, tipe data, list, dll." },
        { title: "Kamus Python - Bab 2: Kompor & Pisau (Aksi & Output)", url: "kamus-python/bab-2.html", desc: "Perintah print, input, def, parameter, return, len, append, import, dan operator matematika." },
        { title: "Kamus Python - Bab 3: Aturan Resep (Logika Keputusan JIKA-MAKA)", url: "kamus-python/bab-3.html", desc: "Logika kondisi if, else, elif, operator pembanding, and, or, not, dan in." },
        { title: "Kamus Python - Bab 4: Pengulangan Pekerjaan (Loops)", url: "kamus-python/bab-4.html", desc: "Logika perulangan for, while, range, break, dan continue." },
        { title: "Glosarium Python", url: "glosarium/index.html", desc: "Kumpulan lengkap istilah pemrograman Python dan bahasa gaul: Bug, Deploy, API, Repo, Frontend, Backend, Database, Framework, LLM, OOP, JSON, dll." },
        { title: "Peringatan Error", url: "peringatan-error/index.html", desc: "Daftar error umum seperti SyntaxError, TypeError dan solusi jitunya." }
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
            item.title.toLowerCase().includes(query) || 
            item.desc.toLowerCase().includes(query)
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
