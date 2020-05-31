$(document).ready(function () {
    $('#newTaskBtn').on('click', addNew);
});


function addNew() {
    console.log('Btn clicked');
    let todo = {
        task: "",
        status: ""
    };
    todo.task = $('#newTask').val();
    console.log('Task:', todo);

};
