// styled
import styled from "styled-components"
import * as palette from '../styled/ThemeVariables.js';

// images
import Git from '../images/icons/github1774dd.png';
import Twitter from '../images/icons/twitter1774dd.png';
import Linkedin from '../images/icons/linkedin1774dd.png';

export default function Footer() {
    return (
        <StyledFooter>
            <h2>Bill Gibson</h2>
            <h3>Frontend Web Developer</h3>
            <div className="icon-container">
                <a href="https://github.com/BillGibsonDev" target="_blank" rel="noreferrer"><img src={Git} alt="Github Link" /></a>
                <a href="https://twitter.com/BillGibsonDev" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter Link" /></a>
                <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin Link" /></a>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
height: 100%;
border-top: 3px solid ${palette.accentColor};
display: flex;
align-items: center;
flex-direction: column;
margin: auto;
width: 100%;
    h2 {
        font-size: 2em;
        color: ${palette.accentColor};
    }
    h3 {
        font-size: 1.2em;
        color: #fff;
        font-weight: 400;
    }
    .icon-container {
        display: flex;
        width: 50%;
        max-width: 120px;
        justify-content: space-between;
        margin: 20px auto;
        a {
            margin-right: 10px;
            img {
                width: 30px;
            }
        }
    }
`;
