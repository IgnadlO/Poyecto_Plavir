-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2020 a las 16:01:44
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plavir`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prendas`
--

CREATE TABLE `prendas` (
  `propietario` text NOT NULL,
  `tipo` text NOT NULL,
  `colorp` text NOT NULL,
  `moda` int(11) NOT NULL,
  `temporada` int(11) NOT NULL,
  `evento` int(11) NOT NULL,
  `direccion` text DEFAULT NULL,
  `idPrenda` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prendas`
--

INSERT INTO `prendas` (`propietario`, `tipo`, `colorp`, `moda`, `temporada`, `evento`, `direccion`, `idPrenda`) VALUES
('Ignacio', 'pantalon', 'blanco', 0, 1, 1, 'Img/Ignacio/pantalon0.png', 21),
('Ignacio', 'remera', 'gris', 0, 1, 1, 'Img/Ignacio/remera0.png', 22),
('Ignacio', 'zapatillas', 'azul', 0, 1, 1, 'Img/Ignacio/zapatillas1.png', 24),
('Ignacio', 'remera', 'azul', 0, 1, 1, 'Img/Ignacio/remera2.png', 25),
('Ignacio', 'zapatillas', 'negro', 0, 3, 4, 'Img/Ignacio/zapatillas0.png', 27),
('Ignacio', 'zapatillas', 'rojo', 0, 3, 4, 'Img/Ignacio/zapatillas2.png', 28),
('Ignacio', 'pantalon', 'gris', 0, 1, 1, 'Img/Ignacio/pantalon4.png', 29),
('Ignacio', 'pantalon', 'gris', 0, 1, 4, 'Img/Ignacio/pantalon3.png', 30),
('Ignacio', 'pantalon', 'amarillo', 0, 1, 4, 'Img/Ignacio/pantalon5.png', 31),
('Ignacio', 'pantalon', 'negro', 0, 3, 4, 'Img/Ignacio/pantalon2.png', 32),
('Ignacio', 'pantalon', 'azul', 0, 3, 1, 'Img/Ignacio/pantalon1.png', 33),
('Ignacio', 'buzo', 'negro', 0, 2, 4, 'Img/Ignacio/buzo0.png', 34),
('Ignacio', 'remera', 'azul', 0, 3, 4, 'Img/Ignacio/remera1.png', 36),
('Ignacio', 'remera', 'blanco', 0, 3, 5, 'Img/Ignacio/remera3.png', 37),
('Ignacio', 'remera', 'azul', 0, 3, 5, 'Img/Ignacio/remera4.png', 38),
('Ignacio', 'buzo', 'negro', 0, 2, 4, 'Img/Ignacio/buzo1.png', 39),
('Ignacio', 'buzo', 'gris', 0, 2, 1, 'Img/Ignacio/buzo2.png', 40),
('Ignacio', 'zapatillas', 'negro', 0, 3, 5, 'Img/Ignacio/zapatillas3.png', 41),
('Ignacio', 'campera', 'gris', 0, 1, 1, 'Img/Ignacio/campera0.png', 42),
('Ignacio', 'campera', 'azul', 0, 1, 4, 'Img/Ignacio/campera1.png', 43),
('Ignacio', 'pantalon', 'negro', 0, 3, 3, 'Img/Ignacio/pantalon6.png', 44),
('Ignacio', 'abrigo', 'negro', 0, 2, 5, 'Img/Ignacio/abrigo0.png', 45),
('Ignacio', 'abrigo', 'negro', 0, 2, 4, 'Img/Ignacio/abrigo1.png', 46),
('Ignacio', 'pantalon', 'gris', 0, 3, 3, 'Img/Ignacio/pantalon7.png', 47),
('Ignacio', 'pantalon', 'gris', 0, 2, 1, 'Img/Ignacio/pantalon8.png', 48),
('Carlos', 'remera', 'gris', 0, 3, 4, 'Img/Carlos/remera0.png', 49),
('Carlos', 'pantalon', 'negro', 0, 3, 5, 'Img/Carlos/pantalon2.png', 51),
('Carlos', 'pantalon', 'amarillo', 0, 1, 5, 'Img/Carlos/pantalon5.png', 52),
('Carlos', 'pantalon', 'gris', 0, 1, 1, 'Img/Carlos/pantalon4.png', 54),
('Carlos', 'buzo', 'gris', 0, 2, 1, 'Img/Carlos/buzo0.png', 57),
('Carlos', 'buzo', 'blanco', 0, 2, 1, 'Img/Carlos/buzo1.png', 59),
('Ignacio', 'pantalon', 'gris', 0, 1, 1, 'Img/Ignacio/pantalon9.png', 60),
('Anibal', 'pantalon', 'amarillo', 0, 1, 1, 'Img/Anibal/pantalon0.png', 61);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `nombre` text NOT NULL,
  `email` text NOT NULL,
  `localidad` text DEFAULT NULL,
  `contra` text NOT NULL,
  `cumple` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `localidad`, `contra`, `cumple`) VALUES
(8, 'Ignacio', 'ignadela@gmail.com', NULL, '$2y$10$O39g7xEzHHN3mCMCq/pnZuDOAL0s6nTsFAXp9gkNalFpPvURg9fJq', NULL),
(19, 'Jorge', 'Jorgito@gmail.com', 'caba', '$2y$10$7BY5rjTRKVCPOm/XFkBnUuXfX2RIaCUBbgWUlicZau5sKA29eWRTm', '1980-05-01'),
(20, 'Pepe', 'Pepito@gmail.com', 'caba', '$2y$10$UmDquC3kW7eelgylR0Q23OxQ8J5.U8xT42u3Ftwlcs8dLYPgUkicC', '1980-10-09'),
(21, 'Anibal', 'Anibalito@yahoo.com', 'caba', '$2y$10$wXIwxA5/f69naYVFI/lh5eVgRsZoEyf.p1F/GfgScUD4oVGMXLb/C', '1980-08-01'),
(22, 'Sacerdote', 'papa@vaticano.com', 'caba', '$2y$10$a8LuqBLPatTbqHezR313Z.GSL6udX3hszOKl5WlpPoPcLfW3DvGDC', '1950-10-10'),
(24, 'Coco', 'coco@coca.com', NULL, '$2y$10$aXh9LiDS4OQ0OJ8I62PW1.qGr9R0z8XeZli5oM5un1NAxVeXFx0Ji', '1967-07-07');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `prendas`
--
ALTER TABLE `prendas`
  ADD PRIMARY KEY (`idPrenda`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`) USING HASH;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `prendas`
--
ALTER TABLE `prendas`
  MODIFY `idPrenda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
