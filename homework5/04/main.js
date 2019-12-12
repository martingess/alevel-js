function deleteTag(id) {
    var searchedTag = document.querySelector(`#${id}`)
    if (searchedTag === null) {
        return 'Тег не найден, операция удаления невозможна'
    } else {
        searchedTag.remove()
    }
}