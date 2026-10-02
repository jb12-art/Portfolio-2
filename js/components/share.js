// js/components/share.js

'use strict';

export function renderShareButton() {
  const container = document.createElement('div');

  container.classList.add('share-container');

  container.innerHTML = `
  <button class="share-button" type="button">
    Share / Copy link
    </button>
  `;

  const button = container.querySelector('.share-button');

  button.addEventListener('click', async () => {
    const pageUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: pageUrl,
        });
      } else {
        await navigator.clipboard.writeText(pageUrl);

        button.textContent = 'Link copied!';

        setTimeout(() => {
          button.textContent = 'Share /Copy link';
        }, 2000);
      }
    } catch (error) {
      console.log('Share concelled or failed:', error);
    }
  });

  return container;
}
