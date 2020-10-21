const { db, Users, Orders } = require("./db");

const user1 = new Users({ email: 'newEmail@test.com', age: 20 });

(async () => {
    //const response = await user1.save();
    //console.log('after saving:', response);
    //
    //const response2 = await Users.findOne({email: user1.email});
    //console.log('after find:', response2);
    //
    //const response3 = await Users.findOne({email: 'some-random@gmail.com'});
    //console.log('after find non-existent:', response3);

    //const response31 = await Users.create({email: 'some-random2@gmail.com', gender: 's'});
    //console.log(response31);

    //const response4 = await Users.create({age: 30});
    //console.log(response4);

    //const resp5 = await Users.updateOne({ email: user1.email }, { age: 31 });
    //console.log(resp5);

    console.log(await Users.find({ age: { $gt: 21 } }));
})();
