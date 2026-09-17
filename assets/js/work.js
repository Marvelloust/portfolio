(() => {
  const page = document.querySelector("[data-work-page]");
  if (!page) return;

  const items = [...page.querySelectorAll("[data-record-item]")];
  const teamItems = [...page.querySelectorAll("[data-team-record]")];
  const buttons = [...page.querySelectorAll("[data-work-filter]")];
  const status = page.querySelector("[data-work-status]");
  const lens = page.querySelector("[data-work-lens]");
  const lensCode = lens?.querySelector("[data-work-lens-code]");
  const lensTitle = lens?.querySelector("[data-work-lens-title]");
  const lensCopy = lens?.querySelector("[data-work-lens-copy]");
  const lensCount = lens?.querySelector("[data-work-lens-count]");
  const teamSection = page.querySelector("#neegles-contributions");

  const MODES = {
    all: {
      code: "ARCHIVE / ALL",
      title: "Everything currently filed.",
      copy: "Personal builds lead the cabinet; team contributions remain visibly separated below.",
    },
    personal: {
      code: "OWNERSHIP / PERSONAL",
      title: "Things I can claim as my own build records.",
      copy: "The lens prioritizes personal builds and removes company contribution records from the active inspection set.",
    },
    fullstack: {
      code: "RESPONSIBILITY / FULL-STACK",
      title: "Surface connected to application rules.",
      copy: "Records where the work reaches beyond interface presentation into backend, data, integration or system behavior.",
    },
    mobile: {
      code: "FORM FACTOR / MOBILE",
      title: "Touch-first and narrow-screen product work.",
      copy: "Mobile apps, PWAs and design records where compact hierarchy and touch behavior are part of the build.",
    },
    design: {
      code: "EVIDENCE / DESIGN",
      title: "Interface thinking with explicit design ownership.",
      copy: "Design records are shown as design evidence rather than presented as shipped engineering.",
    },
    team: {
      code: "OWNERSHIP / TEAM",
      title: "Work completed inside the Neegles team.",
      copy: "These records stay contribution-only: no independent case-study ownership is implied.",
    },
    wordpress: {
      code: "DELIVERY / WORDPRESS",
      title: "WordPress delivery completed with Neegles.",
      copy: "CMS and WordPress contributions are grouped as team delivery rather than personal product builds.",
    },
  };

  const modesFor = (el) => (el.dataset.mode || "").split(/\s+/).filter(Boolean);
  function applyMode(mode) {
    buttons.forEach((b) =>
      b.classList.toggle("is-active", b.dataset.workFilter === mode),
    );
    document.body.classList.remove(
      "mode-all",
      "mode-personal",
      "mode-fullstack",
      "mode-mobile",
      "mode-design",
      "mode-team",
      "mode-wordpress",
    );
    document.body.classList.add(`mode-${mode}`);

    let personalCount = 0,
      teamCount = 0;
    items.forEach((item) => {
      const modes = modesFor(item);
      const show =
        mode === "all" ||
        (mode === "personal"
          ? modes.includes("personal")
          : modes.includes(mode));
      item.classList.toggle("is-filtered-out", !show);
      item.setAttribute("aria-hidden", String(!show));
      if (show) personalCount++;
    });
    teamItems.forEach((item) => {
      const modes = modesFor(item);
      const show = mode === "all" || modes.includes(mode);
      item.classList.toggle("is-filtered-out", !show);
      item.setAttribute("aria-hidden", String(!show));
      if (show) teamCount++;
    });
    if (teamSection) {
      const showTeam =
        mode === "all" || mode === "team" || mode === "wordpress";
      teamSection.classList.toggle("is-filtered-out", !showTeam);
      teamSection.setAttribute("aria-hidden", String(!showTeam));
    }

    const total = personalCount + teamCount;
    if (status) {
      const ownership =
        mode === "team" || mode === "wordpress"
          ? "TEAM CONTRIBUTION"
          : mode === "all"
            ? "ARCHIVE"
            : "PERSONAL BUILD";
      status.textContent = `${String(total).padStart(2, "0")} ${ownership} RECORD${total === 1 ? "" : "S"} / ${mode.toUpperCase()}`;
    }
    const info = MODES[mode] || MODES.all;
    if (lens) {
      lens.classList.add("is-changing");
      lens.style.setProperty(
        "--lens-progress",
        `${Math.max(16, Math.min(100, (total / Math.max(1, items.length + teamItems.length)) * 100))}%`,
      );
      setTimeout(() => lens.classList.remove("is-changing"), 320);
    }
    if (lensCode) lensCode.textContent = info.code;
    if (lensTitle) lensTitle.textContent = info.title;
    if (lensCopy) lensCopy.textContent = info.copy;
    if (lensCount) lensCount.textContent = String(total).padStart(2, "0");
  }

  buttons.forEach((btn) =>
    btn.addEventListener("click", () =>
      applyMode(btn.dataset.workFilter || "all"),
    ),
  );
  applyMode("all");

  // Row click remains a fast path to the record.
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.closest("a,button")) return;
      const link = item.querySelector("a.record-item__arrow");
      if (link) link.click();
    });
  });

  // Desktop inspection preview.
  if (matchMedia("(pointer:fine)").matches) {
    const preview = document.createElement("div");
    preview.className = "inspection-preview";
    preview.innerHTML =
      '<div class="inspection-preview__label"><span class="mono"></span><b></b></div><div class="inspection-preview__image"><img alt=""></div><div class="inspection-preview__scan"></div>';
    document.body.append(preview);
    let tx = innerWidth * 0.68,
      ty = innerHeight * 0.46,
      cx = tx,
      cy = ty,
      active = null;
    const img = preview.querySelector("img"),
      id = preview.querySelector(".mono"),
      title = preview.querySelector("b");
    function activate(item) {
      if (item.classList.contains("is-filtered-out")) return;
      active = item;
      items.forEach((i) => i.classList.toggle("is-neighbour", i !== item));
      page.classList.add("is-inspecting");
      preview.style.setProperty(
        "--preview-accent",
        item.dataset.accent || "#7C6CF2",
      );
      img.src = item.dataset.preview || "";
      img.alt = `${item.dataset.title || "Project"} interface preview`;
      id.textContent = `${item.dataset.record || "RECORD"} / ${item.dataset.flagship === "true" ? "FLAGSHIP" : "INSPECT"}`;
      title.textContent = item.dataset.title || "";
      preview.classList.add("is-visible");
      item.classList.add("is-active");
    }
    function clear() {
      active?.classList.remove("is-active");
      active = null;
      items.forEach((i) => i.classList.remove("is-neighbour"));
      page.classList.remove("is-inspecting");
      preview.classList.remove("is-visible");
    }
    items.forEach((item) => {
      item.addEventListener("pointerenter", () => activate(item));
      item.addEventListener("focusin", () => activate(item));
      item.addEventListener("pointermove", (e) => {
        tx = e.clientX + 28;
        ty = e.clientY - 120;
      });
      item.addEventListener("pointerleave", clear);
      item.addEventListener("focusout", (e) => {
        if (!item.contains(e.relatedTarget)) clear();
      });
    });
    const loop = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      const w = preview.offsetWidth || 420,
        h = preview.offsetHeight || 300;
      const x = Math.max(18, Math.min(innerWidth - w - 18, cx));
      const y = Math.max(86, Math.min(innerHeight - h - 18, cy));
      preview.style.transform = `translate3d(${x}px,${y}px,0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  // Mobile inspection: explicit VIEW expands the local evidence without blocking navigation.
  page.querySelectorAll("[data-mobile-inspect]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const item = btn.closest("[data-record-item]");
      const open = item.classList.toggle("is-mobile-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "CLOSE VIEW" : "VIEW";
    });
  });

  // Defining interaction: a flagship record is physically retrieved from the cabinet.
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let retrieval = null,
    busy = false;
  function ensureRetrieval() {
    if (retrieval) return retrieval;
    retrieval = document.createElement("div");
    retrieval.className = "flagship-retrieval";
    retrieval.setAttribute("aria-hidden", "true");
    retrieval.innerHTML = `<span class="flagship-retrieval__bracket a">[</span><div class="flagship-retrieval__frame"><img alt=""></div><span class="flagship-retrieval__bracket b">]</span><div class="flagship-retrieval__meta"><span>[MO] / RECORD RETRIEVAL</span><strong></strong></div>`;
    document.body.append(retrieval);
    return retrieval;
  }
  function openFlagship(link, item) {
    const href = link.getAttribute("href");
    if (!href) return;
    if (reduce.matches || innerWidth < 901) {
      location.href = href;
      return;
    }
    if (busy) return;
    busy = true;
    const overlay = ensureRetrieval();
    const source = item;
    const rect = item.getBoundingClientRect();
    const frame = overlay.querySelector(".flagship-retrieval__frame");
    const image = overlay.querySelector("img");
    const label = overlay.querySelector(".flagship-retrieval__meta strong");
    image.src = item.dataset.preview || "";
    image.alt = `Opening ${item.dataset.title || "project"} record`;
    label.textContent = item.dataset.title || "BUILD RECORD";
    overlay.style.setProperty(
      "--retrieval-accent",
      item.dataset.accent || "#7C6CF2",
    );
    overlay.style.setProperty("--rx", `${rect.left + rect.width / 2}px`);
    overlay.style.setProperty("--ry", `${rect.top + rect.height / 2}px`);
    overlay.style.setProperty("--rw", `${Math.max(140, rect.width)}px`);
    overlay.style.setProperty("--rh", `${Math.max(90, rect.height)}px`);
    overlay.classList.add("is-active");
    requestAnimationFrame(() =>
      requestAnimationFrame(() => overlay.classList.add("is-expanded")),
    );
    setTimeout(() => {
      location.href = href;
    }, 680);
  }

  page.addEventListener(
    "click",
    (e) => {
      const link = e.target.closest("a[data-flagship-link]");
      if (!link) return;
      const item = link.closest("[data-record-item]");
      if (!item || item.dataset.flagship !== "true") return;
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        link.target === "_blank"
      )
        return;
      e.preventDefault();
      e.stopPropagation();
      openFlagship(link, item);
    },
    true,
  );
})();
