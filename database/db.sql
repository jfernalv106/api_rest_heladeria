CREATE TABLE usuario
(
    rut varchar(20) NOT  NULL,
    nombre varchar(200) NOT  NULL,
    apellido_paterno varchar(200) NOT  NULL,
    apellido_materno varchar(200) NOT  NULL,
    direccion varchar(200) NOT  NULL,
    comuna varchar(200) NOT  NULL,
    region varchar(200) NOT  NULL,
    nacionalidad varchar(80) NOT  NULL,
    horas_semanales BIGINT NOT  NULL,
    email varchar(200) NOT  NULL,
    pass varchar(20) NOT  NULL,
    perfil varchar(20) NOT  NULL,
    telefono varchar(20)  NULL,
    fecha_nacimiento date NOT  NULL,
    sucursal bigint NOT  NULL,

    PRIMARY KEY (rut)
)
CREATE TABLE permisos(
    rut varchar(20) NOT  NULL,
    permiso varchar(20) NOT  NULL,
    PRIMARY KEY (rut, permiso)
)

CREATE TABLE sucursal
(
    id bigint NOT  NULL,
    nombre varchar(200) NOT  NULL,
    direccion varchar(200) NOT  NULL,
    telefono varchar(20) NOT  NULL,
    email varchar(200) NOT  NULL,
    comuna varchar(200) NOT  NULL,
    ciudad varchar(200) NOT  NULL,
    region varchar(200) NOT  NULL,
    pais varchar(200) NOT  NULL,
    latitud varchar(200) NOT  NULL,
    longitud varchar(200) NOT  NULL,

    PRIMARY KEY (id)
)
CREATE TABLE producto
(
    id bigint NOT  NULL,
    nombre varchar(200) NOT  NULL,
    descripcion varchar(200) NOT  NULL,
    precio bigint NOT  NULL,
    stock bigint NOT  NULL,
    imagen varchar(200) NOT  NULL,
    sucursal bigint NOT  NULL,
    volumen DOUBLE PRECISION   NULL,
    peso DOUBLE PRECISION   NULL,

    PRIMARY KEY (id)
)
CREATE TABLE pedido
(
    id bigint NOT  NULL,
    rut_usuario varchar(20) NOT  NULL,
    fecha_pedido date NOT  NULL,
    fecha_entrega date NOT  NULL,
    estado varchar(20) NOT  NULL,
    sucursal bigint NOT  NULL,
    total varchar(20) NOT  NULL,
    descripcion varchar(200)   NULL,
    PRIMARY KEY (id)
)
CREATE TABLE detalle_pedido
(
    id bigint NOT  NULL,
    pedido bigint NOT  NULL,
    producto bigint NOT  NULL,
    cantidad varchar(20) NOT  NULL,
    PRIMARY KEY (id)
)
CREATE TABLE venta (
    id bigint NOT  NULL,
    rut_usuario varchar(20) NOT  NULL,
    fecha_venta date NOT  NULL,
    fecha_entrega date NOT  NULL,
    estado varchar(20) NOT  NULL,
    sucursal bigint NOT  NULL,
    total bigint NOT  NULL,
    descuento bigint   NULL,
    descripcion varchar(200)   NULL,
    PRIMARY KEY (id)
)
CREATE TABLE detalle_venta (
    id bigint NOT  NULL,
    venta bigint NOT  NULL,
    producto bigint NOT  NULL,
    cantidad varchar(20) NOT  NULL,
    PRIMARY KEY (id)
)
CREATE TABLE asistencia(
    id bigint NOT  NULL,
    rut_usuario varchar(20) NOT  NULL,
    fecha date NOT  NULL,
    hora time NOT  NULL,
    sucursal bigint NOT  NULL,
    tipo varchar(20) NOT  NULL,
    PRIMARY KEY (id)
)
CREATE TABLE arqueos_caja(
    id bigint NOT  NULL,
    rut_usuario varchar(20) NOT  NULL,
    fecha date NOT  NULL,
    hora time NOT  NULL,
    sucursal bigint NOT  NULL,
    total_ventas bigint NOT  NULL,
    total_caja bigint NOT  NULL,
    PRIMARY KEY (id)
)

CREATE TABLE contrato(
    id bigint NOT  NULL,
    rut_usuario varchar(20) NOT  NULL,
    fecha date NOT  NULL,
    horas bigint NOT  NULL,
    sucursal bigint NOT  NULL,

    PRIMARY KEY (id)
)
CREATE TABLE adquision(
    id bigint NOT  NULL,
    rut_usuario varchar(20) NOT  NULL,
    fecha date NOT  NULL,
    sucursal bigint NOT  NULL,
    total bigint NOT  NULL,
    producto bigint NOT  NULL,

    PRIMARY KEY (id)
)
CREATE TABLE inventario(
    id bigint NOT  NULL,
    rut_usuario varchar(20) NOT  NULL,
    fecha date NOT  NULL,
    sucursal bigint NOT  NULL,
    nombre varchar(200) NOT  NULL,
    descripcion varchar(200) NOT  NULL,
    estado varchar(20) NOT  NULL,
    cantidad bigint NOT  NULL,
    avaluo bigint   NULL,


    PRIMARY KEY (id)
);

CREATE SEQUENCE seq_producto
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_pedido
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_venta
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_detalle_pedido
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_detalle_venta
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_asistencia   
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_arqueos_caja
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_contrato
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_adquision  
    INCREMENT 1
    START 1;
CREATE SEQUENCE seq_inventario
    INCREMENT 1
    START 1;

CREATE SEQUENCE seq_sucursal
    INCREMENT 1
    START 1;
