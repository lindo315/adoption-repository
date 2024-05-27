import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mockData from "./mockData.json";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollTop from "./ScrollTop";
import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./adopt.css";

function Adopt() {
  // Using environment variables to construct the background image URL
  // This approach allows for easy configuration and avoids hardcoding URLs
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/waveM-haikei.png`;

  // Using state hooks to manage various states in the component
  const [searchTerm, setSearchTerm] = useState(""); // Stores the search term entered by the user
  const [selectedSpecies, setSelectedSpecies] = useState(""); // Stores the selected species filter
  const [selectedAvailability, setSelectedAvailability] = useState(""); // Stores the selected availability filter
  const [selectedFavorite, setSelectedFavorite] = useState(""); // Stores the selected favorite filter
  const [favoritePets, setFavoritePets] = useState([]); // Stores the IDs of favorite pets

  const [selectedPet, setSelectedPet] = useState(null); // Stores the currently selected pet for adoption

  // Using the useNavigate hook from react-router-dom for navigation
  const navigate = useNavigate();

  // Using the useRef hook to create a reference to the search section
  const searchSectionRef = useRef(null);

  // Function to scroll to the search section when the "Start" button is clicked
  const scrollToSearchSection = () => {
    searchSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle the "Adopt" button click event
  // Sets the selected pet and opens the adoption modal
  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
  };

  // Function to handle the "Confirm Adoption" button click event
  // Navigates to the confirmation page with the selected pet's information
  const handleConfirmAdoption = () => {
    // Navigate to the confirmation page with the selected pet's information
    navigate("/confirmation", { state: { pet: selectedPet } });
    window.scrollTo(0, 0);
  };

  // Function to handle the close button click event in the adoption modal
  // Closes the adoption modal by setting the selected pet to null
  const handleCloseModal = () => {
    setSelectedPet(null);
  };

  // Function to handle the search input change event
  // Updates the search term state with the entered value
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle the species filter change event
  // Updates the selected species state with the selected value
  const handleSpeciesFilter = (event) => {
    setSelectedSpecies(event.target.value);
  };

  // Function to handle the availability filter change event
  // Updates the selected availability state with the selected value
  const handleAvailabilityFilter = (event) => {
    setSelectedAvailability(event.target.value);
  };

  // Function to handle the favorite filter change event
  // Updates the selected favorite state with the selected value
  const handleFavoriteFilter = (event) => {
    setSelectedFavorite(event.target.value);
  };

  // Function to handle the favorite button click event
  // Adds or removes the pet ID from the favoritePets array based on its current state
  const handleFavorite = (petId) => {
    if (favoritePets.includes(petId)) {
      setFavoritePets(favoritePets.filter((id) => id !== petId));
    } else {
      setFavoritePets([...favoritePets, petId]);
    }
  };

  // Function to handle the "Clear Filters" button click event
  // Resets all the filter states to their default values
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedSpecies("");
    setSelectedAvailability("");
    setSelectedFavorite("");
  };

  // Filtering the pet data based on the selected filters and search term
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
        {/* Adoption section */}
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
                {/* "Start" button to scroll to the search section */}
                <button
                  className="start-button"
                  onClick={scrollToSearchSection}
                >
                  Start
                </button>
              </div>
            </section>
          </section>
        </section>

        {/* Search section */}
        <section className="adopt-section adoption-text" ref={searchSectionRef}>
          <h2>Adopt a Pet</h2>
          {/* <div className="adopt-info adoption-text">
            <div className="adopt-info-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/medical-checkup.png`}
                alt="Adoption Process"
              />
              <h3>Adoption Process</h3>
              <p>
                Our adoption process is designed to ensure that each pet finds
                the right match.
              </p>
            </div>
            <div className="adopt-info-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/veterinarian.png`}
                alt="Pet Care"
              />
              <h3>Pet Care</h3>
              <p>
                We provide resources and guidance on proper veterinary care. Our
                staff is always available to answer any questions you may have.
              </p>
            </div>
            <div className="adopt-info-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/pet-success.png`}
                alt="Success Stories"
              />
              <h3>Success Stories</h3>
              <p>
                We have countless success stories of pets finding their forever
                homes through our adoption program.
              </p>
            </div>
          </div> */}

          {/* Separator */}
          <div className="separator-div">
            <hr className="separator" />
          </div>

          {/* Search and filters */}
          <section className="search-section">
            <div className="search-container">
              <div className="search-bar">
                {/* Search input */}
                <input
                  type="text"
                  placeholder="Search by name or breed"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="search-filters">
                {/* Species filter */}
                <select value={selectedSpecies} onChange={handleSpeciesFilter}>
                  <option value="">All Species</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Guinea Pig">Guinea Pig</option>
                </select>

                {/* Availability filter */}
                <select
                  value={selectedAvailability}
                  onChange={handleAvailabilityFilter}
                >
                  <option value="">All Availabilities</option>
                  <option value="Available">Available</option>
                  <option value="Adopted">Adopted</option>
                </select>
                <select
                  value={selectedFavorite}
                  onChange={handleFavoriteFilter}
                >
                  <option value="">All Pets</option>
                  <option value="favoritesOnly">Favorites Only</option>
                </select>

                {/* Clear filters button */}
                <button className="clear-btn" onClick={handleClearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="separator-div">
            <hr className="separator" />
          </div>

          {/* Pet container */}
          <TransitionGroup className="pet-container">
            {/* Mapping over the filtered pets and rendering pet cards */}
            {filteredPets.map((pet) => (
              <CSSTransition key={pet.id} timeout={500} classNames="fade">
                <div className="pet-card">
                  <img
                    src={`${process.env.PUBLIC_URL}${pet.image}`}
                    alt={pet.name}
                  />
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <p>Age: {pet.age}</p>
                    <p>Species: {pet.species}</p>
                    <p>Breed: {pet.breed}</p>
                    <p>Adoption Status: {pet.adoptionStatus}</p>

                    {/* Favorite button */}
                    <button
                      className={`favorite-button ${
                        favoritePets.includes(pet.id) ? "active" : ""
                      }`}
                      onClick={() => handleFavorite(pet.id)}
                    >
                      <FaHeart />
                    </button>
                  </div>

                  {/* Adopt button */}
                  <button
                    className="adopt-button"
                    onClick={() => handleAdoptClick(pet)}
                  >
                    Adopt
                  </button>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>

          {/* Adoption modal */}
          {selectedPet && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>{selectedPet.name}</h2>
                <img
                  src={`${process.env.PUBLIC_URL}${selectedPet.image}`}
                  alt={selectedPet.name}
                />
                <p>Age: {selectedPet.age}</p>
                <p>Species: {selectedPet.species}</p>
                <p>Breed: {selectedPet.breed}</p>
                <p>Bio: {selectedPet.bio}</p>

                {/* Confirm adoption button */}
                <button
                  className="confirm-button"
                  onClick={handleConfirmAdoption}
                >
                  Confirm Adoption
                </button>

                {/* Close modal button */}
                <button className="close-button" onClick={handleCloseModal}>
                  <IoClose />
                </button>
              </div>
            </div>
          )}

          {/* Separator */}
          <div className="separator-div">
            <hr className="separator" />
          </div>
        </section>
      </main>

      {/* Scroll to top component */}
      <ScrollTop />
    </div>
  );
}

export default Adopt;
