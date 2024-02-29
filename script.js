

// Function to add a record
function addrecord() {
  let record = {
    brand: brand.value,
    price: price.value,
    key:key.value
  }
  if(record.brand==""||record.price==""||record.key==""){
    alert("please fill every fields")
    }else{
    if(record.key in localStorage){
    alert("already exist")
    }
    else{
    localStorage.setItem(record.key,JSON.stringify(record))
    alert("added succesfully")
    }
    }
    }



