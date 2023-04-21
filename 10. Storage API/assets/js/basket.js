function GetProducts() {
    let items = JSON.parse(localStorage.getItem('products'));

    let alertbox = document.querySelector('.alert');

    if (items.length === 0) {
        alertbox.classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }
    else {
        alertbox.classList.add('d-none')
        document.querySelector('.chart').classList.remove('d-none')

        let x = '';
        items.forEach(item => {
            console.log(item);
            x += `<div class="col-12">
        <ul id="${item.Id}">
            <li>
                <img src="${item.Image}" alt="">
            </li>
            <li>
                ${item.Name}
            </li>
            <li>
                <input type="number" name="" id="" value="${item.Count}" id="Count_prod">
            </li>
            <li>
               ${item.Price * item.Count} AZN
            </li>
            <li>
                <button type="button" class="btn btn-danger">
                    delete
                </button>
            </li>
        </ul>
    </div>
        `
        })
        document.querySelector('#save_products').innerHTML = x;

    }
}

GetProducts();

let delete_btns = document.querySelectorAll('.btn-danger');

for (let btn of delete_btns) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        let id = btn.parentElement.parentElement.id;
        let items = JSON.parse(localStorage.getItem('products'));

        let new_chart = items.filter(item => item.Id !== id);
        console.log(new_chart);
        localStorage.setItem('products', JSON.stringify(new_chart));
        location.reload()
    })
}

// let count_prod = document.querySelectorAll('#Count_prod')
// console.log(count_prod);

// for(let count of count_prod){
//     count.addEventListener('input', function(event){
//         console.log(event.target.value);
//         let items = JSON.parse(localStorage.getItem('products'));
//         let id = count.parentElement.parentElement.id;
//         for(item of items){
//             if(item.Id == id){
//                 item.Count = event.target.value;
//                 localStorage.setItem('products', JSON.stringify(items));
//                 location.reload();
//             }
//         }
//     })
// }


