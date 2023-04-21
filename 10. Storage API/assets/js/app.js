//
if(localStorage.getItem('products') === null) {
    localStorage.setItem('products',JSON.stringify([]))
}


let btns = document.querySelectorAll('.btn-primary');


for(let btn of btns) {

    btn.addEventListener('click',function(event) {
        event.preventDefault();

        let id = btn.parentElement.parentElement.id;
        let src = btn.parentElement.previousElementSibling.src;
        let title = btn.previousElementSibling.previousElementSibling.innerHTML;
        let price = btn.previousElementSibling.children[0].innerHTML;

        let product_list = JSON.parse(localStorage.getItem('products'));

        let existProd = product_list.find(item => item.Id == id);
        console.log(id);
        console.log(src);
        console.log(title);
        console.log(price);
        
        if(existProd === undefined) {
            product_list.push({
                Id: id,
                Name: title,
                Image: src,
                Price: price,
                Count: 1
            })
        }
        else{
            existProd.Count += 1;
        }

        localStorage.setItem('products',JSON.stringify(product_list))
        ShowCount();
    });
}

function ShowCount() {
    let items = JSON.parse(localStorage.getItem('products'))
    document.querySelector('.count').innerHTML = items.length;
}
ShowCount();