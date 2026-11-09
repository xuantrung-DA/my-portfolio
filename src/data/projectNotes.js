// Concise introductions for the portfolio. Full technical records stay in portfolio.js.
export const selectedProjectIds = [7, 8, 6];

export const projectNotes = {
  7: {
    name: "TraceVision",
    area: "Multimodal search",
    summary: "Search videos with timestamped evidence.",
    introduction:
      "A local video-search prototype that combines object tracks, speech transcripts and visual retrieval to answer English and Vietnamese questions.",
    contribution:
      "I built the indexing pipeline, reusable stage caches, bilingual query planner and FastAPI / React workspace.",
    decision:
      "Reuse persisted evidence before running models again. A rule-based planner keeps supported queries predictable, but handles fewer paraphrases than an LLM planner.",
    result:
      "The planner matched 35 of 40 authored evaluation queries. Warm-cache indexing was 52.3× faster than cold indexing across 15 short videos on an RTX 4050 Laptop GPU.",
    boundary:
      "Query-plan match measures parsing, not answer accuracy. Cache reuse is not end-to-end inference speed; the evaluation covers short local videos.",
  },
  8: {
    name: "Subject Knowledge Hub",
    area: "Document retrieval",
    summary: "Ask your PDFs. Keep the source page attached.",
    introduction:
      "A Vietnamese and English PDF application with subject-scoped retrieval, version-specific page citations and document ingestion that resumes after interruption.",
    contribution:
      "I built the application, versioned document pipeline, retrieval filters and Celery workers with PostgreSQL checkpoints.",
    decision:
      "Activate document versions atomically and retain historical citations. This improves recoverability, at the cost of more database state and worker coordination.",
    result:
      "Page-boundary chunking used 25.3% fewer provider input tokens than a cross-page baseline on 70 held-out synthetic bilingual questions. Three interrupted jobs recovered in controlled process-kill tests.",
    boundary:
      "The token comparison uses synthetic material. Recovery was tested with fixture embeddings. These local results do not establish production reliability or answer accuracy.",
  },
  6: {
    name: "AQB-FAS",
    area: "Computer vision",
    summary: "Face anti-spoofing with a smaller payload.",
    introduction:
      "A split-computing framework that sends a fixed-size facial representation from an edge encoder to a server-side classifier. Accepted at RIVF 2026.",
    contribution:
      "As first author, I proposed the core idea and architecture, led evaluation and interpreted the threshold-policy and deployment results.",
    decision:
      "Transmit a fixed 64-byte latent instead of an image. This reduces communication, but introduces a representation bottleneck and cross-domain robustness trade-offs.",
    result:
      "A 64-byte payload replaces a 150,528-byte RGB input. CelebA-Spoof test accuracy was 97.01%, with 2.66% ACER at a validation-selected threshold.",
    boundary:
      "Edge-encoder timing excludes network latency. Source-domain performance does not guarantee cross-domain robustness.",
  },
};
