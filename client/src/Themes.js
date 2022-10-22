import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    background: '#fff',
    // Home
    homeBackground: 'transparent',
    fontColorHome: '#000',
    // navbar
    navbarBackground: 'transparent',
    navbarFontColor: '#000',
    navbarHover: '#5948f1',
    navbarFontColorMobile: '#fff',
    navbarBackgroundMobile: 'rgba(81, 124, 255, 0.96)',
    navbarIconMobile: '#000',
    // projects
    border: 1,
    projectBackground: '#0099FF',
    borderRadius: '20px',
    fontColorProjectsTitle: '#fff',
    fontColorCard: '#000',
    // popup project
    popupBackground: '#fff',
    popupFontTitleColor: '#fff',
    popupFontDescriptionColor: '#000',
    // contact
    contactBackground: '#0099FF',
    contactInitBackground: '#0099FF',
    // footer
    footerBackgroundTheme: '#0099FF',
    footerBackground: '#0055ff',
    footerFontColor: '#fff',
    // star display off
    starDisplayOff: 'none',
    starWidth: '0%',
    starHeight: '0%',
    // scroll bar
    scrollBarWidth: '17px',
    scrollBarBackgroundBase: '#fff',
    scrollBarBorderRadius: '0px',
    scrollBarBackgroundBaseThumb: '#922d2d',
    scrollBarBackgroundHover: '#a12828',
}

export const darkTheme = {
    background: '#000B76',
    fontColor: '#fff',
    // Home
    homeBackground: '#110247',
    fontColorHome: '#fff',
    // navbar
    navbarBackground: '#110247',
    navbarFontColor: '#fff',
    navbarHover: '#3379b3',
    navbarBackgroundMobile: 'rgba(29, 5, 114,0.96)',
    navbarIconMobile: '#fff',
    // projects
    border: 0,
    projectBackground: '#000B76',
    // fontColorProjectsTitle: '#fff',
    fontColorCard: '#000',
    // popup project
    popupBackground: '#171924',
    popupFontTitleColor: '#fff',
    popupFontDescriptionColor: '#fff',
    // contact
    contactInitBackground: '#000B76',
    // footer
    footerBackgroundTheme: '#000B76',
    footerBackground: '#000000',
    footerFontColor: '#fff',
    blurProfile: '#340A20',
    blurProfileDos: '#2C192F',
    blurProfileTra: 'transparent',
    blurDisplay: 'none',
    // star
    starWidth: '100%',
    // scroll bar
    scrollBarWidth: '17px',
    scrollBarBackgroundBase: '#292929',
    scrollBarBorderRadius: '0px',
    scrollBarBackgroundBaseThumb: '#922d2d',
    scrollBarBackgroundHover: '#a12828',
}

export const GlobalStyles = createGlobalStyle`
    body {background: ${props => props.theme.background};}
    /* NavBar */
    .nav-bar-container {background: ${props => props.theme.navbarBackground};}
    .nav-bar-logo {color: ${props => props.theme.fontColorHome};}
    .nav-links {
        color: ${props => props.theme.navbarFontColor};
        @media (max-width: 810px) {
            color: ${props => props.theme.navbarFontColorMobile};
            /* .fa-times, .fas.fa-bars {
                color: ${props => props.theme.navbarIconMobile};
            } */
        }
    }
    .nav-links:hover {background-color: ${props => props.theme.navbarHover};}
    .nav-menu.active {
        /* if the screen is smaller than 810 */
        @media (max-width: 810px) {
            background-color: ${props => props.theme.navbarBackgroundMobile};
        }
        /* if the screen is bigger than 810 */
        @media (min-width: 810px) {
        }
    }
    .fa-times, .fas.fa-bars {color: ${props => props.theme.navbarIconMobile};}
    /* Home */
    .home-container {background: ${props => props.theme.homeBackground};}
    .primary-text {color: ${props => props.theme.fontColorHome};}
    .btn.primary-btn {color: ${props => props.theme.fontColorHome};}
    .btn.highlighted-btn {color: ${props => props.theme.fontColorHome};}
    /* Profile */
    .blur.uno, .blur.tres {
        background: ${props => props.theme.blurProfileTra};
        display: ${props => props.theme.blurDisplay};
    }
    .blur.dos, .blur.init {
        background: ${props => props.theme.blurProfileTra};
        display: ${props => props.theme.blurDisplay};
    }
    /* projects */
    .projects-container {background: ${props => props.theme.projectBackground};}
    .projects-title {color: ${props => props.theme.fontColorProjectsTitle};}
    .content-container {color: ${props => props.theme.fontColorCard};}
    .tilt-card {
        border: ${props => props.theme.border}px solid ${props => props.theme.fontColorCard};
        border-radius: ${props => props.theme.borderRadius};
    }
    /* popup Project */
    .popup__container {background: ${props => props.theme.popupBackground};}
    .popup__content {background: ${props => props.theme.popupBackground};}
    .popup__content__info {color: ${props => props.theme.popupFontDescriptionColor};}
    .popup__content__info__header__title {color: ${props => props.theme.popupFontTitleColor};}
    /* contact */
    .contact-me-container {
        background: ${props => props.theme.contactBackground};
    }
    .boxInit {
        background-color: ${props => props.theme.contactInitBackground};
    }
    /* Footer */
    .footer-backgroundTheme {
        background: ${props => props.theme.footerBackgroundTheme};
    }
    .footer-row {
        background: ${props => props.theme.footerBackground};
        color: ${props => props.theme.footerFontColor};
    }
    /* star */
    .stars {
        ${'' /* display: ${props => props.theme.starDisplayOff}; */}
        width: ${props => props.theme.starWidth};
        height: ${props => props.theme.starHeight};
    }
    /* scroll bar */
    ::-webkit-scrollbar {
        width: ${props => props.theme.scrollBarWidth};
        background-color: ${props => props.theme.scrollBarBackgroundBase};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.scrollBarBackgroundBaseThumb};
        border-radius: ${props => props.theme.scrollBarBorderRadius};
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${props => props.theme.scrollBarBackgroundHover};
    }
`