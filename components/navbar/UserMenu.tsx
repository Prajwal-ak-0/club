"use client"

import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

const navitems = [
    {
        label: 'About Us',
        onClick: () => {
            console.log('About Us');
        },
    },
    {
        label: 'Resources',
        onClick: () => {
            console.log('Resources');
        },
    },
    {
        label: 'What\'s on',
        onClick: () => {
            console.log('What\'s on');
        },
    },
    {
        label: 'Support',
        onClick: () => {
            console.log('Support');
        },
    }
];


const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className=''>
            <ul className='flex justify-between'>
                {
                    navitems.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                label={item.label}
                                onClick={item.onClick}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default UserMenu;