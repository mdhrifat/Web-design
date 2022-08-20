const panels = document.querySelectorAll('.panel')
//document.querySelector('') this methods return the first element that matches a CSS selector//
//document.querySelectorAll('') this method return all matches (not only the first)//
panels.forEach(panel => {
    panel.addEventListener('click', () => { //after click the function will start// 
        //jodi mouse hover korar sathe sathe dekhte chai tahole mouseenter use korte hobe
        removeActiveClasses() //akta ta pic er upor click korar por seti active kintu jokon onno 1 ta pic er uopr abar click kora hobe tokhon ager pic ta bondho hobe na setio chalu thakbe tai ager pic ta remove korar jonno ai fucntion ta use kora hoise
        panel.classList.add('active')// proti ta pic er upor click korle sei pic gula active hobe mane choto theke boro hobe//
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')// it will remove all the active class//
    })
}
