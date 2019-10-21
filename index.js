var app = new Vue({
    el: '#app',
    data: {
      message: 'Esto funciona que te cagas!'
    }
  })

  //Creamoe el componente a poner en el DOM todo-item, que se veria como <todo-item></todo-item>
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  //al elemento del dom con id app-7 se aplica todo lo que haya dentro del new Vue
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetales' },
        { id: 1, text: 'Queso' },
        { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
      ]
    }
  })

  //Comentarios tras leer la documentacion:

  /*
  Valores computados de lo mas interesantes. Son campos derivados dados dos valores pasados como propiedad.

  Templates tambien muy interesantes y, potentes, cuando se combina con los valores computados. Ofrece gran flexibilidad
  a la hora de personalizar un elemento de la vista. Por ejemplo: Si solo permitimos N configuraciones (color de fondo, letra, color de letras, p.e.)
  dados 3 atributos de la propiedad pasada, con el valor computado se configura de manera veloz
  
  Se puede hacer de todo, solo hay que conocer el API
  
  
  */