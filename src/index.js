document.addEventListener("DOMContentLoaded", (e) => {
  let url = `https://www.googleapis.com/books/v1/volumes?filter=full&printType=books&q=title=the_jungle&key=AIzaSyCgdYOeN8b8_l_a7JEW77zXod33TXJYDGo`
  let title = 'the_jungle'
  // const author = null
  // const subject = ''
  // const language = 'en'
  const ul = document.createElement('ul')
  const form = document.getElementById('book-form')
  console.log("dom loaded")


    function getBookData() {
      form.addEventListener("keydown", (e) => {
        console.log(e.target)
        if (e.target.id === "title") {
          fetch(url)
          .then(res => res.json())
          .then(books => constructResults(books))
        }
        })
      }
      getBookData();

  function constructResults(books) {
    let booksContainer = document.getElementById('books-container')
    books.items.forEach(book => {
      // debugger
      const div = document.createElement('div')
      const title = document.createElement('h3')
      title.innerText = book.volumeInfo.title
      const author = document.createElement('p')
      author.innerText = book.volumeInfo.authors
      const space = document.createElement('br')
      div.append(title, author, space)
      booksContainer.append(div)
      div.addEventListener("click", (e) => {constructBookHome(e, book)})
    })
  }

  function constructBookHome(e, book) {
    console.log("event for click triggered");
    let preview = document.getElementById('book-preview')
    preview.innerHTML = `
    <p>WORKS</p>
    <a href="${book.accessInfo.pdf.downloadLink}">to the book</a>
    `
  }


})

// <script src="https://books.google.com/books/previewlib.js"></script>
// <script>GBS_setLanguage('en');</script>
// <script>GBS_insertPreviewButtonPopup('ISBN:0738531367');</script>
