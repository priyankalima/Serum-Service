main.append(
    Object.assign(
        document.createElement('section'),
        {
            className: "header-section",
            id: "headerSection",
            innerHTML: `
            <div class="container d-flex">
                <div class="serum-left-content" id="serumLeftContent"></div>
                <div class="serum-right-img" id="serumRightImg"></div>
            </div>
            `,
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.headerSection;
                    serumLeftContent.innerHTML = `
                       <div class="serum-logo">
                            <span>LOGO</span>
                       </div>
                       <div class="serum-title">
                            <span>${item.title}</span>
                            <span>${item.para}</span>
                       </div>
                       <div class="serum-link-btn">
                            <button>Know More</button>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="70" height="70" rx="35" fill="url(#paint0_linear_192_451)" />
                                <path d="M30.5 28.618V42.0708C30.5 43.2489 31.7959 43.9672 32.795 43.3428L44.753 35.869C45.7463 35.2482 45.6765 33.7792 44.6288 33.2554L32.6708 27.2764C31.6735 26.7777 30.5 27.503 30.5 28.618Z" fill="white" stroke="white" />
                                <defs>
                                <linearGradient id="paint0_linear_192_451" x1="35" y1="0" x2="35" y2="70" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#692C0F" />
                                    <stop offset="0.333333" stop-color="#ECB236" />
                                    <stop offset="0.666667" stop-color="#763B2A" />
                                    <stop offset="1" stop-color="#A12703" />
                                </linearGradient>
                                </defs>
                            </svg>
                       </div>
                    `
                    serumRightImg.innerHTML = `
                      <img src=${item.img}>
                      <div class="menu-list">
                           ${item.menu.map(list => {
                        return `<a>${list}</a>`
                    }).join("")
                        }
                      </div>
                    `
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            className: "serum-info-section",
            id: "serumInfoSection",
            innerHTML: `
               <div class="container d-flex">
                    <div class="serum-top-title" id="serumTopTitle"></div>
                    <div class="serum-bottom-content" id="serumBottomContent"></div>
               </div>
            `,
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.serumInfo;

                    serumTopTitle.innerHTML = `
                        <span>${item.title}</span>
                    `
                    item.content.forEach(list => {
                        serumBottomContent.innerHTML += `
                        <div class="content">
                            <img src=${list.icon}>
                            <span>${list.title}</span>
                            <span>${list.para}</span>
                        </div>
                    `
                    })

                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            className: "about-section",
            id: "aboutSection",
            innerHTML: `
               <div class="d-flex">
                   <div class="about-section-left-img" id="aboutSectionLeftImg"></div>
                   <div class="about-section-right-content" id="aboutSectionRightContent"></div>
               </div>
            `,
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.aboutSection;

                    aboutSectionLeftImg.innerHTML = `
                        <img src=${item.img}>
                    `
                    aboutSectionRightContent.innerHTML = `
                    <div class="container d-flex">
                       <span>About Us</span>
                       <span>${item.content}</span>
                       <button> Know More </button>
                    </div> 
                    `
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            className: "serum-benifit-section",
            id: "serumBenifitSection",
            innerHTML: `
                <div class="container d-flex">
                    <div class="serum-benifit-section-top-title" id="serumBenifitSectionTopTitle"></div>
                    <div class="serum-benifit-section-bottom-content" id="serumBenifitSectionBottomContent"></div>
                </div>
            `,
            function: addEventListener('load', () => {

                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.benefitSection;
                    serumBenifitSectionTopTitle.innerHTML = `
                   <div class="title">
                       <span>What Benefits you get!</span>
                   </div>
                `
                    item.forEach(list => {
                        serumBenifitSectionBottomContent.innerHTML += `
                    <div class="content">
                          <span>${list.title}</span>
                          <span>${list.para}</span>
                    </div>
                    `
                    })
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            className: "serum-promot-section d-flex",
            id: "serumPromotSection",
            innerHTML: `
               <div class="serum-promot-left-content" id="serumPromotLeftContent"></div>
               <div class="serum-promot-right-img" id="serumPromotRightImg"></div>
            `,
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.promotSection
                    serumPromotLeftContent.innerHTML = `
                      <div class="container">
                            <span>What does serum do for your skin?</span>
                            <button>Get a Counsultancy</button>
                      </div>
                    `
                    serumPromotRightImg.innerHTML = `
                       <img src=${item.img}>
                    `
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            className: "testimonial-section",
            id: "",
            innerHTML: `
                <div class="container d-flex">
                    <div class="testimonial-top-title" id="testimonialTopTitle"></div>
                    <div class="testimonial-bottom-content" id="testimonialBottomContent"></div>
                </div>
            `,
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.testimonial;
                    testimonialTopTitle.innerHTML = `
                       <span>What Our Customer Say...</span>
                    `
                    item.forEach(list => {
                        testimonialBottomContent.innerHTML += `
                       <div class="content">
                            <div class="profile">
                                <span class="profile-img">${list.profile}</span>
                                <div class="profile-name">
                                <span>${list.name}</span>
                                <span>${list.year} years</span>
                                </div>
                            </div>
                            <span class="msg">${list.msg}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="16" fill="none" viewBox="0 0 87 16">
                                <path fill="#FFC700" d="m7.5.5 1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.865l-4.408 3.203 1.683-5.183L.367 5.682h5.45L7.5.5Zm18 0 1.684 5.182h5.449l-4.409 3.203 1.684 5.183-4.408-3.203-4.408 3.203 1.684-5.183-4.409-3.203h5.45L25.5.5Zm18 0 1.684 5.182h5.449l-4.409 3.203 1.684 5.183-4.408-3.203-4.408 3.203 1.684-5.183-4.409-3.203h5.45L43.5.5Zm18 0 1.684 5.182h5.449l-4.408 3.203 1.683 5.183-4.408-3.203-4.408 3.203 1.684-5.183-4.409-3.203h5.45L61.5.5Z"/>
                                <path fill="#D9D9D9" d="m79.5.5 1.684 5.182h5.449l-4.408 3.203 1.683 5.183-4.408-3.203-4.408 3.203 1.683-5.183-4.408-3.203h5.45L79.5.5Z"/>
                            </svg>

                       </div>
                    `
                    })
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            className: "faq-section",
            id: "",
            innerHTML: `
                <div class="container d-flex">
                    <div class="faq-top-title" id="faqTopTitle"></div>
                    <div class="faq-bottom-content" id="faqBottomContent"></div>
                </div>
            `,
            function: addEventListener('load', () => {
                fetch('./content.json').then(res => res.json()).then(data => {
                    const item = data.faqSection;
                    faqTopTitle.innerHTML = `
                      <span>Do You Have Any Query?</span>
                    `
                    item.forEach((list, i) => {
                        faqBottomContent.innerHTML += `
                            <input type="radio" name="faqTab" id=${"faq" + i}>
                            <label for=${"faq" + i}>
                               <span>${list.title}</span>
                               <span class="arrow">
                                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 10.8653L9.07692 2.49996L16 11.1538" stroke="#67422E" stroke-width="2" />
                                    </svg>
                                </span>
                            </label>
                            <div class="content">
                                <span>${list.para}</span>
                            </div>
                        `
                        document.getElementsByName('faqTab')[0].checked = true;
                    })
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            className: "footer-section",
            id: "",
            innerHTML: `
               <div class="container">
                   <div class="footer-top-content" id="footerTopContent"></div>
                   <div class="footer-bottom-content" id="footerBottomContent"></div>
                   <div class="copyright"><span>Copyright 2024</span></div>
               </div>
            `,
            function: addEventListener('load', () => {
                footerTopContent.innerHTML = `
                    <span class="subscribe-title">Subscribe our Newslatter</span>
                    <div class="subscribe-form-input">
                       <input type="text" placeholder="enter your email">
                       <button>Subscribe</button>
                    </div>
                `
                fetch("./content.json").then(res => res.json()).then(data => {
                    const item = data.footerSection;
                    footerBottomContent.innerHTML = `
                    <div class="logo">
                        <span>LOGO</span>
                        <span>${item.para}</span>
                    </div>
                    <div class="quicklink">
                        <span>QuickLinks</span>
                        ${item.quickLinks.map(list => {
                        return `<a>${list}</a>`
                    }).join("")
                        }
                    </div>
                    <div class="address">
                    ${item.address.map(list => {
                            return `<a>${list}</a>`
                        }).join("")
                        }
                    </div>
                    `
                })
            })
        }
    )
)