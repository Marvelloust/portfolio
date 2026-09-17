(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let reduceMotion = reduce.matches;
  reduce.addEventListener?.("change", (e) => {
    reduceMotion = e.matches;
    location.reload();
  });

  const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(max, n));
  const mix = (a, b, t) => a + (b - a) * t;
  const ease = (t) => 1 - Math.pow(1 - clamp(t), 3);
  const headerOffset = () =>
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header"),
    ) || 72;
  const progress = (el, offset = headerOffset()) => {
    const r = el.getBoundingClientRect();
    const visible = Math.max(1, innerHeight - offset);
    const travel = Math.max(1, el.offsetHeight - visible);
    return clamp((-r.top + offset) / travel);
  };
  const set = (el, key, val) => el?.style.setProperty(key, val);

  document.documentElement.classList.add("motion-ready");

  // Only run expensive scene calculations while a scene is near the viewport.
  // This keeps the cinematic sequences without making every scroll event update
  // four off-screen compositions at once.
  const sceneActive = new WeakMap();
  const observeScene = (el) => {
    if (!el) return;
    sceneActive.set(el, true);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            sceneActive.set(entry.target, entry.isIntersecting),
          );
        },
        { rootMargin: "35% 0px 35% 0px", threshold: 0 },
      );
      io.observe(el);
    }
  };
  const sceneIsActive = (el) => !el || sceneActive.get(el) !== false;

  // Master record: compresses without letting the portrait invade the identity type.
  const hero = document.querySelector("[data-master-hero]");
  function heroTick() {
    if (!hero || !sceneIsActive(hero) || reduceMotion || innerWidth < 901)
      return;
    const p = scrollY < 2 ? 0 : progress(hero);
    const s = ease(p);
    const stage = hero.querySelector(".master-hero__sticky");
    set(stage, "--hero-name-scale", String(mix(1, 0.62, s)));
    set(stage, "--hero-name-y", `${mix(0, -16, s)}vh`);
    set(stage, "--hero-name-x", `${mix(0, -3.2, s)}vw`);
    set(stage, "--hero-meta-o", String(1 - clamp((p - 0.14) / 0.34)));
    set(stage, "--hero-copy-o", String(1 - clamp((p - 0.24) / 0.34)));
    set(stage, "--portrait-scale", String(mix(1, 0.79, s)));
    set(stage, "--portrait-x", `${mix(0, 5.5, s)}vw`);
    set(stage, "--portrait-y", `${mix(0, -4, s)}vh`);
    set(stage, "--portrait-mask", `${mix(0, 12, s)}%`);
    set(stage, "--hero-rail", String(s));
  }

  // Archive aperture: opens quickly enough that the visitor never spends a viewport
  // scrolling through a tiny image floating in blank space.
  const aperture = document.querySelector("[data-archive-aperture]");
  function apertureTick() {
    if (
      !aperture ||
      !sceneIsActive(aperture) ||
      reduceMotion ||
      innerWidth < 901
    )
      return;
    const p = progress(aperture);
    const stage = aperture.querySelector(".archive-aperture__sticky");
    const open = ease(clamp((p - 0.01) / 0.5));
    const settle = ease(clamp((p - 0.36) / 0.27));
    const minW = Math.min(420, Math.max(300, innerWidth * 0.24));
    const minH = Math.min(
      290,
      Math.max(190, (innerHeight - headerOffset()) * 0.28),
    );
    set(stage, "--ap-maxw", `${mix(minW, innerWidth, open)}px`);
    set(
      stage,
      "--ap-maxh",
      `${mix(minH, innerHeight - headerOffset(), open)}px`,
    );
    set(stage, "--ap-radius", `${mix(18, 0, open)}px`);
    set(stage, "--ap-photo-scale", String(mix(1.22, 1, open)));
    set(stage, "--ap-photo-x", `${mix(10, 0, open)}%`);
    set(stage, "--ap-label-x", `${mix(-20, 0, settle)}vw`);
    set(stage, "--ap-label-o", String(settle));
    set(stage, "--ap-ui-o", String(clamp((p - 0.28) / 0.2)));
    set(stage, "--ap-bracket", String(open));
  }

  // Assembly bench: every phase keeps visible evidence on screen. The sequence is
  // enter -> lock -> break -> file, with no visually empty phase between them.
  const bench = document.querySelector("[data-build-bench]");
  function benchTick() {
    if (!bench || !sceneIsActive(bench) || reduceMotion || innerWidth < 901)
      return;
    const p = progress(bench);
    const stage = bench.querySelector(".build-bench__sticky");
    const enter = ease(clamp(p / 0.24));
    const lock = ease(clamp((p - 0.15) / 0.27));
    const breakP = ease(clamp((p - 0.5) / 0.22));
    const file = ease(clamp((p - 0.7) / 0.24));

    set(
      stage,
      "--bench-grid-o",
      String(mix(0.12, 0.66, enter) * (1 - breakP * 0.35)),
    );
    set(stage, "--bench-frame-scale", String(mix(0.38, 1, lock)));
    set(stage, "--bench-frame-r", `${mix(-5, 0, lock) + mix(0, 4, breakP)}deg`);
    set(stage, "--bench-title-clip", `${mix(68, 0, lock)}%`);
    set(stage, "--bench-title-y", `${mix(30, 0, lock) - mix(0, 18, breakP)}px`);
    set(stage, "--bench-stamp-o", String(lock * (1 - breakP)));

    const pieces = [...stage.querySelectorAll(".bench-piece")];
    const starts = [
      [-34, -20, -6],
      [34, -16, 5],
      [-31, 23, 4],
      [32, 21, -5],
    ];
    pieces.forEach((piece, i) => {
      const [sx, sy, sr] = starts[i % starts.length];
      let x = mix(sx, 0, enter),
        y = mix(sy, 0, enter),
        r = mix(sr, 0, enter);
      x += mix(0, (i % 2 ? 1 : -1) * (13 + i * 3), breakP);
      y += mix(0, (i < 2 ? -1 : 1) * (14 + i * 2), breakP);
      r += mix(0, (i % 2 ? 1 : -1) * (2 + i), breakP);
      x = mix(x, (i - 1.5) * 14, file);
      y = mix(y, 16, file);
      r = mix(r, 0, file);
      set(piece, "--piece-x", `${x}vw`);
      set(piece, "--piece-y", `${y}vh`);
      set(piece, "--piece-r", `${r}deg`);
      set(
        piece,
        "--piece-scale",
        String(mix(0.82, 1, enter) * (1 - breakP * 0.06)),
      );
      set(piece, "--piece-o", String(mix(0.28, 1, enter) * (1 - file * 0.1)));
    });
    set(stage, "--bench-spines-o", String(file));
    set(stage, "--bench-spines-y", `${mix(20, 0, file)}px`);
  }

  // System wiring draws one connected product chain.
  const system = document.querySelector("[data-system-map]");
  function systemTick() {
    if (!system || !sceneIsActive(system) || reduceMotion || innerWidth < 901)
      return;
    const p = progress(system);
    system.style.setProperty("--system-p", String(p));
    [...system.querySelectorAll(".system-wire")].forEach((path) => {
      try {
        const len = path._len || (path._len = path.getTotalLength());
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len * (1 - p);
      } catch (_) {}
    });
    [...system.querySelectorAll(".system-node")].forEach((node, i) => {
      const local = clamp((p - (i * 0.095 + 0.02)) / 0.15);
      set(node, "--node-o", String(mix(0.32, 1, local)));
      set(node, "--node-scale", String(mix(0.96, 1, local)));
    });
    const pulse = system.querySelector(".system-pulse");
    const pulsePath = system.querySelector("[data-pulse-path]");
    if (pulse && pulsePath) {
      try {
        const len =
          pulsePath._len || (pulsePath._len = pulsePath.getTotalLength());
        const pp = clamp((p - 0.14) / 0.7);
        const pt = pulsePath.getPointAtLength(pp * len);
        pulse.setAttribute("cx", pt.x);
        pulse.setAttribute("cy", pt.y);
        pulse.style.opacity = p > 0.12 && p < 0.94 ? 1 : 0;
      } catch (_) {}
    }
  }

  // Case-study artifact theatre. The previous implementation left every image partly
  // visible, which produced a random pile of oversized screens. This version keeps the
  // current artifact dominant, its neighbours as context, and everything else out.
  const theatres = [...document.querySelectorAll("[data-artifact-theatre]")];
  function theatreLayout(theatre) {
    if (!theatre) return;
    const count = theatre.querySelectorAll(".artifact-shot").length;
    if (reduceMotion || innerWidth < 901) {
      theatre.style.height = "auto";
      return;
    }
    const vh = Math.max(245, 110 + Math.max(0, count - 1) * 42);
    theatre.style.height = `${vh}vh`;
  }
  function theatreTick(theatre) {
    if (!theatre || !sceneIsActive(theatre) || reduceMotion || innerWidth < 901)
      return;
    const p = progress(theatre);
    const shots = [...theatre.querySelectorAll(".artifact-shot")];
    const kind = theatre.dataset.kind || "gallery";
    const n = Math.max(1, shots.length - 1);
    const cursor = p * n;
    const stage = theatre.querySelector(".artifact-theatre__sticky");
    set(stage, "--theatre-p", String(p));

    let activeIndex = Math.round(cursor);
    shots.forEach((shot, i) => {
      const delta = i - cursor;
      const ad = Math.abs(delta);
      const focus = clamp(1 - ad / 0.72);
      const presence = clamp(1 - ad / 1.35);
      let x = 0,
        y = 0,
        r = 0;

      if (kind === "time") {
        x = delta * 50;
        y = Math.sin(delta * 0.8) * 4;
        r = delta * -1.3;
      } else if (kind === "news") {
        x = delta * 42;
        y = (i % 2 ? 1 : -1) * ad * 8;
        r = (i % 2 ? 1 : -1) * delta * 2.5;
      } else if (kind === "commerce") {
        x = delta * 54;
        y = ad * 8;
        r = delta * 1.4;
      } else if (kind === "gallery") {
        x = delta * 47;
        y = ((i % 3) - 1) * ad * 7;
        r = delta * 1.7;
      } else if (kind === "fashion") {
        x = delta * 36;
        y = delta * -10;
        r = (i % 2 ? 1 : -1) * delta * 1.8;
      } else if (kind === "mobile" || kind === "payment") {
        x = delta * 29;
        y = ad * 4;
        r = delta * (kind === "payment" ? 3.5 : 2.5);
      } else if (kind === "auto") {
        x = delta * 50;
        y = (i % 2 ? 1 : -1) * ad * 5;
        r = delta * 1.2;
      } else {
        x = delta * 45;
      }

      const scale = mix(0.84, 1, focus);
      const opacity =
        presence <= 0 ? 0 : mix(0.05, 1, Math.pow(presence, 1.35));
      set(shot, "--shot-x", `${x}vw`);
      set(shot, "--shot-y", `${y}vh`);
      set(shot, "--shot-r", `${r}deg`);
      set(shot, "--shot-scale", String(scale));
      set(shot, "--shot-o", String(opacity));
      shot.style.pointerEvents = i === activeIndex ? "auto" : "none";
      shot.classList.toggle("is-active", i === activeIndex);
    });

    activeIndex = Math.min(shots.length - 1, Math.max(0, activeIndex));
    const read = theatre.querySelector("[data-theatre-readout]");
    if (read)
      read.textContent = `ARTIFACT ${String(activeIndex + 1).padStart(2, "0")} / ${String(shots.length).padStart(2, "0")}`;
  }

  theatres.forEach(theatreLayout);

  // Portrait identity scan on About.
  const identity = document.querySelector("[data-identity-scan]");
  [hero, aperture, bench, system, identity, ...theatres].forEach(observeScene);
  function identityTick() {
    if (!identity || !sceneIsActive(identity) || reduceMotion) return;
    const p = progress(identity);
    identity.style.setProperty("--scan-y", `${mix(-20, 120, p)}%`);
    identity.style.setProperty("--scan-reveal", `${mix(78, 0, ease(p))}%`);
  }

  let ticking = false;
  function tick() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      heroTick();
      apertureTick();
      benchTick();
      systemTick();
      theatres.forEach(theatreTick);
      identityTick();
      ticking = false;
    });
  }

  addEventListener("scroll", tick, { passive: true });
  addEventListener("resize", () => {
    theatres.forEach(theatreLayout);
    tick();
  });
  tick();
})();

/* V14 — project-specific flagship evidence scenes. These use native scrolling and
   only run while the relevant scene is near the viewport. */
(() => {
  const scenes = [...document.querySelectorAll("[data-flagship-evidence]")];
  if (!scenes.length) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const active = new WeakSet();
  const clamp = (n) => Math.max(0, Math.min(1, n));
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const mix = (a, b, t) => a + (b - a) * t;
  const set = (el, p, v) => el && el.style.setProperty(p, v);
  const progress = (el) => {
    const r = el.getBoundingClientRect();
    const range = Math.max(1, r.height - innerHeight);
    return clamp(-r.top / range);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.isIntersecting ? active.add(e.target) : active.delete(e.target),
        ),
      { rootMargin: "35% 0px" },
    );
    scenes.forEach((s) => io.observe(s));
  } else scenes.forEach((s) => active.add(s));

  const read = (scene, labels, p) => {
    const out = scene.querySelector("[data-evidence-readout]");
    if (!out) return;
    const i = Math.min(
      labels.length - 1,
      Math.floor(clamp(p * 0.999) * labels.length),
    );
    out.textContent = labels[i];
  };

  function time(scene, p) {
    const req = [...scene.querySelectorAll(".time-request")];
    const slot = scene.querySelector(".time-slot"),
      lock = scene.querySelector(".time-lock"),
      proof = scene.querySelector(".time-proof");
    const t = ease(clamp(p / 0.62));
    const offsets = [
      [-26, -38],
      [-23, 0],
      [27, -14],
    ];
    req.forEach((el, i) => {
      const [x, y] = offsets[i];
      set(
        el,
        "transform",
        `translate(${mix(0, x * -1, t)}vw,${mix(0, y * -1, t)}px) scale(${mix(1, 0.86, t)})`,
      );
      el.style.opacity = String(mix(1, 0.35, clamp((p - 0.48) / 0.22)));
    });
    if (slot)
      slot.style.transform = `translate(-50%,-50%) scale(${mix(0.82, 1.08, ease(clamp((p - 0.12) / 0.45)))})`;
    if (lock) {
      lock.style.opacity = String(clamp((p - 0.43) / 0.16));
      lock.style.transform = `translateX(-50%) translateY(${mix(18, 0, ease(clamp((p - 0.43) / 0.22)))}px)`;
    }
    if (proof) {
      proof.style.opacity = String(mix(0.15, 0.82, clamp((p - 0.58) / 0.28)));
      proof.style.transform = `translateY(${mix(22, 0, ease(clamp((p - 0.58) / 0.28)))}px)`;
    }
    read(
      scene,
      ["REQUEST / 01", "NORMALIZE / 02", "CONSTRAINT / 03", "COMMIT / 04"],
      p,
    );
  }

  function route(scene, p) {
    const dot = scene.querySelector(".route-dot"),
      path = scene.querySelector("[data-route-path]");
    const cards = [...scene.querySelectorAll(".route-card")];
    cards.forEach((c, i) => {
      const local = clamp((p - i * 0.13) / 0.38);
      c.style.opacity = String(mix(0.28, 1, ease(local)));
      c.style.transform = `translateY(${mix(32, 0, ease(local))}px) rotate(${i === 0 ? -3 : i === 2 ? 3 : 0}deg)`;
    });
    if (dot && path) {
      try {
        const len = path._moLen || (path._moLen = path.getTotalLength());
        const pt = path.getPointAtLength(clamp(p) * len);
        const svg = path.ownerSVGElement;
        const vb = svg.viewBox.baseVal;
        const rect = svg.getBoundingClientRect();
        const x = ((pt.x - vb.x) / vb.width) * rect.width;
        const y = ((pt.y - vb.y) / vb.height) * rect.height;
        dot.style.transform = `translate(${x - rect.width * 0.08}px,${y - rect.height * 0.7}px)`;
      } catch (_) {}
    }
    read(
      scene,
      ["DISCOVER / 01", "CHOOSE / 02", "ROUTE / 03", "RECEIVE / 04"],
      p,
    );
  }

  function support(scene, p) {
    const panels = [...scene.querySelectorAll(".support-panel")],
      links = [...scene.querySelectorAll(".support-link")];
    panels.forEach((el, i) => {
      const local = clamp((p - i * 0.18) / 0.28);
      el.style.opacity = String(mix(0.18, 1, ease(local)));
      el.style.transform = `translateY(${mix(34, 0, ease(local))}px) scale(${mix(0.96, 1, ease(local))})`;
    });
    links.forEach((el, i) => {
      const local = clamp((p - (0.18 + i * 0.22)) / 0.22);
      el.style.transform = `scaleX(${ease(local)})`;
      el.style.opacity = String(local);
    });
    read(
      scene,
      ["TICKET / 01", "CONTEXT / 02", "GROUND / 03", "REVIEW / 04"],
      p,
    );
  }

  function approval(scene, p) {
    const states = [...scene.querySelectorAll(".approval-state")],
      arrows = [...scene.querySelectorAll(".approval-arrow")];
    states.forEach((el, i) => {
      const local = clamp((p - i * 0.2) / 0.25);
      el.style.opacity = String(mix(0.2, 1, ease(local)));
      el.style.transform = `translateY(${mix(28, 0, ease(local))}px)`;
    });
    arrows.forEach((el, i) => {
      const local = clamp((p - (0.14 + i * 0.24)) / 0.16);
      el.style.opacity = String(local);
      el.style.transform = `translateX(${mix(-10, 0, ease(local))}px)`;
    });
    const stamp = scene.querySelector(".approval-stamp"),
      proof = scene.querySelector(".approval-proof");
    if (stamp) {
      const local = clamp((p - 0.58) / 0.2);
      stamp.style.opacity = String(local);
      stamp.style.transform = `translate(-50%,-50%) rotate(${mix(-12, -4, ease(local))}deg) scale(${mix(1.3, 1, ease(local))})`;
    }
    if (proof) {
      const local = clamp((p - 0.68) / 0.2);
      proof.style.opacity = String(mix(0.1, 0.68, local));
      proof.style.transform = `translateY(${mix(18, 0, ease(local))}px)`;
    }
    read(
      scene,
      ["REQUEST / 01", "AUTHORIZE / 02", "DECIDE / 03", "AUDIT / 04"],
      p,
    );
  }

  function offline(scene, p) {
    const capture = scene.querySelector(".capture"),
      sync = scene.querySelector(".sync"),
      verify = scene.querySelector(".verify"),
      queue = scene.querySelector(".offline-queue"),
      signal = [...scene.querySelectorAll(".offline-signal i")];
    if (capture) {
      capture.style.transform = `translateX(${mix(0, 18, ease(clamp(p / 0.4)))}px)`;
      capture.style.opacity = String(mix(1, 0.52, clamp((p - 0.46) / 0.3)));
    }
    if (queue) {
      const local = clamp((p - 0.16) / 0.25);
      queue.style.opacity = String(mix(0.2, 1, ease(local)));
      queue.style.transform = `scale(${mix(0.9, 1, ease(local))})`;
    }
    if (sync) {
      const local = clamp((p - 0.34) / 0.28);
      sync.style.opacity = String(mix(0.18, 1, ease(local)));
      sync.style.transform = `translateY(${mix(34, 0, ease(local))}px)`;
    }
    signal.forEach((el, i) => {
      const local = clamp((p - (0.48 + i * 0.05)) / 0.2);
      el.style.transform = `scaleY(${mix(0.2, 1, ease(local))})`;
      el.style.opacity = String(local);
    });
    if (verify) {
      const local = clamp((p - 0.66) / 0.25);
      verify.style.opacity = String(mix(0.12, 1, ease(local)));
      verify.style.transform = `translateX(${mix(24, 0, ease(local))}px)`;
    }
    read(scene, ["CAPTURE / 01", "QUEUE / 02", "SYNC / 03", "VERIFY / 04"], p);
  }

  function tick() {
    if (reduce.matches || innerWidth < 901) return;
    scenes.forEach((scene) => {
      if (!active.has(scene)) return;
      const p = progress(scene);
      const kind = scene.dataset.flagshipEvidence;
      if (kind === "time") time(scene, p);
      else if (kind === "route") route(scene, p);
      else if (kind === "support") support(scene, p);
      else if (kind === "approval") approval(scene, p);
      else if (kind === "offline") offline(scene, p);
    });
  }
  let raf = 0;
  const schedule = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      tick();
    });
  };
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  schedule();
})();
