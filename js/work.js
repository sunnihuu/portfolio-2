// Work page category filtering
document.addEventListener('DOMContentLoaded', function() {
  const categoryLinks = document.querySelectorAll('.work__category');
  const projectItems = document.querySelectorAll('.work__item');
  const workGrid = document.querySelector('.work__grid');
  const pdfViewer = document.getElementById('pdfViewer');
  const pdfEmbed = document.getElementById('pdfEmbed');
  const graphicsGallery = document.getElementById('graphicsGallery');
  const graphicsGrid = document.getElementById('graphicsGrid');
  
  // Graphics dump images
  const graphicsImages = [
    '10.png',
    '1080_1080 2.png',
    '1080_1080.png',
    '111.png',
    '12.jpg',
    '2.1.png',
    '2.2.png',
    '20230926_Sunni_Hu_please_take_one_01.jpg',
    '20230926_Sunni_Hu_please_take_one_02-1.png',
    '20230926_Sunni_Hu_please_take_one_02.png',
    '20231107_Sunni_Hu_collab_type_01.png',
    '20231107_Sunni_Hu_collab_type_02-1.png',
    '20231107_Sunni_Hu_collab_type_02.png',
    '20231107_Sunni_Hu_collab_type_04.png',
    '20231295_Sunni_Hu_unfold_memories_01.png',
    '20231295_Sunni_Hu_unfold_memories_02.png',
    '2121.png',
    '22.jpg',
    '222.jpg',
    '2222.jpg',
    '23.jpg',
    '3 2.png',
    '3.1.png',
    '3.2.png',
    '3.png',
    '323232.jpg',
    '3333.jpg',
    '33333.jpg',
    '333333.jpg',
    '4.1.png',
    '4.2.png',
    '4.4.png',
    '4.5.png',
    '4444.jpg',
    '5 2.png',
    '5 3.png',
    '5.2.png',
    '5.5.png',
    '5.6.png',
    '5.png',
    '55555.jpg',
    '6.png',
    '7.png',
    '8.jpg',
    '8.png',
    '9.png',
    'Artboard 1 2.png',
    'Artboard 1 3.png',
    'Artboard 1 copy 2.png',
    'Artboard 1 copy.png',
    'Artboard 1.png',
    'Artboard 2.png',
    'Artboard 3.png',
    'Artboard-1-2.jpg',
    'Artboard-1.jpg',
    'Jiayu-Sunni-Hu_CanvasRebel_img01.gif',
    'Jiayu-Sunni-Hu_CanvasRebel_img06.gif',
    'aaa.png',
    'aaaa copy 2.png',
    'aaaa copy.png',
    'aaaa.png',
    'aaaaa.png',
    'adada.png',
    'aeqeqe.png',
    'asa.png',
    'asasa.png',
    'asasas.png',
    'asdada.png',
    'asdadadad.png',
    'bcknasbckjas.png',
    'ccccc copy.png',
    'ccccc.png',
    'cccccc.png',
    'dada.png',
    'dadad.png',
    'dasda.png',
    'ddd.png',
    'dsdsdsds.png',
    'dsdsdsdsdddd.png',
    'edit copy.png',
    'edit.png',
    'eqeq.png',
    'ewewew.png',
    'ffff.png',
    'ffffjwkfw.png',
    'gcgcjg.png',
    'ioio.png',
    'map.jpg',
    'nknj.png',
    'nn.png',
    'pppp.png',
    'qeqeq.png',
    'qqq copy.png',
    'qqq.png',
    'qwq.png',
    'rrrrr.png',
    'sada.png',
    'sdasdada.png',
    'sdsd.png',
    'sdsdsdsdsccc.png',
    'ssss.jpg',
    'tttt.png',
    'vvvv 2.png',
    'vvvv.png',
    'vvvvv 2.png',
    'vvvvv 3.png',
    'vvvvv 4.png',
    'vvvvv copy.png',
    'vvvvv.png',
    'vvvvvcscscsc.png',
    'vvvvvv.png',
    'vvvvvvvsxcsc.png',
    'vvvvvvvv.png',
    'vvvvvvxvxvx.png',
    'vvvvxcz.png',
    'w.jpg'
  ];
  
  // Shuffle array function
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  // Initialize with Brand + Space (branding) PDF on page load
  workGrid.style.display = 'none';
  graphicsGallery.style.display = 'none';
  pdfViewer.style.display = 'block';
  pdfEmbed.src = 'assets/images/sunni-portfolio-3.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
  
  // Add loaded class after brief delay
  setTimeout(() => {
    pdfViewer.classList.add('loaded');
  }, 100);
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all categories
      categoryLinks.forEach(cat => cat.classList.remove('active'));
      
      // Add active class to clicked category
      this.classList.add('active');
      
      // Get the category from href (e.g., #all, #graphics, etc.)
      const category = this.getAttribute('href').substring(1);
      
      // Handle Brand + Space (branding)
      if (category === 'branding') {
        workGrid.style.display = 'none';
        graphicsGallery.style.display = 'none';
        graphicsGallery.classList.remove('active');
        pdfViewer.style.display = 'block';
        pdfViewer.classList.remove('loaded');
        pdfEmbed.src = 'assets/images/sunni-portfolio-3.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
        setTimeout(() => {
          pdfViewer.classList.add('loaded');
        }, 50);
      }
      // Special handling for Service Design (uiux)
      else if (category === 'uiux') {
        // Hide work grid and graphics gallery, show PDF
        workGrid.style.display = 'none';
        graphicsGallery.style.display = 'none';
        graphicsGallery.classList.remove('active');
        pdfViewer.style.display = 'block';
        pdfViewer.classList.remove('loaded');
        pdfEmbed.src = 'assets/images/service design.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
        setTimeout(() => {
          pdfViewer.classList.add('loaded');
        }, 50);
      } else if (category === 'editorial') {
        // Hide work grid and PDF, show graphics gallery
        workGrid.style.display = 'none';
        pdfViewer.style.display = 'none';
        pdfViewer.classList.remove('loaded');
        graphicsGallery.style.display = 'block';
        
        // Clear and reload graphics with random order every time
        graphicsGrid.innerHTML = '';
        
        // Shuffle images
        const shuffledImages = shuffleArray(graphicsImages);
        
        shuffledImages.forEach(imageName => {
          const item = document.createElement('div');
          item.className = 'work__graphics-item';
          
          // Random rotation between -5 and 5 degrees
          const rotation = (Math.random() - 0.5) * 10; // -5 to +5 degrees
          item.style.transform = `rotate(${rotation}deg)`;
          
          const img = document.createElement('img');
          img.src = `assets/images/graphics dump/${imageName}`;
          img.alt = imageName;
          img.loading = 'lazy';
          
          item.appendChild(img);
          graphicsGrid.appendChild(item);
        });
        
        // Add active class for fade in
        setTimeout(() => {
          graphicsGallery.classList.add('active');
        }, 50);
      }
    });
  });
});
