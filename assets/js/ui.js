(() => {
  document.querySelectorAll("[data-disclosure]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrap = btn.closest("[data-disclosure-wrap]");
      const open = wrap.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  document.querySelectorAll("[data-stack-system]").forEach((group) => {
    const tokens = [...group.querySelectorAll("[data-stack-token]")];
    const projects = [...group.querySelectorAll("[data-stack-project]")];
    const read = group.querySelector("[data-stack-readout]");
    const count = group.querySelector("[data-stack-count]");

    function apply(token) {
      const key = token?.dataset.stackToken || "all";
      tokens.forEach((t) => t.classList.toggle("is-active", t === token));
      let visible = 0;
      projects.forEach((project) => {
        const tags = (project.dataset.stackProject || "")
          .split(",")
          .map((v) => v.trim())
          .filter(Boolean);
        const match = key === "all" || tags.includes(key);
        project.hidden = !match;
        project.classList.toggle("is-active", match);
        if (match) visible += 1;
      });
      if (count)
        count.textContent = `${String(visible).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")} RECORDS`;
      if (read)
        read.textContent =
          token?.dataset.readout || "ALL PERSONAL + TEAM RELATIONSHIPS";
    }

    tokens.forEach((token) =>
      token.addEventListener("click", () => apply(token)),
    );
    apply(tokens.find((t) => t.classList.contains("is-active")) || tokens[0]);
  });

  // Artifact walls are intentionally compact. Clicking or focusing an artifact opens
  // the original supplied image in a dedicated inspection surface.
  const walls = [...document.querySelectorAll(".artifact-wall")];
  if (!walls.length) return;

  const theatreKind =
    document.querySelector("[data-artifact-theatre]")?.dataset.kind || "";
  const phoneProject = theatreKind === "mobile" || theatreKind === "payment";
  const deviceMedia = matchMedia("(min-width: 901px)");
  const phoneShots = [...document.querySelectorAll(".artifact-shot.is-phone")];
  function applyDevicePresentation() {
    const showDevice = phoneProject && deviceMedia.matches;
    walls.forEach((wall) =>
      wall.classList.toggle("artifact-wall--phone", showDevice),
    );
    phoneShots.forEach((shot) => shot.classList.toggle("is-phone", showDevice));
    document
      .querySelector(".artifact-lightbox")
      ?.classList.toggle("is-phone", showDevice);
  }
  applyDevicePresentation();
  deviceMedia.addEventListener?.("change", applyDevicePresentation);

  const figures = walls.flatMap((wall) => [...wall.querySelectorAll("figure")]);
  const items = figures
    .map((figure, index) => {
      const img = figure.querySelector("img");
      figure.tabIndex = 0;
      figure.setAttribute("role", "button");
      figure.setAttribute(
        "aria-label",
        `Inspect supplied artifact ${index + 1}`,
      );
      figure.dataset.artifactIndex = index;
      return {
        figure,
        src: img?.getAttribute("src") || "",
        alt: img?.getAttribute("alt") || `Supplied artifact ${index + 1}`,
      };
    })
    .filter((item) => item.src);

  if (!items.length) return;

  const modal = document.createElement("div");
  modal.className = "artifact-lightbox";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Project artifact inspector");
  modal.innerHTML = `
    <div class="artifact-lightbox__bar">
      <span>ARTIFACT INSPECTOR / SUPPLIED PROJECT IMAGE</span>
      <button class="artifact-lightbox__close" type="button" aria-label="Close artifact inspector">×</button>
    </div>
    <div class="artifact-lightbox__stage">
      <button class="artifact-lightbox__nav artifact-lightbox__prev" type="button" aria-label="Previous artifact">←</button>
      <div class="artifact-lightbox__media"><img alt=""></div>
      <button class="artifact-lightbox__nav artifact-lightbox__next" type="button" aria-label="Next artifact">→</button>
    </div>
    <div class="artifact-lightbox__caption"><span data-artifact-count></span><span data-artifact-caption></span></div>`;
  document.body.append(modal);
  modal.classList.toggle("is-phone", phoneProject && deviceMedia.matches);

  const media = modal.querySelector(".artifact-lightbox__media img");
  const count = modal.querySelector("[data-artifact-count]");
  const caption = modal.querySelector("[data-artifact-caption]");
  const close = modal.querySelector(".artifact-lightbox__close");
  const prev = modal.querySelector(".artifact-lightbox__prev");
  const next = modal.querySelector(".artifact-lightbox__next");
  let current = 0;
  let lastFocus = null;

  function render(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    media.src = item.src;
    media.alt = item.alt;
    count.textContent = `ARTIFACT ${String(current + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    caption.textContent = item.alt.toUpperCase();
  }

  function open(index, trigger) {
    lastFocus = trigger || document.activeElement;
    render(index);
    modal.classList.add("is-open");
    document.body.classList.add("artifact-modal-open");
    requestAnimationFrame(() => close.focus());
  }

  function shut() {
    modal.classList.remove("is-open");
    document.body.classList.remove("artifact-modal-open");
    if (lastFocus?.focus) lastFocus.focus();
  }

  figures.forEach((figure) => {
    const index = Number(figure.dataset.artifactIndex || 0);
    figure.addEventListener("click", () => open(index, figure));
    figure.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(index, figure);
      }
    });
  });

  close.addEventListener("click", shut);
  prev.addEventListener("click", () => render(current - 1));
  next.addEventListener("click", () => render(current + 1));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) shut();
  });
  addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") shut();
    if (e.key === "ArrowLeft") render(current - 1);
    if (e.key === "ArrowRight") render(current + 1);
  });
})();
