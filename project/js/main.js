alert('hello da');

function changeH1() {
    $('h1').html("This is changed after 3 Seconds of page load....");
} setTimeout(() => {
    changeH1();
}, 3000);