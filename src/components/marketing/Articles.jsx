import Article from './Article';

function Articles() {
    return (
        <div className="articles">
            <h1 className="title text-center">Articles</h1>
            <div className="article-list">
                <Article
                    title="SpaceWalker Weekly Recap #2"
                    description="Our first official meme contest was launched in our Discord. Our community is so creative and came up with amazing..."
                    image="./images/article_3.jpg"
                    url="https://medium.com/@SpaceWalkerNFT/spacewalker-weekly-recap-2-bb218edbaf10"
                />
                <Article
                    title="SpaceWalker Weekly Recap #1"
                    description="This was a massive week for the SpaceWalker project! In case you are new or missed things, here’s a quick recap..."
                    image="./images/article_2.jpg"
                    url="https://medium.com/@SpaceWalkerNFT/spacewalker-weekly-recap-1-bd6c2e228f6d"
                />
                <Article
                    title="Journey to the SpaceWalker NFT collection"
                    description="Creating SpaceWalker has been a joy from the very beginning. It has been an immense amount of work, but a joy nonetheless..."
                    image="./images/article_1.jpg"
                    url="https://medium.com/@SpaceWalkerNFT/journey-to-the-spacewalker-nft-collection-89bdd3c25e50"
                />
            </div>
        </div>
    );
}

export default Articles;
