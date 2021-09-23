function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 30)header.classList.remove('trans'); else if(this.scrollY <= 30) header.classList.add('trans')
}
window.addEventListener('scroll', scrollHeader)