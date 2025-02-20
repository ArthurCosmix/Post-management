import app from './app.js';
import { PORT } from './config/env-variable.js';
import dataSource from './config/data-source.js';

(async () => {
    try{
        await dataSource.initialize()
        .then(() => {
            if(dataSource.isInitialized){
                console.log('Database is connected');
                app.listen(PORT, () => {
                    console.log(`Server is running on port ${PORT}`);
                })
            }
        })
    }catch(error){
        console.error(error);
        process.exit(1);
    }

})()
