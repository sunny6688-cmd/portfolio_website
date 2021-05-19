window.onload = () => {
    const home_btn = document.querySelector("#homepageid");
    const education_btn = document.querySelector("#eduactionpageid");
    const project_btn = document.querySelector("#projectpageid");
    const contact_btn = document.querySelector("#contactpageid");
    const close_popup = document.querySelectorAll(".close");
    home_btn.addEventListener("click", () => {
        let temp_home = document.querySelector(".home-popup");
        let temp_bodybox = document.querySelector(".main-body-box");
        let temp_heading = document.querySelector(".heading-box");
        temp_home.style.visibility = "visible";
        temp_bodybox.style.filter = "blur(8px)";
        temp_bodybox.style.webkitFilter = "blur(8px)";
        temp_heading.style.filter = "blur(8px)";
        temp_heading.style.webkitFilter = "blur(8px)";
    })
    education_btn.addEventListener("click", () => {
        let temp_education = document.querySelector(".education-popup");
        let temp_bodybox = document.querySelector(".main-body-box");
        let temp_heading = document.querySelector(".heading-box");
        temp_education.style.visibility = "visible";
        temp_bodybox.style.filter = "blur(8px)";
        temp_bodybox.style.webkitFilter = "blur(8px)";
        temp_heading.style.filter = "blur(8px)";
        temp_heading.style.webkitFilter = "blur(8px)";
    })
    project_btn.addEventListener("click", () => {
        let temp_project = document.querySelector(".Project-popup");
        let temp_bodybox = document.querySelector(".main-body-box");
        let temp_heading = document.querySelector(".heading-box");
        temp_project.style.visibility = "visible";
        temp_bodybox.style.filter = "blur(8px)";
        temp_bodybox.style.webkitFilter = "blur(8px)";
        temp_heading.style.filter = "blur(8px)";
        temp_heading.style.webkitFilter = "blur(8px)";
    })
    contact_btn.addEventListener("click", () => {
        let temp_contact = document.querySelector(".contact-popup");
        let temp_bodybox = document.querySelector(".main-body-box");
        let temp_heading = document.querySelector(".heading-box");
        temp_contact.style.visibility = "visible";
        temp_bodybox.style.filter = "blur(8px)";
        temp_bodybox.style.webkitFilter = "blur(8px)";
        temp_heading.style.filter = "blur(8px)";
        temp_heading.style.webkitFilter = "blur(8px)";
    })
    for(let i=0;i<close_popup.length;i++)
    {
        close_popup[i].addEventListener("click", () => {
            let temp_home = document.querySelector(".home-popup");
            let temp_education = document.querySelector(".education-popup");
            let temp_project = document.querySelector(".Project-popup");
            let temp_contact = document.querySelector(".contact-popup");
            temp_education.style.visibility = "hidden";
            temp_contact.style.visibility = "hidden";
            temp_home.style.visibility = "hidden";
            temp_project.style.visibility = "hidden";
            let temp_bodybox = document.querySelector(".main-body-box");
            let temp_heading = document.querySelector(".heading-box");
            temp_bodybox.style.filter = "none";
            temp_bodybox.style.webkitFilter = "none";
            temp_heading.style.filter = "none";
            temp_heading.style.webkitFilter = "none";
        })
    }
}