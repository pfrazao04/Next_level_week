document.querySelector("#addtime")
 .addEventListener("click", cloneField)

function cloneField(){
    const newFieldscontainer= document.querySelector('.schedule-item').cloneNode(true)

    const fields= newFieldscontainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
        
    });
    
    

    document.querySelector('#schedule-items').appendChild(newFieldscontainer)
}
