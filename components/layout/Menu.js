import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

       
            <ul className="navigation">
                <li className="current">
                    <Link href="/">Home </Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li>                
                    </ul> */}
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Services</Link>
                    <ul className="sub-menu">
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="web-development">Web Development</Link></li>
                        <li><Link href="app-development">Mobile Application</Link></li>
                        <li><Link href="digital-marketing">Digital Marketing</Link></li>
                        <li><Link href="seo">SEO</Link></li>
                        <li><Link href="crm">CRM</Link></li>
                        <li><Link href="smm">Social Media Management</Link></li>
                        <li><Link href="graphicDesign">Graphic Design</Link></li>
                        <li><Link href="iot">Internet of Things</Link></li>
                        
                    </ul>
                </li>
                <li>
                    <Link href="career">Career</Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="testimonial">testimonial</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="team">Team</Link></li>                        
                    </ul> */}
                </li>
                <li >
                    <Link href="project">Our Porject</Link>
                    
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
