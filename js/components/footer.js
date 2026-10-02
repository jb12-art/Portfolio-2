// js/components/footer.js

'use strict';

export function renderFooter() {
  const footer = document.createElement('div');

  footer.classList.add('footer');

  footer.innerHTML = `
    <h3>Created by Jørgen Bjørnethun</h3>
  `;

  return footer;
}
