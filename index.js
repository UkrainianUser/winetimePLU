// Пошук елементів форми та результатів у DOM
const searchForm = document.querySelector("#search-form");
const searchList = document.querySelector(".search-list");

// Обробка даних, отриманих із сервера
export function renderData(pluList) {
  if (!pluList || pluList.length === 0) {
    searchList.innerHTML = '<li class="no-results">Нічого не знайдено</li>';
    return;
  }

  const markup = pluList
    .map(
      (plu) => `
        <li class="search-item">
          <span class="article">${plu.article}</span>
          <span class="name">${plu.name}</span>
          <span class="plu">PLU: ${plu.PLU}</span>
        </li>
      `
    )
    .join("");

  searchList.innerHTML = markup; // Динамічно оновлюємо список
}

// Обробка події на формі
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchName = event.target.searchNameQuery.value;
  const searchNumber = event.target.searchNumberQuery.value;

  const query = searchName
    ? { action: "getByName", name: searchName }
    : { action: "getByArticle", article: searchNumber };

  try {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });

    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.error("Помилка запиту:", error);
  }
});
