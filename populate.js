const { db, Users, Orders } = require("./db");

const user1 = new Users({ email: 'someNewEmmai2l@test.com', age: 20 });

(async () => {
    console.log(await user1.save());
    
    const order1 = new Orders({ items: ['firstItem', 'secondItem'], user: user1._id });
    console.log(await order1.save());

    console.log(
        await Orders
            .findOne({ _id: order1._id })
            //.populate('user')
    )
})();