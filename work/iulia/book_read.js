function bookRead (books){
	for (var i=0; i<books.length; i++){
			if (books[i].readingStatus === true)
	  		console.log(books[i].title);
		

	}
}

var library = [
    {
       author: 'Charles Dickens',
       title: 'A Christmas Carol',
       readingStatus: true
   },
   {
       author: 'Hans Christian Andersen',
       title: 'The Steadfast Tin Soldier',
       readingStatus: false
   },
   {
       author: 'The Little Match Girl',
       title:  'Hans Christian Andersen', 
       readingStatus: true
   }
];

bookRead(library);