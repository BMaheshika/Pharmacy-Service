-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 06:13 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharmacy`
--

-- --------------------------------------------------------

--
-- Table structure for table `pharmacies`
--

CREATE TABLE `pharmacies` (
  `RegId` int(11) NOT NULL,
  `phName` varchar(15) NOT NULL,
  `phAddr` varchar(15) NOT NULL,
  `phOwner` varchar(15) NOT NULL,
  `contact` int(10) NOT NULL,
  `regDate` date DEFAULT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pharmacies`
--

INSERT INTO `pharmacies` (`RegId`, `phName`, `phAddr`, `phOwner`, `contact`, `regDate`, `email`) VALUES
(3, 'New Pharmacy', 'Negombo', 'Kamal', 114567775, '2020-04-15', 'sanath@gmail.com'),
(6, 'Sarath Pharmacy', 'Kaduwela', 'Sarath', 715648963, '2020-04-21', 'sarath@gmail.com'),
(11, 'bud', 'q', 'w', 12, '2020-10-10', 'n@.hmail.com'),
(12, 's', 's', 's', 1, '2020-10-11', 'a@gamil.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pharmacies`
--
ALTER TABLE `pharmacies`
  ADD PRIMARY KEY (`RegId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pharmacies`
--
ALTER TABLE `pharmacies`
  MODIFY `RegId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
