import Anchor from '../common/Anchor';

function Article({description, image, title, url}) {
    return (
        <div className="article">
            <img src={image} alt=""/>
            <div className="text">
                <div className="title">
                    <Anchor href={url}>{title}</Anchor>
                </div>
                {description}
                <div className="read-more">
                    <Anchor href={url}>Read more...</Anchor>
                </div>
            </div>
        </div>
    );
}

export default Article;
