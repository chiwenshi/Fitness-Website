module.exports = function(app){
    var bloglist=[
        {id:1,title:"Roll With It",author:"betty",introduction:"Foam rollers hurt so good. ",content:"Foam rollers hurt so good. That three foot foam tube is one of the most commonly used, and beloved, pieces of fitness equipment around. So much so that sometimes people will devote entire gym sessions to purely foam rolling and working out some muscles stiffness."},
        {id:2,title:"Physical Therapy",author:"troy",introduction:"Living with transient pain is pretty inevitable",content:"Living with transient pain is pretty inevitable - especially as we age. Living passively with chronic pain is optional. We can and should all seek treatment for the things that nag us, because if we don’t, there is a likelihood that the injury will get worse over time! We should also consistently reinforce good movement patterns with strength training, but more on that later…"},
        {id:3,title:"Motivation",author:"bob",introduction:"Motivation is not to be counted upon for action.",content:"Motivation is not to be counted upon for action. For example, if we only worked out as often as “that” friend came over to watch the newest episode of Stranger Things, then we’d probably only be stepping foot into a gym once every couple of weeks. Motivation is fleeting, and worst of all, it generally comes and goes in waves. "},
        {id:4,title:"Food Choices",author:"jack",introduction:"The food you eat matters.",content:"The food you eat matters. This isn’t new information at all. Balancing your diet can be a huge step towards optimizing health, wellbeing, and fitness. Some good news about balancing your diet is that there are many delicious, wholesome, and nutritious foods available!"}
    ]
    var userlist = [
        {   username:'bob',
            password:'123',
            email:'123@qq.com',
            address:'medford',
            city:'boston',
            state:'MA',
            gender:'male',
            zipcode:02155,
            courses:[],
            diet:["fat loss"],
            blogs:[]
        }
    ]
    //GET Calls!
    app.get('/api/blog',getBlogs);

    app.get('/api/:blogid/detail',getBlogById);

    //PUT Calls!
    app.put('/api/:username/addBlog',addBlogByUser);
    /*API implementation*/
    function getBlogs(req,res){
        res.json(bloglist);
    }

    function getBlogById(req,res){
        var id = req.params.blogid;
        for(var i =0; i < bloglist.length; i++){
            if(id==bloglist[i].id){
                res.json(bloglist[i]);
            }
        }
    }
    function addBlogByUser(req,res){
        var username = req.params.username;
        var blog = req.body;
        blog.author=username;
        bloglist.unshift(blog);
        for(var i =0; i < userlist.length; i++){
            if(username===userlist[i].username){
                userlist[i].blogs.push(blog);
                res.json(blog);
            }
        }
    }
}
