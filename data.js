//new message
const post = [
    {
        title:'first One',
        body:'this is post one'
    },
    {
        title:'second One',
        body:'this is second post'
    }
]

function getPost(){
    // createPost(inp);
    setTimeout(()=>{
        let out = '';
        post.forEach((item,i)=>{
            out +=`<li>${item.title}</li>`
        })
        document.body.innerHTML = out;
    },4000);
}

function createPost(inp,getPost){
    setTimeout(()=>{
        post.push(inp);
        getPost()
    },2000)
}

// getPost();
// createPost({
//          title:"next",
//         body:"tjis is last"
//     });
createPost({
    title:"next",
    body:"tjis is last"
},getPost)
/////PROMISES***************************************////
// function getPost(){
//     setTimeout(()=>{
//         let out = '';
//         post.forEach((item,i)=>{
//             out +=`<li>${item.title}</li>`
//         })
//         document.body.innerHTML = out;
//     },1000);
// }

// function createPost(inp){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         post.push(inp);
//        const errorresp = false;
//         if(!errorresp){
//             resolve();
//         }
//         else{
//             reject('Error:Something went wrong');
//         }
       
//     },2000)
// })
// }
// createPost({title:"post 3",body:"thus is post 3"})
// .then(getPost)
// .catch(err => console.log(err))

// const promise1 = 10;

// const promise2 = new Promise((response,reject)=>{
//     setTimeout(response,2000,"HI ALL")
// })
// const promise3 = Promise.resolve('HELLO PROMISE3');

// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values)).catch(err=>console.log(err))