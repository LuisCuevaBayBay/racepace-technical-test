document.addEventListener("DOMContentLoaded", function() {
    const faqSection = document.querySelector('.faq-section');
  
    function handleScroll() {
      const rect = faqSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        faqSection.classList.add('visible');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Check on page load
  });
  