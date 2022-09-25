var WorkSession = /** @class */ (function () {
    function WorkSession(projectObject) {
        this.projectObject = projectObject;
        this.initSessionBtn();
    }
    WorkSession.prototype.sessionSwitch = function () {
        if (this.startTime == null) {
            this.setStartTime();
            this.uiBtn.setAttribute('class', 'sessionOn');
            this.uiBtn.innerText = 'Finish Session';
        }
        else {
            this.setEndTime();
            this.sessionTime = this.endTime - this.startTime;
            this.setStartTime();
            this.uiBtn.innerText = 'Start Session';
            this.uiBtn.setAttribute('class', '');
            this.updateProjectObject();
        }
    };
    WorkSession.prototype.setStartTime = function () {
        if (this.startTime == null) {
            this.startTime = new Date().getTime();
        }
        else {
            this.startTime = null;
        }
    };
    WorkSession.prototype.setEndTime = function () {
        this.endTime = new Date().getTime();
    };
    WorkSession.prototype.initSessionBtn = function () {
        var _this = this;
        this.uiBtn = document.getElementById('sessionBtn');
        this.uiBtn.addEventListener('click', function () {
            _this.sessionSwitch();
        });
    };
    WorkSession.prototype.updateProjectObject = function () {
        var sessionData = {
            sessionTime: this.sessionTime
        };
        console.log(this.projectObject);
        this.projectObject.setWorkSession(sessionData);
    };
    return WorkSession;
}());
export { WorkSession };
//# sourceMappingURL=workSession.js.map