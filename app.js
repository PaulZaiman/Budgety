var budgetController = (function(){

    //some code:


})();

var UIController = (function(){

//some code:

})();


var controller = (function(budgetCtrl,UICtrl){

document.querySelector('.add__btn').addEventListener('click',function() {

  //1.Get the filled input data.

  //2.Add the item to the budget controller.

  //3.Add item to the UI.

  //4.Calculate the budget.

  //5.Display budget on UI.
});

document.addEventListener('keypress',function(event){

    if (event.keyCode ===13 || event.which === 13 ){
        console.log('ENTER was pressed');
    }
});


})(budgetController,UIController);

