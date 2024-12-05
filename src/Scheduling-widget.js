import React, { useEffect, useState } from "react";

const DisableOuterScroll = () => {
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Disable scrolling on the outer page
    document.body.style.overflow = "hidden";

    const handleResize = () => {
      // Dynamically adjust iframe height, subtracting 60px
      setIframeHeight(window.innerHeight + 56);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // Re-enable scrolling on the outer page when the component unmounts
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // Full viewport height
        overflow: "hidden", // Ensure no scrollbars on this container
      }}
    >
      <iframe
        src="https://form.jotform.com/243386465423158"
        frameBorder="0"
        style={{
          width: "100%",
          height: `${iframeHeight}px`, // Dynamically set iframe height
          border: "none",
        }}
        scrolling="yes" // Allow scrolling only inside the iframe
        title="JotForm"
      ></iframe>
    </div>
  );
};

export default DisableOuterScroll;
