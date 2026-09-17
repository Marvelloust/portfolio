# QA Report — Build Record V14 Competition Authorship

**Date:** 7 September 2026

## Result

V14 passed the final structural and browser smoke-test pass used for packaging.

## Structural integrity

- HTML entry points checked: **30**
- Missing local references: **0**
- Duplicate-ID pages: **0**
- Invalid internal route targets: **0**
- HTML parse errors detected by the audit: **0**
- JavaScript syntax failures: **0**
- CSS brace balance: **0**
- Active manifest records: **28**
- Flagship records: **5** — SwiftSlot, KoraGo, Relay, Stamp, Fieldnote
- Neegles team-contribution records: **6**
- RecoverIQ / OiO active records: **0**

`work/profix-desk/index.html` is retained only as a compatibility redirect stub, so it intentionally does not contain a normal page H1/case-study body.

## Responsive browser checks

Rendered through Chromium with production CSS/JS in an isolated local QA harness.

No document-level horizontal overflow and no runtime exceptions were detected on:

- Home — **320 / 390 / 768 / 1024 / 1440 px**
- Work — **390 / 768 / 1440 px**
- SwiftSlot — **390 px**
- KoraGo — **390 px**
- Relay — **390 px**
- Stamp — **390 px**
- Fieldnote — **390 px**

The first-visit theme resolved to **dark** in all tested views.

## Accessibility smoke checks

Across sampled rendered pages and the static HTML audit:

- sampled images without `alt`: **0**
- sampled unnamed buttons: **0**
- visible focus treatment is defined globally with `:focus-visible`
- reduced-motion mode rendered without overflow/runtime exceptions
- ownership is communicated in text, not color alone
- Work mode changes are announced through an `aria-live` inspection lens
- mobile flagship evidence uses native horizontal touch scrolling instead of desktop-only sticky choreography

## Work archive interaction

The authored Work inspection system was exercised in-browser. The Team mode resolves the lens copy to:

> Work completed inside the Neegles team.

Personal/design archive rows and team contribution records remain visually and semantically distinct.

## Desktop hero correction

The apparent V14 desktop hero regression reported during the previous QA pass was traced to the QA harness, not production CSS. The harness used a regular expression that truncated the Google Fonts `@import` URL at its first semicolon, causing root custom properties and the intended font stack to be discarded during isolated rendering.

The harness was corrected to remove the complete `@import` statement. After re-rendering:

- `--sans` resolves correctly to `Manrope, Arial, sans-serif`
- the master identity regains its intended left/right inset
- `MARVELLOUS O.` no longer clips against the viewport edge
- the portrait remains contained in the right identity plate
- desktop and mobile compositions render with the intended hierarchy

This was a **QA tooling issue**, not a production stylesheet dependency failure.

## Source/demo evidence

Public source/demo mappings verified during the V14 pass are recorded in `SOURCE_LINK_VERIFICATION_V14.md`. No repository link is intentionally fabricated for an unmatched project.

## Known production note

The portfolio imports its preferred typefaces from Google Fonts. If opened fully offline, browser/system fallback fonts are used; layout and functionality remain intact. No font files are bundled in the project.

## Packaging recommendation

For the cleanest review, run:

```bash
npm start
```

and open `http://localhost:4173`.

Direct-file review via `index.html` remains supported for local inspection.
