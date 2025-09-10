export function createPageUrl(pageName) {
  // Map page display names to route paths
  const name = String(pageName || "").toLowerCase();
  switch (name) {
    case "home":
      return "/";
    case "about":
      return "/about";
    case "services":
      return "/services";
    case "projects":
      return "/projects";
    case "pricing":
      return "/pricing";
    case "contact":
      return "/contact";
    default:
      return "/";
  }
}


