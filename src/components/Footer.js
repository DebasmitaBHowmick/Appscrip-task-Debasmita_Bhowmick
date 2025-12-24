import { Instagram, Linkedin } from "lucide-react";
import styles from "@/styles/footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top section */}
      <div className={styles.footerTop}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>

          <div className={styles.newsletterForm}>
            <input
              type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.contact}>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currency}>
            <h4>CURRENCY</h4>
            <p>
              🇺🇸 <strong>USD</strong>
            </p>
            <span>
              Transactions will be completed in Euros and a currency
              reference is available on hover.
            </span>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom section */}
      <div className={styles.footerBottom}>
        <div className={styles.footerCol}>
          <h4>mettä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <Instagram />
            <Linkedin />
          </div>

          <h4 className={styles.acceptsTitle}>mettä muse ACCEPTS</h4>
          <div className={styles.payments}>
            <span>GPay</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>AMEX</span>
            <span>Apple Pay</span>
            <span>O Pay</span>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer