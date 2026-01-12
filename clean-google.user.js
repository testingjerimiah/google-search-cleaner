// ==UserScript==
// @name         Google Clean Search (AdGuard Edition)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes "People also ask" and "Related searches" to unclutter Google search results.
// @author       testingjerimiah
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function cleanLayout() {
        // Target elements by text content (reliable for Google's dynamic classes)
        const spans = document.querySelectorAll('span');

        spans.forEach(el => {
            if (el.innerText === 'People also ask' || el.innerText === 'Related searches') {
                // Find the parent container and hide it
                const parentContainer = el.closest('div.MjjYud');
                if (parentContainer) {
                    parentContainer.style.display = 'none';
                }
            }
        });

        // Hide side panel if present
        const sidePanel = document.getElementById('rhs');
        if (sidePanel) sidePanel.style.display = 'none';
    }

    // Run on load and on scroll
    window.addEventListener('load', cleanLayout);
    window.addEventListener('scroll', cleanLayout);
})();
