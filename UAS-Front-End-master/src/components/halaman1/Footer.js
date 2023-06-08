import react from 'react';
import styled from 'styled-components';


const footer = () => {
    return(
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} - All Rights Reserved <strong>KabarKabari</strong>
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    );
}

export default footer 

const FooterContainer = styled.footer
`
.footer-middle {
  background: var(--mainDark);
  padding-top: 1rem;
  color: var(--mainWhite);
}

.footer-bottom {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
`;