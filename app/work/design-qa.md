# Taikoo Li model — design QA

## Comparison target

- Source visual truth:
  - `C:\Users\T1156\AppData\Local\Temp\codex-clipboard-be2eeb4a-7b4d-426a-8908-4ebdbe409bce.png` (far view)
  - `C:\Users\T1156\AppData\Local\Temp\codex-clipboard-85e50dc7-0685-46d8-843e-30ef7656845f.png` (near view)
  - Supporting orbit frames: `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\ppt-analysis-1-16\gif-frames\image10`
- Rendered implementation:
  - `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\taikoo-v2-far-stage.png`
  - `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\taikoo-v2-near-stage.png`
- Full-view comparison evidence:
  - `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\taikoo-comparison-far.png`
  - `C:\Users\T1156\.codex\visualizations\2026\08\22\01a028d3-e8aa-7cf3-af9f-a7995e798c37\taikoo-comparison-near.png`
- Viewport/state: portrait model stage at 519 × 1127 CSS px, DPR 1; far preset and near preset; light theme; Chinese UI.
- Pixel normalization: each source and implementation capture is 519 × 1127 px. Side-by-side comparisons are 1038 × 1127 px with no resampling.
- Focused-region evidence: the near-view comparison is also the focused inspection for the portal, sculpture, hollow arches, and sign/plinth alignment; these subjects occupy most of the frame, so a separate crop would not reveal additional detail.

## Findings

- [P1] Original hidden voxel topology cannot be verified from the supplied renders.
  - Location: red western district, blue/cyan eastern district, and occluded rear faces.
  - Evidence: the implementation now uses 1,118 explicitly enumerated visible voxels and reproduces the hollow corridor, arches, bridges, foreground/rear depth, and the two supplied silhouettes. The source images do not reveal the back faces, underside cells, or all cube rows, so an exact original cube-for-cube count cannot be proven.
  - Impact: claiming literal 1:1 geometry would be inaccurate even though the visible composition is close.
  - Fix: import the original `.blend`, `.c4d`, `.fbx`, `.obj`, or `.glb`; alternatively provide orthographic front/back/left/right/top views with grid dimensions.

- [P1] Chrome sculpture is a procedural reconstruction rather than the original surface.
  - Location: central floating chrome form.
  - Evidence: source has a recognizable asymmetric folded seated silhouette; implementation matches the chrome material, floating placement, approximate mass, and horizontal folds, but its local ridges and silhouette change differently during rotation.
  - Impact: this is the most noticeable remaining object-level mismatch in both views.
  - Fix: replace the procedural sphere deformation with the original mesh or a six-view photogrammetry/modeling reference.

- [P2] Portal optical material is lighter than the source.
  - Location: floating ring and violet shell.
  - Evidence: dimensions, tilt, centerline, hollow separation, circular lettering, and near/far crop now align; the source has a darker mirrored indigo underside and stronger internal reflections, while the implementation remains more pastel/transmissive.
  - Impact: the portal reads correctly but not with identical render-engine contrast.
  - Fix: use the original HDRI/material nodes or a source render without compression to tune IOR, absorption, clearcoat, and environment intensity.

- [P3] One non-scene resource returns 404 in the browser console.
  - Evidence: both presets and all controls render and operate; the only captured console error is a generic missing resource request.
  - Fix: identify and add the optional site resource in the owning shared scope if desired.

## Required fidelity surfaces

- Fonts and typography: source render contains no UI typography. Portfolio controls use the existing site typography and remain legible at the target viewport; no blocking drift.
- Spacing and layout rhythm: portal, hollow corridor, left/right massing, sculpture, and sign centerline now track the two reference views. Portfolio navigation and camera controls are intentional overlays outside the source render.
- Colors and visual tokens: red/blue/cyan districts and neutral ground match the source families; portal optical contrast remains the P2 item above.
- Image quality and asset fidelity: all visible content is live Three.js geometry/materials rather than raster stand-ins. The unavailable original sculpture mesh remains the P1 limitation.
- Copy and content: far, near, and auto-orbit controls are concise and function correctly; no app-specific copy mismatch.
- Icons and behavior: camera presets, orbit drag, and auto orbit were exercised. Controls have selected states and retain keyboard/button semantics.
- Accessibility/responsiveness: controls remain visible at 519 px; reduced-motion handling is inherited from the page motion system. No persistent control is clipped.

## Comparison history

1. Initial comparison found a filled central tower, oversized near portal, wrong foreground depth, and insufficiently hollow red/blue structures (P1/P2).
   - Fixes: rebuilt the districts as countable voxel grids, removed the central solid fragment, added explicit arches/voids, separated the floating portal/sculpture/sign axis, and added far/near camera presets.
2. Second comparison found an edge-on portal ring, overly dominant rear towers, and a near plinth that filled too much of the frame (P1/P2).
   - Fixes: added the tilted annulus body, near-view perspective transforms, rear/foreground depth offsets, and preset-specific central-object proportions.
3. Third comparison found the eastern background too far right, missing far-view red foreground depth, and an undersized/unfolded sculpture (P2).
   - Fixes: shifted only eastern background clusters, restored red foreground occupancy, saturated the portal shell, and reshaped/scaled the chrome form.
   - Post-fix evidence: the two current side-by-side comparison files listed above.

## Implementation checklist

1. Acquire the source sculpture/scene mesh or complete orthographic grid references.
2. Replace the procedural chrome surface and verify its pivot/orbit.
3. Validate hidden voxel rows against the source geometry.
4. Tune portal optics from the original material/HDRI.
5. Re-run the same two 519 × 1127 comparisons and interaction capture.

## Final result

final result: blocked

Blocker: the supplied PPT renders do not expose the original sculpture surface or all occluded voxel cells required to certify literal 1:1 geometry.
