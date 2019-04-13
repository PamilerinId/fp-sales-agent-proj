"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../_services/auth.service");
var notification_service_1 = require("../_services/notification.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, notifyBar) {
        this.router = router;
        this.authService = authService;
        this.notifyBar = notifyBar;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // this.notifyBar.infoNotify('Welcome back!!', null);
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }).then(function () {
            // this.notifyBar.errorNotify('You are not logged in', null);
        });
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            notification_service_1.NotificationService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQW1HO0FBRW5HLDBEQUF3RDtBQUN4RCwwRUFBd0U7QUFPeEU7SUFDRSxtQkFDVSxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsU0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQXFCO0lBQ3BDLENBQUM7SUFHTCwrQkFBVyxHQUFYLFVBQWEsS0FBNkIsRUFBRSxLQUEwQjtRQUNwRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RELElBQUksV0FBVyxFQUFFO1lBQ2YscURBQXFEO1lBQ25ELDRCQUE0QjtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0UsOERBQThEO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUUsNkRBQTZEO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBcEJVLFNBQVM7UUFIckIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR2tCLGVBQU07WUFDRCwwQkFBVztZQUNiLDBDQUFtQjtPQUo3QixTQUFTLENBcUJyQjtJQUFELGdCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vX3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IgKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZnlCYXI6IE5vdGlmaWNhdGlvblNlcnZpY2VcbiAgKSB7IH1cblxuXG4gIGNhbkFjdGl2YXRlKCByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXJWYWx1ZTtcbiAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgIC8vIHRoaXMubm90aWZ5QmFyLmluZm9Ob3RpZnkoJ1dlbGNvbWUgYmFjayEhJywgbnVsbCk7XG4gICAgICAgIC8vIGF1dGhvcmlzZWQgc28gcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgICAgIC8vIG5vdCBsb2dnZWQgaW4gc28gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSB3aXRoIHRoZSByZXR1cm4gdXJsXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSwgeyBxdWVyeVBhcmFtczogeyByZXR1cm5Vcmw6IHN0YXRlLnVybCB9fSkudGhlbigoKSA9PiB7XG4gICAgICAvLyB0aGlzLm5vdGlmeUJhci5lcnJvck5vdGlmeSgnWW91IGFyZSBub3QgbG9nZ2VkIGluJywgbnVsbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=