import React from 'react';
import Title from '../../components/home/title';

const HeaderLayout: React.FC = () => {
return (
    <header className='bg-base-200 p-4 text-primary'>
        <Title
            title='Weather APP'
            subtitle="I'm just too lazy to think of a good slug line."
        />
    </header>
);
};

export default HeaderLayout;
