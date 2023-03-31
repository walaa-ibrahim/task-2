const properties = [
  {
    des: "Some quick example text to build on the card title and make",
    name: "partment",
    imgSrc: "imgs/1.jpg",
    bedroom: 4,
    bathroom: 2,
    space: 200,
    type: "For Sale",
  },
  {
    des: "Some quick example text to build on the card title and make",
    verfiyied: false,
    name: "partment",
    imgSrc: "imgs/2.jpg",
    bedroom: 4,
    bathroom: 2,
    space: 200,
    type: "For Rent",
  },
  {
    des: "Some quick example text to build on the card title and make",
    name: "partment",
    imgSrc: "imgs/3.jpg",
    bedroom: 4,
    bathroom: 2,
    space: 200,
    type: "For Sale",
  },
  {
    des: "Some quick example text to build on the card title and make",
    name: "partment",
    imgSrc: "imgs/4.jpg",
    bedroom: 4,
    bathroom: 2,
    space: 200,
    type: "For Rent",
  },
  {
    des: "Some quick example text to build on the card title and make",
    imgSrc: "imgs/5.jpg",
    name: "partment",
    bedroom: 4,
    bathroom: 2,
    space: 200,
    type: "For Sale",
  },
  {
    des: "Some quick example text to build on the card title and make",
    imgSrc: "imgs/6.jpg",
    name: "partment",
    bedroom: 4,
    bathroom: 2,
    space: 200,
    type: "For Rent",
  },
];
const propertiesContent = document.querySelector(".property");
function property() {
  let temp = "";
  for (let i = 0; i < properties.length; i++) {
    temp += `<div class="col-lg-4 col-md-6 my-2"><div class="card"><a href=''>
              <img src='${properties[i].imgSrc}' class="card-img-top" alt='${
      properties[i].name
    }'/>
              <div class="card-body  pb-0">
                <p class="card-text text-start">
                  ${properties[i].des}
                </p>
                <div class="d-flex justify-content-between align-items-center py-3 border-main">
                  <div class="d-flex  align-items-center">
                    <i class="fa-solid fa-bed main-color me-2"></i>
                    <p class='prop-num'>${properties[i].bedroom}</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-bath main-color me-2"></i>
                    <p class='prop-num'>${properties[i].bathroom}</p>
                  </div>
                  <div class="d-flex align-items-center">
                  <i class="fa-solid fa-border-all main-color me-2"></i>
                    <p class='prop-num'>${
                      properties[i].space
                    } m<sup> 2</sup></p>
                  </div>
                </div>
              </div></a><div class="property-type ${
                properties[i].type == "For Sale"
                  ? "property-type__sale"
                  : "property-type__rent"
              }">${properties[i].type}</div>
            </div></div>`;
  }
  propertiesContent.innerHTML = temp;
}
property();
