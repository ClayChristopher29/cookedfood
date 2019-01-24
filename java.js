const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}
const foods = [hamburger, zucchini, chickenBreast,corn,steak]

const cookedfood = []

function grill(currentObject){
    currentObject.cooked = true
    cookedfood.push(currentObject);
};
grill([hamburger,chickenBreast,steak])
console.log(cookedfood)
document.querySelector(cookedfood).innerHTML=(cookedfood)