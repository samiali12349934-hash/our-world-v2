/* ============================= */
/* Chat Functionality */
/* ============================= */
function sendMessage() {
    const input = document.getElementById("message-input");
    const text = input.value.trim();
    if(!text) return;

    const message = document.createElement("div");
    message.textContent = text;
    message.style.padding = "10px";
    message.style.margin = "5px";
    message.style.background = "#c8e6c9";
    message.style.borderRadius = "8px";

    document.getElementById("chat-messages").appendChild(message);
    input.value = "";

    // Scroll to bottom
    document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
}

/* ============================= */
/* Dark Mode Permanent Toggle */
/* ============================= */

// Get stored theme from localStorage
let storedTheme = localStorage.getItem("theme");

// Apply stored theme
if(storedTheme){
    document.body.classList.add(storedTheme);
}

// Update button text based on current theme
const themeBtn = document.getElementById("theme-toggle");
if(themeBtn){
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";

    themeBtn.onclick = () => {
        document.body.classList.toggle("dark");

        // Save theme to localStorage
        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", ""); // empty = light mode
            themeBtn.textContent = "🌙 Dark Mode";
        }
    }
}

/* ============================= */
/* Music Toggle */
/* ============================= */
const musicBtn = document.getElementById("music-toggle");
const music = document.getElementById("background-music");
if(musicBtn && music){
    musicBtn.onclick = () => {
        if(music.paused){
            music.play();
            musicBtn.textContent = "⏸️ Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "▶️ Music";
        }
    }
}
