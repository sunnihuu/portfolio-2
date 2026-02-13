// Work page category filtering
document.addEventListener('DOMContentLoaded', function() {
  const categoryLinks = document.querySelectorAll('.work__category');
  const projectItems = document.querySelectorAll('.work__item');
  const workGrid = document.querySelector('.work__grid');
  const pdfViewer = document.getElementById('pdfViewer');
  const pdfFrame = document.getElementById('pdfFrame');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all categories
      categoryLinks.forEach(cat => cat.classList.remove('active'));
      
      // Add active class to clicked category
      this.classList.add('active');
      
      // Get the category from href (e.g., #all, #graphics, etc.)
      const category = this.getAttribute('href').substring(1);
      
      // Special handling for Service Design (uiux)
      if (category === 'uiux') {
        // Hide work grid, show PDF
        workGrid.style.display = 'none';
        pdfViewer.style.display = 'block';
        pdfFrame.src = 'assets/images/service design.pdf';
      } else {
        // Show work grid, hide PDF
        workGrid.style.display = 'grid';
        pdfViewer.style.display = 'none';
        
        // Filter projects
        projectItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          
          if (category === 'all' || itemCategory === category) {
            item.style.display = 'flex';
            item.style.animation = 'fadeIn 0.4s ease-out';
          } else {
            item.style.display = 'none';
          }
        });
      }
    });
  });
});
