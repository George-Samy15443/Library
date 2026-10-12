function Book(title, author, numberOfPages, isRead) {
  if (!new.target) throw Error("Must use new to make a new book object");
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, numberOfPages, isRead) {
  myLibrary.push(new Book(title, author, numberOfPages, isRead));
}

const myLibrary = [];

addBookToLibrary("The Hobbit", "Tolkin", 500, false);
addBookToLibrary("bad", "robot", 200, true);
addBookToLibrary("good", "doctor", 300, false);
addBookToLibrary("Lies", "Robert", 400, true);

const container = document.querySelector(".library-container");

for (let book of myLibrary) {
    const card = document.createElement('div')
    const list = document.createElement('ul')
    const title = document.createElement('h3')
    const author = document.createElement('li')
    const pageNum = document.createElement('li')
    const read = document.createElement('li')
    
    card.classList.add('card')

    title.textContent = `${book.title}`
    author.textContent = `author: ${book.author}`
    pageNum.textContent = `Number of Pages: ${book.numberOfPages}`
    read.textContent = `Read: ${book.isRead}`

    list.appendChild(author)
    list.appendChild(pageNum)
    list.appendChild(read)
    card.appendChild(title)
    card.appendChild(list)

    container.appendChild(card)
}

for(const book of myLibrary){
    Object.keys(book)
    .filter(key => key !== 'id')
    .forEach(key => {
        console.log(`${key} -> ${book[key]}`);
    })
}
            
        


