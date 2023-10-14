$(document).ready(function() {
    $('#form-tarefa').submit(function(adItem) {
        adItem.preventDefault();
        const userInput = $('#novo-item').val();
        userInput && $('ul').append($('<li>').text(userInput).click(function() {
            $(this).toggleClass('riscado');
        }));
        $('#novo-item').val('');
    });
});