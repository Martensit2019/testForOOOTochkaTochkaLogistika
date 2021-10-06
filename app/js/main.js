const defaultSelect = () => {
    const elements = document.querySelectorAll('.form__select');
    elements.forEach(el =>{
        const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
    });
    })
    }

defaultSelect();

const temper = document.getElementById('temper')
const tempBox = document.querySelector('.form__select-wrapper--checkbox')

temper.addEventListener('click', () => {
    tempBox.classList.toggle('hide');
})

