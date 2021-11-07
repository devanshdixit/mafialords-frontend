import Anchor from '../common/Anchor';

function About() {
    return (
        <div id="about" className="about">
            <div className="content-spacer"></div>
            <div className="cols">
                <div className="image">
                    <img src="./images/jaybee.jpg" alt=""/>
                </div>
                <div className="col">
                    <h3>THE ADVENTURES OF SPACEWALKER JONES</h3>
                    <p className="readable-text">
                        SpaceWalker is a space adventure-themed generative NFT art collection
                        by Los Angeles-based artist and illustrator Josh Seth Blake
                        aka <Anchor href="https://www.instagram.com/jaybee_draws/">@jaybee_draws</Anchor>.
                        Each SpaceWalker portrait in the collection contains
                        a unique variety of armor, actions, colors, and background elements
                        which all make for an epic intergalactic adventure for our unsung hero, SpaceWalker Jones.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
