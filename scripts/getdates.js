
const lastModified = document.querySelector("#lastModified");
const copyWriteYear = document.querySelector("#copy-write-year");

const today = new Date();


lastModified.innerHTML = today;
copyWriteYear.innerHTML = today.getFullYear();