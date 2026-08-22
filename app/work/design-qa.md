# Taikoo Li Digital District — Design QA

final result: blocked

## Evidence

- Source visual truth: `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\forest-entry-case-study\public\images\taikoo-li\digital-district-reference.webp`
- Browser-rendered implementation: `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\taikoo-reference-stage.png`
- Full-view comparison: `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\taikoo-comparison-full.png`
- Focused central-device comparison: `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\taikoo-comparison-focus.png`
- Source pixels: 750 × 1624 at 1×. For full comparison, 32 px of source-only white margin was removed from both top and bottom, producing a 750 × 1560 content frame without scaling.
- Implementation pixels: 750 × 1560 at 1×, captured from the model-stage element inside a 750 × 1624 CSS viewport with `deviceScaleFactor: 1`.
- State: Chinese locale, light theme, reference camera, auto-rotate off.
- Secondary viewport: 1440 × 1000 CSS px at 1×; model-stage region is 1440 × 922.
- Primary interactions tested: drag orbit, auto-orbit on/off, reference-camera reset.
- Console check: no errors at the 750 × 1624 reference viewport. The desktop pass reports one missing generic resource (favicon-style 404); it does not affect the model or controls.

## Findings

- [P1] Building massing and street void do not yet match the reference closely enough for a 1:1 claim.
  - Location: `taikoo-li-scene-data.ts`, all five voxel palettes.
  - Evidence: the reference has narrower, more irregular towers, larger façade voids, a visibly open central street, and lower foreground clusters. The implementation uses denser stepped towers and a tall central taupe stack that compresses the street.
  - Impact: the overall silhouette and spatial rhythm are recognizably related but still visibly different in the full-view side-by-side comparison.
  - Fix: trace each visible tower as a per-level occupancy map from the six source angles, then replace the broad procedural tower volumes with those maps. Move the central taupe stack behind the portal and rebuild the foreground plinth as a low, open cluster.

- [P1] The portal is missing the source's defining ring typography and internal structural detail.
  - Location: `Portal` and `useCircularTextTexture` in `taikoo-li-model.tsx`.
  - Evidence: the reference shows a thick cyan annulus with clearly legible “LET'S FASHION FORWARD,” a purple glass globe with a lower mirrored bulb, and fine golden frame geometry. The implementation has the correct broad parts but the text is not legible, the lower bulb is absent, and the arrow frame is simplified.
  - Impact: this is the project landmark, so the detail loss is immediately noticeable even though the object is interactive.
  - Fix: make the annulus a dedicated UV-authored mesh, add a second lower glass lobe, and reconstruct the gold mark as thinner nested extrusions calibrated against the close-up source frames.

- [P2] The chrome sculpture differs in contour, scale, and support geometry.
  - Location: `ChromeSculpture` in `taikoo-li-model.tsx`.
  - Evidence: the reference sculpture has a layered, folded two-lobe profile and sits on a compact modular plinth. The implementation's procedural sphere deformation is more radial and its lower portion appears unsupported in the focused comparison.
  - Impact: the material reads correctly, but the silhouette does not yet identify the same object.
  - Fix: create the silhouette from two blended metaball-like lobes or a traced displacement field, then tune the vertical scale and rebuild the compact grey/blue plinth beneath it.

- [P2] Functional signage coverage and placement are incomplete.
  - Location: `SIGN_PLACEMENTS` and `BuildingSign`.
  - Evidence: source-visible help, recycle, sparkles, login, profile, parking, and side-facade signs are not all visible from the reference camera in the implementation. Existing signs use a coherent Lucide icon family, but some are occluded or positioned on different masses.
  - Impact: the city-to-interface metaphor is less clear than in the proposal.
  - Fix: place signs only after the tower occupancy maps are locked, then calibrate each face orientation and scale against the reference frame.

- [P3] The model-control overlay is intentionally absent from the source visual.
  - Location: `TaikooLiCaseStudy` stage chrome and controls.
  - Evidence: the implementation adds back, status, auto-orbit, reset, and legend controls over the model.
  - Impact: these controls slightly change the uncluttered source composition, but they are necessary to make the model inspectable on the website.
  - Fix: no blocking change. Consider fading nonessential labels after pointer inactivity.

## Required Fidelity Surfaces

- Fonts and typography: the source image contains only the portal-ring lettering and sign glyphs. The page controls use the portfolio's existing sans/monospace system coherently, but the portal lettering is currently not legible and remains a P1 fidelity issue.
- Spacing and layout rhythm: the responsive stage and controls are stable at 750 × 1624 and 1440 × 1000. The model composition differs because the central street is too dense; this remains P1.
- Colors and visual tokens: red, blue, cyan, taupe, black, chrome, and pale ground now map to the source palette. The real-time glass is cleaner and less noisy than the render; this is acceptable for the first reconstruction pass but should be tuned after massing is locked.
- Image quality and asset fidelity: the work-index preview uses a source-derived still rather than a placeholder. The detail stage is true browser-rendered WebGL geometry. No inline SVG or CSS-art substitutes are used for the source imagery; functional icons use Lucide geometry. The portal and sculpture geometry are still approximate and remain actionable.
- Copy and content: the project is explicitly framed as a 2023 concept proposal, and the page states that this is a reconstruction pass rather than a finished source model.
- Responsiveness and accessibility: controls remain visible and usable at both checked viewports, use semantic buttons, have focus behavior from the shared system, and respect reduced motion through the page stylesheet. Drag, auto-orbit, pause, and camera reset work.

## Comparison History

1. Initial browser pass
   - Findings: all voxel groups rendered grey-black; the camera was too close; the right tower occluded the portal; sign planes flashed white before their textures existed.
   - Fixes: applied palette colors directly to physical materials, added responsive reference-camera positions, moved the portal forward, delayed sign planes until textures exist, and replaced the faceted chrome geometry with a smooth deformed sphere.
   - Post-fix evidence: current full-view comparison shows separated red/blue/cyan/taupe materials, a visible portal, real signs, and a smooth chrome surface.

2. Source-alignment pass
   - Findings: fog and lighting washed out the palette; cyan towers were outside the portrait crop; the central foreground was too dense; voxel corner radii were too large.
   - Fixes: pushed fog beyond the scene, reduced fill light, darkened the palette, shifted the cyan mass inward, reduced the voxel radius to 0.028 world units, and opened the central foreground occupancy.
   - Post-fix evidence: `taikoo-comparison-full.png` shows stronger source-like saturation, a visible cyan edge, subtler rounded corners, and more ground between the tower groups.

3. Current comparison
   - Earlier P0/P1/P2 findings fixed: grayscale material failure, over-close camera, portal occlusion, faceted chrome shading, and blank sign planes.
   - Remaining blockers: the P1 building occupancy mismatch and P1 portal detail mismatch, plus the two P2 object/signage issues listed above.
   - Post-fix visual evidence: `taikoo-comparison-full.png` and `taikoo-comparison-focus.png`.

## Implementation Checklist

1. Convert every visible tower to source-traced per-level occupancy maps.
2. Rebuild the portal annulus, typography, lower glass lobe, and gold frame from close-up frames.
3. Re-sculpt the chrome form and its modular support.
4. Lock all sign positions after the building maps are stable.
5. Re-capture the same 750 × 1560 state and repeat the combined full/focused comparison.

The current build is a functional first reconstruction, but the remaining P1/P2 differences block a 1:1 fidelity claim.
