window.onload = () => {
    let open_modal = document.querySelectorAll('.sign__btn-signup');
let close_modal = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');
let body = document.getElementsByTagName('body')[0];
console.log(close_modal)

for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal--show'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal--show');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};
}
