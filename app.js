//items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/buttermilk pancakes.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/diner double.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing marfa`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/godzilla milkshake.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/country delight.jpg",
        desc: `shabby chic keffiyeh neutra snackwave pork belly shoreeditch. prism austin mlkshk truffaut`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/egg attack.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pintrest meditation farm to table 90's pop-up`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/oreo dream.jpg",
        desc: `portland chicharrones ethical edion bulb, palo santro craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "shakes",
        price: 8.99,
        img: "./images/bacon overflow.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 8,
        title: "american classic",
        category: "breakfast",
        price: 12.99,
        img: "./images/american classic.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
];


const sectionCenter = document.querySelector('.section-center');

window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
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
});