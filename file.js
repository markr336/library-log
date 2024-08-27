const myLibrary = [
  // {
  //   title: "Harry Potter",
  //   author: "Jk Rowling",
  //   pages: 500,
  //   read: true
  // },

  // {
  //   title: "Lord of the Rings",
  //   author: "Tolken",
  //   pages: 700,
  //   read: false
  // },

  // {
  //   title: "Wolf of Wall Street",
  //   author: "Jordan Belfort",
  //   pages: 400,
  //   read: true
  // }

];

console.log(myLibrary)

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Book Prototype
Book.prototype.toggleRead = function() {
  console.log(this.read);
  // console.log(this.parentNode.parentNode.id)
  if (this.read == true) {
    this.read = false
  }
  else {
    this.read = true;
  }
  console.log(this.read)
  opa();
  sliderCheckedOrNot();
}

// Toggle button event listnere
function toggleEventListner() {
  let idInput = document.querySelectorAll("input");
  idInput.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      console.log(this.id)
      console.log(this.parentNode.parentNode.parentNode.id)
      if (this.checked) {
        console.log(myLibrary[this.parentNode.parentNode.parentNode.id].read)
        console.log("Checked");
        myLibrary[this.parentNode.parentNode.parentNode.id].toggleRead()
      }
      else {
        console.log(myLibrary[this.parentNode.parentNode.parentNode.id].read)
        console.log("unchecked")
        myLibrary[this.parentNode.parentNode.parentNode.id].toggleRead()
      }
      console.log(myLibrary[this.parentNode.parentNode.parentNode.id].read)
    });
  }) 
}









const main = document.querySelector("#books")
function addBookToLibrary(book) {
  myLibrary.push(book)
  myLibrary.map(item => {
    const card = document.createElement('div');
    card.classList.add("book")

    const cardTitle = document.createElement('p')
    cardTitle.classList.add("title")
    cardTitle.textContent += `${item.title}`
    card.appendChild(cardTitle)
  
    const cardAuthor = document.createElement('p')
    cardAuthor.classList.add("author")
    cardAuthor.textContent += `${item.author}`
    card.appendChild(cardAuthor)
  
    const cardPages = document.createElement('p')
    cardPages.classList.add("pages")
    cardPages.textContent += `${item.pages}`
    card.appendChild(cardPages)



    const buttons = document.createElement('div')
    const lbl = document.createElement('label');
    lbl.classList.add("switch")
    const chkbx = document.createElement("input");
    chkbx.setAttribute("type", "checkbox");
    chkbx.setAttribute("onclick", "readChecked(this.parentNode.parentNode.id)")
    const spn = document.createElement('span');
    spn.classList.add("slider", "round")
    lbl.appendChild(chkbx);
    lbl.appendChild(spn);
    buttons.appendChild(lbl);



    const delBtn = document.createElement('button');
    delBtn.classList.add("delete");
    delBtn.setAttribute("onclick", "deleteBook(this.parentNode.parentNode.id)")
    
    buttons.appendChild(delBtn);
    
    card.appendChild(buttons);


    main.appendChild(card)
  })
}

function addID() {
  let idbooks = document.querySelectorAll(".book")
  // returns a nodelist which is similiar to an array
  console.log(idbooks)
  for (let i = 0; i < idbooks.length; i++){
    idbooks[i].setAttribute("id", i + "");
  }
}

function slidd() {
  let idInput = document.querySelectorAll(".switch > input");
  console.log(idInput)
  for (let i = 0; i < idInput.length; i++) {
    idInput[i].setAttribute("id", "box" + i)
  }
}

function sliderCheckedOrNot() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].read == true) {
      let x = document.getElementById("box" + i)
      x.checked = true;
    }
    else {
      let x = document.getElementById("box" + i)
      x.checked = false;
    } 
  }
}

function opa() {
  let transparent = document.querySelectorAll(".book")
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].read == false) {
      transparent[i].setAttribute("style", "background-color: rgba(165, 42, 42, 0.8)")
    }
    else {
      transparent[i].setAttribute("style", "background-color: rgb(165, 42, 42)")
    }
  }
}

function myLibraryBack() {
  myLibrary.map(item => {
    const card = document.createElement('div');
    card.classList.add("book")
    // card.setAttribute("id", myLibrary.length-1 + "");

    const cardTitle = document.createElement('p')
    cardTitle.classList.add("title")
    cardTitle.textContent += `${item.title}`
    card.appendChild(cardTitle)
  
    const cardAuthor = document.createElement('p')
    cardAuthor.classList.add("author")
    cardAuthor.textContent += `${item.author}`
    card.appendChild(cardAuthor)
  
    const cardPages = document.createElement('p')
    cardPages.classList.add("pages")
    cardPages.textContent += `${item.pages}`
    card.appendChild(cardPages)

    const buttons = document.createElement('div')
    const lbl = document.createElement('label');
    lbl.classList.add("switch")
    const chkbx = document.createElement("input");
    chkbx.setAttribute("type", "checkbox");
    chkbx.setAttribute("onclick", "readChecked(this.parentNode.parentNode.id)")
    const spn = document.createElement('span');
    spn.classList.add("slider", "round")
    lbl.appendChild(chkbx);
    lbl.appendChild(spn);
    buttons.appendChild(lbl);



    const delBtn = document.createElement('button');
    delBtn.classList.add("delete");
    delBtn.setAttribute("onclick", "deleteBook(this.parentNode.parentNode.id)")
    buttons.appendChild(delBtn);
    
    card.appendChild(buttons);


    main.appendChild(card)
  })
}

function addNewBook() {
  
  // Get the input elements
  let titleInput = document.getElementById("title");
  let authorInput = document.getElementById("author");
  let pagesInput = document.getElementById("pages");

  // Get the values of the input elements
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  pages = Number(pages)
  let readChecked = document.querySelector('[name="readOrNot"]:checked')

  if (readChecked != null) {
    read = readChecked.value;
    if (read =="yes") {
      read = true;
    }
    else if (read == "no") {
      read = false;
    }
  }
  // Add the values to the array
  return new Book(title, author, pages, read)
}

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const closeBtn = dialog.querySelector("#closeDialog");
const addBook = dialog.querySelector("#addBook");

// Event to bring up modal
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

/* There's no need to use e.preventDefault() if method is set to dialog or the button type
    is not submit. If there was no method & the button type was submit, the form will submitt
    & refresh the page without calling the function.
    The default of dialog is closing the box after submitting so e.preventDefault()
    prevents the dialog from closing. */
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Prevents user from submitting book without option not being checked
  let optionChecked = document.querySelector('[name="readOrNot"]:checked')
  if (optionChecked != null) {
    deleteDOMBooks();
    addBookToLibrary(addNewBook());
    addID();
    slidd();
    sliderCheckedOrNot();
    opa();
    toggleEventListner();
  }
  return
});


closeBtn.addEventListener("click", (e) => {
  dialog.close();
});


function deleteDOMBooks() {
  let div = document.getElementById("books");
  while (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
}

function deleteBook(parent_id) {
  myLibrary.splice(parent_id, 1);
  deleteDOMBooks();
  myLibraryBack();
  addID();
  slidd();
  sliderCheckedOrNot();
  opa();
  console.log(parent_id)
  toggleEventListner();
}

function readChecked(parent_id) {
  
}

function slider() {
  
}



// function deleteChild(parent_id) {
  
//   let div = document.getElementById("books");
//   while (div.hasChildNodes()) {
//     div.removeChild(div.firstChild);
//   }
// }


// for (let i = 1; i < myLibrary.length + 1; i++) {
//   document.getElementById(i + "");
//   document.setAttribute("id", i + "");
// }