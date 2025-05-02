
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // cuando el 30% sea visible
  });

  const sectionMotos = document.querySelector('.motos');
  if (sectionMotos) {
    observer.observe(sectionMotos);
  }

