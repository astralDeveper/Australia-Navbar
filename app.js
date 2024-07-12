document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation items
    const inspiredBtn = document.getElementById('inspiredBtn');
    const placesBtn = document.getElementById('placesBtn');
    const thingsBtn = document.getElementById('thingsBtn');
    const planBtn = document.getElementById('planBtn');
    const downIcon = document.querySelectorAll('.down-icon');
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
        document.querySelector(`[data-nav] .tabs`)
    })

    headDivBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const cardDivs = document.querySelectorAll('.navigation-screen > div');
            cardDivs.forEach((div) => {
                div.style.display = 'none'
            })

            const attr = e.target.dataset.btnNav
            const cardsDiv = document.querySelector(`[data-nav="${attr}"]`);
            navigationScreen.classList.add('show')
            cardsDiv.style.display = 'flex'
            backBtn.style.display = "block"
            closeIcon.style.display = "none"

            const tabContainer = cardsDiv.querySelector('.tabs');

            if(tabContainer) {
                tabContainer.firstElementChild.classList.add('active');
                cardsDiv.querySelector('.tab-content').style.display = 'block'
            }

           
        })
    })

    // Function to hide all dropdowns
    function hideAllDropdowns() {
        inspiredContent.style.display = 'none';
        placesContent.style.display = 'none';
        thingsContent.style.display = 'none';
        planContent.style.display = 'none';

        const tabSections = document.querySelectorAll('[data-tab-type="desktop"].tabs');

        tabSections.forEach(el => {
            el.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active')
            })
        })
        document.querySelectorAll('[data-tab-type="desktop"].tab-content').forEach(el => {
            el.style.display = 'none'
        })
    }

    // Function to toggle dropdown visibility
    function toggleDropdown(btn, content) {
        document.querySelectorAll('.heads').forEach(head => {
            head.style.fontWeight = '400';
            head.firstElementChild.style.transform ="rotate(0deg)"
        })
        if (content.style.display === 'block') {
            content.style.display = 'none';
            btn.firstElementChild.style.transform ="rotate(0deg)"
            btn.style.fontWeight = '400'
        } else {
            hideAllDropdowns();
            
            content.style.display = 'block';

            const tabSection = content.querySelector('.tabs');
            console.log(tabSection);
            if (tabSection) {
                tabSection.firstElementChild.classList.add('active');
                content.querySelector('.tab-content').style.display = 'block'
            }

            btn.firstElementChild.style.transform ="rotate(180deg)"
            btn.style.fontWeight = '600'
        }
    }

    // Event listeners for each navigation item
    inspiredBtn.addEventListener('click', function() {
        
        toggleDropdown(inspiredBtn, inspiredContent);
        // inspiredBtn.firstElementChild.style.transform ="rotate(180deg)"
        // planBtn.firstElementChild.style.transform ="rotate(0deg)"
        // thingsBtn.firstElementChild.style.transform ="rotate(0deg)"
        // placesBtn.firstElementChild.style.transform ="rotate(0deg)"
        
        // inspiredBtn.style.fontWeight = '600'
        // planBtn.style.fontWeight = '400'
        // thingsBtn.style.fontWeight = '400'
        // placesBtn.style.fontWeight = '400'
    });

    placesBtn.addEventListener('click', function() {
        toggleDropdown(placesBtn, placesContent);
        // inspiredBtn.firstElementChild.style.transform ="rotate(0deg)"
        // planBtn.firstElementChild.style.transform ="rotate(0deg)"
        // thingsBtn.firstElementChild.style.transform ="rotate(0deg)"
        // placesBtn.firstElementChild.style.transform ="rotate(180deg)"


        // placesBtn.style.fontWeight = '600'
        // planBtn.style.fontWeight = '400'
        // thingsBtn.style.fontWeight = '400'
        // inspiredBtn.style.fontWeight = '400'
    });

    thingsBtn.addEventListener('click', function() {
        toggleDropdown(thingsBtn, thingsContent);
        // inspiredBtn.firstElementChild.style.transform ="rotate(0deg)"
        // planBtn.firstElementChild.style.transform ="rotate(0deg)"
        // thingsBtn.firstElementChild.style.transform ="rotate(180deg)"
        // placesBtn.firstElementChild.style.transform ="rotate(0deg)"


        // thingsBtn.style.fontWeight = '600'
        // planBtn.style.fontWeight = '400'
        // placesBtn.style.fontWeight = '400'
        // inspiredBtn.style.fontWeight = '400'
    });

    planBtn.addEventListener('click', function() {
        toggleDropdown(planBtn, planContent);
        // inspiredBtn.firstElementChild.style.transform ="rotate(0deg)"
        // planBtn.firstElementChild.style.transform ="rotate(180deg)"
        // thingsBtn.firstElementChild.style.transform ="rotate(0deg)"
        // placesBtn.firstElementChild.style.transform ="rotate(0deg)"


        // planBtn.style.fontWeight = '600'
        // thingsBtn.style.fontWeight = '400'
        // placesBtn.style.fontWeight = '400'
        // inspiredBtn.style.fontWeight = '400'
    });

    // Clicking anywhere outside the nav or dropdowns should close all dropdowns
    document.addEventListener('click', function(event) {
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
    const tabsContainers = document.querySelectorAll('.tabs');
    tabsContainers.forEach((tabContainer) => {

        const scrollAmount = 100; // Adjust as needed
        
        if (direction === 'left') {
            tabContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        tabContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
})
}








