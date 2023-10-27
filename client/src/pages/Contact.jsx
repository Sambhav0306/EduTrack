
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone-blue.svg";
import styles from '../styles/Contact.module.css'; 

const Contact = () => {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <div className={styles['contact-form']}>
          <h2>Contact Us</h2>
          <form>
            <div className={styles['form-group']}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Ex. John Stones" className={styles['small-input']} />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="phone">Phone number:</label>
              <input type="tel" id="phone" name="phone" placeholder="Ex. +91 123456789" className={styles['small-input']} />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" placeholder="Ex. London" className={styles['small-input']} />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" name="country" placeholder="Ex. United Kingdom" className={styles['small-input']} />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="remarks">Remarks:</label>
              <textarea id="remarks" name="remarks" placeholder="Write your remarks here..." className={styles['large-input']}></textarea>
            </div>
            <div className={styles['button-container']}>
              <button type="submit" className={styles['text-animation']}>Send</button>
              <button type="reset" className={styles['text-animation']}>Reset</button>
            </div>
          </form>
        </div>
        <div className={styles.divider}></div>
        <div className={styles['contact-info']}>
          <h2>Contact Information</h2>
          <div className={styles['contact-details']}>
            <div className={styles['contact-item']}>
              <img src={phoneIcon} alt="Phone" className={styles.phoneicon} />
              <span>Phone: +1234567890</span>
            </div>
            <div className={styles['contact-item']}>
              <img src={emailIcon} alt="Email" className={styles.emailicon} />
              <span>Email: contact@example.com</span>
            </div>
            <div className={styles.buttonContainer}>
        <button className={styles.button}>Click Me</button>
      </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
