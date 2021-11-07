import config  from '../../config/config';

function LinkTwitter({children}) {
    return (
        <a href={config.twitterURL} title="Twitter"
            className="icon" target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default LinkTwitter;
