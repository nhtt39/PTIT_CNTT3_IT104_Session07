"use strict";
class Account1 {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account1 {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === 'active') {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
class adminAcc extends Account1 {
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
    }
    banUser(user) {
        user.status = 'banned';
        console.log(`Tài khoản ${user.userName} đã bị cấm`);
    }
}
const user1 = new userAcc("001", "user1", "pass123", "user", "active");
const user2 = new userAcc("002", "user2", "pass456", "user", "active");
const admin = new adminAcc("003", "admin1", "adminpass", "admin");
console.log("Kiểm tra user1 (active):");
user1.login();
console.log("Trạng thái đăng nhập user1:", user1.isLogin);
user1.logout();
console.log("Trạng thái đăng nhập user1 sau logout:", user1.isLogin);
console.log("\nKiểm tra user2 trước khi bị cấm:");
user2.login();
console.log("Trạng thái user2:", user2.status);
admin.banUser(user2);
console.log("\nKiểm tra user2 sau khi bị cấm:");
user2.login();
console.log("Trạng thái user2:", user2.status);
