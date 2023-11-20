document.addEventListener('DOMContentLoaded', () => {
    const defaultTab = document.getElementById('header-product');
    defaultTab.classList.add('active');
    document.getElementById('content-product').style.display = 'block';
  
    document.querySelectorAll('.nav-header').forEach(item => {
      item.addEventListener('click', event => {
        document.querySelectorAll('.nav-header').forEach(header => {
          header.classList.remove('active');
          const contentId = `content-${header.id.split('-')[1]}`;
          document.getElementById(contentId).style.display = 'none';
        });
          event.target.classList.add('active');
        const contentIdToShow = `content-${event.target.id.split('-')[1]}`;
        document.getElementById(contentIdToShow).style.display = 'block';
      });
    });
  });

  let startX;
const carousel = document.getElementById('carousel');

carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].pageX;
});

carousel.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].pageX;
  const diff = startX - endX;
  // Adjust '50' based on sensitivity you prefer
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // Swiped left
      carousel.scrollBy(window.innerWidth, 0);
    } else {
      // Swiped right
      carousel.scrollBy(-window.innerWidth, 0);
    }
  }
});
