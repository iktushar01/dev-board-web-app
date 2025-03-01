function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  const btn = document.getElementById('bg_change_btn');
  btn.addEventListener('click', function() {
    document.documentElement.style.backgroundColor = getRandomColor();
  });