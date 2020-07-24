export function handleScrollClickMenu(element: HTMLElement): void {
    element.scrollIntoView();
}

export function handleClickMenu(element: HTMLElement): void {
    const listMenu: HTMLCollectionOf<Element> = document.getElementsByClassName(
        'header__item',
    );

    for (let i = 0; i < listMenu.length; i++) {
        if (listMenu[i] === element) {
            continue;
        }

        listMenu[i].classList.remove('header__item--active');
    }

    element.classList.add('header__item--active');
}
