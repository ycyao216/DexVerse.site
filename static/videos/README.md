# Video Placement Guide

Use MP4/H.264 files for best browser compatibility.

Recommended paths:

- `static/videos/overview.mp4`
- `static/videos/task-variation/{TaskName}.mp4`
- `static/videos/visual-variation/lighting/HammerStrike.mp4`
- `static/videos/visual-variation/lighting/InsertPen.mp4`
- `static/videos/visual-variation/lighting/PickThinObjectFromContainer.mp4`
- `static/videos/visual-variation/hdr/HammerStrike.mp4`
- `static/videos/visual-variation/hdr/InsertPen.mp4`
- `static/videos/visual-variation/hdr/PickThinObjectFromContainer.mp4`
- `static/videos/visual-variation/material/HammerStrike.mp4`
- `static/videos/visual-variation/material/InsertPen.mp4`
- `static/videos/visual-variation/material/PickThinObjectFromContainer.mp4`
- `static/videos/robot-variation/{arm-slug}__{hand-slug}.mp4`

Keep filenames anonymous. Do not include author names, institutions, lab names, machine hostnames, or internal project paths.

For task variation demos, `{TaskName}` must exactly match `taskName` in `static/data/tasks.json`.
Example: `static/videos/task-variation/BimanualLiftBasket.mp4`.

For visual variation demos, keep the variation directory first, then the task video:
`static/videos/visual-variation/{lighting|hdr|material}/{TaskName}.mp4`.
The task names currently used are `HammerStrike`, `InsertPen`, and `PickThinObjectFromContainer`.

For robot variation demos, use these slugs:

- Arms: `franka-research-3`, `ur10e`, `xarm-7`
- Hands: `sharpa-wave`, `wuji-hand`, `shadow-hand`, `inspire-hand`, `allegro-hand`, `leap-hand`

Example: `static/videos/robot-variation/franka-research-3__sharpa-wave.mp4`.
