import { createContext, useContext, useEffect, useState } from 'react'
import {io} from 'socket.io-client'


const SocketContext = createContext(null);

export const useSocket = ()=>{
    const socket = useContext(SocketContext);
    return socket;
}

export const SocketProvider = (props)=>{

    const {children} = props;
    const [socket, setsocket] = useState(null)
    
    useEffect(()=>{
        const connection = io();
        console.log(connection)
        setsocket(connection)
    }, [])

    socket?.on('connect_error', async(err)=>{
        console.log('Err connecting Sockets', err);
        await fetch('/api/socket')
    })

    return(
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}