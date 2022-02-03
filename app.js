//get only unique categories - HARDEST ONE
//iterate over categories return buttons
//make sure to select buttons when they are available

//items
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "Breakfast",
        price: 15.99,
        img: "./images/buttermilk pancakes.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Lunch",
        price: 13.99,
        img: "./images/diner double.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing marfa`,
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "Shakes",
        price: 6.99,
        img: "./images/godzilla milkshake.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,
    },
    {
        id: 4,
        title: "Country Delight",
        category: "Breakfast",
        price: 20.99,
        img: "./images/country delight.jpg",
        desc: `shabby chic keffiyeh neutra snackwave pork belly shoreeditch. prism austin mlkshk truffaut`,
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "Lunch",
        price: 22.99,
        img: "./images/egg attack.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pintrest meditation farm to table 90's pop-up`,
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "Shakes",
        price: 18.99,
        img: "./images/oreo dream.jpg",
        desc: `portland chicharrones ethical edion bulb, palo santro craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "Shakes",
        price: 8.99,
        img: "./images/bacon overflow.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 8,
        title: "American Classic",
        category: "Breakfast",
        price: 12.99,
        img: "./images/american classic.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        category: "Shakes",
        price: 16.99,
        img: "./images/quarantine buddy.jpg",
        desc: `Skateboard fam synth authentic semiotics. 
        Live-edge lyft af, edison bulb yuccie crucifix microdosing`,
    },
    {
        id: 10,
        title: "Steak Dinner",
        category: "Dinner",
        price: 39.99,
        img: "./images/steak dinner.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
];


const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        //console.log(item);

        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;

    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All']);
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');

    //filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                //console.log(menuItem.category);

                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            //console.log(menuCategory);
            if (category === 'All') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}