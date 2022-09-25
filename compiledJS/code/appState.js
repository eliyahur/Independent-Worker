var AppState = /** @class */ (function () {
    function AppState() {
    }
    AppState.getAppState = function () {
        if (!AppState.appStateInstance) {
            AppState.appStateInstance = new AppState;
        }
        return AppState.appStateInstance;
    };
    AppState.prototype.setProject = function (project) {
        this.project = project;
    };
    AppState.prototype.getProject = function () {
        return this.project;
    };
    AppState.prototype.getWorkSession = function () {
        return this.workSession;
    };
    return AppState;
}());
export { AppState };
//# sourceMappingURL=appState.js.map