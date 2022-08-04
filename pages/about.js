import Head from "next/head";

const About = () => {
    return ( 
        <>
        <Head>
            <title>Shot Quality Demo | About</title>
            <meta name="keywords" content="ninjas"/>
        </Head>
        <div>
            <h1>About</h1>
            <p>Tom Kotopoulos is a Full Stack Software Engineer II at Wayfair.</p>
            <p>Check out his Github page <a href="https://www.github.com/kotopoulos10">here.</a></p>
            <p>At Wayfair I have designed and developed <a href="https://www.wayfair.com/-c45974.html">Imersive Category Pages (ICP)</a>, which are viewed by millions of customers daily, and the backend services that power these pages.</p>
        </div>
        </>
     );
}
 
export default About;