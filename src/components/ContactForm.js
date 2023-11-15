import styles from "@/styles/contact.module.css";

export default function ContactForm({}) {
  function submitHandler() {
    const to = "nhpssoscar@gmail.com";
    const subject = "來自我的個人網站";

    const email = document.getElementById("emailText").value;
    const contact = document.getElementById("contactText").value;

    if (!email || !contact) {
      try {
        const tip = document.getElementsByTagName("span");
        tip[0].innerText = "請填寫 Email 或 Contact 內容！";
      } catch (error) {
        console.log(error);
      }

      return;
    }
    const body = encodeURIComponent(contact + "\n\n\n" + "From：" + email);
    const mailToLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    const mailToElement = document.createElement("a");
    mailToElement.href = mailToLink;
    mailToElement.click();
  }

  return (
    <div>
      <form
        action=""
        method="POST"
        className={styles.form}
        Enctype="text/plain"
      >
        <h3>歡迎聯絡，我的Email：</h3>
        <p className={styles.myEmail}>nhpssoscar@gmail.com</p>
        <span className={styles.span}></span>
        <label htmlFor="email" className={styles.email}>
          Email
        </label>
        <input
          id="emailText"
          type="email"
          name="email"
          className={styles.emailInput}
          placeholder="Your email"
          required
        />

        <label htmlFor="text" className={styles.contact}>
          Contact
        </label>
        <input
          id="contactText"
          type="text"
          name="contact"
          className={styles.contactInput}
          placeholder="contact"
          required
        />

        <button
          type="button"
          className={styles.button}
          onClick={submitHandler}
          alt="點擊開啟您的信箱軟體"
        >
          送出訊息
        </button>
      </form>
    </div>
  );
}
