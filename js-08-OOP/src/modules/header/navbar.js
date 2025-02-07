import { pages } from "./pages.js";
import { getCurrentHtmlPage } from "./getCurrentHtmlPage.js";
import { createListItems } from "./createListItems.js";

const navbar = ()=>{
    const currentHTML = getCurrentHtmlPage();
    const menuOptions = createListItems( pages, currentHTML );
 return `   
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand" href="/index.html">JavaScript Course</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${menuOptions}
                </div>
            </div>
        </nav>     
 `;

}
export { navbar };