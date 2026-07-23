document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchResults || typeof searchData === 'undefined') return;

    // Helper function to convert standard HTML page links to SPA hash format
    function convertUrlToHash(url) {
        if (url.startsWith('kamus-python/bab-')) {
            // e.g. kamus-python/bab-1.html#kata-1 -> #/bab-1#kata-1
            return '#' + url.replace('kamus-python/bab-', '/bab-').replace('.html', '');
        } else if (url.startsWith('glosarium/index.html')) {
            // e.g. glosarium/index.html#term-x -> #/glosarium#term-x
            return '#' + url.replace('glosarium/index.html', '/glosarium');
        } else if (url.startsWith('peringatan-error/index.html')) {
            // e.g. peringatan-error/index.html#error-y -> #/peringatan-error#error-y
            return '#' + url.replace('peringatan-error/index.html', '/peringatan-error');
        }
        return '#' + url;
    }

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
                a.href = convertUrlToHash(item.url);
                a.className = "search-result-item";
                
                const title = document.createElement("div");
                title.className = "search-title";
                title.innerHTML = item.title;
                
                const preview = document.createElement("div");
                preview.className = "search-desc";
                preview.innerHTML = `<em>"${item.preview}"</em>`;

                // Intercept click to perform smooth hash transition and close dropdown
                a.addEventListener("click", () => {
                    searchResults.style.display = "none";
                    searchInput.value = "";
                });

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

    // Hide search results if clicked outside
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = "none";
        }
    });

    // Show again on focus if input has value
    searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim().length > 0) {
            searchResults.style.display = "block";
        }
    });
});
