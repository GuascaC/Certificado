-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 02-01-2023 a las 16:21:19
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `certificados`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `t_doc` varchar(255) NOT NULL,
  `doc` int(20) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `t_contrato` varchar(255) NOT NULL,
  `t_pago` text NOT NULL,
  `salario` int(30) NOT NULL,
  `date` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nom`, `email`, `t_doc`, `doc`, `rol`, `t_contrato`, `t_pago`, `salario`, `date`) VALUES
(1, 'miltonguasca', 'a@uniempresarial.edu.co', '0', 1021512598, 'aprendiz', 'aprendiz', '123456', 654321, '29-12-2022 09:10:24'),
(12, '', '', '', 0, '', '', '', 0, '29-12-2022 13:58:24'),
(13, '', '', '', 0, '', '', '', 0, '29-12-2022 14:01:41'),
(14, '', '', '', 0, '', '', '', 0, '29-12-2022 14:13:56'),
(15, '', '', '', 0, '', '', '', 0, '01-01-2023 22:03:22'),
(16, '', '', '', 0, '', '', '', 0, '01-01-2023 22:05:36');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
