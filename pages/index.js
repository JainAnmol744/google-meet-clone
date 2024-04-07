import { useSocket } from "@/context/socket";
import { useEffect } from "react";

export default function Home() {

  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on('connected', () => {
        console.log(socket.id);
        setIsSocketConnected(true);
      });
      return () => {
        socket.off('connected'); // Cleanup the event listener when component unmounts
      };
    }
  }, [socket]);


  return (
    <h1>hello world</h1>
  );
}
