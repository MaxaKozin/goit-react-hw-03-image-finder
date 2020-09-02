import React, { Component } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import Spinner from "./components/Spinner/Spinner";

import fetchImages from "./services/apiServices";

import "./App.css";

class App extends Component {
  state = {
    modalContent: "",
    searchQuery: "",
    page: 1,
    data: [],
    isLoading: false,
    openModal: false,
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery) {
      this.getData();
    }

    if (page !== this.state.page) {
      this.getData();
    }
  }

  toggleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  toggleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  hadleChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      data: [],
    });
  };

  handleNextPage = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  modalContentSet = (itemId) => {
    const { data } = this.state;
    const element = data.find(({ id }) => id === itemId);
    this.setState({ modalContent: element.largeImageURL });
  };

  getData = () => {
    const { searchQuery, page } = this.state;
    this.toggleLoading();
    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        this.setState(({ data }) => {
          return { data: [...data, ...hits] };
        });
      })
      .then(this.handleScroll)
      .catch((error) => console.log(error.message))
      .finally(this.toggleLoading);
  };

  render() {
    const { data, openModal, modalContent, isLoading } = this.state;
    const btnEnable = data.length > 0 && !isLoading;
    return (
      <div className="App">
        <SearchBar onSubmit={this.hadleChangeQuery} />

        <ImageGallery
          data={data}
          onClick={this.toggleModal}
          onItemClick={this.modalContentSet}
        />

        {openModal && (
          <Modal content={modalContent} onBackdrop={this.toggleModal} />
        )}
        {isLoading && <Spinner />}

        {btnEnable && <Button name="Load more" onPress={this.handleNextPage} />}
      </div>
    );
  }
}

export default App;
