{
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



    //add empty arr 
    const favoriteBooks = [];

    //create a function initActions.
    function initActions(){

    //find Ref for. book__image у .booksList   
    const booksRef = document.querySelectorAll(select.image.imageWrapper);
    console.log('ref', booksRef);
  
    //FOR for every books element
    for(ref of booksRef){
        //add db listener
        ref.addEventListener('dbсlick', function (e){
            e.preventDefoult();
        })
    }
    //if true use preventDefoult
    if(ref){
    // add class favorite for shoosen element
    ref.classList.add('favorite');
    }
    //dowload ID from data-id
    const booksId = booksRef.getAttribute('getAttribute');
    console.log(booksId)

    // add push ID to the favoriteBooks
    favoriteBooks.push(booksId);
    }
  }
  initActions();
  
    