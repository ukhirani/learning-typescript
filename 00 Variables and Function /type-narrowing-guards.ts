let ElemOrNull: HTMLElement | null;
ElemOrNull = document.getElementById("might-exist");
ElemOrNull.addEventListener("click", () => {}); // might be null so gives error if it is possibly null
ElemOrNull?.addEventListener("click", () => {}); // this is the thing we use to do type-guarding

if (ElemOrNull === null) {
  // in this if branch, ElemOrNull is null type and not HTMLElement type
  // this is known as type narrowing
} else {
  // now we definitely know that the ElemOrNull is not of type null
  ElemOrNull.addEventListener("click", () => {}); // same line that gave error before is now free of that error's possibility
}
