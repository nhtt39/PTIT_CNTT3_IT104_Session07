let arrUser: User[] = [];
let arrPost: Post[] = [];

class User{
    id: number;
    posts: Post[];
    followers: User[];

    constructor(id: number, posts: Post[], followers: User[] ) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }

    createPost(content: string) {
        let post = new Post(1, [], [], this.id, content);
        this.posts.push(post);
    }

    comment(postId: number, commentContent: string) {
        let objCmt = new UserComment(Math.random(), this.id, commentContent, []);
        
        let index = arrPost.findIndex(el => el.id === postId);
        if (index !== -1) {
            arrPost[index]?.comments.push(objCmt);
        } else {
            console.log("Khong tim thay bai dang co id: ", postId);
        }
    }

    follow(user: User) {
        this.followers.push(user);
    }

    likePost(postId: number) {
        let objUser = new User(this.id, this.posts, this.followers);
        let index = arrPost.findIndex(el => el.id === postId);
        if (index !== -1) {
            arrPost[index]?.likes.push(objUser);
        } else {
            console.log("Khong tim thay bai dang co id: ", postId);
        }
    }

    viewFeed() {
        this.followers.forEach(el => {
            el.posts.forEach(post => console.log(post));
        });
    }

}

class Post{
    id: number;
    likes: User[];
    comments: UserComment[];
    userID: number;
    content: string;

    constructor(id: number, likes: User[], cmt: UserComment[], userId: number, content: string) {
        this.id = id;
        this.likes = likes;
        this.comments = cmt;
        this.userID = userId;
        this.content = content;
    }

    addLike(iserId: number) {
        let objUser = arrUser.find(el => el.id === iserId);
        this.likes.push(objUser!);
    }
    addCmt(cmt: UserComment) {
        this.comments.push(cmt);
    }
}

class UserComment {
    id: number;
    userId: number;
    content: string;
    replies: UserComment[];

    constructor(id: number, userId: number, content: string, replies: UserComment[]) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }

    addReply(reply: UserComment) {
        this.replies.push(reply);
    }
}
