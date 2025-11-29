
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x225/rome-italy-temple-lds-1079997-wallpaper.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-1295567-wallpaper.jpg"
  }
];

document.addEventListener('DOMContentLoaded', function () {

  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const copyrightYear = document.querySelector('#copyright-year');
  const lastModified = document.querySelector('#last-modified');
  const templeContainer = document.querySelector('.main-content_img-container');
  const mainHeading = document.querySelector('.main-content_heading');
  const navLinks = document.querySelectorAll('nav ul li a');
  // const oldTemplesFilter = document.querySelector('#oldTemples');

  const todayDate = new Date();
  copyrightYear.innerHTML = todayDate.getFullYear();
  lastModified.innerHTML = todayDate.toLocaleString()

  hamburgerMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const nav = document.querySelector("nav");

    hamburgerMenu.classList.toggle("show-menu");
    hamburgerMenu.classList.toggle("remove-menu");

    nav.classList.toggle('open');

  }




  function createTempleCards(temple) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'temple-card';
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    img.width = 400;
    img.height = 250;
    
    const infoDiv = document.createElement('div');
    infoDiv.className = 'temple-info';
    
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = temple.templeName;
    
    const table = document.createElement('table');
    
    const rows = [
      { label: 'Location:', value: temple.location },
      { label: 'Dedicated:', value: temple.dedicated },
      { label: 'Size:', value: `${temple.area.toLocaleString()} sq ft` }
    ];
    
    rows.forEach(rowData => {
      const row = document.createElement('tr');
      
      const headerCell = document.createElement('th');
      headerCell.textContent = rowData.label;
      
      const dataCell = document.createElement('td');
      dataCell.textContent = rowData.value;
      
      row.appendChild(headerCell);
      row.appendChild(dataCell);
      table.appendChild(row);
    });
    
    infoDiv.appendChild(nameHeading);
    infoDiv.appendChild(table);
    cardDiv.appendChild(infoDiv);
    cardDiv.appendChild(img);
    
    return cardDiv;
  }


  function displayTemples(templesArray, filterName) {
    if (!templeContainer) {
      console.error('Temple container not found');
      return;
    }
    
    if (mainHeading) {
      mainHeading.textContent = filterName;
    }
    
    templeContainer.innerHTML = '';
    
    if (templesArray.length === 0) {
      templeContainer.innerHTML = '<p class="no-temples">No temples found matching the selected filter.</p>';
      return;
    }
    else {
      templesArray.forEach(temple => {
        const cardHTML = createTempleCards(temple);
        templeContainer.appendChild(cardHTML);
      });
    }
  }

  function filterOldTemples() {
    const oldTemples = temples.filter(temple => {
      const dedicationYear = parseInt(temple.dedicated.split(',')[0]);
      return dedicationYear < 1900;
    });
    displayTemples(oldTemples, 'Old Temples');
  }

  function filterNewTemples() {
    const newTemples = temples.filter(temple => {
      const dedicationYear = parseInt(temple.dedicated.split(',')[0]);
      return dedicationYear > 2000;
    });
    displayTemples(newTemples, 'New Temples');
  }

  function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples, 'Large Temples');
  }

  function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples, 'Small Temples');
  }

  function showAllTemples() {
    displayTemples(temples, 'Home');
  }
  
  showAllTemples();



  navLinks.forEach((link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      link.classList.add('active');
      
      switch(link.textContent) {
        case 'Home':
          showAllTemples();
          break;
        case 'Old':
          filterOldTemples();
          break;
        case 'New':
          filterNewTemples();
          break;
        case 'Large':
          filterLargeTemples();
          break;
        case 'Small':
          filterSmallTemples();
          break;
        default:
          showAllTemples();
      }
    });
  }));


  // Initialize
  showAllTemples();

});
