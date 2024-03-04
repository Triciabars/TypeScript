"use strict";
var validations;
(function (validations) {
    validations.validateText = (text) => {
        if (text.length < 3) {
            return true;
        }
        return false;
    };
    validations.validateDate = (date) => {
        return (isNaN(date.valueOf())) ? false : true;
    };
    console.log(validations.validateText('Fernando'));
})(validations || (validations = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWVzcGFjZXMvdmFsaWRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVUsV0FBVyxDQWNwQjtBQWRELFdBQVUsV0FBVztJQUNKLHdCQUFZLEdBQUcsQ0FBQyxJQUFZLEVBQVUsRUFBRTtRQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUMsQ0FBQTtJQUdZLHdCQUFZLEdBQUcsQ0FBQyxJQUFVLEVBQVUsRUFBRTtRQUMvQyxPQUFPLENBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0FBQ3RELENBQUMsRUFkUyxXQUFXLEtBQVgsV0FBVyxRQWNwQiJ9