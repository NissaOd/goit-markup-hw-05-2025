(() => {
    // Создаём объект со ссылками на элементы
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'), // кнопка открытия модалки
        closeModalBtn: document.querySelector('[data-modal-close]'), // кнопка закрытия модалки
        modal: document.querySelector('[data-modal]'), // сама модалка (фон + содержимое)
    };

    // При клике на кнопку открытия — вызываем toggleModal
    refs.openModalBtn.addEventListener('click', toggleModal);

    // При клике на кнопку закрытия — вызываем toggleModal
    refs.closeModalBtn.addEventListener('click', toggleModal);

    // Функция для открытия/закрытия модалки
    function toggleModal() {
        // Добавляет или убирает класс is-open на модалке
        refs.modal.classList.toggle('is-open');
    }
})();
