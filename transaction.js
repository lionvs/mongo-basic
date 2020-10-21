const { db, Users, Orders } = require("./db");

const user1 = new Users({ email: 'testemail@test.com', age: 20 });
const user2 = new Users({ email: 'testemail22@test.com', age: 20 });
const user3 = new Users({ email: 'testemailr2@me.com', age: 20 });

(async () => {

    const session = await db.startSession({causalConsistency:false});
    await session.withTransaction(async () => {
        await user1.save({ session });
        await user2.save({ session });
        await user3.save({ session });
    });
    
    db.close();
})();