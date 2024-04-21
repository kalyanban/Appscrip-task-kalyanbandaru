import { RxHamburgerMenu } from "react-icons/rx"
import { SiMaterialdesign } from "react-icons/si"
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { CgProfile } from "react-icons/cg";

import "./index.css"

const Header = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="navbar-left-container">
                    <RxHamburgerMenu size={25}/>
                    <SiMaterialdesign size={25} className="mat-design"/>
                </div>
                <h1 className="logo">LOGO</h1>
                <div className="navbar-right-container">
                    <CiSearch size={25}/>
                    <IoHeartOutline size={25}/>
                    <HiOutlineShoppingBag size={25}/>
                    <CgProfile size={25} className="profile-icon"/>
                    <select className="select">
                        <option className="options">Eng</option>
                        <option className="options">Tel</option>
                        <option className="options">Hin</option>
                    </select>
                </div>
            </div>
            <div className="tabs-container">
                <button type="button" className="nav-tab">SHOP</button>
                <button type="button" className="nav-tab">SKILLS</button>
                <button type="button" className="nav-tab">STORIES</button>
                <button type="button" className="nav-tab">ABOUT</button>
                <button type="button" className="nav-tab">CONTACT US</button>
            </div>
        </div>
    )
}
export default Header