let QUERY_SOCIAL = encodeURIComponent('*[_type == "social"]');
// Compose the URL for your project's endpoint and add the query
let PROJECT_URL_SOCIAL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_SOCIAL}`;

// fetch the content
fetch(PROJECT_URL_SOCIAL)
  .then((res) => res.json())
  .then(({ result }) => {
    if (result.length > 0) {
      let facebook = document.querySelectorAll(".column.follow .icons a")[0];
      let twitter = document.querySelectorAll(".column.follow .icons a")[1];
      let pinterest = document.querySelectorAll(".column.follow .icons a")[2];
      let instagram = document.querySelectorAll(".column.follow .icons a")[3];
      let address = document.querySelector(".contact-information address i");
      let email = document.querySelectorAll(".contact-information a")[0];
      let phone = document.querySelectorAll(".contact-information a")[1];
      let phoneBdi = document.querySelector(".contact-information a bdi");

      facebook.href = result[0].facebook:
      twitter.href = "https://google.com/";
      pinterest.href = "https://google.com/";
      instagram.href = "https://instagram.com/";
      address.after(result[0].address);
      email.href = `mailto: ${result[0].email}`;
      email.innerHTML = result[0].email;
      phone.href = `tel: ${result[0].phone}`;
      phoneBdi.innerHTML = result[0].phone;
    }
  })
  .catch((err) => console.error(err));
