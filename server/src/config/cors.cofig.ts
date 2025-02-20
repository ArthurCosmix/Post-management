import cors from "cors";

const corsOption = {
    origin : ['http://localhost:5174'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials : true
}

export default cors(corsOption)