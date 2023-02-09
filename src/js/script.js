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
    };
    renderInList();



    //TASK #2
    const favoriteBooks = [];


    function initActions(){
    const booksRef = document.querySelectorAll(select.image.imageWrapper);
    console.log('bookRef', booksRef);
    
  
    for(const ref of booksRef){
        ref.addEventListener('dblclick', function (e){
            e.preventDefault();

            if(e.target && e.target.matches('.book__image')){
                e.target.classList.add('favorite');
                const booksId =  booksRef.getElementById('data-id').offsetParent;
                favoriteBooks.push(booksId);
            }
               /*if(e.target  && e.target.offsetParent.matches('active')){
                  const booksId =  booksRef.getElementById('data-id').offsetParent;
                  favoriteBooks.removeAttribute(booksId);
                  ref.classList.remove('favorite');
              }*/
           
        });
        }


    // TASK #3
    const filter = document.querySelector('.filters');
    let filters = [];

    console.log('filtres',filters)
    console.log('filter', filter)
    


    filter.addEventListener('click',function(e){
        e.preventDefault();


    document.querySelectorAll('[type="checkbox"]').forEach(item => {

    if(item === true){
        filters.push(item.value);
    }
    if(!item.input) {
        filters.reduce(item.value);
            }
        });
    });
    }
    initActions();

}
 

//     // let adults = document.querySelector('.filters input[value = "adults"]');
//     // let nonFiction = document.querySelector('.filters input[value = "nonFiction"]');

//         filter.addEventListener('click', function(e){
//             e.preventDefault();
//        if(adults.value == "adults"){
//             console.log(true)
//        }
//         });

// }
// checkForm();
   
  
  