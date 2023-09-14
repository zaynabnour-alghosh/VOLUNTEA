import React from 'react';
import {GoHome} from 'react-icons/go';
import {BiTask,BiMenu,BiChat,BiSearch} from 'react-icons/bi';
import {BsPerson,BsPeople,BsFillLockFill,BsCheck2Circle,BsInstagram, BsWhatsapp} from 'react-icons/bs';
import {MdEmail,MdOutlineNotificationsNone,MdLocationPin, MdKeyboardDoubleArrowRight,MdOutlineEmojiEmotions} from 'react-icons/md';
import {CiLogout} from 'react-icons/ci';
import{AiFillEyeInvisible,AiFillEye,AiOutlineLinkedin,AiOutlineSend} from 'react-icons/ai';
import {FaKey} from 'react-icons/fa';
import {FaFacebookSquare,FaPhone,FaBars} from 'react-icons/fa';

const icons = {
    home: <GoHome />,
    task: <BiTask />,
    people:<BsPeople />,
    chat:<BiChat/>,
    notification:<MdOutlineNotificationsNone/>,
    stream:<BiMenu/>,
    profile:<BsPerson/>,
    logout:<CiLogout/>,
    visible:<AiFillEyeInvisible/>,
    invisible:<AiFillEye/>,
    email:<MdEmail />,
    lock:<BsFillLockFill/>,
    key:<FaKey/>,
    check:<BsCheck2Circle/>,
    location:<MdLocationPin/>,
    phone:<FaPhone/>,
    fb:<FaFacebookSquare/>,
    insta:<BsInstagram/>,
    linkedin:<AiOutlineLinkedin/>,
    whats:<BsWhatsapp/>,
    menu:<FaBars/>,
    arrow:<MdKeyboardDoubleArrowRight/>,
    search:<BiSearch/>,
    send:<AiOutlineSend/>,
    emoji:<MdOutlineEmojiEmotions fill={'#FFA500'}/>

  };
  
export {icons};
