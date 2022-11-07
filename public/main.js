var trash = document.getElementsByClassName("fa-trash-o");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const username = this.parentNode.parentNode.childNodes[1].innerText
    const lowBudget = this.parentNode.parentNode.childNodes[3].innerText
    const midBudget = this.parentNode.parentNode.childNodes[5].innerText
    const highBudget = this.parentNode.parentNode.childNodes[7].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'lowBudget': lowBudget,
        'midBudget': midBudget,
        'highBudget': highBudget,
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
