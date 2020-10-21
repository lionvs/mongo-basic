const { db, Users, Orders } = require("./db");

(async () => {
    const resp = await Users.aggregate([
        //{ $match: { age: { $gt: 20 } } },
        { $group: { _id: "$age", total: { $sum: 1 } } }    
    ]);
    console.log(resp);
})();