const mongoose = require('mongoose');
const User = require('./models/user');

//. DB - test //
//. COLLECTION - users //

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const u = new User({
//     name: 'Rishabh',
//     email: 'rishabh02@gmail.com',
//     credits: 4000
// })
// u.save()
//     .then(u =>{
//         console.log(u);
//     })
//     .catch(e =>{
//         console.log(e);
//     })

const seedUsers = [
    {
        name: 'Hardik',
        email: 'hardik80@gmail.com',
        credits: 10000
    },
    {
        name: 'Bablu',
        email: 'bablu99@yahoo.com',
        credits: 7000
    },
    {
        name: 'Yash',
        email: 'yashkm@gmail.com',
        credits: 4500
    },
    {
        name: 'Vaibhav',
        email: 'vaibhavg1@yahoo.com',
        credits: 8600
    },
    {
        name: 'Kunal',
        email: 'kunalp0@gmail.com',
        credits: 7500
    },
    {
        name: 'Abhishek',
        email: 'abhishek@yahoo.com',
        credits: 6900
    },
    {
        name: 'Karim',
        email: 'karim09@gmail.com',
        credits: 3000
    },
    {
        name: 'Naman',
        email: 'naman32@yahoo.com',
        credits: 2100
    },
    {
        name: 'Vicky',
        email: 'vicky87@gmail.com',
        credits: 5300
    }
]

User.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log(err))