document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // searchData berasal dari file search-data.js yang diload sebelumnya
    if (!searchInput || !searchResults || typeof searchData === 'undefined') return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = "";

        if (query.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        const filtered = searchData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.preview.toLowerCase().includes(query) || 
            (item.keywords && item.keywords.toLowerCase().includes(query))
        );

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const a = document.createElement("a");
                a.href = item.url;
                a.className = "search-result-item";
                
                const title = document.createElement("div");
                title.className = "search-title";
                title.innerHTML = item.title;
                
                // Location badge
                const cat = document.createElement("div");
                cat.style.fontSize = "0.75rem";
                cat.style.color = "var(--accent)";
                cat.style.marginBottom = "0.25rem";
                cat.style.fontWeight = "600";
                cat.textContent = item.category.toUpperCase();

                const preview = document.createElement("div");
                preview.className = "search-desc";
                preview.innerHTML = `<em>"${item.preview}"</em>`;

                a.appendChild(cat);
                a.appendChild(title);
                a.appendChild(preview);
                searchResults.appendChild(a);
            });
        } else {
            const noResult = document.createElement("div");
            noResult.className = "search-no-result";
            noResult.textContent = "Tidak ada istilah yang cocok.";
            searchResults.appendChild(noResult);
        }

        searchResults.style.display = "block";
    });

    // Sembunyikan hasil kalau klik di luar
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = "none";
        }
    });

    // Tampilkan lagi kalau diklik
    searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim().length > 0) {
            searchResults.style.display = "block";
        }
    });
});
