const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
console.log(" ");

for (let i = 0; i < categories.length; i++) {
  console.log(`Category: ${categories[i].querySelector("h2").innerHTML}`);
  console.log(`Elements: ${categories[i].querySelectorAll("li").length}`);
  console.log(" ");
}
