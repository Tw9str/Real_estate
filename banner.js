let PROJECT_ID = "uwn2x2uu";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "banner"]');

// Compose the URL for your project's endpoint and add the query
let PROJECT_URL_BANNER = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(PROJECT_URL_BANNER)
  .then((res) => res.json())
  .then(({ result }) => {
    if (result.length > 0) {
      result.forEach((banner) => {
        let mainSection = document.querySelector("section .main-section");
        let maindiv = `<div class="main-section-background">
  <img src="https://cdn.sanity.io/images/uwn2x2uu/production/${banner.image.map(
    (img) => img.asset._ref.slice(6).replace("-jp", ".jp")
  )}" alt="">
</div>
<div class="sliding-circles">
  <i class="fa-regular fa-circle"></i>
  <i class="fa-regular fa-circle"></i>
  <i class="fa-regular fa-circle"></i>
  <i class="fa-regular fa-circle"></i>
  <i class="fa-regular fa-circle"></i>
</div>
<div class="container">
  <div class="main-section-ads">
    <div class="main-section-ads-content">
      <h3>${banner.name}</h3>
      <span>${banner.address}</span>
      <p>${banner.details}</p>
      <button>${banner.price}</button>
    </div>
  </div>
  <div class="buy-sale">
    <div class="search-side">
      <h3 data-lang="buyAndSaleTitle">بيع وشراء وتأجير</h3>
      <div class="input">
        <input type="search" placeholder="البحث عن عقارات" class="first-input">
      </div>
      <div class="selectors">
        <select name="buy">
          <!-- <option value="" data-lang="buy">Buy</option>
          <option value="" data-lang="sale">Rent</option> -->
          <option value="" data-lang="rent">تأجير</option>
        </select>
        <select name="price">
          <option value="" data-lang="price">السعر</option>
          <!-- <option value="">$150,000 - $200,000</option>
          <option value="">$200,000 - $250,000</option>
          <option value="">$250,000 - $300,000</option>
          <option value="" data-lang="above">$300,000 - above</option> -->
        </select>
        <select name="property">
          <!-- <option value="" data-lang="property">Property</option>
          <option value="" data-lang="apartment">Apartment</option>
          <option value="" data-lang="buliding">Building</option>
          <option value="" data-lang="officeSpace">Office Space</option> -->
        </select>
        <button data-lang="findNow">ابحث الان</button>
      </div>
    </div>
  </div>
</div>`;
        mainSection.innerHTML = maindiv;
      });
    }
  })
  .catch((err) => console.error(err));

//   <div class="login-side">
//   <span data-lang="join">انضم الآن واطلع على جميع صفقات العقارات.</span>
//   <button data-lang="login">تسجيل الدخول</button>
// </div>
