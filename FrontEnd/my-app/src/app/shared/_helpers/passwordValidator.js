"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_ui_dataform_1 = require("nativescript-ui-dataform");
var PasswordValidator = /** @class */ (function (_super) {
    __extends(PasswordValidator, _super);
    function PasswordValidator() {
        var _this = _super.call(this) || this;
        _this.errorMessage = "Passwords are not the same";
        return _this;
    }
    PasswordValidator.prototype.checkPasswords = function (resetPassword) {
        // here we have the "passwords" group
        var pass = this.resetPassword.new_password1;
        var confirmPass = this.resetPassword.new_password2;
        return pass === confirmPass;
    };
    return PasswordValidator;
}(nativescript_ui_dataform_1.PropertyValidator));
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmRWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXNzd29yZFZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFFQUE2RDtBQUU3RDtJQUF1QyxxQ0FBaUI7SUFFcEQ7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsWUFBWSxHQUFHLDRCQUE0QixDQUFDOztJQUNyRCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLGFBQWtCO1FBQzdCLHFDQUFxQztRQUNyQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUVyRCxPQUFPLElBQUksS0FBSyxXQUFXLENBQUM7SUFDOUIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWRILENBQXVDLDRDQUFpQixHQWNyRDtBQWRVLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc2V0UGFzc3dvcmQgfSBmcm9tIFwifi9hcHAvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkVmFsaWRhdG9yIGV4dGVuZHMgUHJvcGVydHlWYWxpZGF0b3Ige1xyXG4gICAgcmVzZXRQYXNzd29yZDogUmVzZXRQYXNzd29yZDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlBhc3N3b3JkcyBhcmUgbm90IHRoZSBzYW1lXCI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjaGVja1Bhc3N3b3JkcyhyZXNldFBhc3N3b3JkOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBoZXJlIHdlIGhhdmUgdGhlIFwicGFzc3dvcmRzXCIgZ3JvdXBcclxuICAgICAgICBjb25zdCBwYXNzID0gdGhpcy5yZXNldFBhc3N3b3JkLm5ld19wYXNzd29yZDE7XHJcbiAgICAgICAgY29uc3QgY29uZmlybVBhc3MgPSB0aGlzLnJlc2V0UGFzc3dvcmQubmV3X3Bhc3N3b3JkMjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzO1xyXG4gICAgICB9XHJcbiAgfVxyXG4iXX0=