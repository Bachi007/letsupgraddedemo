var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',deleteItem)

var removeAll = document.getElementById('removeall')
removeAll.addEventListener('click',removeallItems)

var ul = document.getElementById('mylist');
var li;
function addItem(){
    var item = document.getElementById('item').value;
    ul = document.getElementById('mylist')
    var textNode = document.createTextNode(item);

    if(item===''){
        
        // var msg="Enter a TODO"
        // var parent =  document.getElementById('add').parentNode
        // var errNode = document.createTextNode(msg);
        // var para= document.createElement('p');
        // para.style.color="red"
        // var sp=document.getElementById('add')
        // para.appendChild(errNode);
        // parent.insertBefore(para,sp)
        alert("Pls Enter a Todo")
    }
    else{
        li=document.createElement('li');
        var checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')

        var label = document.createElement('label')
        label.setAttribute('for','item')
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout(() => {
            li.className('listitem')    
        }, 10);
        
    }
}

function deleteItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {

        while(li[index] && li[index].children[0].checked){
             ul.removeChild(li[index])
        }
    }
    
}
