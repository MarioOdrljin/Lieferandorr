let menus = [
  {
    'dish': 'Pizza Magaritta',
    'description': 'Pizza magaritta with fresh made"',
    'price': 1,
    'category': 'pizza',
  },
  {
    'dish': 'Pizza Salami',
    'description': 'Pizza salami with fresh made',
    'price': 2,
    'category': 'pizza',

  },
  {

    'dish': 'Pizza Spinat',
    'description': 'Pizza green with fresh made',
    'price': 1,
    'category': 'pizza',
  },
  {

    'dish': 'Pizza Fungi',
    'description': 'Pizza Fungi with fresh made',
    'price': 2,
    'category': 'pizza',
  },
  {
    'dish': 'Pizza Tuno',
    'description': 'Pizza Tuno with fresh made',
    'price': 6.99,
    'category': 'pizza',
  },
  {
    'dish': 'Greek Salad',
    'description': 'A classic Greek salad with fresh vegetables, feta cheese, olives, and Greek dressing.',
    'price': 7.99,
    'category': 'salat',
  },
  {
    'dish': 'Caesar Salad',
    'description': 'Crisp romaine lettuce tossed with creamy Caesar dressing, croutons, and Parmesan cheese.',
    'price': 6.99,
    'category': 'salat',

  },
  {
    'dish': 'Caprese Salad',
    'description': 'Slices of fresh tomatoes and mozzarella cheese layered with basil leaves, drizzled with balsamic glaze.',
    'price': 8.99,
    'category': 'salat',
  },
  {
    'dish': 'Cobb Salad',
    'description': 'Mixed greens topped with grilled chicken, avocado, bacon, tomatoes, hard-boiled eggs, and blue cheese crumbles.',
    'price': 9.99,
    'category': 'salat',
  },
  {
    'dish': 'Spinach Salad',
    'description': 'Fresh spinach leaves topped with sliced mushrooms, red onions, cherry tomatoes, and balsamic vinaigrette.',
    'price': 6.99,
    'category': 'salat',
  },
  {
    'dish': 'Quinoa Salad',
    'description': 'A healthy salad with quinoa, mixed vegetables, feta cheese, and lemon vinaigrette.',
    'price': 8.99,
    'category': 'salat',
  },
  {
    'dish': 'Spaghetti',
    'description': 'Long, thin pasta noodles typically served with various sauces, such as marinara or carbonara.',
    'price': 8.99,
    'category': 'noodels',
  },
  {
    'dish': 'Fettuccine Alfredo',
    'description': 'Wide, flat pasta noodles coated in a creamy Parmesan sauce.',
    'price': 9.99,
    'category': 'noodels',
  },
  {
    'dish': 'Ramen',
    'description': 'Traditional Japanese noodles served in a flavorful broth, often accompanied by toppings like sliced pork, eggs, and vegetables.',
    'price': 10.99,
    'category': 'noodels',
  },
  {
    'dish': 'Pad Thai',
    'description': 'Thai stir-fried rice noodles with eggs, tofu, peanuts, bean sprouts, and a tangy sauce.',
    ' price': 7.99,
    'category': 'noodels',
  },
  {
    'dish': 'Linguine with Clams',
    'description': 'Flat, narrow pasta noodles served with fresh clams, garlic, olive oil, and parsley.',
    'price': 12.99,
    'category': 'noodels',
  },
  {
    'dish': 'Soba Noodles',
    'description': 'Thin Japanese buckwheat noodles often served chilled with a dipping sauce or in a hot broth.',
    'price': 9.99,
    'category': 'noodels',
  },
  {
    'dish': 'Lasagna',
    'description': 'Layered pasta sheets with meat or vegetable fillings, cheese, and tomato sauce.',
    'price': 12.99,
    'category': 'noodels',
  },

  {
    'dish': 'Nachos',
    'description': 'Crispy tortilla chips topped with melted cheese, jalapenos, and salsa.',
    'price': 4.99,
    'category': 'snacks',
  },
  {
    'dish': 'Chicken Wings',
    'description': 'Spicy or BBQ chicken wings served with dipping sauce.',
    'price': 6.99,
    'category': 'snacks',
  },
  {
    'dish': 'Cola',
    'description': 'Refreshing cola drink.',
    'price': 1.99,
    'category': 'drinks',
  },
  {
    'dish': 'Fanta',
    'description': 'Refreshing Fanta drink.',
    'price': 1.99,
    'category': 'drinks',
  },
  {
    'dish': 'Sprit',
    'description': 'Refreshing Sprit drink.',
    'price': 1.99,
    'category': 'drinks',
  },
  {
    'dish': 'Red-Bull',
    'description': 'Refreshing energydrink.',
    'price': 1.99,
    'category': 'drinks',
  },
  {
    'dish': 'Sprudelwasser',
    'description': 'Best choise for me',
    'price': 1.99,
    'category': 'drinks',
  },

  {
    'dish': 'Orange Juice',
    'description': 'Freshly squeezed orange juice.',
    'price': 2.99,
    'category': 'drinks',
  },

  {
    'dish': 'Chocolate Brownie',
    'description': 'Warm chocolate brownie served with vanilla ice cream and chocolate sauce.',
    'price': 4.99,
    'category': 'desserts',
  },
  {
    'dish': 'Cheesecake',
    'description': 'Creamy cheesecake with a graham cracker crust and fruit topping.',
    'price': 5.99,
    'category': 'desserts',
  },

]
function shoppingcard() {
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < menus.length; i++) {
    let menu = menus[i];
    dishcards.innerHTML += `
      <div class="resturant-dishcard">
        <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
         <div class="dishcard-reciept">
           <span><b> ${menu['dish']}</b></span>
           <span> ${menu['description']} </span>
           <span> ${menu['price']}€ </span>
         </div>
         <div class="dishcard-addtocard">
          <button type="button" class="dishcard-addtocardbtn">+</button>
         </div>
        </div>
      </div>
    `;
  }
}
let orderprice = [];
let orderitems = [];

function addtocard(i) {
  let menu = menus[i];
  let fillwarenkorb = document.getElementById('warenkorb');
  let shopping_addedsubtotal = document.getElementById('shopping_subtotal');
  let shopping_addedtotal = document.getElementById('shopping_total');

  let orderitem = { dish: menu['dish'], price: menu['price'] };
  orderitems.push(orderitem);
  fillwarenkorb.innerHTML = '';
  for (let y = 0; y < orderitems.length; y++) {
    let orderitem = orderitems[y];
    fillwarenkorb.innerHTML += ` 
      <div class= "warenkorb-edit">
        <div class= "warenkorb-container warenkorb-item">
          <span><b> ${orderitem['dish']}</b></span>
          <span> ${orderitem['price']}€ </span>
          <a href="#" class= "warenkorb-delete" onclick="deleted()">X</a>
        </div>
      </div>
    `;
  }

  orderprice.push(menu['price']);
  let sum = 0;
  for (let price = 0; price < orderprice.length; price++) {
    sum += orderprice[price];
  }

  shopping_addedsubtotal.innerHTML = `
    <span> Zwischensumme:  ${sum.toFixed(2)}€</span>
  `;

  shopping_addedtotal.innerHTML = `
    <span> Gesammtkosten: ${(sum + 2).toFixed(2)}€</span>
  `;
}
function deleted(y) {
  orderprice.splice(y, 1);
  orderitems.splice(y, 1);
  updatedshoppingcart();
}

function updatedshoppingcart() {
  let fillwarenkorb = document.getElementById('warenkorb');
  let shopping_addedsubtotal = document.getElementById('shopping_subtotal');
  let shopping_addedtotal = document.getElementById('shopping_total');

  fillwarenkorb.innerHTML = '';
  let sum = 0;

  for (let y = 0; y < orderitems.length; y++) {
    let orderitem = orderitems[y];
    fillwarenkorb.innerHTML += `
      <div class="warenkorb-edit">
        <div class="warenkorb-container warenkorb-item">
          <span><b>${orderitem['dish']}</b></span>
          <span>${orderitem['price']}€</span>
          <a href="#" class="warenkorb-delete" onclick="deleted(${y})">X</a>
        </div>
      </div>
    `;

    sum += orderitem['price'];
  }

  shopping_addedsubtotal.innerHTML = `
    <span> Zwischensumme:  ${sum.toFixed(2)}€</span>
  `;

  shopping_addedtotal.innerHTML = `
    <span> Gesammtkosten: ${(sum + 2).toFixed(2)}€</span>
  `;
}

function order() {
  if (orderprice <= 5) {
    alert("Mindestbestellwert nicht erreicht!");
    return;
  } else (orderprice >= 5)
  alert("Ihre bestellung wurde erfolgreich an das Resturant gesendet. Als Zahlung wird derzeit leider nur Zahlung per Nachname unterstützt danke für ihre bestellung, lassen sie doch eine Bewertung da!");
}

function searchpizza() {
  let category = 'pizza';
  let pizzalist = menus.filter(menu => menu.category === category);
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < pizzalist.length; i++) {
    let pizzas = pizzalist[i];
    dishcards.innerHTML += `
      <div class="resturant-dishcard">
        <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
         <div class="dishcard-reciept">
           <span><b> ${pizzas['dish']}</b></span>
           <span> ${pizzas['description']} </span>
           <span> ${pizzas['price']}€ </span>
         </div>
         <div class="dishcard-addtocard">
          <button type="button" class="dishcard-addtocardbtn">+</button>
         </div>
        </div>
      </div>
    `;
  }
}
function searchsalat() {
  let category = 'salat';
  let salatlist = menus.filter(menu => menu.category === category);
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < salatlist.length; i++) {
    let salats = salatlist[i];
    dishcards.innerHTML += `
          <div class="resturant-dishcard">
            <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
             <div class="dishcard-reciept">
               <span><b> ${salats['dish']}</b></span>
               <span> ${salats['description']} </span>
               <span> ${salats['price']}€ </span>
             </div>
             <div class="dishcard-addtocard">
              <button type="button" class="dishcard-addtocardbtn">+</button>
             </div>
            </div>
          </div>
        `;
  }
}
function searchnoodels() {
  let category = 'noodels';
  let noodellist = menus.filter(menu => menu.category === category);
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < noodellist.length; i++) {
    let noodels = noodellist[i];
    dishcards.innerHTML += `
              <div class="resturant-dishcard">
                <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
                 <div class="dishcard-reciept">
                   <span><b> ${noodels['dish']}</b></span>
                   <span> ${noodels['description']} </span>
                   <span> ${noodels['price']}€ </span>
                 </div>
                 <div class="dishcard-addtocard">
                  <button type="button" class="dishcard-addtocardbtn">+</button>
                 </div>
                </div>
              </div>
            `;
  }
}
function searchsnacks() {
  let category = 'snacks';
  let snackslist = menus.filter(menu => menu.category === category);
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < snackslist.length; i++) {
    let snacks = snackslist[i];
    dishcards.innerHTML += `
          <div class="resturant-dishcard">
            <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
              <div class="dishcard-reciept">
                <span><b>${snacks['dish']}</b></span>
                <span>${snacks['description']}</span>
                <span>${snacks['price']}€</span>
              </div>
              <div class="dishcard-addtocard">
                <button type="button" class="dishcard-addtocardbtn">+</button>
              </div>
            </div>
          </div>
        `;
  }
}

function searchdesserts() {
  let category = 'desserts';
  let dessertslist = menus.filter(menu => menu.category === category);
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < dessertslist.length; i++) {
    let desserts = dessertslist[i];
    dishcards.innerHTML += `
          <div class="resturant-dishcard">
            <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
              <div class="dishcard-reciept">
                <span><b>${desserts['dish']}</b></span>
                <span>${desserts['description']}</span>
                <span>${desserts['price']}€</span>
              </div>
              <div class="dishcard-addtocard">
                <button type="button" class="dishcard-addtocardbtn">+</button>
              </div>
            </div>
          </div>
        `;
  }
}

function searchdrinks() {
  let category = 'drinks';
  let drinkslist = menus.filter(menu => menu.category === category);
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < drinkslist.length; i++) {
    let drinks = drinkslist[i];
    dishcards.innerHTML += `
          <div class="resturant-dishcard">
            <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
              <div class="dishcard-reciept">
                <span><b>${drinks['dish']}</b></span>
                <span>${drinks['description']}</span>
                <span>${drinks['price']}€</span>
              </div>
              <div class="dishcard-addtocard">
                <button type="button" class="dishcard-addtocardbtn">+</button>
              </div>
            </div>
          </div>
        `;
  }
}
let categoryfilterItems;
function filterItems() {
  let search = document.getElementById('search').value.toLowerCase();
  let filteredItems = menus.filter(menu => menu.dish.toLowerCase().includes(search));
  
  let dishcards = document.getElementById('resturant-dishcards');
  dishcards.innerHTML = '';

  for (let i = 0; i < filteredItems.length; i++) {
    let menuItem = filteredItems[i];
    dishcards.innerHTML += `
      <div class="resturant-dishcard">
        <div class="dishcard-informations" id="dishcardinformations" onclick="addtocard(${i})">
          <div class="dishcard-reciept">
            <span><b>${menuItem['dish']}</b></span>
            <span>${menuItem['description']}</span>
            <span>${menuItem['price']}€</span>
          </div>
          <div class="dishcard-addtocard">
            <button type="button" class="dishcard-addtocardbtn">+</button>
          </div>
        </div>
      </div>
    `;
  }
}
 function discardwarenkorb() {
  let displaynone =  document.querySelector("#shopping-card-container");
  displaynone.classList.toggle("hide");
  let removedisplay = document.querySelector("#resturant-container");
  removedisplay.classList.toggle("show");
  let addjustlogo = document.querySelector("#resturant-logo");
  addjustlogo.classList.toggle("logofullscreen");
}
function functionAlert(msg, myYes) {
  var confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function() {
     confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}
function favo(x) {
  x.classList.toggle("fa-solid");
}