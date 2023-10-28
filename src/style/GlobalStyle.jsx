import { createGlobalStyle } from "styled-components";
import logo_white from "../images/logo_white.png";

const GlobalStyle = createGlobalStyle`
/* v2.0 | 20110126
  http://meyerweb.com/eric/tools/css/reset/ 
  License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}

//preset
.container{
    max-width: 1920px;
    margin: 0px auto;
}

.on{
	background-color: rgba(0, 0, 0, 0.4);
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.navChangeOn{
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    background-color: rgba(199, 215, 142, 0.8);
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

    .header-left{
		h1{
            a{
                background: url(${logo_white}) no-repeat;
            }
        }

        nav{
            .gnb{
                li{
                    a{
                        font-family: 'NexonGothicMedium';
                        font-size: 25px;
                        color: white;
                        text-shadow: none;
                    }
                }
            }
        }
    }

    .login{
        font-size: 32px;
        color: white;
    }
}

.alert{
    font-family: 'Cafe24Ssurround';
    font-size: 34px;
    color: #a5a5a5;
    text-align: center;
    padding: 210px 0px 100px;
    box-sizing: border-box;
}

.color{
    background-color: #a5a5a5;
}
`

export default GlobalStyle;