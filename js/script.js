const loadCategoryBtn = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  const data = await response.json();
  displayCategoryBtn(data.categories);
};

const loadVideos = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
    const data = await response.json();
    displayVideos(data.videos);
};

const displayCategoryBtn = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <button class= "btn btn-sm">${element.category}</button>
        `;
    categoryContainer.appendChild(div);
  });
};

const displayVideos = (videos) => {
    document.getElementById("icon").classList.add("hidden");
    const mainContainer = document.getElementById("main-container");
    videos.forEach((video) =>{
        console.log(video);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card">
        <figure>
          <img class="rounded-md h-[200px] object-cover"
            src="${video.thumbnail
            }"
          />
        </figure>
        <div class=" py-3 flex gap-3">
          <div class="avatar">
            <div class="w-8 h-8 rounded-full">
              <img
                src="${video.authors[0].profile_picture}"
              />
            </div>
          </div>

          <div>
            <h2 class="card-title">${video.title}</h2>
            <p class="flex items-center gap-2">
              ${video.authors[0].profile_name} ${video.authors[0].verified === true ? `<img class= "w-4 h-4" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png">` : ""}
            </p>
            <span>${video.others.views} Views</span>
          </div>
        </div>
      </div>
        `
         mainContainer.appendChild(div)
    })
}


loadCategoryBtn();
