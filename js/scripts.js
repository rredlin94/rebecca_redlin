// Utility functions
function get(element) {
    return document.getElementById(element);
}

// Application funcitons
function openModal () {
    var model = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function claseModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // Clear text
    title.value = '';
    text.value = '';

    // Hide modal
    modal.classList.remove('visisble');
    backdrop.classList.remove('visible');
}

function saveCOntent() {
    var title = get(edit-titlte-text);
    var text = get('edit-content-text');
    var content = get('display-content');

    // Create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(nedwContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

// Wire up event handlers
window.addEventListener('load', funciton()) {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('saveButton');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
}

