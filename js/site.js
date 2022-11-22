let categoryArr = []
window.onload = function () {
    fetch('https://api.thecatapi.com/v1/breeds').then(response => {
        return response.json()
    }).then(res => {
        categoryArr = res.slice(0, 10)
        let cateHtml = ``
        for (let i = 0; i < categoryArr.length; i++) {
            let id = categoryArr[i].id
            cateHtml = cateHtml + `<div class="menu" onclick="clickCatsNav(this,'${id}')">${categoryArr[i].name}</div>`
        }
        let nav = document.querySelector('nav')
        nav.innerHTML = cateHtml
    })
    fetchFun('')
}

function clickCatsNav(event, id) {
    let menuArr = document.querySelectorAll(".menu")
    for (let i = 0; i < menuArr.length; i++) {
        menuArr[i].classList.remove('active')
    }
    event.classList.add('active')
    fetchFun(id)
}

function fetchFun(id) {
    fetch('https://api.thecatapi.com/v1/images/search?limit=30&size=small&breed_ids=' + id + '&api_key=live_VFJShx3tgudXhbk4L1kOgSwotrCL6SjD0KsozkcAwzVv6LMOBMC0jggzx1damJdD').then(response => {
        return response.json()
    }).then(res => {
        let imgList = document.querySelector(".imgList")
        let Html = ``
        for (let i = 0; i < res.length; i++) {
            Html = Html + `<div><img src="${res[i].url}" alt=""></div>`
        }
        imgList.innerHTML = Html
        console.log(res);
    })
}
