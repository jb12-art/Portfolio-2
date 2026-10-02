// js/components/back-to-home-btn.js

'use strict';

export function renderBackButton() {
  const back = document.createElement('button');

  back.classList.add('back-btn');
  back.textContent = 'Home';

  back.addEventListener('click', () => {
    window.location.href = './index.html';
  });

  return back;
}
