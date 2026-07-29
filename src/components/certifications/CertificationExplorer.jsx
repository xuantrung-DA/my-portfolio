import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaCertificate,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaSearch,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import Card from "../ui/Card";

const PAGE_SIZE = 4;

const quickFilters = [
  "All",
  "AI Engineering",
  "Deep Learning",
  "NLP",
  "MLOps",
  "Data Science",
  "Cloud",
  "Software Engineering",
];

const normalize = (value) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const matchesTopic = (certificate, topic) => {
  if (topic === "All") return true;

  const normalizedTopic = normalize(topic);
  return certificate.skills.some((skill) => {
    const normalizedSkill = normalize(skill);
    return (
      normalizedSkill.includes(normalizedTopic) ||
      normalizedTopic.includes(normalizedSkill)
    );
  });
};

function CertificationCard({ certificate, query }) {
  const normalizedQuery = normalize(query);
  const isSpecialization = certificate.type === "Specialization";
  const TypeIcon = isSpecialization ? FaLayerGroup : FaCertificate;

  return (
    <Card gold className="h-full !p-6 sm:!p-7 flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          title={
            isSpecialization
              ? "Specialization — a multi-course learning program"
              : "Course certificate — a single completed course"
          }
          className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${
            isSpecialization
              ? "bg-gold/10 border-gold/25 text-gold"
              : "bg-bg-tertiary border-border text-text-secondary"
          }`}
        >
          <TypeIcon size={22} aria-hidden="true" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-gold text-xs tracking-widest uppercase">
            {certificate.date}
          </span>
          <span className="rounded-full border border-border bg-bg-tertiary/70 px-2.5 py-1 text-[10px] uppercase tracking-widest text-text-muted">
            {certificate.type}
          </span>
        </div>
      </div>

      {certificate.honors && (
        <div
          title="Completed the course's additional honors requirements"
          aria-label="With Honors — completed additional honors requirements"
          className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold"
        >
          <FaStar size={10} />
          With Honors
        </div>
      )}

      <h3 className="font-heading text-lg sm:text-xl text-text-primary mb-2">
        {certificate.title}
      </h3>
      <p className="text-text-secondary text-sm mb-5">{certificate.issuer}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {certificate.skills.map((skill) => {
          const isMatch =
            normalizedQuery && normalize(skill).includes(normalizedQuery);

          return (
            <span
              key={skill}
              className={`rounded-md border px-2.5 py-1 text-xs transition-colors ${
                isMatch
                  ? "border-gold/50 bg-gold/20 text-gold-light"
                  : "border-border bg-bg-tertiary/70 text-text-secondary"
              }`}
            >
              {skill}
            </span>
          );
        })}
      </div>

      {certificate.credentialUrl && (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
        >
          Verify credential <FaExternalLinkAlt size={11} />
        </a>
      )}
    </Card>
  );
}

export default function CertificationExplorer({ certifications }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsRef = useRef(null);

  const filtered = useMemo(() => {
    const normalizedQuery = normalize(query);

    return [...certifications]
      .sort((a, b) => a.priority - b.priority)
      .filter((certificate) => {
        if (!matchesTopic(certificate, activeFilter)) return false;
        if (!normalizedQuery) return true;

        const searchText = normalize(
          [
            certificate.title,
            certificate.issuer,
            certificate.type,
            ...certificate.skills,
          ].join(" "),
        );

        return searchText.includes(normalizedQuery);
      });
  }, [certifications, query, activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const visibleCertificates = filtered.slice(
    pageStart,
    pageStart + PAGE_SIZE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [query, activeFilter]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearSearch = () => {
    setQuery("");
    setActiveFilter("All");
  };

  const firstResult = filtered.length ? pageStart + 1 : 0;
  const lastResult = Math.min(pageStart + PAGE_SIZE, filtered.length);

  return (
    <div>
      <div className="mx-auto mb-8 max-w-4xl">
        <label
          htmlFor="certificate-search"
          className="mb-3 block text-sm font-medium text-text-secondary"
        >
          Explore certifications by title, provider, or skill
        </label>
        <div className="relative">
          <FaSearch
            size={15}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            id="certificate-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search e.g. Deep Learning, NLP, MLOps, SQL..."
            className="min-h-12 w-full rounded-xl border border-border bg-bg-primary/70 py-3 pl-11 pr-12 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-gold/50 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear certificate search"
              className="absolute right-2 top-1/2 flex min-h-10 min-w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-bg-tertiary hover:text-gold"
            >
              <FaTimes size={14} />
            </button>
          )}
        </div>

        <div
          className="mt-4 flex flex-wrap gap-2"
          aria-label="Certification topic filters"
        >
          {quickFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`min-h-10 cursor-pointer rounded-full border px-4 py-2 text-xs transition-colors ${
                activeFilter === filter
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border bg-bg-primary/40 text-text-secondary hover:border-gold/30 hover:text-text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div ref={resultsRef} className="scroll-mt-24">
        <div
          className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted"
          aria-live="polite"
        >
          <span>
            Showing {firstResult}–{lastResult} of {filtered.length}
          </span>
          {(query || activeFilter !== "All") && (
            <button
              type="button"
              onClick={clearSearch}
              className="cursor-pointer text-gold transition-colors hover:text-gold-light"
            >
              Clear search & filters
            </button>
          )}
        </div>

        {visibleCertificates.length ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${query}-${activeFilter}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
            >
              {visibleCertificates.map((certificate) => (
                <CertificationCard
                  key={certificate.title}
                  certificate={certificate}
                  query={query}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="rounded-xl border border-border bg-bg-primary/40 px-6 py-14 text-center">
            <FaSearch
              size={24}
              className="mx-auto mb-4 text-text-muted"
              aria-hidden="true"
            />
            <h3 className="font-heading text-xl text-text-primary">
              No matching certifications
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Try another skill, provider, or topic.
            </p>
            <button
              type="button"
              onClick={clearSearch}
              className="mt-5 min-h-11 cursor-pointer rounded-lg border border-gold/30 bg-gold/10 px-5 py-2 text-sm text-gold transition-colors hover:bg-gold/15"
            >
              Clear search
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <nav
            className="mt-9 flex flex-wrap items-center justify-center gap-2"
            aria-label="Certification pages"
          >
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous certification page"
              className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-gold/30 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35"
            >
              <FaChevronLeft size={12} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-label={`Certification page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`min-h-11 min-w-11 cursor-pointer rounded-lg border text-sm transition-colors ${
                    currentPage === page
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-border text-text-secondary hover:border-gold/30 hover:text-gold"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next certification page"
              className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-gold/30 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35"
            >
              <FaChevronRight size={12} />
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
