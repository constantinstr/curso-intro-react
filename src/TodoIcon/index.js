import React from "react";
import './TodoIcon.css';
// import { FiArrowDownCircle } from'react-icons/fi';
import {FaCheck as CheckSVG} from "react-icons/fa";
import {RiDeleteBinLine as DeleteSVG} from "react-icons/ri";
// import { ReactComponent as CheckSVG} from './check.svg';
// import { ReactComponent as DeleteSVG} from './delete.svg';
// import { BsCheckLg as CheckSVG } from 'react-icons/BsCheckLg';
// import { TiDeleteOutline as DeleteSVG } from 'react-icons/TiDeleteOutline';

const iconTypes ={
    "check": color => (
 <CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>
    ),
    "delete": color => (
<DeleteSVG className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
};

function TodoIcon({type, color, onClick}){
    return(
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
        {iconTypes[type](color)}
        </span>
    );
}
export {TodoIcon};