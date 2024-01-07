-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 07 Sty 2024, 14:45
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `pacjenci_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `karta`
--

CREATE TABLE `karta` (
  `idkarta` int(10) UNSIGNED NOT NULL,
  `idpacjent` int(10) UNSIGNED DEFAULT NULL,
  `choroba` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `karta`
--

INSERT INTO `karta` (`idkarta`, `idpacjent`, `choroba`) VALUES
(1, 1, 'Choroba');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pacjent`
--

CREATE TABLE `pacjent` (
  `karta_idkarta` int(10) UNSIGNED NOT NULL,
  `idpacjent` int(10) UNSIGNED NOT NULL,
  `imie` varchar(45) DEFAULT NULL,
  `nazwisko` varchar(45) DEFAULT NULL,
  `login` varchar(45) DEFAULT NULL,
  `haslo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `pacjent`
--

INSERT INTO `pacjent` (`karta_idkarta`, `idpacjent`, `imie`, `nazwisko`, `login`, `haslo`) VALUES
(1, 5, 'Adam', 'Nowak', 'Adam', 'haslo123');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `karta`
--
ALTER TABLE `karta`
  ADD PRIMARY KEY (`idkarta`);

--
-- Indeksy dla tabeli `pacjent`
--
ALTER TABLE `pacjent`
  ADD PRIMARY KEY (`idpacjent`),
  ADD KEY `pacjent_FKIndex1` (`karta_idkarta`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `karta`
--
ALTER TABLE `karta`
  MODIFY `idkarta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `pacjent`
--
ALTER TABLE `pacjent`
  MODIFY `idpacjent` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
