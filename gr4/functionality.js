var Rules = function() {

    addedFriend = false;


    this.addedNewFriend = function() {
        addedFriend = true;
    }

    this.noNewFriend = function() {
        addedFriend = false;
    }


}