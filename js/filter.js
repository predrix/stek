(function() {
  const chooseBtn = document.querySelectorAll('.gallery_btn');
  chooseBtn.forEach(function(btn) {
    btn.addEventListener('click', function(event){
      event.preventDefault();
      const value = event.target.dataset.filter;
      const items = document.querySelectorAll('.food');

      items.forEach(function(item) {
        if (value === 'all'){
          item.style.display = 'block';
        } else {
          if (item.classList.contains(value)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
})();
