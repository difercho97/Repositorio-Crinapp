var mysql = require('mysql');

var pool = mysql.createPool({
    host: "64.62.211.134",
    user: "equinapp_nick",
    password: "abejorro",
    database: "equinapp_equinapp",
});

// Get horses
exports.getHorses = function(callback) {
    var sql = "SELECT * FROM caballos";
    // get a connection from the pool
    pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback(true); return; }
        // make the query
        console.log('Realizo consulta de todos los caballos');
        connection.query(sql, function(err, results) {
            connection.release();
            if(err) { console.log(err); callback(true); return; }
            callback(false, results);
        });
    });
};

exports.getHorseById = function(id, callback) {
    var sql = "SELECT * FROM caballos c, razas r " +
                " WHERE registro_equino = " + id +
                " AND c.raza_id = r.id_raza";
    // get a connection from the pool
    pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback(true); return; }
        // make the query
        console.log('SOLO UN CABALLO!!!!');

        connection.query(sql, function(err, results) {
            connection.release();
            if(err) { console.log(err); callback(true); return; }
            callback(false, results);
        });
    });
};