# Marvellous O. — Build Record V14

**Competition authorship edition** — an interactive archive of things Marvellous has actually built, designed, or contributed to.

The central rule is not “make a technical-looking portfolio.” It is:

> **Open → inspect → connect → verify → file.**

## What makes V14 different

- `[MO]` acts as an archive mechanism across identity, transitions, ownership and closing states.
- Five flagship records have project-specific interaction grammars rather than one case-study animation copied repeatedly:
  - **SwiftSlot** — time, collision, constraint and booking integrity
  - **KoraGo** — locality, route, discovery and delivery
  - **Relay** — support context, recommendation and human review
  - **Stamp** — authorization, state transition and approval
  - **Fieldnote** — offline capture, queue, sync and verification
- The Work archive has authored inspection modes: **All / Personal / Full-Stack / Mobile / Design / Team / WordPress**.
- Ownership is explicit: **Personal Build / Design Record / Team Contribution**.
- Neegles work is separated from independently owned work.
- Quiet editorial sections deliberately reduce grids/technical decoration so evidence-heavy scenes have more impact.
- Mobile uses its own tap/swipe evidence strategy instead of shrinking desktop sticky sequences.
- Dark mode is the first-visit default; a manual theme choice persists.
- Native scrolling and reduced-motion support are preserved.

## Run

### Direct local review

Extract the folder and open `index.html`.

### Recommended local server

Node.js 18+:

```bash
npm start
```

Then open:

`http://localhost:4173`

## Archive source of truth

`PROJECT_MANIFEST.json`

Current archive:

- **28 active records**
- **5 flagship personal records**
- **6 Neegles team-contribution records**

RecoverIQ and OiO are not part of this portfolio.

## Evidence and links

Project imagery is organized under:

`assets/projects/<project-name>/`

Unmapped supplied assets remain in:

`assets/projects/source-archive/`

Verified public repositories and demos are documented in:

`SOURCE_LINK_VERIFICATION_V14.md`

No source link, metric, client, role, project result or technology should be added unless it is genuinely known.

## Resume

Clean PDF:

`assets/resume/Marvellous-O-Resume.pdf`

The HTML Resume route remains printable, but the PDF is the recommended recruiter-facing document because browser print headers/footers are controlled by the browser.

## Contact

The intake currently prepares an email to:

`omoleyemarvellous@gmail.com`

For a deployed production version, a server-backed form endpoint can be added while keeping email as a fallback.

## Key implementation files

- `assets/css/styles.css` — visual system, authored project grammars, responsive and print styles
- `assets/js/site.js` — shared shell, theme, transitions and `[MO]` interactions
- `assets/js/motion.js` — cinematic/native-scroll motion system
- `assets/js/work.js` — archive modes and inspection state
- `assets/js/ui.js` — capability/relationship interactions
- `assets/js/contact.js` — contact validation and email handoff
- `PROJECT_MANIFEST.json` — archive data source
- `AUTHORSHIP_SYSTEM_V14.md` — V14 design rules
- `SOURCE_LINK_VERIFICATION_V14.md` — verified source/demo mapping
- `QA_REPORT_V14.md` — final package QA

## Final content rule

If evidence is incomplete, the archive should say so. It should never become more impressive by becoming less truthful.
