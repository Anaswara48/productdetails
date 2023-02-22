function login()
{
    uname=ul.value;
    localStorage.setItem("uname",uname)
    window.location="home.html"
    
}
 function addProduct()
{
    product={proname:a1.value,proid:b1.value,proprice:c1.value,quantity:d1.value}
    if(product.proid in localStorage){
    
        alert("product already exist")
windows.location="home.html"
}
else{
    
 localStorage.setItem(product.proid,JSON.stringify(product))
 alert("new product added")
windows.location="home.html"
}
}
function displayProduct()
{
    productid=searchid.value
    if(productid in localStorage)
    {
        productdetail=JSON.parse(localStorage.getItem(productid))
        result.innerHTML=`<h3 class="text-secondary">product name:${productdetail.proname}</h3>
        <h3 class="text-secondary">product id:${productdetail.proid}</h3>
        <h3 class="text-secondary">price${productdetail.proprice}</h3>`
    }
    else{
        alert("product is not found")
        result.innerHTML=""

    }
}
function logOut()
{
   localStorage.removeItem("uname")
   window.location="index.html"
}
