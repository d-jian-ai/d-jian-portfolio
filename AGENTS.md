# CREER Repository Instructions

These instructions apply to every coding agent and every account working in this repository.

## Start Here

1. Read `ARCHITECTURE.md`.
2. Read `config/module-boundaries.json`.
3. Identify the task scope from the user's request before editing.
4. State the selected scope and the files you expect to change.

Reading and searching the whole repository is allowed. Writing is limited to the selected scope.

## Modification Boundary

- Modify only files allowed by the user-approved scope.
- Do not perform opportunistic cleanup, formatting, renaming, or refactoring in another scope.
- If a necessary change falls outside the approved scope, stop and ask the user before editing it.
- A shared change must be explicitly approved with the `shared` scope.
- A new first-level module must be explicitly approved with the `new-module` scope.
- Protected governance and build files require the `infrastructure` scope.
- Never weaken, bypass, or edit the scope checker unless the user explicitly approved `infrastructure` work.

After editing, run:

```bash
npm run check:scope -- <scope>
```

For an approved cross-scope task, list every scope:

```bash
npm run check:scope -- space-poly-species shared
```

## Module Rules

- `home`: homepage only.
- `work`: work index, work details, work data, and work-owned visuals.
- `space-index`: the `/space` directory page and its lightweight previews.
- `space-generative-field`: the generative-field route and page shell.
- `space-shared`: particle core, shared space configuration, and shared space styling. Changes here can affect both the space index and the generative-field experience.
- `space-poly-species`: the polygon species route, local data, local assets, source geometry, source motion, and its UI.
- `shared`: navigation, language, theme, loader, root layout, global styles, and other site-wide infrastructure used at runtime.
- `infrastructure`: repository rules, CI, boundary configuration, package/build configuration, and documentation.
- `new-module`: creation of a user-approved new module. Registering its permanent boundary also requires `infrastructure`; adding it to global navigation also requires `shared`.

## Important Implementation Constraints

- `styles/species-source-shapes.css` is local polygon geometry data. Do not treat it as redundant CSS.
- `styles/species-source-motion.css` contains the source morph and burst motion contract.
- The polygon species shard count and selector contract must continue to pass `npm run validate:poly`.
- Components must use `useLanguage()` and `useTheme()` rather than reading or writing language/theme DOM state directly.
- Adjustable experience parameters belong in `config/` rather than being scattered through render code.
- Do not introduce remote runtime dependencies, embedded third-party pages, or external asset hotlinks without explicit approval.

## Verification

Use checks proportional to the approved scope. Before merging a deployable change, run at minimum:

```bash
npm run check:scope -- <scope...>
npm run typecheck
npm run build
```

For `space-poly-species`, also run:

```bash
npm run validate:poly
```

Full builds validate module contracts; they do not grant permission to modify other modules.

## Git Workflow

- Keep `main` stable and production-ready.
- Use a task branch for work performed by another account or concurrent agent.
- Prefer branch names such as `codex/<scope>/<short-task>`.
- A pull request must carry one or more user-approved `scope:<scope>` labels, for example `scope:work` or `scope:space-poly-species` plus `scope:shared`.
- Scope labels are authorization. Agents must not add or broaden them without the user's approval.
- Do not push directly to `main` unless the user explicitly authorizes it.
- Review the complete diff and pass the scope check before merging.
