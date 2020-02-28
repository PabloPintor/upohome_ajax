-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2020 a las 01:25:27
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `upohome`
--
CREATE DATABASE IF NOT EXISTS `upohome` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `upohome`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquileres`
--

CREATE TABLE `alquileres` (
  `idAlquiler` int(9) NOT NULL,
  `dniCliente` varchar(9) NOT NULL,
  `idVivienda` int(11) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alquileres`
--

INSERT INTO `alquileres` (`idAlquiler`, `dniCliente`, `idVivienda`, `fechaInicio`, `fechaFin`) VALUES
(1, '12345678W', 1, '2020-02-12', '2020-04-22'),
(2, '98765432S', 2, '2020-02-26', '2020-02-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `idCita` int(10) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`idCita`, `dni`, `fecha`, `hora`, `descripcion`) VALUES
(1, '12345678W', '2020-02-12', '12:00:00', 'Cita sobre rotura de la ventana del dormitorio'),
(2, '12345678W', '2020-02-28', '21:00:00', 'Negociacion del precio del piso en alquiler');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `dniCliente` varchar(9) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `esPropietario` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`dniCliente`, `nombre`, `apellidos`, `telefono`, `domicilio`, `esPropietario`) VALUES
('12345678W', 'Pablo', 'Pintor Alvarez', '765765765', 'Calle Falsa 123', 'n'),
('98765432S', 'Manuel Esteban', 'Rodriguez', '987987987', 'Calle Fake 257', 's');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viviendas`
--

CREATE TABLE `viviendas` (
  `idVivienda` int(11) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `precioAlquiler` float NOT NULL,
  `estadoDisponibilidad` char(1) NOT NULL,
  `imgPrincipal` varchar(100) NOT NULL,
  `numHabitaciones` int(10) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `exterior` varchar(100) NOT NULL,
  `climatizacion` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `viviendas`
--

INSERT INTO `viviendas` (`idVivienda`, `direccion`, `precioAlquiler`, `estadoDisponibilidad`, `imgPrincipal`, `numHabitaciones`, `descripcion`, `exterior`, `climatizacion`) VALUES
(0, 'Calle falsa 12343', 300, 'n', 'piso3.jpg', 5, 'Casa muy bonita a las afueras de madrid', 'Nada', 'n'),
(1, 'Calle Vivienda ', 250.56, 's', 'piso1.jpg', 3, 'Casa en el centro de Madrid. Temperatura perfecta, ni frio ni calor; 0 grados', 'Un balcon de 2 metros cuadrados', 'n'),
(2, 'Calle de abajo', 280.65, 's', 'piso2.jpg', 2, 'Casa rural a las afueras de albacete. La ducha es el rio de al lado', 'Mucho campo', 's'),
(3, 'Calle margarita 23', 600, 's', 'piso4.jpg', 3, 'piso grande cerca de albacete', 'Balcon espacioso', 's'),
(4, 'Avenida Francia 2', 340, 'n', 'piso5.jpg', 2, 'piso familiar espacioso y luminoso', 'patio central apañado', 's'),
(5, 'Plaza query', 156, 's', 'piso6.jpg', 1, 'piso perfecto para estudiantes', 'Nada', 'n'),
(6, 'Calle spotify', 250, 's', 'piso7.jpg', 2, 'Calle con mucha musica callejera cerca', 'Balcon', 's'),
(7, 'Calle aurora', 280, 'n', 'piso8.jpg', 3, 'Vivivneda familiar espaciosa y comoda', 'Calle peatonal', 'n'),
(8, 'Calle pablito', 330, 's', 'piso9.jpg', 4, 'Vivienda perfecta para vivir con familia', 'Cerca del campo, aire fresco', 's');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquileres`
--
ALTER TABLE `alquileres`
  ADD PRIMARY KEY (`idAlquiler`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idCita`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`dniCliente`);

--
-- Indices de la tabla `viviendas`
--
ALTER TABLE `viviendas`
  ADD PRIMARY KEY (`idVivienda`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
