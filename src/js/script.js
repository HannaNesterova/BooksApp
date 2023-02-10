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
    filter:{
      filterForm: '.filters',
    }
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
  }
  renderInList();



  //TASK #2
  const favoriteBooks = [];
  console.log(favoriteBooks)

  function initActions(){

  const booksRef = document.querySelectorAll(select.image.imageWrapper);
  console.log('bookRef', booksRef);

    for(const ref of booksRef){

      ref.addEventListener('dblclick', function (e){
        e.preventDefault();
        favoriteBooks.push(ref);
        ref.classList.toggle('favorite')

       /* if(e.target && e.target.matches('.book__image')){
          e.target.classList.add('favorite');
          const booksId =  document.getElementsByName(dataSource.books.id);
          favoriteBooks.push(booksId);
        }
        if(e.target  && e.target.offsetParent.matches('active')){
          const booksId = document.getElementsByName(dataSource.books.id);
          favoriteBooks.removeAttribute(booksId);
          ref.classList.remove('favorite');
        } */
         
      });
    }
  }
  initActions();


  // TASK #3

   const filters = [];
   console.log(filters);

   const filterForm = document.querySelectorAll('.inputTest');
   console.log('form',filterForm);


   filterForm.addEventListener('click', resultFiltr);

   function resultFiltr(){


    if(filterForm.checked === true && filterForm.checked === filterForm.details.adults){
      filters.push(details.adults);
    } else if ( filterForm.checked === true && filterForm.checked === filterForm.details.nonFiction){
      filters.push(details.nonFiction);
    }

     }
}

