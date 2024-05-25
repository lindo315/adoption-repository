import React, { useState } from "react";
import { Link } from "react-router-dom";
import mockData from "./mockData.json";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollTop from "./ScrollTop";
import { FaHeart } from "react-icons/fa";
import "./adopt.css";

function Adopt() {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/waveM-haikei.png`;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedFavorite, setSelectedFavorite] = useState("");
  const [favoritePets, setFavoritePets] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSpeciesFilter = (event) => {
    setSelectedSpecies(event.target.value);
  };

  const handleAvailabilityFilter = (event) => {
    setSelectedAvailability(event.target.value);
  };

  const handleFavoriteFilter = (event) => {
    setSelectedFavorite(event.target.value);
  };

  const handleFavorite = (petId) => {
    if (favoritePets.includes(petId)) {
      setFavoritePets(favoritePets.filter((id) => id !== petId));
    } else {
      setFavoritePets([...favoritePets, petId]);
    }
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedSpecies("");
    setSelectedAvailability("");
    setSelectedFavorite("");
  };

  const filteredPets = mockData.filter((pet) => {
    const isMatchingSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase());

    const isMatchingSpecies =
      selectedSpecies === "" || pet.species === selectedSpecies;

    const isMatchingAvailability =
      selectedAvailability === "" ||
      pet.adoptionStatus === selectedAvailability;

    const isMatchingFavorite =
      selectedFavorite === "" ||
      (selectedFavorite === "favoritesOnly" && favoritePets.includes(pet.id));

    return (
      isMatchingSearch &&
      isMatchingSpecies &&
      isMatchingAvailability &&
      isMatchingFavorite
    );
  });

  return (
    <div className="adopt">
      <main>
        <section
          className="adoption-section"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="adopt-content">
            <section className="adopt-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/cat-profile.png`}
                alt="Pet"
              />
            </section>
            <section className="adopt-text">
              <div className="adopt-text-row">
                <p className="welcome">Adopt</p>
                <h1>Find you future buddy!</h1>
                <h2>"Trust us, they're human friendly!"</h2>
                <p>
                  Is what our field agents to us when they brought these little
                  ones it!
                </p>
              </div>
              <div className="hero-text-row">
                <Link to="/adopt" className="start-button">
                  Start Here
                </Link>
              </div>
            </section>
          </section>
        </section>
        <section className="adopt-section adoption-text">
          <h2>Adopt a Pet</h2>
          <div className="adopt-info adoption-text">
            <div className="adopt-info-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/medical-checkup.png`}
                alt="Adoption Process"
              />
              <h3>Adoption Process</h3>
              {/* <p>
                Our adoption process is designed to ensure that each pet finds
                the right match.
              </p> */}
            </div>
            <div className="adopt-info-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/veterinarian.png`}
                alt="Pet Care"
              />
              <h3>Pet Care</h3>
              {/* <p>
                We provide resources and guidance on proper veterinary care. Our
                staff is always available to answer any questions you may have.
              </p> */}
            </div>
            <div className="adopt-info-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/pet-success.png`}
                alt="Success Stories"
              />
              <h3>Success Stories</h3>
              {/* <p>
                We have countless success stories of pets finding their forever
                homes through our adoption program.
              </p> */}
            </div>
          </div>

          <div className="separator-div">
            <hr className="separator" />
          </div>

          <div className="search-container">
            <div className="search-filters">
              <input
                type="text"
                placeholder="Search by name or breed"
                value={searchTerm}
                onChange={handleSearch}
              />
              <select value={selectedSpecies} onChange={handleSpeciesFilter}>
                <option value="">All Species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Guinea Pig">Guinea Pig</option>
              </select>
              <select
                value={selectedAvailability}
                onChange={handleAvailabilityFilter}
              >
                <option value="">All Availabilities</option>
                <option value="Available">Available</option>
                <option value="Adopted">Adopted</option>
              </select>
              <select value={selectedFavorite} onChange={handleFavoriteFilter}>
                <option value="">All Pets</option>
                <option value="favoritesOnly">Favorites Only</option>
              </select>
              <button className="clear-btn" onClick={handleClearFilters}>
                Clear Filters
              </button>
            </div>
          </div>

          <div className="separator-div">
            <hr className="separator" />
          </div>
          <TransitionGroup className="pet-container">
            {filteredPets.map((pet) => (
              <CSSTransition key={pet.id} timeout={500} classNames="fade">
                <div className="pet-card">
                  <img src={pet.image} alt={pet.name} />
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <p>Age: {pet.age}</p>
                    <p>Species: {pet.species}</p>
                    <p>Breed: {pet.breed}</p>
                    <p>Adoption Status: {pet.adoptionStatus}</p>
                    <button
                      className={`favorite-button ${
                        favoritePets.includes(pet.id) ? "active" : ""
                      }`}
                      onClick={() => handleFavorite(pet.id)}
                    >
                      <FaHeart />
                    </button>
                  </div>
                  <button className="adopt-button">Adopt</button>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <div className="separator-div">
            <hr className="separator" />
          </div>
        </section>
      </main>
      <ScrollTop />
    </div>
  );
}

export default Adopt;
