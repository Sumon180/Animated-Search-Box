
const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('input');
const seacrhData = document.querySelector('.search-data');

searchBtn.onclick = () =>{
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
    if(searchInput.value != ""){
        let values = searchInput.value;
        seacrhData.classList.remove("active");
        seacrhData.innerHTML = `You just typed <span style='font-weight: 700;'>${values}</span>`;
    }else{
        seacrhData.innerHTML = "";
    }
}
cancelBtn.onclick = () =>{
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
    seacrhData.classList.add("active");
    searchInput.value = "";
}