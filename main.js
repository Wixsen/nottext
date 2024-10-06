
const Btn = document.querySelector(".theme-btn");
Btn.textContent = "Black Theme";
Btn.style.cursor= "pointer";
let themeState = false;

Btn.addEventListener('mouseover',() =>{
	Btn.style.backgroundColor = "gray";
});

Btn.addEventListener('mouseout',() =>{
	if (themeState)
		Btn.style.backgroundColor = "black";
	else
		Btn.style.backgroundColor = "white";

});
const detail = document.querySelector(".detail-content");

Btn.addEventListener("click",() =>{
	const body= document.querySelector("body");
	const textarea = document.querySelector(".text-box");
	body.classList.toggle("dark-theme");
	Btn.classList.toggle("dark-btn");

	if (themeState)
	{
		Btn.textContent = "Black Theme";
		themeState = false;
		textarea.style.backgroundColor = "Black";
		textarea.style.color = "White";
	} else {
		
		Btn.textContent = "White Theme";
		themeState = true;
		textarea.style.backgroundColor = "White";
		textarea.style.color = "Black";
	}
});

const upperBtn = document.querySelector("#upper-btn");
const lowerBtn = document.querySelector("#lower-btn");

upperBtn.addEventListener("click", () => {
	
	const textarea = document.querySelector(".text-box");
	textarea.value = textarea.value.toUpperCase();
});

lowerBtn.addEventListener("click", () => {
	const textarea = document.querySelector(".text-box");
	textarea.value = textarea.value.toLowerCase();
});


function detail_update() {
    const record = document.querySelector(".detail-content");
    const textarea = document.querySelector(".text-box");
    const lengthField = textarea.value.length;
    let words = 0;

    const trimmedText = textarea.value.trim();

    if (trimmedText.length > 0) {
        words = trimmedText.split(/\s+/).length;
    }

    record.innerHTML = (
        `<h2 style="margin-left: 20px;">Length: ${lengthField}</h2>
        <span style="font-size: large; margin-left: 20px">
            Words: ${words}</span>`
    );
}

window.setInterval(detail_update, 50);