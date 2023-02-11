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
          filterBooks();
        });

  // TASK #4
  
  function  filterBooks(){
    const books = selected;

    for (let book of books){
      let shouldBeHidden = false;
      const filterBook = document.querySelector('.book__image[data-id="' + book.id + '"]');;
  
      for (let filter of filters){
        if(!book.details[filter]) {
          shouldBeHidden = true;
          break;
        }
      }
      if(shouldBeHidden){
       filterBook.classList.add('hidden');
      }
      else{
        filterBook.classList.remove('hidden');
    }
    }
    }

    //TASK #5
    function determinRatingBgc(rating){

    }
  }

  initActions();
  const ratingWidth = rating;

  if (ratingWidth < 6){
    const colorRating = 'background: linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
  } else if (ratingWidth > 6 && ratingWidth <= 8){
    const colorRating = 'background: linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
  } else if(ratingWidth > 8 && ratingWidth <= 9){
    const colorRating = 'background: linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
  } else if( ratingWidth > 9){
    const colorRating = 'background: linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
  }

}


