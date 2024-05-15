class Likes {
    constructor() {
        this._videoLikes = 0;
    }

    get videoLikes() {
        // we can do anything here
        return this._videoLikes;
    }

    set videoLikes (videoLikes) {
        // we can do anything here
        this._videoLikes = 2*videoLikes;
    }
}

const like = new Likes();

like.videoLikes = 100;
console.log(like)