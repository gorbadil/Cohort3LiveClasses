import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    console.log("Component Render Oldu");
    // window.addEventListener("resize", () => {});

    // return () => {
    //   console.log("Contact Bizi Terk Etti");
    //   window.removeEventListener("resize", () => {});
    // };
  }, []);

  return <div>Contact Component</div>;
}

export default Contact;

// useEffect(() => {}, []); => componentDidMount => Component Render olduğunda çalışır
// useEffect(() => {}, [activePage]); => componentDidUpdate => Component Render olduğunda ve activePage değiştiğinde çalışır
// useEffect(() => { return () => {} }, []); => componentWillUnmount => Component Silindiğinde çalışır
