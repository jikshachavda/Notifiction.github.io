const notification = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success: {
        icons: "bi-patch-check-fill",
        text: 'Success: This is success toast.',
    },
    error: {
        icons: "bi-x-circle-fill",
        text: 'Error: This is Error toast',
    },
    warning: {
        icons: "bi-exclamation-triangle-fill",
        text: 'Warning: This is Warning toast.',
    },
    info: {
        icons: "bi-info-circle-fill",
        text: 'information: This is information toast.',
    },
}

const removeToast= (toast)=>{
    toast.classList.add("hide")
    if(toast.timeoutId) clearTimeout(toast.timeoutId)
    setTimeout(()=> toast.remove(), 500)
}

const createtoast = (id) => {
    const {icons, text} = toastDetails[id];
    const toast = document.createElement("li")
    toast.className = `toast ${id}`
    toast.innerHTML = ` <div class="colums">
    <i class="bi ${icons}"></i>
    <span>${text}</span>
</div>
<i class="bi bi-x-circle" onclick="removeToast(this.parentElement)"></i>`
    notification.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}
buttons.forEach(btn => {
    btn.addEventListener("click", () => createtoast(btn.id));
})