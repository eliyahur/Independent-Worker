export function formatMili(millisec) {
    var seconds = (millisec / 1000).toFixed(0);
    var minutes = Math.floor(Number(seconds) / 60).toString();
    var hours = "";
    if (Number(minutes) > 59) {
        hours = (Math.floor(Number(minutes) / 60)).toString();
        hours = (Number(hours) >= 10) ? hours : ("0" + hours).toString();
        minutes = (Number(minutes) - (Number(hours) * 60)).toString();
        minutes = (Number(minutes) >= 10) ? minutes : ("0" + minutes).toString();
    }
    seconds = (Math.floor(Number(seconds) % 60)).toString();
    seconds = (Number(seconds) >= 10) ? seconds : ("0" + seconds).toString();
    if (hours != "") {
        return hours + ":" + minutes + ":" + seconds;
    }
    return minutes + ":" + seconds;
}
//# sourceMappingURL=formatMili.js.map