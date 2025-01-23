# ZdzislawGrabda-AleksanderDrozdowicz-projektNRB-2025
Projekt przygotowany na Nierelacyjne Rozwiązania Bazodanowe dnia 23-01-2025 przez Zdzisław Grabda S22-31 i Aleksander Drozdowicz S22-32

# Projekt NRB 2025

## Opis projektu

Projekt NRB 2025 to aplikacja oparta na nierelacyjnej bazie danych MongoDB, która służy do zarządzania recenzjami dotyczącymi pewnej firmy. Aplikacja umożliwia przechowywanie i przetwarzanie danych w kolekcjach powiązanych ze sobą, a także ich udostępnianie za pomocą API stworzonego w Node.js. Projekt został zrealizowany w ramach zajęć akademickich przez Zdzisława Grabdę i Aleksandra Drozdowicza.

## Technologie

Projekt został stworzony przy użyciu następujących technologii:

- **Baza danych**: MongoDB (baza nierelacyjna z obsługą kolekcji i relacji).  
- **Backend**: Node.js z użyciem frameworka Express.js.  
- **Zarządzanie bazą danych**: Mongoose.js (modelowanie obiektowo-dokumentowe dla MongoDB).  
- **Autoryzacja i uwierzytelnianie**: JSON Web Token (JWT).  

## Funkcjonalności

- Przechowywanie recenzji dotyczących firmy w bazie nierelacyjnej.  
- Kolekcje zagnieżdżone oraz powiązane za pomocą relacji.  
- API umożliwiające przeglądanie danych z pojedynczych kolekcji, jak i połączonych (z użyciem metody `populate`).  
- Bezpieczeństwo API dzięki zastosowaniu middleware JWT do autoryzacji routów.  

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj następujące kroki:

1. **Sklonuj repozytorium**:

   ```bash
   git clone https://github.com/ZdzislawGrabdaUczelnia/ZdzislawGrabda-AleksanderDrozdowicz-projektNRB-2025.git
   ```

2. **Przejdź do katalogu projektu**:

   ```bash
   cd ZdzislawGrabda-AleksanderDrozdowicz-projektNRB-2025
   ```

3. **Zainstaluj zależności**:

   ```bash
   npm install
   ```

4. **Skonfiguruj połączenie z bazą danych**:  
   - Utwórz plik `.env` w katalogu głównym projektu.  
   - Wypełnij go następującymi danymi:

     ```env
     MONGO_URI=mongodb+srv://<użytkownik>:<hasło>@<klaster>.mongodb.net/<nazwa_bazy>?retryWrites=true&w=majority
     JWT_SECRET=<twój_sekret_JWT>
     PORT=5000
     ```

5. **Uruchom aplikację**:

   ```bash
   npm start
   ```

6. Aplikacja będzie dostępna pod adresem: `http://localhost:5000`.

## Struktura projektu

Poniżej przedstawiono kluczowe foldery i pliki projektu:

- `/models` – modele Mongoose dla kolekcji w bazie danych.  
- `/routes` – pliki zdefiniowane dla różnych endpointów API.  
- `/controllers` – logika obsługi żądań i odpowiedzi.  
- `/middlewares` – middleware, w tym zabezpieczenia routów za pomocą JWT.  
- `server.js` – główny plik uruchamiający aplikację.  

## Przykładowe endpointy API

- `GET /reviews` – pobiera wszystkie recenzje.  
- `POST /reviews` – dodaje nową recenzję (zabezpieczony JWT).  
- `GET /reviews/:id` – pobiera szczegóły pojedynczej recenzji wraz z połączonymi kolekcjami (`populate`).  

## Autorzy

Projekt został zrealizowany przez:  
- Zdzisław Grabda  
- Aleksander Drozdowicz  

## Licencja

Projekt jest udostępniany na licencji MIT. Szczegóły znajdują się w pliku `LICENSE`.
