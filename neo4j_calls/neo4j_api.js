let neo4j = require('neo4j-driver');
let { creds } = require("./../config/credentials");
let driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw));

exports.get_num_nodes = async function () {
    let session = driver.session();
    const num_nodes = await session.run('MATCH (n) RETURN n', {
    });
    session.close();
    console.log("RESULT", (!num_nodes ? 0 : num_nodes.records.length));
    return (!num_nodes ? 0 : num_nodes.records.length);
};



exports.create_user = async function (usernew) {
    let session = driver.session();
    let user = "No User Was Created";
    try {
        user = await session.run('MERGE (u:User {nombre: $nombre, codigo: $codigo, pass: $pass, cedula: $cedula, correo: $correo, fechaNacimiento: $fechaNacimiento, carrera: $carrera}) RETURN u', {
            nombre: usernew.nombre,
            codigo: usernew.codigo,
            pass: usernew.pass,
            cedula: usernew.cedula,
            correo: usernew.correo,
            fechaNacimiento: usernew.fechaNacimiento,
            carrera: usernew.carrera
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user.records[0].get(0).properties;
}

exports.update_user = async function (usernew) {
    let session = driver.session();
    let user = "No User Was Created";
    try {
        user = await session.run("MATCH (u:User {codigo: $codigo}) \
         SET u.pass = $pass, u.cedula = $cedula, u.correo = $correo, u.fechaNacimiento = $fechaNacimiento, u.carrera = $carrera \
         RETURN u", {
            nombre: usernew.nombre,
            codigo: usernew.codigo,
            pass: usernew.pass,
            cedula: usernew.cedula,
            correo: usernew.correo,
            fechaNacimiento: usernew.fechaNacimiento,
            carrera: usernew.carrera
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user;
}

exports.delete_user = async function (usernew) {
    let session = driver.session();
    let user = "No User Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo}) delete n", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user;
}


// Materiales
exports.create_material = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run('MERGE (u:Material {nombre: $nombre, codigo: $codigo, \
            fechaPublicacion: $fechaPublicacion, categoria: $categoria, autores: $autores, \
            formato: $formato, numejemplares: $numejemplares, disponibilidad: $disponibilidad}) RETURN u', {
            nombre: usernew.nombre,
            codigo: usernew.codigo,
            fechaPublicacion: usernew.fechaPublicacion,
            categoria: usernew.categoria,
            autores: usernew.autores,
            disponibilidad: usernew.disponibilidad,
            formato: usernew.formato,
            numejemplares: usernew.numejemplares
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user.records[0].get(0).properties;
}

exports.update_material = async function (usernew) {
    let session = driver.session();
    let user = "No User Was Created";
    try {
        user = await session.run("MATCH (u:Material {codigo: $codigo}) \
         SET u.nombre = $nombre, u.fechaPublicacion =  $fechaPublicacion, u.categoria = $categoria, u.autores = $autores, \
         u.formato = $formato, u.numejemplares = $numejemplares, u.disponibilidad = $disponibilidad \
         RETURN u", {
            nombre: usernew.nombre,
            codigo: usernew.codigo,
            fechaPublicacion: usernew.fechaPublicacion,
            categoria: usernew.categoria,
            autores: usernew.autores,
            disponibilidad: usernew.disponibilidad,
            formato: usernew.formato,
            numejemplares: usernew.numejemplares
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user;
}
exports.delete_material = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:Material {codigo: $codigo}) delete n", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user;
}


// Salas
exports.create_sala = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run('MERGE (u:Salas {nombre: $nombre, codigo: $codigo, \
            inventario: $inventario, numpersonas: $numpersonas }) RETURN u', {
            nombre: usernew.nombre,
            codigo: usernew.codigo,
            inventario: usernew.inventario,
            numpersonas: usernew.numpersonas
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user.records[0].get(0).properties;
}

exports.update_sala = async function (usernew) {
    let session = driver.session();
    let user = "No User Was Created";
    try {
        user = await session.run("MATCH (u:Salas {codigo: $codigo}) \
         SET u.nombre = $nombre, \
         u.inventario = $inventario, u.numpersonas = $numpersonas \
         RETURN u", {
            nombre: usernew.nombre,
            codigo: usernew.codigo,
            inventario: usernew.inventario,
            numpersonas: usernew.numpersonas
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user;
}
exports.delete_sala = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:Salas {codigo: $codigo}) delete n", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user;
}

exports.get_User_Code = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo}) return n", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get();
    }
    return user.records[0].get(0).properties;
}

exports.get_all_Materials = async function () {

    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:Material) return n", {
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get();
    }
    return user.records.map(x => x._fields[0].properties);
}

exports.create_Reserva = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo}),(m:Material { codigo: $codigoMaterial}) CREATE (n)-[r:BORROWED_THIS {fecha_prestamo: $fecha_prestamo, fecha_entrega: $fecha_entrega, multa: '1500'}]->(m) return r", {
            codigo: usernew.codigo,
            codigoMaterial: usernew.codigoMaterial,
            fecha_prestamo: usernew.fecha_prestamo,
            fecha_entrega: usernew.fecha_entrega,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user;
}


exports.get_all_Reservas = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo})-[r:BORROWED_THIS]->(m) return m", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user.records.map(x => x._fields[0].properties);
}


exports.delete_Reservas = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo})-[r:BORROWED_THIS]->() DELETE r", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user;
}

exports.get_all_Salas = async function () {

    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:Salas) return n", {
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get();
    }
    return user.records.map(x => x._fields[0].properties);
}


exports.create_Reserva_Sala = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo}),(m:Salas { codigo: $codigoSala}) CREATE (n)-[r:RESERVE_THIS {fecha_prestamo: $fecha_prestamo, fecha_entrega: $fecha_entrega, multa: '1500'}]->(m) return r", {
            codigo: usernew.codigo,
            codigoSala: usernew.codigoSala,
            fecha_prestamo: usernew.fecha_prestamo,
            fecha_entrega: usernew.fecha_entrega,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user;
}

exports.get_all_Reservas_Salas = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo})-[r:RESERVE_THIS]->(m) return m", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user.records.map(x => x._fields[0].properties);
}
exports.delete_Reservas_Salas = async function (usernew) {
    let session = driver.session();
    let user = "No Material Was Created";
    try {
        user = await session.run("MATCH (n:User {codigo: $codigo})-[r:RESERVE_THIS]->() DELETE r", {
            codigo: usernew.id,
        });
    }
    catch (err) {
        console.error(err);
        return user.records[0].get(0).properties;
    }
    return user;
}