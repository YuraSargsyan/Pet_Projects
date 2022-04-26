const list = document.getElementById('book-list');
const hideBox = document.getElementById('hide');


hideBox.addEventListener('input', function() {
  if(hideBox.checked) {
    list.style.display = 'none'
  }else {
    list.style.display = 'block';
  }
});


const addFormInput = document.getElementById('add-form-input'); 
const addButton = document.getElementById('add-button');
const ulList = document.querySelector('#book-list ul');


// add books 
    addButton.addEventListener('click', function() {
        const li = document.createElement('li'); 
      
        const bookName = document.createElement('span'); 
        bookName.innerText = addFormInput.value;  
        bookName.classList.add('name');
      
        const deleteBtn = document.createElement('span'); 
        deleteBtn.innerText = 'delete'; 
        deleteBtn.classList.add('delete') ;
      
        li.append(bookName); 
        li.append(deleteBtn); 
        
        ulList.append(li) 
        document.getElementById('add-form-input').value = ''; 
      })


// delete books
ulList.addEventListener('click', function(event) {
   if(event.target.className === 'delete') {
      const li = event.target.parentElement;
      ulList.removeChild(li);
   }
   if(event.target.className == 'name') {
        event.target.classList.toggle('completed')
    }
})



// Search Book
const searchInput = document.getElementById('searchBar');

searchInput.addEventListener('keyup', function() {
  const inputValue = searchInput.value.toLowerCase();
  console.log(inputValue, 'input value');
  const liList = document.getElementsByTagName('li');
  for(let i = 0; i < liList.length; i++) {
    const li = liList[i];
    const nameValue = li.firstElementChild.textContent;
    if(nameValue.toLowerCase().includes(inputValue)) { 
      li.style.display = 'block'
    }else {
      li.style.display = 'none';
    }
  }
})
