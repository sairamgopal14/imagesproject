function filterSelection(category) {
    let elements = document.getElementsByClassName('filterDiv');
    if (category === 'all') category = '';
    for (let i = 0; i < elements.length; i++) {
        removeClass(elements[i], 'show');
        if (elements[i].className.indexOf(category) > -1) addClass(elements[i], 'show');
    }
}

function addClass(element, name) {
    let arr1 = element.className.split(' ');
    let arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

function removeClass(element, name) {
    let arr1 = element.className.split(' ');
    let arr2 = name.split(' ');
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}
filterSelection('all');
