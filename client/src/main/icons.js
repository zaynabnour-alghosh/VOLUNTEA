import React from 'react';
import {GoHome} from 'react-icons/go';
import {BiTask,BiMenu,BiChat} from 'react-icons/bi';
import {BsPerson,BsPeople} from 'react-icons/bs';
import {MdOutlineNotificationsNone} from 'react-icons/md';
import {CiLogout} from 'react-icons/ci';

const icons = {
    home: <GoHome />,
    task: <BiTask />,
    people:<BsPeople />,
    chat:<BiChat/>,
    notification:<MdOutlineNotificationsNone/>,
    stream:<BiMenu/>,
    profile:<BsPerson/>,
    logout:<CiLogout/>
  };
export {icons};
