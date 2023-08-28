// About.tsx

// External Dependencies
import Image from 'next/image';
import Head from 'next/head';
import styles from './About.module.css'; // Import your styles here

const About: React.FC = () => {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>About</title>
        <meta name="description" content="Learn more about our platform and what we aim to achieve." />
        {/* Add other meta tags as needed */}
      </Head>

      <div className={`container mx-auto px-4 my-8 ${styles['about-section']}`}>
        {/* Title */}
        <h1 className={`text-4xl font-bold mb-4 ${styles['about-header']}`}>About</h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className={`text-2xl font-semibold mb-2 ${styles['about-header']}`}>Who We Are</h2>
          <p className={`text-lg mb-4 ${styles['about-text']}`}>
            We are a professional networking platform aimed to connect ...
          </p>
        </section>

        {/* Image */}
        <div className="mb-8">
          <Image 
            src="/path/to/about-image.jpg" 
            alt="About Us"
            width={500}
            height={300}
          />
        </div>

        {/* Mission */}
        <section className="mb-10">
          <h2 className={`text-2xl font-semibold mb-2 ${styles['about-header']}`}>Our Mission</h2>
          <p className={`text-lg mb-4 ${styles['about-text']}`}>
            Our mission is to help professionals around the globe ...
          </p>
        </section>

        {/* Vision */}
        <section className="mb-10">
          <h2 className={`text-2xl font-semibold mb-2 ${styles['about-header']}`}>Our Vision</h2>
          <p className={`text-lg mb-4 ${styles['about-text']}`}>
            Our vision is to create a world where ...
          </p>
        </section>

        {/* Values */}
        <section>
          <h2 className={`text-2xl font-semibold mb-2 ${styles['about-header']}`}>Our Values</h2>
          <ul className="list-disc list-inside">
            <li className={`text-lg mb-2 ${styles['about-text']}`}>Integrity</li>
            <li className={`text-lg mb-2 ${styles['about-text']}`}>Innovation</li>
            <li className={`text-lg mb-2 ${styles['about-text']}`}>Collaboration</li>
          </ul>
        </section>

      </div>
    </>
  );
};

export default About;
