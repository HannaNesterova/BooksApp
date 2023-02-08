{
    // TASK #1
    'use strict';
    const selected = dataSource.books;

    const select = {
      templateOf: {
         book: '#template-book',
      },
      containerOf: {
      container: '.books-list',

    },
     image:{
      imageWrapper: '.books-list .book__image',
      bookImage :'.book__image',
     },
    };
    const templates = {
      books: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),   
    }; 

  
  
    function renderInList() {
       for ( const book of selected){
              
      /* generate HTML based on template (генерувати HTML на основі шаблона)*/ 
      const generatedHTML = templates.books(book);
  
      /* create element using utils.createElementFromHTML(створити  елемент за допомогою utils.createElementFromHTML)*/
      const generatedDOMElement = utils.createDOMFromHTML(generatedHTML);
  
      /* find menu container (знайти контейнер )*/
       const bookContainer = document.querySelector(select.containerOf.container);
  
      /* add element to menu (додати елемент до меню)*/
       bookContainer.appendChild(generatedDOMElement);
      }
    };
    renderInList();



    //TASK #2
    const favoriteBooks = [];
    console.log(favoriteBooks)

    //create a function initActions.
    function initActions(){

    const bookImage = document.querySelector(select.image.bookImage);
    const booksRef = document.querySelectorAll(select.image.imageWrapper);
    console.log('bookRef', booksRef);
  
    for(const ref of booksRef){
        ref.addEventListener('dblclick', function (e){
            e.preventDefault();
            if(ref){
                ref.classList.add('favorite');
            }
        });
    }
    const booksId =  bookImage.getAttribute('data-id');
    favoriteBooks.push(booksId);
    console.log(booksId)
       
    }
  }
  initActions();
  
