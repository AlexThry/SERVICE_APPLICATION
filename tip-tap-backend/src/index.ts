import { Hocuspocus } from "@hocuspocus/server";

// Configure the server …
const server = new Hocuspocus({
    port: 1234,
    address: '0.0.0.0'
});


server.listen();
