// js/components/header.js

'use strict';

export function renderHeader() {
  const header = document.createElement('div');

  header.classList.add('header');

  header.innerHTML = `
  <h1>Portfolio 2</h1>
  `;

  return header;
}
