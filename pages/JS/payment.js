document.addEventListener('DOMContentLoaded', function() {
    const getThisButton = document.getElementById('get-this');
    const popUp = document.getElementById('pop-up');
    const closeButton = document.querySelector('.pop-up-profile i');
    const quantityElement = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const popupPriceValueElement = document.getElementById('pop-up-price-value');
    const popupQuantityElement = document.getElementById('pop-up-quantity');
    const popupPriceElement = document.getElementById('pop-up-price');
    const paymentHome = document.querySelector('.payment-fade');
    const paymentForm = document.getElementById('payment-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');

    let quantity = 1;
    let price = 6;

    // Update total price
    function updateTotalPrice() {
        const totalPrice = price * quantity;
        totalPriceElement.textContent = `$${totalPrice}`;
        popupPriceElement.textContent = `$${totalPrice}`;
    }

    // pop up
    getThisButton.addEventListener('click', function() {
        popUp.style.display = 'flex';
        paymentHome.classList.add('fade-out');
        updateTotalPrice();
        popupPriceValueElement.textContent = `$${price}`;
        popupQuantityElement.textContent = quantity;
    });

    closeButton.addEventListener('click', function() {
        popUp.style.display = 'none';
        paymentHome.classList.remove('fade-out');
    });

    // quantity
    document.querySelector('.minus').addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });

    document.querySelector('.plus').addEventListener('click', function() {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });

    // payment
    paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const totalPrice = price * quantity;

    const productId = getQueryParam('id');
    const product = paymentProduct.find(p => p.id == productId);

    if (product) {
        const message = `Saya ${username} dengan email ${email} ingin memesan jasa web ${product.Name} sebanyak ${quantity} dengan harga per-setiap jasanya $${price} dan totalnya $${totalPrice}`;
        const adminPhoneNumber = '6285855172473';
        const whatsappURL = `https://wa.me/${adminPhoneNumber}/?text=${encodeURIComponent(message)}`;

        window.location.href = whatsappURL;
        hidePopUp();
        popUp.style.display = 'none';
    }
    });

    // Database payment product
    let paymentProduct = [
        {
            id: 1,
            navPayment: "Nuansa Trips",
            Name : "Complete Responsive Travel Site",
            img: "../../assets/img/Payment/Nuansatrips-payment.png",
            price: "6",
            card : "../../assets/img/payment/nuansatrips-card.png"
        },
        {
            id: 2,
            Name : "Complete Responsive Pizza Site",
            navPayment: "Pizza Mood",
            img: "../assets/img/payment/Pizza-mood-payment.png",
            price: "8",
            card : "../assets/img/payment/pizza-mood-card.png"
        },
        {
            id: 3,
            navPayment: "Sunny Days",
            Name : "Complete Responsive Education Site",
            img: "../assets/img/payment/Sunnydays-payment.png",
            price: "7",
            card : "../assets/img/payment/sunnydays-card.png"
        },        
        {
            id: 4,
            navPayment: "Parallax Login Page",
            Name : "Complete Responsive Login Form Site",
            img: "../assets/img/payment/Parallax-payment.png",
            price: "10",
            card : "../assets/img/payment/login-card.png"
        },        
        {
            id: 5,
            navPayment: "Rayshoes",
            Name : "Complete Responsive Shoes Site",
            img: "../assets/img/payment/Rayshoes-payment.png",
            price: "8",
            card : "../assets/img/payment/rayshoes-card.png"
        },        
        {
            id: 6,
            navPayment: "Music Parallax",
            Name : "Complete Responsive Music Parallax Site",
            img: "../assets/img/payment/Parallax-music-payment.png",
            price: "5",
            card : "../assets/img/payment/music-card.png"
        },        
        {
            id: 7,
            navPayment: "Nintendo Pro",
            Name : "Nintendo Pro",
            img: "../assets/img/shop/shop-payment/shop7.png",
            price: "310",
            card : "../assets/img/shop/shop-payment/shop7a.png"
        },        
        {
            id: 8,
            navPayment: "God CCTV",
            Name : "God CCTV",
            img: "../assets/img/shop/shop-payment/shop8.png",
            price: "330",
            card : "../assets/img/shop/shop-payment/shop8a.png",
        },        
        {
            id: 9,
            navPayment: "Zosi CCTV",
            Name : "Zosi CCTV",
            img: "../assets/img/shop/shop-payment/shop9.png",
            price: "290",
            card : "../assets/img/shop/shop-payment/shop9a.png",
        },        
        {
            id: 10,
            navPayment: "SpeedMax Wifi 6 Router",
            Name : "SpeedMax Wifi 6 Router",
            img: "../assets/img/shop/shop-payment/shop10.png",
            price: "260",
            card : "../assets/img/shop/shop-payment/shop10a.png",
        },        
        {
            id: 11,
            navPayment: "Black Airpords",
            Name : "Black Airpords",
            img: "../assets/img/shop/shop-payment/shop11.png",
            price: "200",
            card : "../assets/img/shop/shop-payment/shop11a.png"
        },        
        {
            id: 12,
            navPayment: "Camera HD Pro",
            Name : "Camera HD Pro",
            img: "../assets/img/shop/shop-payment/shop12.png",
            price: "410",
            card : "../assets/img/shop/shop-payment/shop12a.png",
        },              
    ];

    // Function parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // update information
    function updateProductInfo(productId) {
        const product = paymentProduct.find(p => p.id == productId);
        if (product) {
            document.getElementById('product-name').innerHTML = `${product.Name}`;
            document.getElementById('product-name-card').innerHTML = `${product.Name}`;
            document.getElementById('product-img').src = product.img;
            document.getElementById('product-price').innerText = `$${product.price}`;
            document.getElementById('Nav-payment').innerText = `${product.navPayment}`;
            document.getElementById('pop-up-card').src = product.card;
            const productPrice = parseFloat(product.price);
            price = productPrice;
            quantity = 1;
            updateTotalPrice();
        }
    }

    // update
    const productId = getQueryParam('id');
    if (productId) {
        updateProductInfo(productId);
    }
});

// project link recomendation
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.payment-recomendation img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            const id = img.getAttribute('data-id');
            if (id) {
                window.location.href = `../pages/payment.html?id=${id}`;
            }
        });
    });
});
