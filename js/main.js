var siteName =document.getElementById("bookmarkname");
var siteUrl =document.getElementById("siteurl");
var webList=[];
if(localStorage.getItem("webList") != null){
    webList=JSON.parse(localStorage.getItem("webList"))
    displayWep(webList);
}
var regex= {
    siteName : { 
      value :/^[A-Z][a-z0-9]{5,8}$/,
     isValid: false
    
    },
    siteUrl : {
      value: /^[a-zA-Z]{5}\.com/,
     isValid: false
    }
}  
function addWeb() {
var web = {
    code: siteName.value,
    link:siteUrl.value
}
webList.push(web)
console.log(webList);
displayWep(webList);
}
function displayWep(){
    var cartona =``;
    for (var i = 0  ; i < webList.length ; i++){
cartona += `<tr class="p-5 border border-1">
                <td>${[i+1]}</td>
                <td>${webList[i].code}</td>
                <td>
                    <button class="bg-success py-0 px-3 border-0  ">
                        <i class="fa-regular fa-eye"></i>
                      <span>visit</span>  
                    </button>
                </td>
                <td>
                    <button onclick ="deleteWep() " class="bg-danger py-0 px-3 border-0">
                        <i class="fa-regular fa-trash"></i>
                       Delete
                    </button>
                </td>
            </tr>`;
    }
    document.getElementById("tableBody").innerHTML =cartona
    clearForm()
}
function clearForm() {
    siteName.value=null;
    siteUrl.value=null; 
}
function deleteWep(index) {
webList.splice(index , 1) ;
displayWep(webList);
}
function setLocalStorage() {
    localStorage.setItem("webList", JSON.stringify(webList));
}
function validationWeb(element){
    if(regex[element.id].value.test(element.value) == true ) {
        
          element.classList.add("is-valid");
          element.classList.remove("is-invalid")
          regex[element.id].isValid = true
        }else{
          element.classList.remove("is-valid");
          element.classList.add("is-invalid")
          regex[element.id].isValid = false
        }
      
      }
