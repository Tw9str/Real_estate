let QUERY_HOUSE = encodeURIComponent('*[_type == "house"]');
// Compose the URL for your project's endpoint and add the query
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_HOUSE}`;

// fetch the content
fetch(PROJECT_URL)
  .then((res) => res.json())
  .then(({ result }) => {
    if (result.length > 0) {
      result.forEach((house) => {
        let houses = document.querySelector("div.houses");
        let houseBox = document.createElement("div");
        let divImg = document.createElement("div");
        let span = document.createElement("span");
        let boxTitle = document.createElement("div");
        let h3 = document.createElement("h3");
        let boxAddress = document.createElement("div");
        let paraAddress = document.createElement("p");
        let boxPrice = document.createElement("div");
        let priceSpan = document.createElement("span");
        let houseRooms = document.createElement("div");
        let detailsDiv = document.createElement("div");
        let left = document.createElement("button");
        let right = document.createElement("button");

        houseBox.className = "house-box";
        divImg.className = "img";
        boxTitle.className = "box-title";
        houseRooms.className = "house-rooms";
        boxAddress.className = "box-address";
        boxPrice.className = "box-price";
        left.className = "btn-left";
        right.className = "btn-right";
        houseBox.appendChild(divImg);
        divImg.appendChild(span);
        houseBox.appendChild(boxTitle);
        houseBox.appendChild(houseRooms);
        boxTitle.appendChild(h3);
        houseBox.appendChild(boxAddress);
        houseBox.appendChild(boxPrice);
        boxAddress.appendChild(paraAddress);
        boxPrice.appendChild(priceSpan);
        houses.appendChild(houseBox);
        houseBox.appendChild(detailsDiv);
        divImg.appendChild(right);
        divImg.appendChild(left);

        span.innerHTML = house.status;
        h3.innerHTML = house.name;
        paraAddress.innerHTML = house.address;
        priceSpan.innerHTML = house.price;
        houseRooms.innerHTML = `<div class="room">${house.rooms}</div>
        <i class="fa-solid fa-bed"></i>
        <div class="room">${house.livingRooms}</div>
        <i class="fa-solid fa-couch"></i>
        <div class="room">${house.bathroom}</div>
        <i class="fa-solid fa-bath"></i>`;
        detailsDiv.innerHTML = `
        <a href="https://wa.me/+905348738412" target="_blank"><img src="images/whatsapp.svg" alt="Whatsapp"> <bdi>+90 5348738412<bdi></a>
        <a href="https://wa.me/+905550988840" target="_blank"><img src="images/whatsapp.svg" alt="Whatsapp"> <bdi>+90 5550988840<bdi></a>`;
        left.innerHTML = `<i class="fa-solid fa-caret-left"></i>`;
        right.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;

        for (let i = 0; i < house.image.length; i++) {
          let houseImg = document.createElement("img");
          houseImg.src = `https://cdn.sanity.io/images/uwn2x2uu/production/${house.image[
            i
          ].asset._ref
            .slice(6)
            .replace("-jp", ".jp")}`;
          divImg.prepend(houseImg);
          // Houses Slider
          let currentImg = 1;

          left.addEventListener("click", () => {
            currentImg++;
            updateImg(houseImg);
          });

          right.addEventListener("click", () => {
            currentImg--;
            updateImg(houseImg);
          });

          function updateImg(houseImg) {
            if (currentImg > house.image.length) {
              currentImg = 1;
            } else if (currentImg < 1) {
              currentImg = house.image.length;
            }
            if (window.localStorage.lang === "ar") {
              houseImg.style.transform = `translateX(${
                (currentImg - 1) * 107
              }%)`;
            } else {
              houseImg.style.transform = `translateX(${
                (currentImg - 1) * -107
              }%)`;
            }
          }
        }
      });
    }
  })
  .catch((err) => console.error(err));
