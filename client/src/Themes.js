import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    background: '#fff',
    // Home
    homeBackground: 'transparent',
    fontColorHome: '#000',
    // navbar
    navbarBackground: 'transparent',
    navbarFontColor: '#000',
    navbarHamburgerFontColor: '#fff',
    navbarHover: '#5948f1',
    navbarFontColorMobile: '#fff',
    navbarBackgroundMobile: 'rgba(81, 124, 255, 0.96)',
    navbarIconMobile: '#000',
    burger__bar: '#000',
    // skills
    skillsBackground: '#0099FF',
    skillsFontColorTitle: '#fff',
    skillsFontColorDescription: '#fff',
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
    footerIconColor: '#fff',
    footerIconHoverColor: '#ff5100',
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
    burger__bar: '#fff',
    // skills
    skillsBackground: '#000B76',
    skillsFontColor: '#fff',
    skillsFontColorTitle: '#fff',
    skillsFontColorDescription: '#fff',
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
    footerIconColor: '#fff',
    footerIconHoverColor: '#ff5100',
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
    .navbar {background: ${props => props.theme.navbarBackground};}
    .navbar__logo{color: ${props => props.theme.fontColorHome};}
    .navbar__links {
        color: ${props => props.theme.navbarFontColor};
    }
    .navbar__links:hover {background-color: ${props => props.theme.navbarHover};}
    .navbar__menu.active {
        /* if the screen is smaller than 810 */
        @media (max-width: 810px) {
            background-color: ${props => props.theme.navbarBackgroundMobile};
        }
        /* if the screen is bigger than 810 */
        @media (min-width: 810px) {
        }
    }
    .burger__bar {
        background-color: ${props => props.theme.burger__bar};
    }
    /* Home */
    .home__container {background: ${props => props.theme.homeBackground};}
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
    /* star */
    .stars {
        ${'' /* display: ${props => props.theme.starDisplayOff}; */}
        width: ${props => props.theme.starWidth};
        height: ${props => props.theme.starHeight};
    }
    /* skills */
    .skills {background: ${props => props.theme.skillsBackground};}
    .skills__head {background: ${props => props.theme.skillsBackground};}
    .skills__title {color: ${props => props.theme.skillsFontColorTitle};}
    .skills__container {color: ${props => props.theme.skillsFontColorDescription};}
    /* projects */
    .projects {background: ${props => props.theme.projectBackground};}
    .projects__title {color: ${props => props.theme.fontColorProjectsTitle};}
    .projects__content {color: ${props => props.theme.fontColorCard};}
    .projects__card-tilt {
        border: ${props => props.theme.border}px solid ${props => props.theme.fontColorCard};
        border-radius: ${props => props.theme.borderRadius};
    }
    /* popup Project */
    .popup__container {background: ${props => props.theme.popupBackground};}
    .popup__content {background: ${props => props.theme.popupBackground};}
    .popup__content__info {color: ${props => props.theme.popupFontDescriptionColor};}
    .popup__content__info__header__title {color: ${props => props.theme.popupFontTitleColor};}
    /* contact */
    .contact-me__container {
        background: ${props => props.theme.contactBackground};
    }
    /* Footer */
    .footer__background {
        background: ${props => props.theme.footerBackgroundTheme};
    }
    .footer__content{
        background: ${props => props.theme.footerBackground};
        color: ${props => props.theme.footerFontColor};
    }
    .footer__icon {
        color: ${props => props.theme.footerIconColor};
    }
    .footer__icon:hover {
        color: ${props => props.theme.footerIconHoverColor};
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