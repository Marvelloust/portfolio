# V15 Final Corrections — QA Notes

## Changes
- Personal project record IDs are sequential in the existing Work-page order: `BR–001` through `BR–022`.
- Neegles contribution identifiers remain a separate `NG–###` system.
- Homepage KoraGo aperture now uses a quieter supplied artifact (`korago-04.webp`) for better overlay readability.
- Desktop mobile-project covers use contained device simulators rather than oversized cropped screens.
- Desktop artifact modal for mobile/payment projects now fits the complete supplied screenshot inside the device frame.
- Actual phone/tablet visitors still see the raw project screen without a nested phone simulator.
- Default dark-theme Full-Stack System scene has a stronger petrol / violet / citron palette and improved text contrast.

## Static checks
- All HTML project references were renumbered using a collision-safe mapping.
- `PROJECT_MANIFEST.json` is synchronized with the new record sequence.
- JavaScript syntax validation passed.
- Internal asset references were checked after the patch.
