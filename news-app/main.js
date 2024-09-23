const newsContainer = document.getElementById("news-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageInput = document.getElementById("page-input");
const goToPageButton = document.getElementById("go-to-page");
const pageInfo = document.getElementById("page-info");
const loading = document.getElementById("loading");


let currentPage = 3;
const LIMIT = 10;
const totalItems = 100;
const totalPages = Math.ceil(totalItems / LIMIT);

// Single Responsibility
// Fetching - Verileri servisten getirmek
async function fetchNews(page) {
  showLoading();

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`)

    if (!response.ok) {
      throw new Error("Haberler getirilemedi")
    }

    const data = await response.json();
    return data
  } catch (error) {
    alert("Haberler getirilirken hata meydana geldi.", error.message)
  } finally {
    hideLoading();
  }

}


// Single Responsibility
// Display - Verileri ekrana çizip kullanıcıya göstermek
function displayNews(news) {
  newsContainer.innerHTML = "";
  news.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    newsContainer.appendChild(newsItem);
  })
}


// Single Responsibility
// Değişen sayfa numarasını ekrana çizmek
function updatePageInfo() {
  pageInfo.textContent = `${currentPage}/${totalPages}`
}



// Single Responsibility
// Sayfayı yükleme
async function loadPage(page) {

  if (page < 1 || page > totalPages) {
    alert("Hatalı sayfa numarası")
    return;
  }


  const news = await fetchNews(page);

  if (news) {
    displayNews(news);
    updatePageInfo();
    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPages;

  }
}

// Single Responsibility
// Yükleme yapılırken ekrana Haberler Getiriliyor... yazdırılır
function showLoading() {
  loading.style.display = "block";
}

// Single Responsibility
// Yükleme tamamlandıktan sonra ekrana Haberler Getirildi ekrandan kaldırır
function hideLoading() {
  loading.style.display = "none";
}


prevButton.addEventListener('click', () => {
  console.log("Önceki sayfa butonu tıklandı")
  if (currentPage > 1) {
    currentPage--;
    loadPage(currentPage)
  }
})
nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadPage(currentPage);
  }
})


goToPageButton.addEventListener('click', () => {
  const page = parseInt(pageInput.value);

  console.log("Sayfa numarası girildi", page)
  console.log("Sayfa numarası tipi : ", typeof page)


  if (!isNaN(page)) {
    currentPage = page
    loadPage(currentPage)
    console.log("Current Page : ", currentPage)
  }


})

loadPage(currentPage)