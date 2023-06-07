let addForm = document.getElementById('add')
addForm.addEventListener('submit', function(e){
    e.preventDefault()
    // Selezione dell'input nel DOM e memorizzazione valore
    const inputField = document.getElementById('new-task')
    const inputValue = inputField.value

    // Renderizzazione per l'utente
    const newListEl = document.createElement('li')
    newListEl.classList.add('todo')
    newListEl.innerHTML = `
    <div class="text-btn-div">
    <div class="new-list-el" class="unchecked">
    <p>${inputValue}</p>
    </div>
    <button class="remove-todo">-</button>
    </div>
    `
    const parentOl = document.getElementById('task-list')
    parentOl.appendChild(newListEl)

    // Reset campo dopo il submit
    addForm.reset()

    // Button 'remove' 
    const allRemoveButtons = Array.from(document.getElementsByClassName('remove-todo'))
    allRemoveButtons.forEach((button) => {
        button.addEventListener('click', function(e){
            let clickedBtn = e.target
            let removeTodo = clickedBtn.parentElement
            clickedBtn.parentElement.remove()
        })
    })

    newListEl.addEventListener('click', function(e) {
        newListEl.classList.toggle('checked')
    })
})