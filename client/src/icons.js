import React from 'react';
import {GoHome} from 'react-icons/go';
import {BiTask,BiMenu,BiChat,BiSearch,BiArrowBack,BiCalculator} from 'react-icons/bi';
import {BsPerson,BsPeople,BsFillLockFill,BsCheck2Circle,BsInstagram, BsWhatsapp} from 'react-icons/bs';
import {MdEmail,MdOutlineNotificationsNone,MdLocationPin, MdKeyboardDoubleArrowRight,MdOutlineEmojiEmotions} from 'react-icons/md';
import {CiLogout} from 'react-icons/ci';
import{AiFillEyeInvisible,AiFillEye,AiOutlineLinkedin,AiOutlineSend,AiOutlineCheck} from 'react-icons/ai';
import {FaKey} from 'react-icons/fa';
import {FaFacebookSquare,FaPhone,FaBars} from 'react-icons/fa';

const icons = {
  code:<BiCalculator size={'20'}/>,
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
  email:<MdEmail size={20}/>,
  lock:<BsFillLockFill/>,
  key:<FaKey/>,
  check:<BsCheck2Circle/>,
  location:<MdLocationPin size={20}/>,
  phone:<FaPhone size={20}/>,
  fb:<FaFacebookSquare size={'28'}/>,
  insta:<BsInstagram size={'28'}/>,
  linkedin:<AiOutlineLinkedin/>,
  whats:<BsWhatsapp size={'28'}/>,
  menu:<FaBars fill={'#34324E'}/>,
  arrow:<MdKeyboardDoubleArrowRight/>,
  search:<BiSearch/>,
  send:<AiOutlineSend/>,
  emoji:<MdOutlineEmojiEmotions fill={'#FFA500'}/>,
  tick:<AiOutlineCheck size={'28'}/>,
  back:<BiArrowBack size={'28'}/>

  };
  
export {icons};
