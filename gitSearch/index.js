
const debounce = (fn, debounceTime) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, debounceTime);
  };
};

const delayedFetch = debounce(fetchUsers, 400);

let suggestionsArr = [];
function fetchUsers() {
  if (input.value.trim()) {
    fetch(
      `https://api.github.com/search/repositories?q=${input.value.trim()}`
    ).then((response) =>
      response
        .json()
        .then((res) => {
          if (suggestionsArr[1] || 0) suggestionsArr = [];
          for (let i = 0; i < suggestions.length; i++) {
            suggestions[i].textContent = res.items[i].name;
            suggestionsArr.push(res.items[i]);
          }
          suggestionBox.style.display = 'block';
          // console.log(res);
        })
        .catch(() => {
          for (let i = 1; i < 5; i++) {
            suggestions[i].textContent = '';
          }
          suggestions[0].textContent = 'No results';
          suggestionBox.style.display = 'block';
        })
    );
  } else {
    for (let i = 0; i < suggestions.length; i++) {
      suggestions[i].textContent = '';
    }
    suggestionBox.style.display = 'none';
  }
}

function addSuggestion(el) {
  let filteredArr = suggestionsArr.filter((item) => {
    return item.name === el;
  });
  for (let i = 0; i < saveListItems.length; i++) {
    if (saveListItems[i].classList.contains('empty')) {
      saveListItems[i].classList.remove('empty');
      saveListItems[i].querySelector('.name').textContent =
        'Name: ' + filteredArr[0].name;
      saveListItems[i].querySelector('.owner').textContent =
        'Owner: ' + filteredArr[0].owner.login;
      saveListItems[i].querySelector('.stars').textContent =
        'Stars: ' + filteredArr[0].stargazers_count;
      break;
    }
  }
}

const input = document.querySelector('.input');
const suggestions = document.querySelectorAll('.suggestion');
const suggestionBox = document.querySelector('.autocomplete-box');
const saveListItems = document.querySelectorAll('.save-list__item');
const closeButton = document.querySelectorAll('.close');

input.addEventListener('input', delayedFetch);

suggestions.forEach((suggestion) => {
  suggestion.addEventListener('click', (el) =>
    addSuggestion(el.target.textContent)
  );
});

closeButton.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.target.parentElement.classList.add('empty');
  });
});