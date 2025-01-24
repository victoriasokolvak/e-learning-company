import { useState } from 'react';
import styles from './TalkToUsSection.module.scss';

export const TalkToUsSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className={styles.section}>
      <div  className={styles.container}>
        <h1 className={styles.title}>
          Talk To Us About Your Project
        </h1>
        <h2 className={styles.subtitle}>
          We will never send spam or add you to a mailing list
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your Name"
            className={styles.input}
          />

          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your Email Address"
            className={styles.input}
          />

          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your Message"
            className={styles.textarea}
          ></textarea>

          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </section>
  );
};
