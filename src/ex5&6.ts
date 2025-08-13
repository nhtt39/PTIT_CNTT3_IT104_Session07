class Account1 {
    public id: string;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: string, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    login(): void {
    }

    logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}

class userAcc extends Account1 {
    public status: 'active' | 'banned';

    constructor(id: string, userName: string, password: string, role: string, status: 'active' | 'banned') {
        super(id, userName, password, role);
        this.status = status;
    }

    login(): void {
        if (this.status === 'active') {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

class adminAcc extends Account1 {
    constructor(id: string, userName: string, password: string, role: string) {
        super(id, userName, password, role);
    }

    banUser(user: userAcc): void {
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