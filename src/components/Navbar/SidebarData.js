import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

import { IoMdPersonAdd, IoIosPaper } from "react-icons/io";

import { GoDiffAdded } from "react-icons/go";
import { MdSell } from "react-icons/md";

export const SidebarData = [
  {
    title: "Início",
    path: "/inicio",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "Cadastros",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: "#",
    subNav: [
      {
        title: "Cadastro de produto",
        path: "/cadastroProduto",
        icon: <GoDiffAdded/>,
        cName: "sub-nav"
      },
      {
        title: "Cadastro de serviço",
        path: "/cadastroServico",
        icon: <IoIosPaper/>,
        cName: "sub-nav"
      },
      {
        title: "Cadastro de cliente",
        path: "/cadastroCliente",
        icon: <IoMdPersonAdd/>
      }
    ]
  },
  {
    title: "Venda",
    path: "/registroVenda",
    icon: <MdSell/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "Custos",
    path: "/lancamentoCusto",
    icon: <MdSell/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
];