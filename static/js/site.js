const taskDemoToolbar = document.querySelector("#task-demo-toolbar");
const taskDemoGrid = document.querySelector("#task-demo-grid");
const longHorizonGrid = document.querySelector("#long-horizon-grid");
const robotMatrix = document.querySelector("#robot-matrix");

const longHorizonCategory = "Long-horizon";

const robotArms = [
  { name: "Franka Research 3", slug: "franka-research-3" },
  { name: "UR10e", slug: "ur10e" },
  { name: "xArm 7", slug: "xarm-7" },
];

const dexterousHands = [
  { name: "Sharpa Wave", slug: "sharpa-wave" },
  { name: "WUJI Hand", slug: "wuji-hand" },
  { name: "Shadow Hand", slug: "shadow-hand" },
  { name: "Inspire Hand", slug: "inspire-hand" },
  { name: "Allegro Hand", slug: "allegro-hand" },
  { name: "LEAP Hand", slug: "leap-hand" },
];

const baselineTasks = new Set([
  "BimanualLiftCarton",
  "BimanualLiftTray",
  "GraspBleach",
  "GraspCup",
  "GraspKettle",
  "GraspPan",
  "RetrieveCup",
  "OpenFaucet",
  "OpenFlatFolder",
  "OpenLaptop",
  "OpenStapler",
  "SlideUtilityKnife",
  "SqueezeScissors",
  "FunctionalHammerStrike",
  "FunctionalPourCan",
  "FunctionalPourMug",
  "InsertPen",
  "PushSmallSphereObstacleSlope",
  "PushT",
]);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function groupByCategory(tasks) {
  return tasks.reduce((groups, task) => {
    const category = task.category || "Uncategorized";
    groups[category] = groups[category] || [];
    groups[category].push(task);
    return groups;
  }, {});
}

function getOrderedCategories(groupedTasks, summaries = []) {
  const fromSummary = summaries
    .map((summary) => summary.category)
    .filter((category) => groupedTasks[category]);
  const remaining = Object.keys(groupedTasks).filter((category) => !fromSummary.includes(category));
  return [...fromSummary, ...remaining];
}

function sortTasksByCategory(tasks, orderedCategories) {
  const categoryRank = new Map(orderedCategories.map((category, index) => [category, index]));
  return [...tasks].sort((left, right) => {
    const leftRank = categoryRank.get(left.category) ?? Number.MAX_SAFE_INTEGER;
    const rightRank = categoryRank.get(right.category) ?? Number.MAX_SAFE_INTEGER;
    if (leftRank !== rightRank) return leftRank - rightRank;
    return left.taskName.localeCompare(right.taskName);
  });
}

function renderFilters(categories) {
  if (!taskDemoToolbar) return;

  const buttons = categories
    .map((category) => `<button class="task-filter" type="button" data-filter="category" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`)
    .join("");

  taskDemoToolbar.innerHTML = `
    <button class="task-filter is-active" type="button" data-filter="all">All Tasks</button>
    <button class="task-filter" type="button" data-filter="baseline">Baseline</button>
    ${buttons}
  `;
}

function assetName(taskName) {
  return encodeURIComponent(String(taskName ?? "").trim());
}

function taskAssetPath(task, assetType, extension) {
  const folder = task.assetFolder ? `${assetName(task.assetFolder)}/` : "";
  return `static/${assetType}/task-variation/${folder}${assetName(task.taskName)}.${extension}`;
}

function robotComboSlug(arm, hand) {
  return `${arm.slug}__${hand.slug}`;
}

function hideReplaceNoteWhenVideoExists(scope = document) {
  scope.querySelectorAll(".video-frame video").forEach((video) => {
    video.addEventListener("loadedmetadata", () => {
      const note = video.closest(".video-frame")?.querySelector(".replace-note");
      if (note) note.hidden = true;
    }, { once: true });
  });
}

function getCarouselMetrics(carousel) {
  const track = carousel.querySelector(".carousel-track");
  const viewport = carousel.querySelector(".carousel-viewport");
  const cards = track ? Array.from(track.querySelectorAll(".demo-card")) : [];
  const trackStyles = track ? getComputedStyle(track) : null;
  const gap = trackStyles ? parseFloat(trackStyles.columnGap || trackStyles.gap || "0") || 0 : 0;
  const cardWidth = cards.length ? cards[0].getBoundingClientRect().width : 0;
  const step = cardWidth + gap;
  const perView = step > 0 ? Math.max(1, Math.round((viewport?.clientWidth || 0) / step)) : 1;
  return { track, cards, step, perView };
}

function updateCarousel(carousel, nextIndex = 0) {
  const { track, cards, step, perView } = getCarouselMetrics(carousel);
  if (!track) return;

  const maxIndex = Math.max(cards.length - perView, 0);
  const index = Math.min(Math.max(nextIndex, 0), maxIndex);

  carousel.dataset.index = String(index);
  track.style.transform = `translateX(${-(index * step)}px)`;

  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  if (prevButton) prevButton.disabled = index === 0;
  if (nextButton) nextButton.disabled = index >= maxIndex;
}

function setupCarousel(carousel) {
  if (!carousel || !carousel.querySelector(".carousel-track")) return;

  if (carousel.dataset.ready === "true") {
    updateCarousel(carousel, Number(carousel.dataset.index || 0));
    return;
  }

  carousel.dataset.ready = "true";
  carousel.dataset.index = "0";

  carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
    const { perView } = getCarouselMetrics(carousel);
    updateCarousel(carousel, Number(carousel.dataset.index || 0) - perView);
  });

  carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
    const { perView } = getCarouselMetrics(carousel);
    updateCarousel(carousel, Number(carousel.dataset.index || 0) + perView);
  });

  updateCarousel(carousel, 0);
}

let carouselResizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(carouselResizeTimer);
  carouselResizeTimer = setTimeout(() => {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      if (carousel.dataset.ready === "true") {
        updateCarousel(carousel, Number(carousel.dataset.index || 0));
      }
    });
  }, 150);
});

function setupCarousels(scope = document) {
  scope.querySelectorAll("[data-carousel]").forEach(setupCarousel);
}

function renderTaskDemoCards(tasks) {
  if (!taskDemoGrid) return;

  if (!tasks.length) {
    taskDemoGrid.innerHTML = '<p class="loading-note">No task demos found for this category.</p>';
    return;
  }

  taskDemoGrid.innerHTML = tasks
    .map((task) => {
      const videoSrc = taskAssetPath(task, "videos", "mp4");
      const posterSrc = taskAssetPath(task, "images", "jpg");
      return `
        <article class="demo-card task-demo-card">
          <div class="video-frame">
            <video controls muted playsinline preload="none" poster="${posterSrc}">
              <source src="${videoSrc}" type="video/mp4">
            </video>
            <span class="replace-note">${escapeHtml(videoSrc.replace("static/videos/task-variation/", ""))}</span>
          </div>

          <div class="task-card-title">
            <h4><code>${escapeHtml(task.taskName)}</code></h4>
            <span class="category-pill">${escapeHtml(task.category)}</span>
          </div>

          <dl class="demo-meta">
            <div>
              <dt>Description</dt>
              <dd>${escapeHtml(task.description)}</dd>
            </div>
            <div>
              <dt>Success</dt>
              <dd>${escapeHtml(task.successCondition)}</dd>
            </div>
          </dl>
        </article>
      `;
    })
    .join("");

  hideReplaceNoteWhenVideoExists(taskDemoGrid);
  const carousel = taskDemoGrid.closest("[data-carousel]");
  if (carousel) carousel.dataset.index = "0";
  setupCarousel(carousel);
}

function renderLongHorizonShowcase(tasks) {
  if (!longHorizonGrid) return;

  const items = tasks.filter((task) => task.category === longHorizonCategory);

  if (!items.length) {
    longHorizonGrid.innerHTML = '<p class="loading-note">No long-horizon demos found.</p>';
    return;
  }

  longHorizonGrid.innerHTML = items
    .map((task) => {
      const videoSrc = taskAssetPath(task, "videos", "mp4");
      const posterSrc = taskAssetPath(task, "images", "jpg");
      return `
        <article class="demo-card task-demo-card">
          <div class="video-frame">
            <video controls muted playsinline preload="none" poster="${posterSrc}">
              <source src="${videoSrc}" type="video/mp4">
            </video>
            <span class="replace-note">${escapeHtml(videoSrc.replace("static/videos/task-variation/", ""))}</span>
          </div>

          <div class="task-card-title">
            <h4><code>${escapeHtml(task.taskName)}</code></h4>
            <span class="category-pill">${escapeHtml(task.category)}</span>
          </div>

          <dl class="demo-meta">
            <div>
              <dt>Description</dt>
              <dd>${escapeHtml(task.description)}</dd>
            </div>
            <div>
              <dt>Success</dt>
              <dd>${escapeHtml(task.successCondition)}</dd>
            </div>
          </dl>
        </article>
      `;
    })
    .join("");

  hideReplaceNoteWhenVideoExists(longHorizonGrid);
  const carousel = longHorizonGrid.closest("[data-carousel]");
  if (carousel) carousel.dataset.index = "0";
  setupCarousel(carousel);
}

function bindTaskFilters(tasks) {
  if (!taskDemoToolbar) return;

  taskDemoToolbar.addEventListener("click", (event) => {
    const button = event.target.closest(".task-filter");
    if (!button) return;

    taskDemoToolbar.querySelectorAll(".task-filter").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    const filter = button.dataset.filter;
    const category = button.dataset.category;

    if (filter === "baseline") {
      renderTaskDemoCards(tasks.filter((task) => baselineTasks.has(task.taskName)));
      return;
    }

    renderTaskDemoCards(filter === "all" ? tasks : tasks.filter((task) => task.category === category));
  });
}

async function fetchTaskPayload() {
  // Prefer the inlined global (works when the page is opened directly as a file://).
  if (window.DEXVERSE_TASKS) return window.DEXVERSE_TASKS;

  // Fall back to fetching the JSON when served over HTTP.
  const response = await fetch("static/data/tasks.json");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function loadTaskDemos() {
  if (!taskDemoGrid) return;

  try {
    const payload = await fetchTaskPayload();
    const tasks = payload.tasks || [];

    // Long-horizon tasks live in their own showcase section, so keep them out of
    // the Task Variation carousel and its category filters.
    const variationTasks = tasks.filter((task) => task.category !== longHorizonCategory);
    const groupedTasks = groupByCategory(variationTasks);
    const categories = getOrderedCategories(groupedTasks, payload.categorySummary || []);
    const sortedTasks = sortTasksByCategory(variationTasks, categories);

    renderFilters(categories);
    renderTaskDemoCards(sortedTasks);
    bindTaskFilters(sortedTasks);
    renderLongHorizonShowcase(tasks);
  } catch (error) {
    taskDemoGrid.innerHTML = '<p class="loading-note">Task demos could not be loaded.</p>';
    if (longHorizonGrid) {
      longHorizonGrid.innerHTML = '<p class="loading-note">Long-horizon showcase could not be loaded.</p>';
    }
    console.error("Failed to load task demos:", error);
  }
}

function renderRobotMatrix() {
  if (!robotMatrix) return;

  const headerCells = dexterousHands
    .map((hand) => `<div class="robot-hand-header">${escapeHtml(hand.name)}</div>`)
    .join("");

  const rows = robotArms
    .map((arm) => {
      const cells = dexterousHands
        .map((hand) => {
          const slug = robotComboSlug(arm, hand);
          return `
            <article class="robot-combo-card">
              <div class="video-frame">
                <video controls muted playsinline preload="none" poster="static/images/robot-variation/${slug}.jpg">
                  <source src="static/videos/robot-variation/${slug}.mp4" type="video/mp4">
                </video>
                <span class="replace-note">${slug}.mp4</span>
              </div>
              <p>${escapeHtml(arm.name)} + ${escapeHtml(hand.name)}</p>
            </article>
          `;
        })
        .join("");

      return `
        <div class="robot-arm-header">${escapeHtml(arm.name)}</div>
        ${cells}
      `;
    })
    .join("");

  robotMatrix.innerHTML = `
    <div class="robot-matrix-grid">
      <div class="robot-axis-label">Arm / Hand</div>
      ${headerCells}
      ${rows}
    </div>
  `;

  hideReplaceNoteWhenVideoExists(robotMatrix);
}

hideReplaceNoteWhenVideoExists();
setupCarousels();
loadTaskDemos();
renderRobotMatrix();
