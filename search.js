document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Database dummy untuk pencarian konten statis
        const data = [
        { title: "Kamus Python - Bab 1: Pengenalan (Bahan Baku & Wadah)", url: "kamus-python/bab-1.html", desc: "Dasar-dasar Python, instalasi, dan sintaks awal.", keywords: "variable, variabel, string, teks, integer, angka bulat, float, desimal, boolean, true, false, list, daftar, dictionary, tuple, index, comment, komentar, syntax, sintaks, none" },
        { title: "Kamus Python - Bab 2: Kompor & Pisau (Aksi & Output)", url: "kamus-python/bab-2.html", desc: "Perintah aksi dan output dasar.", keywords: "print, cetak, input, masukkan, def, function, fungsi, parameter, return, kembalikan, len, panjang, append, tambah, type, tipe, import, matematika, upper, lower, f-string, format, int(), str()" },
        { title: "Kamus Python - Bab 3: Aturan Resep (Logika Keputusan JIKA-MAKA)", url: "kamus-python/bab-3.html", desc: "Logika kondisi if, else, elif.", keywords: "if, jika, else, elif, ==, !=, >, <, and, dan, or, atau, not, in, dalam" },
        { title: "Kamus Python - Bab 4: Pengulangan Pekerjaan (Loops)", url: "kamus-python/bab-4.html", desc: "Logika perulangan for, while.", keywords: "for, loop, while, pengulangan, range, break, berhenti, continue, lanjut" },
        { title: "Glosarium Python", url: "glosarium/index.html", desc: "Kumpulan lengkap istilah pemrograman Python dan bahasa gaul.", keywords: "Artificial Intelligence, Machine Learning, Deep Learning, Supervised Learning, Unsupervised Learning, Reinforcement Learning, Neural Network, Training, Inference, Overfitting, Underfitting, Feature, Label / Target, Epoch, Batch Size, Accuracy, Precision, Recall, F1-Score, Loss Function, Gradient Descent, Hyperparameter, Fine-Tuning, Model, Dataset, Algoritma, Data Pipeline, Structured Data, Unstructured Data, Generative AI, Natural Language Processing, Foundation Model, Parameters, Weights, Prompt Engineering, System Prompt, User Prompt, Zero-Shot Prompting, Few-Shot Prompting, Chain of Thought, Hallucination, Context Window, Temperature, Top-K / Top-P, Embedding, Vector Database, Chunking, Cosine Similarity, Agent, Tool Calling / Function Calling, LangChain, LangGraph, OpenAI API, Hugging Face, Token, LLM, RAG, Hybrid Search, Re-ranking / Cross Encoder, Semantic Cache, Quantization, PEFT, LoRA, Streaming, Agent Memory, TTS  & STT, OCR, Open-Weights, Proprietary Model, Guardrails, Prompt Injection, Jailbreaking, Deployment, Local, Production, Staging / Development, Container, Image, Container Registry, API, API Gateway, REST API, Load Balancer, Latency, Throughput, Scaling, Managed Service, Serverless, CI/CD, Endpoint, Environment Variables, Logs, Monitoring, Infrastructure as Code, SSH, SSL/TLS, Server, Database, Cloud, GPU, VRAM, Webhook, Rate Limit, Agile, Sprint, Scrum, Kanban, Code Review, Pull Request, Merge, Branch, Conflict, Documentation, Technical Debt, MVP, Prototype, Stakeholder, Requirement, Bug Bounty, Compliance, Scalability, Maintenance, Unit Test, Production-Ready, Documentation-First, Open-Source License, Soft Skill, Pair Programming, Refactoring, Backlog, Issue Tracking, Release Cycle, Versioning, Alpha/Beta Testing, Documentation, ReadMe, Dependencies, Environment, Virtual Environment, Debugging Tools, Architecture Pattern, Cross-Platform, User Experience, User Interface, Ngoding / Coding, Run / Execute, Bug, Debugging, Library / Package, Terminal / CLI / Command Prompt, Repo / Repository, Frontend, Backend, Open Source, Framework, Git & GitHub, IDE / Code Editor, PIP, Hardcode, Clean Code, Script / Scripting, Web Scraping, OOP, Path / Directory, Syntax Sugar, PEP 8, JSON, Refactoring, Try-Except, Boilerplate, PoC, Microservices, Monolith" },
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


