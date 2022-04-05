const dockerRequest = (command) => {
  sendRequest(`docker exec -it c1989f032ee54b9391e51adfee4d153551dabf1fe6e9eeec2c3f7ed3160d37fb -c "../app/sapio-cli "${command}"`)
}
const sendRequest = (command) => {
  exec(command, function(err, stdout, stderr) {
    if (err) {
      console.error(err)
    }
    console.log(stdout);
    console.error(stderr)
  });

}