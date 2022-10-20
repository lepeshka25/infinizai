import {FaHome} from "react-icons/fa";
import {SiCounterstrike} from "react-icons/si";
import {
	AiFillLinkedin,
	AiFillShopping,
	AiOutlineContacts,
	AiOutlineInstagram,
	AiOutlineTeam
} from "react-icons/ai";
import {MdRestorePage} from "react-icons/md";
import {BsFacebook} from "react-icons/bs";

export const list = [{
	id: 1, title: 'home', path: '/', icons: FaHome
}, {
	id: 2, title: 'about', path: '/about', icons: SiCounterstrike
}, {
	id: 3, title: 'team', path: '/team', icons: AiOutlineTeam,
}, {
	id: 4, title: 'shop', path: '/shop', icons: AiFillShopping,
}, {
	id: 5, title: 'pages', path: '/pages', icons: MdRestorePage,
},]

export const contact_us = {
	title: 'contact us', path: '/', icons: AiOutlineContacts,
}

export const social_network = [{
	id: 1, title: 'contact us', path: '/', icons: AiOutlineContacts,
}, {
	id: 2, title: 'Instagram', icons: AiOutlineInstagram,
}, {
	id: 3, title: 'Facebook', icons: BsFacebook,
}, {
	id: 4, title: 'Linkedin', icons: AiFillLinkedin,
},]