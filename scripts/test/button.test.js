/**
 * @jest-environment jsdom
 */
//above must be entered at he top of the file
 const buttonClick = require("../button");

 beforeEach(() => {
     //to just test the click on a single element
    //  document.body.innerHTML = "<p id='par'></p>";

    // to test the whole DOM

    let fs=require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8"); 
    document.open()
    document.write(fileContents);
    document.close();
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });

     test("h1 should exist", () => {
         expect(document.getElementsByTagName("h1").length).toBe(1);
     });

 });