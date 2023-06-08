import styled from 'styled-components';

const footer = () => {
    return(
        <FooterContainer className="main-footer">
    <div className="main-footer">
        <div className="footer-middle">
        <div className="container">
            <div className="footer-bottom">
                <p className="text-center">
                </p>
            </div>
        </div>
        </div>
    </div>
    </FooterContainer>
    );
}

export default footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 0.5rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
`;