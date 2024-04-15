import { JustCallDialer } from "@justcall/justcall-dialer-sdk";
import { useEffect, useRef } from "react";

const App = () => {
  const renderRef = useRef(0);

  useEffect(() => {
    if (!renderRef.current) {
      const dialer = new JustCallDialer({
        dialerId: "justcall-dialer",
        onLogin: (data) => {
          console.log("Client receiving Logged in data: ", data);
        },
        onLogout: () => {
          console.log("Client receiving Logged out");
        },
      });

      dialer.on("call-ringing", (data) => {
        console.log("Client receiving call-ringing data: ", data);
      });

      dialer.on("call-answered", (data) => {
        console.log("Client receiving call-answered data: ", data);
      });

      dialer.on("call-ended", function (data) {
        console.log("Client receiving call-ended data: ", data);
      });
    }

    renderRef.current++;
  }, []);

  return (
    <div
      id="justcall-dialer"
      style={{ position: "fixed", bottom: "20px", right: "20px", height: 610 }}
    ></div>
  );
};

export default App;
