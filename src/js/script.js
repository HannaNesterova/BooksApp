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
      valueAdult: '.inputTestAdult',
      valueNon: '.inputTestNon',
    }
  };
  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),   
  }; 



  function renderInList() {
    for (const book of dataSource.books){
            
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
  console.log(favoriteBooks);

  function initActions(){

    const booksRef = document.querySelectorAll(select.image.imageWrapper);

    for(const ref of booksRef){

      ref.addEventListener('dblclick', function (e){
        e.preventDefault();
        ref.classList.toggle('favorite');

        if(!favoriteBooks.ref){
          favoriteBooks.push(ref);
        } if(favoriteBooks.ref){
          favoriteBooks.remove(ref);
        }

        if(e.target && e.target.offsetParent.classList.contains('.book__image')){
          e.target.offsetParent.classList.add('favorite');
          const booksId =  ref.dataset.id;
          favoriteBooks.push(booksId);
        }
        if(e.target  && e.target.offsetParent.classList.contains('active')){
          const booksId = ref.dataset.id;
          favoriteBooks.removeAttribute(booksId);
          e.target.offsetParent.classList.remove('favorite');
        } 
         
      });
    }
    
    // TASK #3

    const filters = [];
    const filter = document.querySelector('.filters');

    filter.addEventListener('click', function(event){

          if(event.target.checked){ 
            filters.push(event.target.value);
            console.log(event.target.value);
          }
          else {
            filters.splice(event.target.value);
            console.log(event.target.value);
          }
        });
  }

  initActions();

  // TASK #4
  
  function  filterBooks(){

    for (let book of selected){
      console.log('book',book);

      let shouldBeHidden = false;
      console.log(shouldBeHidden);
  
      for (let filter of filters){
        console.log(filter);
        if(!book.details[filter]) {
          shouldBeHidden = true;
          break;
        }
      }
      if(shouldBeHidden === true){
        select.image.bookImage[favoriteBooks];
      }
      if(shouldBeHidden != true){

    }
    }
    }

}


