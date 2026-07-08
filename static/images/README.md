# Image Placement Guide

Use poster frames to make the page load quickly before videos play.

Recommended paths:

- `static/images/overview-poster.jpg`
- `static/images/task-variation/{TaskName}.jpg`
- `static/images/visual-variation/lighting/HammerStrike.jpg`
- `static/images/visual-variation/lighting/InsertPen.jpg`
- `static/images/visual-variation/lighting/PickThinObjectFromContainer.jpg`
- `static/images/visual-variation/hdr/HammerStrike.jpg`
- `static/images/visual-variation/hdr/InsertPen.jpg`
- `static/images/visual-variation/hdr/PickThinObjectFromContainer.jpg`
- `static/images/visual-variation/material/HammerStrike.jpg`
- `static/images/visual-variation/material/InsertPen.jpg`
- `static/images/visual-variation/material/PickThinObjectFromContainer.jpg`
- `static/images/robot-variation/{arm-slug}__{hand-slug}.jpg`

Export posters from the corresponding videos. Avoid screenshots with author names, desktop usernames, lab logos, or recognizable private environments.

For task variation posters, `{TaskName}` must exactly match `taskName` in `static/data/tasks.json`.
Example: `static/images/task-variation/BimanualLiftBasket.jpg`.

For visual variation posters, mirror the video path and change the extension:
`static/images/visual-variation/{lighting|hdr|material}/{TaskName}.jpg`.
The task names currently used are `HammerStrike`, `InsertPen`, and `PickThinObjectFromContainer`.

For robot variation posters, use these slugs:

- Arms: `franka-research-3`, `ur10e`, `xarm-7`
- Hands: `sharpa-wave`, `wuji-hand`, `shadow-hand`, `inspire-hand`, `allegro-hand`, `leap-hand`

Example: `static/images/robot-variation/franka-research-3__sharpa-wave.jpg`.
