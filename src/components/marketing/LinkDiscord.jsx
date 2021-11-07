import config  from '../../config/config';

function LinkDiscord({children}) {
    return (
        <a href={config.discordURL} title="Discord"
            className="icon" target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default LinkDiscord;
