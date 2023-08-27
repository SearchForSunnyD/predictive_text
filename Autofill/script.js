//select needed elements
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

//fruit "library"
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//build an array of possible matches
function search(str) {
	let results = [];
    for(let indx of fruit){
        if(indx.toLowerCase().includes(str.toLowerCase())){
            results.push(indx)
        }
    }
    
	return results;
}

//clear suggestions dropdown and update its contents
function searchHandler(e) {
    suggestions.innerHTML = ''
    showSuggestions(search(input.value), input.value.toLowerCase())
    updateDisplay()
}

//rebuild suggestion string to highlight current input value
function boldSuggestion(str, inputStr){
    let begin = str.substring(0, str.toLowerCase().indexOf(inputStr))
    let highlight = str.substring(str.toLowerCase().indexOf(inputStr), str.toLowerCase().indexOf(inputStr) + inputStr.length)
    let end = str.substring(str.toLowerCase().indexOf(inputStr) + inputStr.length)
    
    return `${begin}<b>${highlight}</b>${end}`
}

//create 5 li elements to display in the dropdown
function showSuggestions(results, inputVal) {
    for(let str of results.slice(0, 5)){
        let newLi = document.createElement('li')
        newLi.innerHTML = boldSuggestion(str, inputVal)
        suggestions.appendChild(newLi)
        }
}

//hide or show the suggestions if there are any
function updateDisplay(){
    if(input.value !== ''){
        suggestions.classList.add("has-suggestions")
        }else{
        suggestions.classList.remove("has-suggestions")
    }
}

//if a suggestion is selected, have it fill the input box and clear the suggesting dropdown
function useSuggestion(e) {
    input.value = e.target.innerText
    searchHandler()
    suggestions.innerHTML = ''
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
