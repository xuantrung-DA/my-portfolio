import { useEffect, useRef, useState } from "react";

export default function ProjectImage({ project, priority = false }) {
  const [expanded, setExpanded] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!expanded) return undefined;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      trigger?.focus({ preventScroll: true });
    };
  }, [expanded]);

  if (!project.visualImage) return null;

  return (
    <>
      <figure className="project-figure">
        <button
          ref={triggerRef}
          className="image-button"
          type="button"
          onClick={() => setExpanded(true)}
          aria-label={`Enlarge ${project.title} architecture`}
        >
          <img
            src={project.visualImage}
            alt={project.visualAlt}
            width={project.visualWidth}
            height={project.visualHeight}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
          <span className="image-label">View architecture <span aria-hidden="true">↗</span></span>
        </button>
        <figcaption>{project.visualCaption}</figcaption>
      </figure>
      {expanded && (
        <dialog
          ref={dialogRef}
          className="image-dialog"
          aria-label={`${project.title} architecture`}
          onClose={() => setExpanded(false)}
          onCancel={(event) => {
            event.preventDefault();
            setExpanded(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              event.stopPropagation();
              setExpanded(false);
            }
          }}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
              setExpanded(false);
            }
          }}
        >
          <div className="image-dialog-header">
            <p>Project architecture</p>
            <button className="plain-button" type="button" onClick={() => setExpanded(false)} autoFocus>Close <span aria-hidden="true">×</span></button>
          </div>
          <img src={project.visualImage} alt={project.visualAlt} width={project.visualWidth} height={project.visualHeight} />
          <p className="image-dialog-caption">{project.visualCaption}</p>
        </dialog>
      )}
    </>
  );
}
