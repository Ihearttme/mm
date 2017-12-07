let db = function(){
    'use strict';
    return {
        ini:function(){
            return new SQL.Database();
        },
        create:function(db,table,fields){
            return db.run(`CREATE TABLE ${table}(${fields});`);
        }
    }
}();

let table = function(){
    'use strict';
    return {
        insert:function(db,table,values){
            return db.run(`INSERT INTO ${table} VALUES (?,?,?,?)`, values);
        },
        view:function(db,sql){
            let stmt = db.prepare(sql);
            return stmt.getAsObject({$start:1, $end:1});
        },
    }
}();

