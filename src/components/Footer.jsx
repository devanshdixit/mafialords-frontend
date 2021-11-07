// import { Anchor } from 'app/components/common';
import IconDiscord from '../assets/icons/IconDiscord';
import IconTwitter from "../assets/icons/IconTwitter";
import LinkDiscord from './marketing/LinkDiscord';
import LinkTwitter from './marketing/LinkTwitter';

function Footer() {
    return (
        <div className="footer">
            <div className="social">
                <span className="social-link">
                    <LinkDiscord><IconDiscord/></LinkDiscord> <LinkDiscord>Discord</LinkDiscord>
                </span>
                <span className="social-link">
                    <LinkTwitter><IconTwitter/></LinkTwitter> <LinkTwitter>Twitter</LinkTwitter>
                </span>
            </div>
            {/* <div className="links">
                <Anchor href="https://opensea.io">OpenSea Collection</Anchor> 🪐 <Anchor href="https://etherscan.io">Smart Contract</Anchor>
            </div> */}
            <div className="content-spacer"></div>
            <div className="content-spacer"></div>
            <p className="copyright">
                &copy;2021 SpaceWalker NFT Collection designed by Josh Seth Blake
            </p>
        </div>
    );
}

export default Footer;
