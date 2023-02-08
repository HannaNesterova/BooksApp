{
    'use strict';
    let selected = dataSource.books;
    console.log(selected);
  
    const select = {
      templateOf: {
         book: '#template-book',
      },
      containerOf: {
      container: '.books-list',
    },
     image:{
      imageWrapper: '.book__image',
     },
    };
    
    const templates = {
      books: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),   
    }; 
     console.log(templates);
  
  
    function renderInList() {
       for ( const book of selected){
              
      /* generate HTML based on template (генерувати HTML на основі шаблона)*/ 
      const generatedHTML = templates.books(book);
      console.log(generatedHTML);
  
      /* create element using utils.createElementFromHTML(створити  елемент за допомогою utils.createElementFromHTML)*/
      const generatedDOMElement = utils.createDOMFromHTML(generatedHTML);
  
      /* find menu container (знайти контейнер )*/
       const bookContainer = document.querySelector(select.containerOf.container);
       console.log(bookContainer);
  
      /* add element to menu (додати елемент до меню)*/
       bookContainer.appendChild(generatedDOMElement);
      }
    };
    renderInList();
    
  }
  
  
  
    