import React from 'react';

const UserIdPage = ({params}: {params: {id: string}}) => {

    return (
        <div>
            {params.id}
        </div>
    );
};

export default UserIdPage;