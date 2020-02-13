function showPic(){
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'cat',
        clientId: 'YOUR_CLIENT_ID'
    });
    feed.run();
}
      