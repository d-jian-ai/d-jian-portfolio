# Living Field — design QA

## Result

The rebuilt generative-field experience passes desktop/mobile visual checks, runtime checks, type checking, and the production build.

This version treats the supplied Cloud Studio work as a motion-system reference rather than a screen to reproduce. No third-party page, asset, or remote runtime dependency is embedded in the route.

## Implemented structure

- The opening screen mounts one independent 2D guide canvas and does not render the large WebGL particle chapters.
- The opening screen is now organized as a restrained editorial response-law chooser: a compact premise and guide identity at left, the active guide body in the center, and one horizontal five-law rail joined to a high-contrast entry action. Mobile keeps the same single bottom rail without adding a second navigation model.
- Five guide identities have separate color, geometry, spring, damping, trail, and field-force configuration: Core, Ribbon, Branch, Echo, and Mist. They also carry five separate in-field response laws: local compression, velocity wake, structural propagation, delayed echo rings, and tangential drift.
- Switching guides uses a project-local layout with a color wave emitted from the guide position and a two-stage gather/reform morph. The wave and settled surface now share the same neutral color mixture, and rapid selections are queued instead of discarded, removing the pale flash and dropped-click stutter.
- The original cursor system is restored as an independent top-layer canvas: 160 pooled particles, speed-based density, warm/cool star dust, flare crosses, and a 26-particle blank-area click burst. Non-finite alpha values are guarded without changing the effect.
- Confirming a guide mounts the full particle field. Particles aggregate from the guide's last opening-screen position.
- The selected guide remains visible in the field and supplies the smoothed pointer, velocity, press, and energy values that drive the large particle system.
- Chapter changes release the current particle form toward a neutral body before the target form is adopted. Source and target are interpolated directly, so a non-adjacent jump never samples or reveals any intermediate chapter.
- The field now occupies the full project viewport instead of being held in a small right-side stage. Chapter titles were reduced to a compact lower-corner caption so particles remain the dominant reading layer.
- Six chapters use separate spatial samplers and response equations: a deep topographic valley, an eighteen-community social graph with autonomous birth, migration, rupture, and relationship rewiring, a directional Gerstner ocean with velocity wake and crest spray, thousands of segmented grass blades over rolling terrain with GPU wind bands and velocity-triggered drifting seed tufts, a volumetric dual-lobe nebula with core dust and bent filaments, and a five-band armillary spiral with a central core, connecting axes, and local precession.
- Each chapter owns separate duration, press strength, release damping, depth response, energy decay, transition time, camera position, look target, orbit radius, field of view, pointer parallax, interaction dolly, and particle budget values. These parameters remain in `particle-chapter-config.ts` rather than being duplicated inside render code.
- Society has an independent GPU life layer. Community particles move through three spatial states plus non-repeating epoch offsets, staggered birth and decay windows, rare rupture events, and independently randomized local orbits. The CPU updates only the small topology layer when an epoch changes: every epoch creates a new small-world graph, migrates community centers, introduces occasional group fission, and interpolates into the next graph. Point lifecycle, topology epochs, route pulses, pointer deformation, and camera orbit all use separate rates.
- The mountain sampler now spans a broad 25.6 by 20 world. A winding valley center runs along the full depth axis, with paired continuous walls, an eroded gorge floor, foreground shoulders, staggered west/east summits, narrow spires, a serrated distant crown, tributary cuts, outer mountain mass, strata, and floor ripples. Seven semantic line paths trace the river floor plus primary and outer ridge spines so the whole range remains legible during camera motion.
- Ocean and grass now span broad 24 by 16.8 and 21.2 by 14.2 worlds. Ocean combines four directional Gerstner wave groups, horizontal orbital displacement, long tidal and storm cycles, sparse dynamic crest spray, parallel swell rails, a reduced cross-grid, and pointer wake. Grass layers rolling ground, a moving wind front, segmented blade lines, GPU wind lanes, and interaction-released fly fluff into one horizon-scale field.
- Society slowly expands and contracts while its independent population and graph generations evolve. Nebula breathes at a large radial scale across its dual lobes. Spiral adds an epoch-rate precession change across its five orbital bands. These long cycles sit above the faster local pointer reactions so evolution, interaction, and camera motion do not share one obvious tempo.
- Mountain and ocean line fields are GPU-deformed alongside their particles, so the extra complexity is structural rather than a static decorative overlay. Ocean lines carry the same multi-wave equation and pointer wake as the particle surface.
- A chapter-aware camera director gives every scene a separate orbit, glide, or skim path and animated look target. The final mountain camera uses a low, offset mid-distance position and a deep look target so the foreground shoulders, central valley floor, staggered main peaks, and far skyline share one macro composition instead of reading as a close canyon cross-section. Scene-specific damping and pointer parallax keep the ocean skim, grass horizon, social volume, nebula orbit, and spiral exterior view from feeling like one reused camera rig. Interaction energy also produces a calibrated scene-specific dolly instead of a universal zoom. Reduced-motion keeps the composition while scaling camera travel to eight percent.
- The atmosphere layer derives its coverage from the active perspective camera's field of view, distance, and aspect ratio. Wide macro views therefore keep full background coverage without black edges, while per-scene horizon haze, low mist, and radial volume cues add depth without obscuring the particle structures.
- Continuous field and camera motion stays in the existing render loop and shader uniforms; the GSAP React lifecycle remains scoped to interface choreography, with no per-particle tween allocation.
- Scene-specific GPU layers are removed from the draw list while inactive, and the shared particle geometry applies a per-scene draw range. This prevents the final spiral, social life layer, grass lines, ocean lines, and nebula lines from competing for the same frame when hidden.
- The shared particle shader no longer exceeds the practical vertex-attribute budget. Society's migration and role data are consumed only by its dedicated evolution layer, restoring the main particle body in all six scenes.
- The weak gene-shaped generator and later tunnel were replaced with a full-viewport orbital spiral. Five independently tilted bands precess around one quiet core, while pointer velocity changes local torque without destroying the overall silhouette. The user-facing scene is named Spiral / 螺旋.
- Project chrome contains a back action and project status only. CREER branding, the local language switch, and the previous “Enter together” wording are absent.

## Browser evidence

- Desktop / Core: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-core.png`
- Desktop / Ribbon: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-ribbon.png`
- Desktop / Branch: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-branch.png`
- Desktop / restored cursor trail and click burst: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-cursor-trail.png`
- Desktop / mountain field: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-field.png`
- Desktop / final mountain depth composition: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\mountain-depth-final.png`
- Desktop / social graph gather: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-gather.png`
- Desktop / social evolution, first generation: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\society-evolution-a.png`
- Desktop / social evolution, later generation: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\society-evolution-b.png`
- Desktop / ocean wake: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-flow.png`
- Desktop / wind-bent grassland: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-bend.png`
- Desktop / nebula memory shockwave: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-memory.png`
- Desktop / orbital spiral: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-desktop-dna.png`
- Direct mountain-to-spiral transition frames: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\jump-0.png` through `jump-4.png`
- Mobile / opening: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-mobile-core.png`
- Mobile / entered field: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-mobile-field.png`
- Mobile / returned opening: `D:\Codex\home\visualizations\2026\08\27\01a0435b-e2fa-7590-839d-90a6b0620cb0\field-guide-mobile-return.png`

The automated path verified all five guide selections and their computed surfaces:

- Core: `color(srgb 0.923843 0.928392 0.929255)`
- Ribbon: `color(srgb 0.948549 0.917804 0.89749)`
- Branch: `color(srgb 0.91749 0.936157 0.906667)`
- Echo: `color(srgb 0.928784 0.920627 0.929255)`
- Mist: `color(srgb 0.948549 0.929804 0.880549)`

Canvas lifecycle: two opening-screen canvases (guide plus preserved cursor), three canvases after entering (guide, cursor, and WebGL field), and two canvases after returning. All six chapter states were activated in order. The final browser path confirmed no CREER brand text, no language control, no runtime overlay, no browser exceptions, and no console errors.

The pressed-pointer performance path recorded 172 animation-frame samples per scene after the deeper terrain, ocean, and society generators were enabled. Mountain, society, ocean, and nebula averaged 8.37 ms. Grass and spiral averaged 8.52 ms. Every p95 stayed between 8.5 and 8.6 ms; isolated maxima were 16.9 ms in grass and 16.8 ms in spiral. No browser exception, console error, or runtime overlay appeared. The mountain-to-spiral frame sequence contains only mountain release and spiral adoption; no social, ocean, grass, or nebula form appears.

## Verification

- `npm run typecheck`: passed.
- `npm run build`: passed.
- `npm run check:scope -- space-generative-field`: the selected-scope changes are valid, but the repository-wide dirty diff still contains pre-existing files outside this scope: `components/experimental-particle-field.tsx`, `components/space-index-page.tsx`, `config/space.ts`, `package-lock.json`, and `package.json`. No scope was broadened and those files were not changed as part of this rebuild.
