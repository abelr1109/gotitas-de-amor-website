const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Language toggle functionality
const langToggle = document.getElementById('langToggle');
const htmlElement = document.documentElement;

// Get saved language preference or default to Spanish
let currentLanguage = localStorage.getItem('language') || 'es';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLanguage);
  updateToggleButton();
});

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update HTML lang attribute
  htmlElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
  
  // Update all elements with data-es and data-en attributes
  document.querySelectorAll('[data-es][data-en]').forEach(element => {
    const textContent = lang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-es');
    
    // Handle different element types
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      if (element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', textContent);
      }
    } else if (element.tagName === 'LABEL') {
      // For labels with data-es-label and data-en-label
      const labelText = lang === 'en' ? element.getAttribute('data-en-label') : element.getAttribute('data-es-label');
      if (labelText) {
        element.childNodes[0].textContent = labelText;
      }
    } else if (element.tagName === 'OPTION') {
      element.textContent = textContent;
    } else {
      // For other elements, preserve HTML structure by updating text nodes
      if (element.children.length === 0 || element.tagName === 'BUTTON' || element.tagName === 'A') {
        element.textContent = textContent;
      } else {
        // For elements with children (like p with strong tags), update first text node
        let textNode = element.firstChild;
        while (textNode && textNode.nodeType !== Node.TEXT_NODE) {
          textNode = textNode.nextSibling;
        }
        if (textNode) {
          textNode.textContent = textContent;
        }
      }
    }
  });
  
  // Handle labels separately for better label text handling
  document.querySelectorAll('label[data-es-label][data-en-label]').forEach(label => {
    const firstChild = label.firstChild;
    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
      firstChild.textContent = lang === 'en' ? label.getAttribute('data-en-label') : label.getAttribute('data-es-label');
    }
  });
  
  updateToggleButton();
}

function updateToggleButton() {
  if (langToggle) {
    langToggle.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    langToggle.title = currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español';
  }
}

// Add click event to language toggle
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
  });
}
