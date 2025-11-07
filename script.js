// --------------------------
// RECIPE DATA (20 recipes using local images folder)
// --------------------------
const RECIPES = [
  { id: 'r1', title: 'Paneer Butter Masala', cuisine: 'Indian', time: 30, mood: ['hungry'],
    img: 'paneer.jpg',
    desc: 'Creamy North Indian curry with rich butter and spices.',
    ingredients: ['200g paneer', '2 tomatoes', '1 onion', '2 tbsp butter', '1 tsp garam masala', 'cream'],
    steps: ['Heat butter and sauté onions till golden.', 'Add tomato puree and cook until thick.', 'Add spices and paneer cubes, simmer 5 mins.', 'Top with cream and coriander, serve hot.']
  },
  { id: 'r2', title: 'Margherita Pizza', cuisine: 'Italian', time: 45, mood: ['party'],
    img: 'pizza.jpg',
    desc: 'Classic pizza with tomato sauce, mozzarella, and basil.',
    ingredients: ['Pizza base', 'Tomato sauce', 'Mozzarella', 'Basil leaves', 'Olive oil'],
    steps: ['Spread sauce on base.', 'Top with mozzarella and basil.', 'Bake at 250°C for 7–10 minutes.', 'Drizzle olive oil and serve.']
  },
  { id: 'r3', title: 'Garlic Spaghetti Aglio e Olio', cuisine: 'Italian', time: 15, mood: ['lazy'],
    img: 'spaghetti.jpg',
    desc: 'Quick 15-min pasta with garlic and olive oil.',
    ingredients: ['200g spaghetti', '3 garlic cloves', 'Olive oil', 'Chili flakes', 'Parsley'],
    steps: ['Cook pasta and drain.', 'Sauté garlic in olive oil.', 'Toss pasta with garlic and chili flakes.', 'Top with parsley and serve.']
  },
  { id: 'r4', title: 'Avocado Salad', cuisine: 'Mexican', time: 10, mood: ['healthy'],
    img: 'avocado.jpg',
    desc: 'Refreshing salad with creamy avocado and lime.',
    ingredients: ['1 avocado', 'Cherry tomatoes', 'Lime juice', 'Salt', 'Pepper', 'Olive oil'],
    steps: ['Chop avocado and tomatoes.', 'Mix dressing with lime juice and oil.', 'Toss together and serve chilled.']
  },
  { id: 'r5', title: 'Chicken Biryani', cuisine: 'Indian', time: 60, mood: ['party'],
    img: 'biryani.jpg',
    desc: 'Spicy aromatic rice with marinated chicken and saffron.',
    ingredients: ['Basmati rice', 'Chicken', 'Yogurt', 'Spices', 'Saffron', 'Onions'],
    steps: ['Marinate chicken with spices and yogurt.', 'Cook rice halfway and layer with chicken.', 'Seal and cook on low flame.', 'Serve with raita.']
  },
  { id: 'r6', title: 'Tacos', cuisine: 'Mexican', time: 20, mood: ['party', 'hungry'],
    img: 'tacos.jpg',
    desc: 'Crispy tacos with spicy fillings.',
    ingredients: ['Taco shells', 'Ground beef', 'Lettuce', 'Cheese', 'Salsa'],
    steps: ['Cook meat with spices.', 'Assemble tacos with fillings.', 'Top with salsa and cheese.']
  },
  { id: 'r7', title: 'Fried Rice', cuisine: 'Chinese', time: 20, mood: ['lazy', 'hungry'],
    img: 'friedrice.jpg',
    desc: 'Quick stir-fried rice with veggies and soy sauce.',
    ingredients: ['Cooked rice', 'Carrots', 'Soy sauce', 'Egg', 'Onion'],
    steps: ['Sauté veggies.', 'Add rice and soy sauce.', 'Mix well and fry for 5 minutes.']
  },
  { id: 'r8', title: 'Veg Momos', cuisine: 'Tibetan', time: 25, mood: ['party'],
    img: 'momos.jpg',
    desc: 'Steamed dumplings filled with veggies.',
    ingredients: ['Flour', 'Cabbage', 'Carrot', 'Garlic', 'Soy sauce'],
    steps: ['Prepare dough and filling.', 'Shape into dumplings.', 'Steam for 10 minutes and serve.']
  },
  { id: 'r9', title: 'Chocolate Brownie', cuisine: 'Dessert', time: 30, mood: ['party'],
    img: 'brownie.jpg',
    desc: 'Fudgy chocolate brownies with a crispy top.',
    ingredients: ['Flour', 'Cocoa powder', 'Butter', 'Sugar', 'Eggs'],
    steps: ['Mix ingredients.', 'Bake at 180°C for 25 mins.', 'Cool and cut squares.']
  },
  { id: 'r10', title: 'Pancakes', cuisine: 'American', time: 15, mood: ['lazy'],
    img: 'pancakes.jpg',
    desc: 'Fluffy pancakes with honey or syrup.',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Honey'],
    steps: ['Mix batter.', 'Cook on skillet.', 'Serve with honey.']
  },
  { id: 'r11', title: 'Masala Dosa', cuisine: 'Indian', time: 20, mood: ['hungry'],
    img: 'dosa.jpg',
    desc: 'South Indian crispy dosa filled with potato curry.',
    ingredients: ['Dosa batter', 'Potatoes', 'Mustard seeds', 'Curry leaves'],
    steps: ['Prepare filling.', 'Spread dosa and add filling.', 'Fold and serve with chutney.']
  },
  { id: 'r12', title: 'Caesar Salad', cuisine: 'Italian', time: 10, mood: ['healthy'],
    img: 'salad.jpg',
    desc: 'Classic lettuce salad with Caesar dressing.',
    ingredients: ['Lettuce', 'Croutons', 'Cheese', 'Caesar dressing'],
    steps: ['Toss all ingredients.', 'Chill and serve.']
  },
  { id: 'r13', title: 'Fruit Smoothie', cuisine: 'Dessert', time: 5, mood: ['healthy'],
    img: 'smoothie.jpg',
    desc: 'Refreshing smoothie with mixed fruits.',
    ingredients: ['Banana', 'Apple', 'Milk', 'Honey', 'Ice'],
    steps: ['Blend all ingredients.', 'Serve chilled.']
  },
  { id: 'r14', title: 'Hakka Noodles', cuisine: 'Chinese', time: 20, mood: ['hungry'],
    img: 'noodles.jpg',
    desc: 'Spicy noodles tossed with veggies and sauces.',
    ingredients: ['Noodles', 'Capsicum', 'Carrot', 'Soy sauce', 'Vinegar'],
    steps: ['Boil noodles.', 'Sauté veggies.', 'Toss with sauces and serve.']
  },
  { id: 'r15', title: 'Grilled Sandwich', cuisine: 'American', time: 10, mood: ['lazy'],
    img: 'sandwich.jpg',
    desc: 'Crispy grilled sandwich with veggies and cheese.',
    ingredients: ['Bread', 'Cheese', 'Capsicum', 'Butter'],
    steps: ['Layer ingredients.', 'Grill until golden.', 'Serve hot.']
  },
  { id: 'r16', title: 'Spring Rolls', cuisine: 'Chinese', time: 25, mood: ['party'],
    img: 'springrolls.jpg',
    desc: 'Crispy rolls with mixed vegetable filling.',
    ingredients: ['Spring roll sheets', 'Cabbage', 'Carrot', 'Soy sauce'],
    steps: ['Prepare filling.', 'Roll and seal edges.', 'Deep fry till crisp.']
  },
  { id: 'r17', title: 'Gulab Jamun', cuisine: 'Indian', time: 25, mood: ['party'],
    img: 'gulabjamun.jpg',
    desc: 'Soft fried milk balls soaked in sugar syrup.',
    ingredients: ['Khoya', 'Flour', 'Sugar', 'Cardamom'],
    steps: ['Make dough balls.', 'Deep fry till golden.', 'Soak in syrup.']
  },
  { id: 'r18', title: 'Samosa', cuisine: 'Indian', time: 30, mood: ['party'],
    img: 'samosa.jpg',
    desc: 'Crispy triangle pastry filled with spicy potatoes.',
    ingredients: ['Flour', 'Potatoes', 'Peas', 'Spices'],
    steps: ['Make filling.', 'Shape samosas.', 'Fry till golden.']
  },
  { id: 'r19', title: 'Cupcake', cuisine: 'Dessert', time: 25, mood: ['party', 'lazy'],
    img: 'cupcake.jpg',
    desc: 'Mini cakes topped with colorful frosting.',
    ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Frosting'],
    steps: ['Mix ingredients.', 'Bake 20 mins.', 'Decorate with frosting.']
  },
  { id: 'r20', title: 'Sushi Rolls', cuisine: 'Japanese', time: 40, mood: ['healthy', 'party'],
    img: 'sushi.jpg',
    desc: 'Japanese rice rolls with fish or veggies.',
    ingredients: ['Sushi rice', 'Nori', 'Avocado', 'Cucumber', 'Soy sauce'],
    steps: ['Lay nori and rice.', 'Add filling and roll tightly.', 'Cut pieces and serve with soy sauce.']
  },
   { id: 'r21', title: 'Bread Pizza', cuisine: 'Indian', time: 10, mood: ['lazy', 'hungry'],
    img: 'breadpizza.jpg',
    desc: 'Quick and cheesy bread pizza you can make on a tawa or oven.',
    ingredients: ['Bread slices', 'Pizza sauce', 'Cheese', 'Capsicum', 'Onion', 'Chili flakes'],
    steps: ['Spread pizza sauce on bread.', 'Add chopped veggies and grated cheese.', 'Cook on tawa or bake till cheese melts.', 'Sprinkle chili flakes and serve hot.']
  },
  { id: 'r22', title: 'Lotus Biscoff Cheesecake', cuisine: 'Dessert', time: 90, mood: ['party'],
    img: 'biscoff.jpg',
    desc: 'No-bake creamy cheesecake layered with Lotus Biscoff spread.',
    ingredients: ['200g cream cheese', '1/2 cup sugar', '1 cup whipped cream', '10 Biscoff biscuits', '1/4 cup melted butter', 'Lotus Biscoff spread'],
    steps: ['Crush biscuits and mix with butter to make base.', 'Whip cream cheese, sugar, and cream.', 'Pour over base and chill for 2 hours.', 'Top with melted Biscoff spread and refrigerate again before serving.']
  }
];

// --------------------------
// STATE + UTILITIES
// --------------------------
const state = { 
  recipes: RECIPES.slice(), 
  filtered: RECIPES.slice(), 
  favorites: JSON.parse(localStorage.getItem('rf_favs') || '[]'),
  points: Number(localStorage.getItem('rf_points') || 0)
};

function saveState() {
  localStorage.setItem('rf_points', state.points);
  localStorage.setItem('rf_favs', JSON.stringify(state.favorites));
  document.getElementById('points').textContent = state.points;
}
saveState();

const galleryEl = document.getElementById('gallery');
const cuisineFilter = document.getElementById('cuisineFilter');

// Populate cuisines dynamically
new Set(RECIPES.map(r => r.cuisine)).forEach(c => {
  const opt = document.createElement('option');
  opt.value = c;
  opt.textContent = c;
  cuisineFilter.appendChild(opt);
});

function showLoader(on = true) {
  document.getElementById('loader').style.display = on ? 'flex' : 'none';
}

// --------------------------
// RENDER RECIPE CARDS (no flip)
// --------------------------
function renderRecipes(list) {
  galleryEl.innerHTML = '';
  if (!list.length) {
    galleryEl.innerHTML = '<p class="text-center text-muted">No recipes found.</p>';
    return;
  }

  list.forEach(rec => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4 position-relative';

    const favActive = state.favorites.includes(rec.id) ? 'text-danger' : '';

    col.innerHTML = `
      <div class="card h-100">
        <button class="favorite ${favActive}" data-id="${rec.id}">
          <i class="bi bi-heart"></i>
        </button>
        <img src="${rec.img}" class="card-img-top" alt="${rec.title}">
        <div class="card-body text-center">
          <h5 class="card-title">${rec.title}</h5>
          <p class="small text-muted">${rec.cuisine} • ${rec.time} min</p>
          <p class="card-text">${rec.desc}</p>
          <button class="btn btn-primary btn-sm view-btn" data-id="${rec.id}">View Recipe</button>
        </div>
      </div>
    `;
    galleryEl.appendChild(col);
  });

  // Event listeners
  document.querySelectorAll('.view-btn').forEach(btn =>
    btn.addEventListener('click', e => openModal(e.target.dataset.id))
  );

  document.querySelectorAll('.favorite').forEach(btn => {
    btn.onclick = e => {
      const id = e.currentTarget.dataset.id;
      e.currentTarget.classList.toggle('text-danger');
      if (state.favorites.includes(id))
        state.favorites = state.favorites.filter(f => f !== id);
      else
        state.favorites.push(id);
      saveState();
    };
  });
}
renderRecipes(state.recipes);

// --------------------------
// SEARCH, FILTERS, MOODS
// --------------------------
function doSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const cuisine = cuisineFilter.value;
  const time = Number(document.getElementById('timeFilter').value || 0);

  const results = RECIPES.filter(r => {
    const matchQ = !q || r.title.toLowerCase().includes(q) || r.ingredients.join(' ').toLowerCase().includes(q);
    const matchCuisine = !cuisine || r.cuisine === cuisine;
    const matchTime = !time || r.time <= time;
    return matchQ && matchCuisine && matchTime;
  });

  state.filtered = results;
  renderRecipes(results);
  state.points++;
  saveState();
}

document.getElementById('searchBtn').onclick = doSearch;
cuisineFilter.onchange = doSearch;
document.getElementById('timeFilter').onchange = doSearch;

document.querySelectorAll('.chip').forEach(chip => {
  chip.onclick = () => {
    const mood = chip.dataset.mood;
    const results = RECIPES.filter(r => r.mood.includes(mood));
    renderRecipes(results);
    state.points += 2;
    saveState();
  };
});

// --------------------------
// SURPRISE ME
// --------------------------
document.getElementById('surpriseBtn').onclick = () => {
  const r = RECIPES[Math.floor(Math.random() * RECIPES.length)];
  showLoader(true);
  setTimeout(() => {
    showLoader(false);
    openModal(r.id);
    state.points += 3;
    saveState();
  }, 800);
};

// --------------------------
// MODAL VIEWER
// --------------------------
const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
let currentRecipe = null;
let step = 0;

function openModal(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  currentRecipe = r;
  step = 0;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalImg').src = r.img;
  document.getElementById('metaInfo').textContent = `${r.cuisine} • ${r.time} min`;
  document.getElementById('modalIngredients').innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
  document.getElementById('stepText').textContent = r.steps[0];
  document.getElementById('calories').textContent = estimateCalories(r.ingredients);
  modal.show();
}

document.getElementById('nextStep').onclick = () => {
  if (!currentRecipe) return;
  step = Math.min(step + 1, currentRecipe.steps.length - 1);
  document.getElementById('stepText').textContent = currentRecipe.steps[step];
};
document.getElementById('prevStep').onclick = () => {
  if (!currentRecipe) return;
  step = Math.max(step - 1, 0);
  document.getElementById('stepText').textContent = currentRecipe.steps[step];
};

// --------------------------
// CALORIE ESTIMATOR
// --------------------------
const CAL_MAP = { paneer: 250, cheese: 100, pasta: 200, avocado: 160, tomato: 18, chicken: 220, oil: 120, rice: 200, chocolate: 150 };
function estimateCalories(ingredients) {
  let total = 0;
  ingredients.forEach(i => {
    const item = i.toLowerCase();
    for (const key in CAL_MAP) if (item.includes(key)) total += CAL_MAP[key];
  });
  return total || Math.floor(Math.random() * 200 + 100);
}

// --------------------------
// THEME + RESET + VOICE
// --------------------------
document.getElementById('themeBtn').onclick = () => {
  const body = document.body;
  const mode = body.getAttribute('data-theme');
  const newMode = mode === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newMode);
  localStorage.setItem('rf_theme', newMode);
};

document.getElementById('resetBtn').onclick = () => {
  renderRecipes(RECIPES);
  document.getElementById('searchInput').value = '';
  cuisineFilter.value = '';
  document.getElementById('timeFilter').value = '';
  state.points = 0;
  saveState();
};

// --------------------------
// VOICE SEARCH
// --------------------------
const voiceBtn = document.getElementById('voiceBtn');
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recog = new SR();
  recog.lang = 'en-IN';
  recog.onresult = e => {
    const txt = e.results[0][0].transcript;
    document.getElementById('searchInput').value = txt;
    doSearch();
  };
  recog.onerror = () => alert('Voice input failed, please try again.');
  voiceBtn.onclick = () => recog.start();
} else {
  voiceBtn.classList.add('disabled');
  voiceBtn.title = 'Voice recognition not supported';
}

// --------------------------
// INIT
// --------------------------
window.onload = () => {
  const savedTheme = localStorage.getItem('rf_theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  document.getElementById('points').textContent = state.points;
  renderRecipes(state.recipes);
};


// --------------------------
// FUNNY NOTIFICATION BANNER (Zomato-style top popup)
// --------------------------
const quotes = [
  "We knead you to stay hungry 🍞",
  "Someone somewhere is ordering pizza 🍕",
  "Don’t be hangry, just search faster 😋",
  "Good food = good mood 😎",
  "Calories don’t count on weekends 🥳",
  "Your soulmate might just be a samosa 💛",
  "Happiness is extra fries 🍟",
  "Let’s taco ‘bout food 🌮",
  "Chill, biryani solves everything 😌",
  "Someone just searched ‘paneer’ 👀"
];

const quoteBox = document.getElementById("foodQuotes");
const quoteText = document.getElementById("quoteText");

let currentQuote = 0;
function showNextQuote() {
  quoteText.textContent = quotes[currentQuote];
  quoteBox.classList.add("show");
  setTimeout(() => quoteBox.classList.remove("show"), 4000);
  currentQuote = (currentQuote + 1) % quotes.length;
}

// change every 6 seconds
setInterval(showNextQuote, 6000);

// show first quote after 2 seconds
setTimeout(showNextQuote, 2000);
