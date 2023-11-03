const items = document.querySelectorAll('.item');
const totalPrice = document.getElementById('total-price');

items.forEach(item => {
    const quantity = item.querySelector('.quantity span');
    const price = parseFloat(item.querySelector('.price').textContent.replace('$',''));
    const deleteButton = item.querySelector('.delete');
    const likeButton = item.querySelector('.like');

    const increaseButton = item.querySelector('.increase');
    const decreaseButton = item.querySelector('.decrease');

    let liked = false;

    deleteButton.addEventListener('click', () => {
        item.remove();
        Total();
    });

    likeButton.addEventListener('click', () => {
        liked = !liked;
        if (liked==true){

            likeButton.style.color =  'red' ;
        }else{
            likeButton.style.color =  'gray' ;

        }
    });

    increaseButton.addEventListener('click', () => {
        quantity.textContent = String(parseInt(quantity.textContent) + 1);
        Total();
    });

    decreaseButton.addEventListener('click', () => {
        const currentQuantity = parseInt(quantity.textContent);
        if (currentQuantity >= 1) {
            quantity.textContent = String(currentQuantity - 1);
            Total();
        }
    });

    function Total() {
        const itemTotal = price * parseInt(quantity.textContent);
        let total = 0;
        items.forEach(item => {
            total += parseFloat(item.querySelector('.price').textContent.replace('$', '')) * parseInt(item.querySelector('.quantity span').textContent);
        });
        totalPrice.textContent = total.toFixed(2);
    }
});
