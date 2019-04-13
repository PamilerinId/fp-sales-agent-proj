"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var auth_service_1 = require("../_services/auth.service");
var notification_service_1 = require("../_services/notification.service");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService, notifyBar) {
        this.authService = authService;
        this.notifyBar = notifyBar;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(operators_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                //   console.log('all looks good');
                // http response status code
                //   console.log(event);
                // shows success snackbar with green background
                _this.notifyBar.successNotify(event.statusText, 'Close');
            }
        }, function (error) {
            // http response status code
            if (error.status === 401) {
                // auto logout if 401 response returned from api
                // this.authService.logout();
                // location.reload(true);
                _this.notifyBar.errorNotify(error.message, 'Reloading');
            }
            // console.log('show error message');
            // show error snackbar with red background
        }));
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            notification_service_1.NotificationService])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBMEc7QUFFMUcsNENBQWlEO0FBR2pELDBEQUF3RDtBQUN4RCwwRUFBd0U7QUFJeEU7SUFDSSwwQkFBb0IsV0FBd0IsRUFDakMsU0FBOEI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7SUFBRyxDQUFDO0lBRTdDLG9DQUFTLEdBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCO1FBQXRELGlCQXNCQztRQXJCRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzFCLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxLQUFLLFlBQVksbUJBQVksRUFBRTtnQkFDbkMsbUNBQW1DO2dCQUNqQyw0QkFBNEI7Z0JBQzlCLHdCQUF3QjtnQkFDdEIsK0NBQStDO2dCQUMvQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3pEO1FBQ0gsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNMLDRCQUE0QjtZQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN2QixnREFBZ0Q7Z0JBQ2hELDZCQUE2QjtnQkFDN0IseUJBQXlCO2dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QscUNBQXFDO1lBQ3JDLDBDQUEwQztRQUM1QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ1YsQ0FBQztJQTFCUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FFd0IsMEJBQVc7WUFDdEIsMENBQW1CO09BRmhDLGdCQUFnQixDQTJCNUI7SUFBRCx1QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL19zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgbm90aWZ5QmFyOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7fVxuXG4gICAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdClcbiAgICAgICAgLnBpcGUodGFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdhbGwgbG9va3MgZ29vZCcpO1xuICAgICAgICAgICAgICAgICAgLy8gaHR0cCByZXNwb25zZSBzdGF0dXMgY29kZVxuICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgLy8gc2hvd3Mgc3VjY2VzcyBzbmFja2JhciB3aXRoIGdyZWVuIGJhY2tncm91bmRcbiAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5QmFyLnN1Y2Nlc3NOb3RpZnkoZXZlbnQuc3RhdHVzVGV4dCwgJ0Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgIC8vIGh0dHAgcmVzcG9uc2Ugc3RhdHVzIGNvZGVcbiAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGF1dG8gbG9nb3V0IGlmIDQwMSByZXNwb25zZSByZXR1cm5lZCBmcm9tIGFwaVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5QmFyLmVycm9yTm90aWZ5KGVycm9yLm1lc3NhZ2UsICdSZWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Nob3cgZXJyb3IgbWVzc2FnZScpO1xuICAgICAgICAgICAgICAgIC8vIHNob3cgZXJyb3Igc25hY2tiYXIgd2l0aCByZWQgYmFja2dyb3VuZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=