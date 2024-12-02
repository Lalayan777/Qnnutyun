import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";


function Footer() {
    return(
        <div className="footer">
            <div className="footerCont">
                <div className="leftFooter">
                    <h3>About Us___</h3>
                    <p>Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit.
                    Illum placeat, eum nemo quisquam
                    velit praesentium alias cumque
                    harum quia, nesciunt impedit a 
                    sequi exercitationem? Saepe mollitia 
                    et voluptatum neque est.</p>
                    <div className="icons">
                        <FaFacebookSquare className="iconka" />
                        <FaLinkedin className="iconka"  />
                        <AiFillTwitterSquare className="iconka"  />

                    </div>
                </div>
                <div className="rightFooter">
                     <div className="one">
                        <h2>Company___</h2>
                        <p>What we do</p>
                        <p>Our core values</p>
                        <p>Services</p>
                        <p>Testimonials</p>
                        <p>Recent news</p>
                        <p>Contact us</p>
                     </div>
                     <div className="one">
                        <h2>Useful___</h2>
                        <p>Support</p>
                        <p>FAQ</p>
                        <p>Live chat</p>
                        <p>Privacy Policy</p>
                        <p>Terms of use</p>
                        <p>Sitemap</p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Footer