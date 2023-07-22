const sortableList = document.querySelector('.sortable_list');
const items = document.querySelectorAll('.list_items');

items.forEach(item => {
  item.addEventListener('dragstart', () => {

    // On ajoute la class dragging après un délais
    setTimeout(() => item.classList.add('dragging'), 0);

  });
  // On enlève la class dragging de l'item à la fin de l'évènement dragend
  item.addEventListener('dragend', () => item.classList.remove('dragging'));

});


const initSortableList = (e) => {
  e.preventDefault();
  // ↓ On récupère l'élément qui a la classe dragging à ce moment.
  const draggingItem = sortableList.querySelector('.dragging');

  // ↓ On récupère tous les items sauf celui qui a la class dragging et on en fait un tableau.
  const siblings = [...sortableList.querySelectorAll(".list_items:not(.dragging)")];

  // ↓ On trouve la cible après laquelle l'élément dragging peut être placé.
  let nextSibling = siblings.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // On insert l'élément qui a la class dragging avant la cible trouvée
  sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener('dragover', initSortableList);
sortableList.addEventListener('dragenter', e => e.preventDefault());