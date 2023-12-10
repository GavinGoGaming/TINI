console.log("[TINI] TryItNodeInjector by GavinGoGaming is ready for use!");
async function shell(str) {
	console.log();
	console.log("[TINI] Received ShellRequest");
	const util = require('util');
	const exec = util.promisify(require('child_process').exec);
  	const { stdout, stderr } = await exec(str);
	console.log();
  	return [stdout, stderr];
}
async function node(nodecontent) {
	console.log();
	console.log("[TINI] Received NodeRequest");
	const fs = require('fs');
	const rng = Math.floor(Math.random()*99999);
	const fn = 'test-'+rng+'.js';
	await fs.writeFileSync(fn, nodecontent);
	console.log("[TINI] Sending NodeShell Request");
	const util = require('util');
	const exec = util.promisify(require('child_process').exec);
  	const { stdout, stderr } = await exec(`node ${fn}`);
	console.log();
  	return [stdout, stderr];
}
