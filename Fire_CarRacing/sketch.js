var gameState = 0;

var form, addFood , removeFood;
var distance = 0;
function setup(){
  canvas = createCanvas(600 ,600);
  database = firebase.database();
  form = new Food(1)
  addFood = createButton('Add Food')
  removeFood = createButton('Remove Food')
}
function draw() {
  form.display()
  addFood.position(300 ,300);
  removeFood.position(300 , 330);
  console.log(form.foodStock)

  addFood.mousePressed(() => {
    form.foodStock = form.foodStock + 1
  })

  removeFood.mousePressed(() => {
    form.foodStock = form.foodStock - 1
    console.log(form.foodStock)
  })

  

}

