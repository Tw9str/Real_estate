let QUERY_SUGGESTED = encodeURIComponent('*[_type == "suggested"]');
// Compose the URL for your project's endpoint and add the query
let PROJECT_URL_SUGGESTED = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_SUGGESTED}`;

// fetch the content
fetch(PROJECT_URL_SUGGESTED)
  .then((res) => res.json())
  .then(({ result }) => {
    if (result.length > 0) {
      result.forEach((suggested) => {
        let aboutDetails = document.querySelector(".featured .about p");
        aboutDetails.innerHTML = suggested.details;
        let featured = document.querySelector(
          ".featured .recommended .recommended-box"
        );
        let details = document.createElement("div");
        let h4 = document.createElement("h4");
        let span = document.createElement("span");
        let btn = document.createElement("button");
        let divImg = document.createElement("div");
        h4.innerText = suggested.name;
        span.innerText = suggested.price;
        btn.innerText = "المزيد من التفاصيل";
        details.className = "details";

        details.appendChild(h4);
        details.appendChild(span);
        details.appendChild(btn);
        featured.appendChild(details);

        for (let i = 0; i < suggested.image.length; i++) {
          let img = document.createElement("img");
          divImg.className = "img";

          img.src = `https://cdn.sanity.io/images/uwn2x2uu/production/${suggested.image[
            i
          ].asset._ref
            .slice(6)
            .replace("-jp", ".jp")}`;
          divImg.appendChild(img);
          featured.prepend(divImg);
        }
      });
    }
  })
  .catch((err) => console.error(err));
