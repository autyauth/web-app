function send_Date() {
    postMessage(new Date().toString());
}
setInterval("send_Date()", 1000);