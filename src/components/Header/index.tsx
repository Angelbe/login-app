import React from "react";
import Image from "next/image";
import playtomicLogo from "styles/images/playtomicLogo.png"

const Header: React.FC = () => <div className="Header"><Image src={playtomicLogo} alt="back arrow" width={400} height={200} /></div>;

export default Header;
