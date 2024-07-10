document.addEventListener('DOMContentLoaded', function () {
    // Get all the navigation items
    const inspiredBtn = document.getElementById('inspiredBtn');
    const placesBtn = document.getElementById('placesBtn');
    const thingsBtn = document.getElementById('thingsBtn');
    const planBtn = document.getElementById('planBtn');
    const headDivBtns = document.querySelectorAll('.heads-div button')
    const backBtn = document.getElementById('backBtn');
    const closeIcon = document.getElementById('closeIcon');






    // Get all dropdown content elements
    const inspiredContent = document.querySelector('.dropdown-content-Inspired');
    const placesContent = document.querySelector('.dropdown-content-Places');
    const thingsContent = document.querySelector('.dropdown-content-Things');
    const planContent = document.querySelector('.dropdown-content-Plan');
    const navigationScreen = document.querySelector('.navigation-screen');

    backBtn.addEventListener('click', (e) => {
        navigationScreen.classList.remove('show')
        const cardDivs = document.querySelectorAll('.navigation-screen > div');
        cardDivs.forEach((div) => {
            div.style.display = 'none'
        })
        backBtn.style.display = "none"
        closeIcon.style.display = "block"
    })

    headDivBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const cardDivs = document.querySelectorAll('.navigation-screen > div');
            cardDivs.forEach((div) => {
                div.style.display = 'none'
            })

            const attr = e.target.dataset.btnNav
            const cardsDiv = document.querySelector(`[data-nav="${attr}"]`);
            console.log(cardsDiv);
            navigationScreen.classList.add('show')
            cardsDiv.style.display = 'flex'
            backBtn.style.display = "block"
            closeIcon.style.display = "none"
        })
    })

    // Function to hide all dropdowns
    function hideAllDropdowns() {
        inspiredContent.style.display = 'none';
        placesContent.style.display = 'none';
        thingsContent.style.display = 'none';
        planContent.style.display = 'none';


    }

    // Function to toggle dropdown visibility
    function toggleDropdown(btn, content) {
        // Toggle display of the dropdown content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            hideAllDropdowns(); // Assuming this function exists to hide other dropdowns
            content.style.display = 'block';
        }

        // Toggle font weight of the button
        if (btn.style.fontWeight === 'bold') {
            btn.style.fontWeight = 'normal';
        } else {
            btn.style.fontWeight = 'bold';
        }

        // Toggle rotation of the arrow icon
        const img = btn.querySelector('.arrow-up-nav'); // Assuming arrow-up-nav is a class of the arrow icon

        if (img) {
            // Check the current rotation angle using transform property
            const transformValue = img.style.transform;
            if (!transformValue || transformValue === "rotate(0deg)") {
                img.style.transform = "rotate(180deg)";
            }
            else {
                img.style.transform = "rotate(0deg)";
            }
        }
    }


    // change fontweight before click nav items

    // rutate arrow icon nav








    // Event listeners for each navigation item
    inspiredBtn.addEventListener('click', function () {
        toggleDropdown(inspiredBtn, inspiredContent);
    });

    placesBtn.addEventListener('click', function () {
        toggleDropdown(placesBtn, placesContent);
    });

    thingsBtn.addEventListener('click', function () {
        toggleDropdown(thingsBtn, thingsContent);
    });

    planBtn.addEventListener('click', function () {
        toggleDropdown(planBtn, planContent);
    });

    // Clicking anywhere outside the nav or dropdowns should close all dropdowns
    document.addEventListener('click', function (event) {
        const isNavClick = event.target.closest('.nav');
        const isDropdownContentClick = event.target.closest('.dropdown-content-Inspired, .dropdown-content-Places, .dropdown-content-Things, .dropdown-content-Plan');

        if (!isNavClick && !isDropdownContentClick) {
            hideAllDropdowns();
        }
    });

    // Get hamburger and close icons and responsive menu
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const responsiveMenu = document.getElementById('responsiveMenu');

    // Function to toggle responsive menu
    function toggleResponsiveMenu() {
        if (responsiveMenu.style.display === 'block') {
            responsiveMenu.style.display = 'none';
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            responsiveMenu.style.display = 'block';
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }



    }


    // Event listeners for hamburger and close icons
    hamburgerIcon.addEventListener('click', toggleResponsiveMenu);
    closeIcon.addEventListener('click', toggleResponsiveMenu);
});








// JavaScript for tab selection
function selectTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Add 'active' class to the clicked tab
    event.currentTarget.classList.add('active');
}

// JavaScript for tab navigation scrolling
function scrollTabs(direction) {
    const tabsContainer = document.querySelector('.tabs');
    const scrollAmount = 100; // Adjust as needed

    if (direction === 'left') {
        tabsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        tabsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // search input
}


// Open Modal start
const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
    modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-overlay"))
            modal.classList.add("hide");
    } else modal.classList.add("hide");
}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);

// Open Modal end


// respinsive modal 
// Get the modal
var ebModal = document.getElementById("mySizeChartModal");

// Get the button that opens the modal
var ebBtn = document.getElementById("mySizeChart");

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];

// When the user clicks the button, open the modal
ebBtn.onclick = function () {
    ebModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function () {
    ebModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
};

// end








