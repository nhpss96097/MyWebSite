import styles from "@/styles/contact.module.css";

export default function ContactForm({}) {
  return (
    <div>
      <form action="" method="post" className={styles.form}>
        <h3>歡迎聯絡，我的Email：</h3>
        <p className={styles.myEmail}>nhpssoscar@gmail.com</p>
        <label htmlFor="email" className={styles.email}>
          Email
        </label>
        <input
          type="email"
          name="email"
          className={styles.emailInput}
          placeholder="Your email"
        />

        <label htmlFor="text" className={styles.contact}>
          Contact
        </label>
        <input
          type="text"
          name="contact"
          className={styles.contactInput}
          placeholder="contact"
        />
        <button className={styles.button}>送出訊息</button>
      </form>
    </div>
  );
}
