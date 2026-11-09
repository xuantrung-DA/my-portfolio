# Portfolio design concepts

## Interactive HTML preview

Open [portfolio-preview.html](./portfolio-preview.html) directly in a browser. It works offline with embedded project architecture images, portrait and downloadable CV. The top preview bar switches between Terracotta and Warm Neutral. Both palettes use the same horizontal-navigation layout so their colors can be compared directly; this HTML does not reproduce the sidebar layout of image A.

The preview includes responsive navigation, three selected projects with expandable decisions/evaluation, image enlargement, an additional-project list and all six research entries. Accent text uses darker variants of the proposed palette colors for legibility. No website source or deployment configuration is changed.

To refresh the HTML from current portfolio data, run `node design/mockups/build-html-preview.mjs` from the project root. Editorial project summaries are maintained in that builder. Review them before publishing.

Validation: inspected in the browser at desktop and 390px mobile widths; no horizontal overflow, all four embedded images loaded, six research entries, Jan–May 2026 ECE dates, palette changes, native detail expansion and image-dialog opening/closing checked. Browser screenshot capture did not reliably preserve viewport sizing, so no screenshot exports are included.

Generated with the built-in ImageGen tool for design review. These are visual concepts, not implemented pages. Application previews are generated layout illustrations and must be replaced with real project screenshots. Generated lettering may contain errors; the project name is AQB-FAS.

## A — Warm Neutral

[View mockup](./portfolio-a-warm-neutral.png)

Palette: background `#FAF7F2`, text `#3F3A34`, accent `#A87D52`.

Prompt brief: Flat, high-resolution desktop academic and project portfolio for Nguyễn Xuân Trung. Quiet serif headings with sans-serif body, a narrow left navigation sidebar, warm neutral background, restrained brown links, generous whitespace and thin rules. Introduce an FPT AI undergraduate graduating June 2027, available part-time now and full-time July 2027. Show ECE internship Jan–May 2026, followed by three editorial project rows: TraceVision, Subject Knowledge Hub and AQB-FAS, with small conceptual application previews. Include a compact research list with two published and four accepted papers, and email contact. No glow, gradients, abstract AI art, technology badges, statistics counters or skill percentages.

Correction prompt: Change only the incorrect project heading to AQB-FAS, preserving the layout. ImageGen did not reliably resolve the lettering; use the correct spelling in implementation.

## C — Terracotta

[View mockup](./portfolio-c-terracotta.png)

Palette: background `#F7F6F4`, text `#26211D`, accent `#C07A55`, border `#D4D1CB`.

Prompt brief: Flat, high-resolution desktop personal technical portfolio for Nguyễn Xuân Trung. Horizontal top navigation, centered reading width, serif headings, sans-serif body, a two-column introduction with a concise personal information column. Use terracotta sparingly for a CV button and link underlines. Show ECE internship Jan–May 2026, then three project rows with small conceptual previews on the left and contribution summaries on the right: TraceVision, Subject Knowledge Hub and AQB-FAS. Include compact research entries, six papers total, two published and four accepted, and simple email contact. No cards with shadows, bento grids, gradients, AI graphics, metric counters or technology pills.

## Review notes

- Preserve factual content and replace conceptual previews with real screenshots.
- Verify contrast before implementing accent-colored text or buttons; dark text can be used on pale accent surfaces.
- Research titles in these concepts are abbreviated examples; retain full official titles on the implemented publication list.
- These are earlier design concepts. The approved Terracotta design is now implemented in the React source, with the owner-selected one-page CV and current research dates. The standalone HTML retains the earlier review snapshot.
