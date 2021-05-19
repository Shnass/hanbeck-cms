'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const restartPM=function(){
	const { exec } = require("child_process");
	exec("pm2 restart frontend", (error, stdout, stderr) => {
	    if (error) {
	        strapi.log.debug(`error: ${error.message}`)
	        return;
	    }
	    if (stderr) {
	        strapi.log.debug(`stderr: ${stderr}`)
	        return;
	    }
        strapi.log.debug(`stdout: ${stdout}`)

	});
}


module.exports = {
	lifecycles: {
	    async afterUpdate(result, params, data) {
	    	restartPM()
	    },
	    async afterCreate(result, params, data) {
	    	restartPM()
	    },
	    async afterDelete(result, params, data) {
	    	restartPM()
	    },
   },
};
