// showing letter one by one in header section 

function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const el = document.getElementById(elementId);
    el.innerHTML = ""; // clear previous text before typing

    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// Run typing sequence after DOM loads
window.onload = function () {
    {
        typeWriter("role", "I am a Frontend Developer", 100);
    }
};


