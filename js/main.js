const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const filters = document.querySelector(".project-filters");
const filterStatus = document.querySelector(".filter-status");
const projectList = document.querySelector("#project-list");

function readTheme() {
  try {
    return localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
  themeToggle.textContent = dark ? "Tema claro" : "Tema escuro";
}

applyTheme(readTheme());
themeToggle.hidden = false;
themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch {
    // A alternância permanece ativa mesmo sem armazenamento local.
  }
});

function closeMenu(returnFocus = false) {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  if (returnFocus) menuToggle.focus();
}

root.classList.add("js-enabled");
menuToggle.hidden = false;
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu(true);
  }
});

const categoryNames = {
  "analise-bi": "Análise de Dados e BI",
  "desenvolvimento-web": "Desenvolvimento Web",
  "python-automacao": "Python e Automação"
};

function makeElement(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value) element.textContent = value;
  return element;
}

function makeProjectLink(url, label) {
  if (!url) return null;
  if (/^demos\/[a-z0-9-]+\/index\.html$/.test(url)) {
    const link = makeElement("a", "", label);
    link.href = url;
    return link;
  }
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return null;
    const link = makeElement("a", "", label);
    link.href = parsed.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  } catch {
    return null;
  }
}

function renderProject(project) {
  const card = makeElement("article", "card project-card");
  const hasImage = /^assets\/images\/projects\/[a-z0-9-]+\.png$/.test(project.imageUrl || "") && Boolean(project.imageAlt);
  const cover = makeElement("div", `project-cover${hasImage ? " has-image" : ""}`, hasImage ? "" : "Imagem do projeto a inserir");
  if (hasImage) {
    const preview = makeElement("img", "");
    preview.src = project.imageUrl;
    preview.alt = project.imageAlt;
    preview.width = 1200;
    preview.height = 675;
    preview.loading = "lazy";
    cover.append(preview);
  } else {
    cover.setAttribute("aria-hidden", "true");
  }
  const meta = makeElement("div", "project-meta");
  meta.append(makeElement("span", "project-category", categoryNames[project.category]));
  const statuses = {
    concluido: ["status-complete", "Concluído"],
    "em-desenvolvimento": ["status-progress", "Em desenvolvimento"]
  };
  const [statusClass, statusLabel] = statuses[project.status] || ["", "Status a confirmar"];
  meta.append(makeElement("span", `status ${statusClass}`, statusLabel));
  const title = makeElement("h3", "", project.name);
  const description = makeElement("p", "", project.description);
  const technologies = makeElement("p", "project-tech");
  technologies.append(makeElement("strong", "", "Tecnologias"), document.createTextNode(` ${project.technologies}`));
  card.append(cover, meta, title, description, technologies);
  const links = [
    makeProjectLink(project.repositoryUrl, "Ver repositório"),
    makeProjectLink(project.demoUrl, project.id === "dashboard-operacional" ? "Ver painel de controle operacional" : "Ver demonstração")
  ].filter(Boolean);
  if (links.length > 0) {
    const linkList = makeElement("p", "project-links");
    linkList.append(...links);
    card.append(linkList);
  }
  return card;
}

const projects = Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];
function showProjects(category) {
  const visible = category === "todos" ? projects : projects.filter((project) => project.category === category);
  projectList.replaceChildren(...visible.map(renderProject));
  filterStatus.textContent = visible.length === 0
    ? `Nenhum projeto na categoria ${categoryNames[category]}.`
    : `${visible.length} ${visible.length === 1 ? "projeto exibido" : "projetos exibidos"}.`;
  filters.querySelectorAll("[data-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === category));
  });
}

if (projects.length > 0) {
  filters.hidden = false;
  filterStatus.hidden = false;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (button && filters.contains(button)) showProjects(button.dataset.filter);
  });
  showProjects("todos");
}
