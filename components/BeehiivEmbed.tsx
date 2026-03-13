import React, { useEffect } from 'react';

const BeehiivEmbed: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://subscribe-forms.beehiiv.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center w-full">
            <iframe
                src="https://subscribe-forms.beehiiv.com/d65458a5-fade-47af-9645-685a6b116d4e"
                className="beehiiv-embed"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{
                    width: '863px',
                    height: '339px',
                    margin: 0,
                    borderRadius: '0px',
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 #0000',
                    maxWidth: '100%'
                }}
            ></iframe>
        </div>
    );
};

export default BeehiivEmbed;
