// like button

var like = document.querySelectorAll('.fa-heart')

for (let j=0; j< like.length; j++) {
    like[j].addEventListener('click', function(){
        if (like[j].style.color != "red")
        {like[j].style.color= "red";} 
        else {
            like[j].style.color= "rgb(158, 158, 158)"
        }
    })
}


// delete feature

var btn = document.querySelectorAll('.trash')
var del = document.querySelectorAll('.product')

for (let i=0; i< btn.length; i++) {
    btn[i].addEventListener('click', function(){
        del[i].innerHTML = ""
    })
}


// Plus / minus button

var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
var qty = document.querySelectorAll('.QTY');

for (let i=0; i< qty.length; i++) {
    plus[i].addEventListener('click', function(){
        var count = qty[i].value;
        count ++
        qty[i].value = count
    })
}

for (let i=0; i< qty.length; i++) {
    minus[i].addEventListener('click', function(){
        if ((qty[i].value)>0){
        var count = qty[i].value;
        count --
        qty[i].value = count
        }
    })
}

// Total price feature

for (let i=0; i< qty.length; i++) {
    plus[i].addEventListener('click', function totalPrice(){
    let sum = 0;
    var price = document.querySelectorAll("#unit_price");
    // var prod_qty = document.querySelectorAll('.QTY');
    for (let i=0; i< price.length; i++) {
        sum = sum + qty[i].value * price[i].innerHTML
    }
    document.querySelector("#totalprice").value = sum
    document.querySelector("#Purchase").innerHTML = sum
    })
    
}

for (let i=0; i< qty.length; i++) {
    minus[i].addEventListener('click', function totalPrice(){
    let sum = 0;
    var price = document.querySelectorAll("#unit_price");
    // var prod_qty = document.querySelectorAll('.QTY');
    for (let i=0; i< price.length; i++) {
        sum = sum + qty[i].value * price[i].innerHTML
    }
    document.querySelector("#totalprice").value = sum
    document.querySelector("#Purchase").innerHTML = sum
    })
    
}

for (let i=0; i< qty.length; i++) {
    btn[i].addEventListener('click', function totalPrice(){
    let sum = 0;
    var price = document.querySelectorAll("#unit_price");
    // var prod_qty = document.querySelectorAll('.QTY');
    for (let i=0; i< price.length; i++) {
        sum = sum + qty[i].value * price[i].innerHTML
    }
    document.querySelector("#totalprice").value = sum
    document.querySelector("#Purchase").innerHTML = sum
    })
    
}