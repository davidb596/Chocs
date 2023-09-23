function validateForm(e) {
    let user_name =document.getElementById("user_name").value;
    let phone_number=document.getElementById("phone_number").value;
    let products_name=document.getElementById("products_name").value;
    let product_quantity=document.getElementById("product_quantity").value;
    let address=document.getElementById("user_address").value;
    let error_message=document.getElementById("error_message");

    if(user_name.length<=3){
        error_message.innerHTML = "<div style='background-color: #322015;'>"+
        "Name must be longer than 3 letters</div>"
        e.preventDefault();
        return;
    }
    if(phone_number.startsWith("+62")==false){
        error_message.innerHTML = "<div style='background-color: #322015;'>"+
        "Phone number must start with +62</div>"
        e.preventDefault();
        return;
    }
    if(phone_number.length<=10){
        error_message.innerHTML = "<div style='background-color: #322015;'>"+
        "Phone number must be longer than 10 digits</div>"
        e.preventDefault();
        return;
    }
    if(products_name=="Please select a product"){
        error_message.innerHTML = "<div style='background-color: #322015;'>"+
        "Please select a product</div>"
        e.preventDefault();
        return;
    }

    let product_quantity_int=parseInt(product_quantity);

    if(isNaN(product_quantity_int)==true || product_quantity_int<=0){
        error_message.innerHTML = "<div style='background-color: #322015;'>"+
        "Product quantity must be greater than 0</div>"
        e.preventDefault();
        return;
    }
    if(Number.isInteger(parseInt(address.substr(-1)))==false){
        error_message.innerHTML = "<div style='background-color: #322015;'>"+
        "Address must end with your postal code</div>"
        e.preventDefault();
        return;
    }
    else{
        error_message.innerHTML = "<div style='background-color: #322015;'>"+
        "Purchase Succesful</div>"
        e.preventDefault();
        return;
    }
}