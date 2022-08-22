import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';
import * as BsIcons from 'react-icons/bs';



export const SidebarData = [
    
  {
    title: 'Dashboard' ,
    path: '/',
    icon: <FcIcons.FcPieChart />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Relatorios',
    path: '#',
    icon: <FcIcons.FcBarChart />,
    iconClosed: <FcIcons.FcExpand />,
    iconOpened: <FcIcons.FcCollapse />,

    subNav: [
     
      {
        title: 'Double PC On',
        path: '/list/relatorios',
        icon: <FcIcons.FcComboChart />,
        cName: 'sub-nav'
      },
      {
        title: 'Double mês',
        path: '/list/entry-balance',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Crash',
        path: '#',
        icon: <FcIcons.FcBullish />
      },
      {
        title: 'Branco',
        path: '#',
        icon: <FcIcons.FcBullish />
      }
    ]
  },
  {
    title: 'Estrátegias',
    path: '/Estrategias',
    icon: <FcIcons.FcMoneyTransfer />
  },
  {
    title: 'Promoções',
    path: '/team',
    icon: <FcIcons.FcAdvertising />
  },
  {
    title: 'Grupos de sinal',
    path: '#',
    icon: <FcIcons.FcReddit  style={{ color: '#6495ed'  }} />,
    iconClosed: <FcIcons.FcExpand />,
    iconOpened: <FcIcons.FcCollapse />,

    subNav: [
      {
        title: 'Double grátis',
        path: '/Double',
        href:"https://wa.me/message/RXVMXHTP347HC1",
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Crash grátis',
        path: '/messages/message2',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Branco grátis',
        path: '/messages/message2',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Double pago',
        path: '/messages/message2',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      },
      {
        title: 'Crash pago',
        path: '/messages/message2',
        icon: <BsIcons.BsTelegram  style={{ color: '#6495ed'  }} />
      }
    ]
  },
  {
    title: 'Suporte',
    path: '/support',
    href: 'https://wa.me/message/RXVMXHTP347HC1',
    icon: <FcIcons.FcAbout />
  }

];