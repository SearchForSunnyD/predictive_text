const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
    for(let x of fruit){
        if(x.toLowerCase().includes(str.toLowerCase())){
            results.push(x)
        }
    }
	return results;
}

function searchHandler(e) {
    suggestions.innerHTML = ''
    showSuggestions(search(input.value), input.value.toLowerCase())
}

function showSuggestions(results, inputVal) {
    for(let x of results.slice(0, 5)){
        let newLi = document.createElement('li')
        newLi.innerHTML = `${x.substring(0, x.toLowerCase().indexOf(inputVal))}<b>${x.substring(x.toLowerCase().indexOf(inputVal), x.toLowerCase().indexOf(inputVal) + inputVal.length)}</b>${x.substring(x.toLowerCase().indexOf(inputVal) + inputVal.length)}`
        suggestions.appendChild(newLi)
        }
    if((`${suggestions.childNodes.innerText}`).toLowerCase() !== inputVal && input.value !== ''){
        suggestions.classList.add("has-suggestions")
        }else{
        suggestions.classList.remove("has-suggestions")
    }
}

function useSuggestion(e) {
    input.value = e.target.innerText
    searchHandler()
    suggestions.innerHTML = ''
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
