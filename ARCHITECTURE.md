# D-JIAN Portfolio Architecture

This document is the repository handoff for new accounts, coding agents, and human contributors. It describes ownership boundaries rather than historical conversation context.

## Runtime Structure

```text
app/
  page.tsx                         Homepage route
  work/                            Work index and detail routes
  space/
    page.tsx                       Space directory
    generative-field/              Generative field experience
    poly-species/                  Polygon species experience

components/
  home/                            Homepage visual system
  navigation/                      Shared desktop/mobile navigation
  poly-species/                    Polygon species UI and motion adapter
  loading/                         Shared loader

config/                            Typed configuration and localized UI copy
data/                              Content datasets
i18n/                              Shared dictionaries and locale types
providers/                         Shared theme and language state
styles/                            Feature and shared styles
public/                            Local static assets
scripts/                           Validation and repository tooling
```

## Ownership Map

| Scope | Primary route | Responsibility |
| --- | --- | --- |
| `home` | `/` | Homepage composition and hero visual |
| `work` | `/work`, `/work/[slug]` | Work listing, details, and work data |
| `space-index` | `/space` | Space directory and preview composition |
| `space-generative-field` | `/space/generative-field` | Generative field page shell and controls |
| `space-shared` | Used by space index and field | Particle engine, shared space config, shared space CSS |
| `space-poly-species` | `/space/poly-species` | Polygon species data, geometry, motion, UI, statistics, and local assets |
| `shared` | All routes | Root layout, navigation, language, theme, loading, and global behavior |
| `infrastructure` | No runtime route | CI, repository rules, dependency/build configuration, and documentation |

The machine-readable path list is the source of truth: `config/module-boundaries.json`.

## Dependency Direction

```text
feature route -> feature components -> feature config/data
feature route -> shared providers/components
shared modules -X-> feature modules
feature A -X-> feature B
```

Known intentional exceptions:

- `space-index` renders a lightweight polygon preview from the polygon preview adapter.
- `space-index` and `space-generative-field` share the particle core through `space-shared`.
- Root layout currently loads `home.css` and `space.css` globally. Class namespaces prevent normal collisions, but style loading is not yet fully route-isolated.

Changing an intentional shared dependency requires every affected scope to be approved.

## Polygon Species Contract

The polygon species feature is locally hosted and has no runtime dependency on the reference website.

- `styles/species-source-shapes.css`: source geometry for the species.
- `styles/species-source-motion.css`: source idle, morph, burst, rotation, and reassembly rules.
- `components/poly-species/species-shards.tsx`: React adapter that renders the shard DOM contract.
- `components/poly-species/use-source-species-motion.ts`: React state and timing controller.
- `data/species-in-pieces.json`: local species and statistics data.
- `config/poly-species-copy.ts`: localized narrative and statistic formatting.

Do not rename shard selectors or alter shard counts without updating the adapter and validator together.

## Adding a New First-Level Module

Example: adding `/about` between Work and Space.

1. Obtain approval for `new-module`, `shared`, and `infrastructure`.
2. Add the route, components, configuration, content, and feature styles.
3. Add navigation and translations through the `shared` scope.
4. Register a permanent `about` scope in `config/module-boundaries.json`.
5. Update this ownership map.
6. Run the new scope check, typecheck, and production build.

Once registered, future About work should use only the `about` scope unless a shared change is explicitly approved.

## Cross-Account Task Template

Give a new account this instruction with every task:

```text
Read AGENTS.md and ARCHITECTURE.md before editing.
Approved scope: <scope>.
List the files you plan to modify before changing them.
Do not modify files outside the approved scope.
If a shared or infrastructure change is required, stop and ask for approval.
Run npm run check:scope -- <scope> before finishing.
Do not push directly to main.
```

## Deployment

- GitHub `main` is the stable production source.
- Vercel production is built from the stable source.
- Feature branches and pull requests are review surfaces, not production state.
- Pull requests use user-approved `scope:<name>` labels. The module-scope workflow rejects files outside the union of those labels.
- Enable GitHub branch protection with the `Module scope / check-scope` check and CODEOWNER review required before treating the workflow as a hard merge gate.
- A full Next.js build checks the entire dependency graph but does not change module ownership.
