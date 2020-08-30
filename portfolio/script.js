const tagName = 'PROJECT-CONTAINER'
document.body.addEventListener('click', (e) => {
  if (e.target.tagName === tagName) {
    [...(document.querySelectorAll(tagName))].forEach(elm => elm.classList.remove('expand'))
    e.target.classList.add('expand')
  }
})
