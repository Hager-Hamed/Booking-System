
const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cruiseItem = button.closest('.cruise_search_item');
        cruiseItem.remove();
    });
});



