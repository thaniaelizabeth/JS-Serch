import { getHtmlPageName } from "./getHtmlPageName.js";

const getCurrentHtmlPage = () => {
  const filePath = window.location.pathname;
  let htmlPage;
  if (filePath === "/") {
    htmlPage = "index.html";
  } else {
    htmlPage = getHtmlPageName(filePath);
  }
  return htmlPage;
};

export { getCurrentHtmlPage };
