window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher');
    const main_page = document.querySelector('main');
    for (let i = 0; i<tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i]; 
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', ()=>{
            
            main_page.classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            switchPage(page_id);
        });
    }
}


function switchPage (page_id){
    console.log(page_id);
    const current_page = document.querySelector('main');
    current_page.classList.add('invisible');
    // const current_page = document.querySelector('.pages .page.is-active');
    // current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.remove('invisible');
    // const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    // next_page.classList.add('is-active'); 
}