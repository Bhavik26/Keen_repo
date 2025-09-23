import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="team-blog iq-pall-20 text-center">
                <div className="text-center">
                    <img src={ props.media } className="img-fluid" alt="#" />
                </div>
                { props.children }
            </div>

        </>
    );
};

export default Index;