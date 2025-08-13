"use strict";
let arrUser = [];
let arrPost = [];
class User {
    constructor(id, posts, followers) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }
    createPost(content) {
        let post = new Post(1, [], [], this.id, content);
        this.posts.push(post);
    }
    comment(postId, commentContent) {
        var _a;
        let objCmt = new UserComment(Math.random(), this.id, commentContent, []);
        let index = arrPost.findIndex(el => el.id === postId);
        if (index !== -1) {
            (_a = arrPost[index]) === null || _a === void 0 ? void 0 : _a.comments.push(objCmt);
        }
        else {
            console.log("Khong tim thay bai dang co id: ", postId);
        }
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(postId) {
        var _a;
        let objUser = new User(this.id, this.posts, this.followers);
        let index = arrPost.findIndex(el => el.id === postId);
        if (index !== -1) {
            (_a = arrPost[index]) === null || _a === void 0 ? void 0 : _a.likes.push(objUser);
        }
        else {
            console.log("Khong tim thay bai dang co id: ", postId);
        }
    }
    viewFeed() {
        this.followers.forEach(el => {
            el.posts.forEach(post => console.log(post));
        });
    }
}
class Post {
    constructor(id, likes, cmt, userId, content) {
        this.id = id;
        this.likes = likes;
        this.comments = cmt;
        this.userID = userId;
        this.content = content;
    }
    addLike(iserId) {
        let objUser = arrUser.find(el => el.id === iserId);
        this.likes.push(objUser);
    }
    addCmt(cmt) {
        this.comments.push(cmt);
    }
}
class UserComment {
    constructor(id, userId, content, replies) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
