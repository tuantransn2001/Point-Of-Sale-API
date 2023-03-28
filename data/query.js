const selectAllCustomerFromUserList = `
    SELECT 
        mhk_database.usercustomerlist.id listId,
        mhk_database.customers.id as c_id,
        mhk_database.users.user_name as c_name,
        mhk_database.users.user_code as c_code,
        mhk_database.users.user_type as c_type,
        mhk_database.customers.customer_phone as c_phone,
        mhk_database.customers.customer_email as c_email,
        mhk_database.customers.customer_region as c_region,
        mhk_database.customers.customer_commune as c_commune,
        mhk_database.customers.customer_address as c_address,
        mhk_database.usercustomerlist.user_customer_list_note as user_customer_list_note,
        mhk_database.customers.staff_in_charge_note as staff_incharge_note,
        mhk_database.customers.tags as tags
    FROM mhk_database.usercustomerlist
    RIGHT JOIN mhk_database.users
    ON mhk_database.usercustomerlist.user_id = mhk_database.users.id AND mhk_database.users.user_type = "customer" 
    RIGHT JOIN mhk_database.customers
    ON mhk_database.usercustomerlist.customer_id = mhk_database.customers.id 
    WHERE mhk_database.usercustomerlist.id IS NOT NULL AND mhk_database.users.isDelete IS NULL
`;

const selectAllUser = `
    SELECT 
	    *
	FROM mhk_database.users
    WHERE mhk_database.users.isDelete IS NULL
`;

module.exports = { selectAllCustomerFromUserList, selectAllUser };
