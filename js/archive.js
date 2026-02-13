// Project Data
const projects = [
  {
    id: 1,
    title: "Aurora Brand System",
    category: "brand",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2024",
    role: "Brand Design",
    description: "Complete visual system with motion behaviors, typography, and packaging guidelines."
  },
  {
    id: 2,
    title: "Northwind Product Design",
    category: "product",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2024",
    role: "Product Design",
    description: "Rebuilt the design language for a data-heavy SaaS, improving clarity and conversion."
  },
  {
    id: 3,
    title: "Lightforms Installation",
    category: "installation",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2024",
    role: "Creative Direction",
    description: "Immersive generative visuals for a pop-up gallery; real-time sound-reactive compositions."
  },
  {
    id: 4,
    title: "Editorial Series: Design Futures",
    category: "editorial",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2023",
    role: "Editor & Designer",
    description: "A four-part publication exploring emerging paradigms in digital design and sustainability."
  },
  {
    id: 5,
    title: "Cipher Identity System",
    category: "brand",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2023",
    role: "Brand Design",
    description: "Minimal monogram and lettermark system for a boutique architecture firm."
  },
  {
    id: 6,
    title: "Nexus App Interface",
    category: "product",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2023",
    role: "Product Design",
    description: "Collaborative tool interface with emphasis on efficient workflows and clear information hierarchy."
  },
  {
    id: 7,
    title: "Kinetic Wall Installation",
    category: "installation",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2023",
    role: "Creative Direction",
    description: "Interactive light-reactive surface for corporate atrium; responds to ambient sound."
  },
  {
    id: 8,
    title: "Typography Compendium",
    category: "editorial",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    year: "2023",
    role: "Researcher & Designer",
    description: "A comprehensive guide to Swiss typographic principles and modern application."
  }
];

// Render Projects
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  filtered.forEach(project => {
    const card = document.createElement('a');
    card.className = 'project__card';
    card.href = '#'; // Link to project detail page
    card.dataset.category = project.category;

    const meta = `${project.year} · ${project.category.toUpperCase()} · ${project.role}`.toUpperCase();

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project__image">
      <div class="project__content">
        <h3 class="project__title t-h3">${project.title}</h3>
        <p class="project__meta t-meta">${meta}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Filter Functionality
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter__btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('filter__btn--active'));

      // Add active class to clicked button
      btn.classList.add('filter__btn--active');

      // Filter projects
      const filter = btn.dataset.filter;
      renderProjects(filter);
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initFilters();
});
