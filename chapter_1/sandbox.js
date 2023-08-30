// object literals

let user = {
    name : "Cris",
    age : 20,
    email : "Cris@111gmail.com",
    address : "USA",
    blogs : ["Why u follow rules" , "Just do whatever u feel right"],

    login: function(){
        console.log("The user logged in");
    },
    logout: function(){
        console.log("The user logged out");
    },
    logBlogs: function(){
        // console.log(this.blogs);
        console.log("This user had written the following blogs:");
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
}

user.logBlogs();
console.log(this);