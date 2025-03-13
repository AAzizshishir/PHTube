const loadCategoryBtn = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    const data = await response.json();
    displayCategoryBtn(data.categories);
};

const displayCategoryBtn = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    categories.forEach((element)=>{
        const div = document.createElement("div");
        div.innerHTML = `
            <button class= "btn btn-sm">${element.category}</button>
        `
        categoryContainer.appendChild(div)
    })
}
loadCategoryBtn()