var library = [
    {
        author: 'Charles Dickens',
        title: 'A Christmas Carol',
        readingStatus: true,
        url: "https://images.penguinrandomhouse.com/cover/9780451479921"
    },
    {
        author: 'Hans Christian Andersen',
        title: 'The Steadfast Tin Soldier',
        readingStatus: false,
        url: "https://images-na.ssl-images-amazon.com/images/I/A17evRqXbfL.jpg"
    },
    {
        author: 'The Little Match Girl',
        title:  'Hans Christian Andersen',
        readingStatus: true,
        url: "https://images-na.ssl-images-amazon.com/images/I/51fBa9YdRkL.jpg"
    }
]

var ul = document.getElementById("books")

library.forEach(function(p) {

    var book = document.createElement("li");
    book.innerHTML = p.title + " by " + p.author + "<br />";
    if (p.readingStatus)
        book.style.textDecoration = "line-through";
    var cover = document.createElement("img");
    cover.src = p.url;
    cover.height=200;
    book.appendChild(cover);
    ul.appendChild(book);

})