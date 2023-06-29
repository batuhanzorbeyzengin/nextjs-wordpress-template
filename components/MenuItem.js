'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getMenuItem } from '@/service/getMenuItem';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

export function DropdownMenu({ item, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group inline-block">
            <Link href={item.url} className="font-semibold inline-flex items-center mr-1 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                {item.title}
            </Link>
            {children && 
                <button onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }} className="font-semibold inline-flex items-center">
                    {isOpen ? <FaCaretUp className='text-teal-200' /> : <FaCaretDown className='text-teal-200' />}
                </button>
            }
            <div className={`absolute left-0 z-10 mt-1 w-56 rounded-md shadow-lg overflow-hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="py-1 bg-white text-sm font-medium text-gray-900">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function MenuItem() {
    const [menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        const fetchMenuItem = async () => {
            const item = await getMenuItem();
            setMenuItem(item);
        }

        fetchMenuItem();
    }, []);

    console.log("MenuItem::", menuItem);

    let mainItems = menuItem.filter(item => item.menu_item_parent === "0");
    let subItems = menuItem.filter(item => item.menu_item_parent !== "0");

    return mainItems.map(mainItem => {
        let relatedSubItems = subItems.filter(subItem => subItem.menu_item_parent === mainItem.ID.toString());

        return (
            <div className="relative group" key={mainItem.ID}>
                {relatedSubItems.length > 0 ? 
                    <DropdownMenu item={mainItem}>
                        {relatedSubItems.map(subItem => (
                            <Link href={subItem.url} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" key={subItem.ID}>
                                {subItem.title}
                            </Link>
                        ))}
                    </DropdownMenu>
                    :
                    <Link href={mainItem.url} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        {mainItem.title}
                    </Link>
                }
            </div>
        )
    })
}
