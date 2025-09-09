var getul = document.getElementById('ul')

function foo (){
   var a = document.getElementById('input')
   var li = document.createElement('li')
   var litext = document.createTextNode(a.value)
   li.appendChild(litext)
   getul.appendChild(li)
   a.value = ''
   // DELETE BTN FORMATION
   var deletebtn = document.createElement('button')
   var deletebtnText = document.createTextNode('Delete')
   deletebtn.appendChild(deletebtnText)
   li.appendChild(deletebtn)
   deletebtn.setAttribute('onclick', 'del(this)')
   // EDIT BTN FORMATION
   var  editbtn = document.createElement('button')
   var editbtntext = document.createTextNode('Edit')
   editbtn.appendChild(editbtntext)
   li.appendChild(editbtn)
   editbtn.setAttribute('onclick' , 'edit(this)')
    deletebtn.setAttribute('class', 'btn btn-danger ayan')
     editbtn.setAttribute('class', 'btn btn-info ayan')
 }
function deleteall (){
   getul.innerText = ''
}
function del(e){
   e.parentNode.remove()
}
function edit(e) {
  var a = prompt('Enter Edit Value', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}
